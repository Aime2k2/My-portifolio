const data = window.PORTFOLIO_DATA;
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function createEl(tag, className, html) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (html !== undefined) el.innerHTML = html;
  return el;
}

function safeLink(url) {
  return url && url !== "#";
}

function linkButton(label, href) {
  const disabled = !safeLink(href);
  const element = disabled ? document.createElement("span") : document.createElement("a");
  element.className = `small-btn ${disabled ? "disabled" : ""}`;
  element.textContent = disabled ? `${label} pending` : label;
  if (!disabled) {
    element.href = href;
    element.target = "_blank";
    element.rel = "noreferrer";
  }
  return element;
}

function initProfile() {
  const profile = data.profile;

  const profilePhoto = $("#profilePhoto");
  if (profilePhoto) profilePhoto.src = profile.photo;

  const availabilityText = $("#availabilityText");
  if (availabilityText) availabilityText.textContent = profile.availability;

  const headlineText = $("#headlineText");
  if (headlineText) headlineText.textContent = profile.headline;

  const locationText = $("#locationText");
  if (locationText) locationText.textContent = profile.location;

  const miniLinks = $("#miniLinks");
  if (miniLinks) {
    miniLinks.innerHTML = "";
    const links = [
      ["LinkedIn", profile.links.linkedin],
      ["GitHub", profile.links.github],
      ["Kaggle", profile.links.kaggle],
      ["Hugging Face", profile.links.huggingFace]
    ];
    links.forEach(([label, href]) => {
      if (safeLink(href)) {
        const a = createEl("a", "", label);
        a.href = href;
        a.target = "_blank";
        a.rel = "noreferrer";
        miniLinks.appendChild(a);
      }
    });
  }

  const heroResumeBtn = $("#heroResumeBtn");
  if (heroResumeBtn && safeLink(profile.links.resume)) {
    heroResumeBtn.href = profile.links.resume;
    heroResumeBtn.textContent = "Download CV";
    heroResumeBtn.target = "_blank";
    heroResumeBtn.rel = "noreferrer";
  } else if (heroResumeBtn) {
    heroResumeBtn.classList.add("disabled");
  }

  const contactActions = $("#contactActions");
  if (contactActions) {
    contactActions.innerHTML = "";
    const emailLink = createEl("a", "btn primary", `Email ${profile.name.split(" ")[0]}`);
    emailLink.href = `mailto:${profile.email}`;
    contactActions.appendChild(emailLink);

    if (safeLink(profile.links.linkedin)) {
      const linkedin = createEl("a", "btn secondary", "LinkedIn");
      linkedin.href = profile.links.linkedin;
      linkedin.target = "_blank";
      linkedin.rel = "noreferrer";
      contactActions.appendChild(linkedin);
    }

    if (safeLink(profile.links.github)) {
      const github = createEl("a", "btn secondary", "GitHub");
      github.href = profile.links.github;
      github.target = "_blank";
      github.rel = "noreferrer";
      contactActions.appendChild(github);
    }

    if (safeLink(profile.links.resume)) {
      const resume = createEl("a", "btn ghost", "Download CV");
      resume.href = profile.links.resume;
      resume.target = "_blank";
      resume.rel = "noreferrer";
      contactActions.appendChild(resume);
    }
  }
}

function renderValues() {
  const grid = $("#valueGrid");
  if (!grid) return;
  grid.innerHTML = "";
  data.values.forEach((item) => {
    const card = createEl("article", "value-card reveal");
    card.innerHTML = `
      <div class="value-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
    grid.appendChild(card);
  });
}

function renderStats() {
  const grid = $("#statsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const isHome = document.body.dataset.page === "home";
  const stats = isHome ? data.stats.slice(0, 4) : data.stats;
  stats.forEach((stat) => {
    const card = createEl("article", "stat-card reveal");
    card.innerHTML = `
      <div class="stat-icon">${stat.icon}</div>
      <div class="stat-number" data-count="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
      <div class="stat-label">${stat.label}</div>
    `;
    grid.appendChild(card);
  });
}

function animateCounters() {
  const counters = $$("[data-count]");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = "true";
      const target = Number(entry.target.dataset.count);
      const suffix = entry.target.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        entry.target.textContent = `${Math.round(eased * target)}${suffix}`;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
}

function renderSkills() {
  const container = $("#skillBars");
  if (!container) return;
  container.innerHTML = "";
  data.skills.forEach((skill) => {
    const bar = createEl("div", "skill-bar reveal");
    bar.innerHTML = `
      <div class="skill-info"><span>${skill.name}</span><span>${skill.level}%</span></div>
      <div class="skill-track"><div class="skill-fill" data-width="${skill.level}"></div></div>
    `;
    container.appendChild(bar);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.width = `${entry.target.dataset.width}%`;
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });
  $$(".skill-fill").forEach(fill => observer.observe(fill));
}

function renderStatus() {
  const container = $("#statusBoard");
  if (!container) return;
  container.innerHTML = "";
  data.status.forEach((item) => {
    const status = createEl("div", "status-item reveal");
    status.innerHTML = `<strong>${item.title}</strong><p>${item.text}</p>`;
    container.appendChild(status);
  });
}

function renderFilters(active = "All") {
  const container = $("#projectFilters");
  if (!container) return;
  container.innerHTML = "";
  data.projectFilters.forEach((filter) => {
    const btn = createEl("button", `filter-btn ${filter === active ? "active" : ""}`, filter);
    btn.type = "button";
    btn.addEventListener("click", () => {
      renderFilters(filter);
      renderProjects(filter);
    });
    container.appendChild(btn);
  });
}

function renderProjects(active = "All") {
  const grid = $("#projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const projects = active === "All" ? data.projects : data.projects.filter(p => p.category === active);

  projects.forEach((project) => {
    const card = createEl("article", "project-card reveal");
    card.innerHTML = `
      <div class="project-image"><img src="${project.image}" alt="${project.title} project preview"></div>
      <div class="project-meta-row">
        <span class="project-category">${project.category}</span>
        <span class="tag">Case Study</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="tech-list">${project.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-footer"></div>
    `;
    const footer = $(".project-footer", card);
    const detailBtn = createEl("button", "small-btn", "View details");
    detailBtn.type = "button";
    detailBtn.addEventListener("click", () => openProjectModal(project));
    footer.appendChild(detailBtn);
    footer.appendChild(linkButton("GitHub", project.links.github));
    footer.appendChild(linkButton("Demo", project.links.demo));
    grid.appendChild(card);
  });

  observeReveal();
}

function openProjectModal(project) {
  const modal = $("#projectModal");
  const modalContent = $("#modalContent");
  if (!modal || !modalContent) return;
  modalContent.innerHTML = `
    <div class="modal-inner">
      <span class="project-category">${project.category}</span>
      <h3 id="modalTitle">${project.title}</h3>
      <p>${project.summary}</p>
      <p class="modal-section-title">Problem</p>
      <p>${project.problem}</p>
      <p class="modal-section-title">Solution</p>
      <p>${project.solution}</p>
      <p class="modal-section-title">Impact</p>
      <p>${project.impact}</p>
      <p class="modal-section-title">Tools</p>
      <div class="tech-list">${project.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-footer">
        ${safeLink(project.links.github) ? `<a class="small-btn" href="${project.links.github}" target="_blank" rel="noreferrer">GitHub</a>` : `<span class="small-btn disabled">GitHub pending</span>`}
        ${safeLink(project.links.demo) ? `<a class="small-btn" href="${project.links.demo}" target="_blank" rel="noreferrer">Live demo</a>` : `<span class="small-btn disabled">Demo pending</span>`}
        ${safeLink(project.links.report) ? `<a class="small-btn" href="${project.links.report}" target="_blank" rel="noreferrer">Report</a>` : `<span class="small-btn disabled">Report pending</span>`}
      </div>
    </div>
  `;
  document.body.classList.add("modal-open");
  modal.showModal();
}

function renderExperience() {
  const timeline = $("#experienceTimeline");
  if (!timeline) return;
  timeline.innerHTML = "";
  data.experience.forEach((item) => {
    const card = createEl("article", "timeline-item reveal");
    card.innerHTML = `
      <span class="timeline-dot"></span>
      <div class="timeline-period">${item.period}</div>
      <h3>${item.role}</h3>
      <div class="timeline-org">${item.organization}</div>
      <ul class="timeline-points">${item.points.map(point => `<li>${point}</li>`).join("")}</ul>
    `;
    timeline.appendChild(card);
  });
}

function renderCredentials() {
  const educationList = $("#educationList");
  if (educationList) {
    educationList.innerHTML = "";
    data.education.forEach((item) => {
      const el = createEl("div", "edu-item reveal");
      el.innerHTML = `
        <h4>${item.degree}</h4>
        <p class="edu-school">${item.school}</p>
        <p class="edu-period">${item.period}</p>
        <p>${item.detail}</p>
      `;
      educationList.appendChild(el);
    });
  }

  const certificationList = $("#certificationList");
  if (certificationList) {
    certificationList.innerHTML = "";
    data.certifications.forEach((item) => {
      const el = createEl("div", "cert-item reveal");
      el.innerHTML = `
        <h4>${item.name}</h4>
        <p class="cert-org">${item.organization}${item.date ? ` • ${item.date}` : ""}</p>
      `;
      certificationList.appendChild(el);
    });
  }

  const achievementList = $("#achievementList");
  if (achievementList) {
    achievementList.innerHTML = "";
    data.achievements.forEach((item) => {
      const el = createEl("div", "achievement-item reveal", `<strong>${item}</strong>`);
      achievementList.appendChild(el);
    });
  }
}

function initNavigation() {
  const header = $(".site-header");
  const backToTop = $("#backToTop");
  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");
  const navAnchors = $$(".nav-links a");

  const currentPage = document.body.dataset.page;
  navAnchors.forEach(a => {
    a.classList.toggle("active", a.dataset.nav === currentPage);
  });

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 40);
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 500);
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navAnchors.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function initTheme() {
  const toggle = $("#themeToggle");
  const savedTheme = localStorage.getItem("portfolioTheme") || "light";
  document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
  if (toggle) toggle.textContent = savedTheme === "dark" ? "☀" : "☾";

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.dataset.theme === "dark";
      const next = isDark ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("portfolioTheme", next);
      toggle.textContent = next === "dark" ? "☀" : "☾";
    });
  }
}

function observeReveal() {
  const revealEls = $$(".reveal:not(.visible)");
  if (!revealEls.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

function initEmailCopy() {
  const btn = $("#copyEmailBtn");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(data.profile.email);
      showToast("Email copied to clipboard");
    } catch (err) {
      showToast(data.profile.email);
    }
  });
}

function showToast(message) {
  let toast = $(".toast");
  if (!toast) {
    toast = createEl("div", "toast");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function initModal() {
  const modal = $("#projectModal");
  const close = $("#modalClose");
  if (!modal || !close) return;
  close.addEventListener("click", () => modal.close());
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const clickedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (clickedOutside) modal.close();
  });
}

function init() {
  initProfile();
  renderValues();
  renderStats();
  renderSkills();
  renderStatus();
  renderFilters();
  renderProjects();
  renderExperience();
  renderCredentials();
  initNavigation();
  initTheme();
  initEmailCopy();
  initModal();
  observeReveal();
  animateCounters();
}

document.addEventListener("DOMContentLoaded", init);
