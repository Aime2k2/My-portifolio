/*
  Portfolio content backend
  --------------------------------------------------
  Edit this file to update the website without touching HTML/CSS.
  After editing, commit changes to GitHub and GitHub Pages will update the site.
*/

window.PORTFOLIO_DATA = {
  profile: {
    name: "Jean Aime Iraguha",
    title: "Data Scientist & AI Engineer",
    headline: "Data Science, AI Engineering & Mathematical Modelling",
    tagline: "Building intelligent, reproducible systems from data.",
    location: "Kigali, Rwanda / L'Aquila, Italy",
    email: "jeanaime.iraguha@aims.ac.rw",
    photo: "assets/images/profile-placeholder.svg",
    availability: "Open to Data Scientist & AI Engineer roles",
    links: {
      linkedin: "https://www.linkedin.com/in/jean-aime-iraguha-08584a33a",
      github: "#",
      kaggle: "#",
      huggingFace: "#",
      resume: "#"
    }
  },

  values: [
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      text: "Generative models, predictive modeling, neural networks, validation, and model stability using a mathematical approach."
    },
    {
      icon: "🧮",
      title: "Mathematical Modelling",
      text: "Advanced modelling, dynamical systems, numerical methods, optimization, statistics, and interpretable experimentation."
    },
    {
      icon: "📊",
      title: "Decision Dashboards",
      text: "Power BI dashboards, survey analytics, technical reporting, and monitoring systems that help teams make better decisions."
    },
    {
      icon: "🛠️",
      title: "Data Engineering",
      text: "SQL-based pipelines, data cleaning automation, data-quality monitoring, Airflow, Docker, and CI/CD project practice."
    },
    {
      icon: "✅",
      title: "Reliable Data Quality",
      text: "Monitoring for accuracy, completeness, consistency, timeliness, uniqueness, and validity across analytics workflows."
    },
    {
      icon: "🤝",
      title: "Professional Communication",
      text: "Experience translating data into dashboards, reports, workflows, and clear technical narratives for teams and stakeholders."
    }
  ],

  stats: [
    { icon: "🎓", value: 3, suffix: "", label: "Degree programs in mathematics, statistics & modelling" },
    { icon: "💼", value: 4, suffix: "", label: "Professional data, analytics & finance roles" },
    { icon: "🚀", value: 4, suffix: "+", label: "Featured portfolio projects" },
    { icon: "🧰", value: 20, suffix: "+", label: "Tools and technical skills" },
    { icon: "📜", value: 6, suffix: "+", label: "Certificates & recognitions" },
    { icon: "🏅", value: 83, suffix: "%", label: "AIMS Data Science master’s grade" },
    { icon: "📈", value: 82, suffix: "%", label: "University of Rwanda honors grade" },
    { icon: "🌍", value: 4, suffix: "", label: "Languages: English, French, Italian, Kinyarwanda" }
  ],

  skills: [
    { name: "Python & Scientific Computing", level: 92 },
    { name: "SQL & Data Pipelines", level: 88 },
    { name: "Machine Learning", level: 90 },
    { name: "Power BI & Data Visualization", level: 86 },
    { name: "Statistics & Mathematical Modelling", level: 94 },
    { name: "R Programming", level: 78 },
    { name: "Data Engineering: Airflow, Docker, CI/CD", level: 74 },
    { name: "Technical Reporting & Communication", level: 84 }
  ],

  status: [
    {
      title: "Current academic focus",
      text: "Master's in Mathematical Modelling at the University of L'Aquila, with focus on dynamical systems and computational methods."
    },
    {
      title: "Professional direction",
      text: "Seeking Data Scientist, AI Engineer, ML Engineer, and analytics roles where mathematical modelling and reliable data systems matter."
    },
    {
      title: "Portfolio priority",
      text: "Publish clean GitHub repositories, live AI demos on Hugging Face, and case studies with metrics, screenshots, and reproducible code."
    }
  ],

  projectFilters: ["All", "AI", "Dashboards", "Data Engineering", "Analytics"],

  projects: [
    {
      title: "Generative AI for Modeling Nonlinear Dynamical Systems",
      category: "AI",
      image: "assets/images/project-ai.svg",
      summary: "Developed GAN and VAE models to analyze nonlinear dynamical behavior with applications to financial time series.",
      problem: "Nonlinear systems can be difficult to model with standard methods when dynamics are unstable, noisy, or difficult to interpret.",
      solution: "Designed generative AI experiments with GANs and VAEs, focusing on model stability, loss-function design, and validation logic.",
      impact: "Shows advanced AI ability, mathematical modelling strength, and research-level experimentation for real-world time-series behavior.",
      tech: ["Python", "GAN", "VAE", "Deep Learning", "Time Series", "Numerical Modelling"],
      links: {
        github: "#",
        demo: "#",
        report: "#"
      }
    },
    {
      title: "Seasonal Agriculture Survey Dashboard",
      category: "Dashboards",
      image: "assets/images/project-dashboard.svg",
      summary: "Interactive Power BI dashboard for real-time survey visualization, trend analysis, and monitoring support.",
      problem: "Survey datasets need fast exploration, clean monitoring, and accessible visuals for decision-making teams.",
      solution: "Created a dashboard workflow for data cleaning, visualization, trend analysis, and management-friendly insights.",
      impact: "Improves survey accessibility and helps teams identify patterns faster during monitoring and evaluation activities.",
      tech: ["Power BI", "Survey Data", "Data Cleaning", "M&E", "Dashboard Design"],
      links: {
        github: "#",
        demo: "#",
        report: "#"
      }
    },
    {
      title: "Data Quality Monitoring Dashboard",
      category: "Analytics",
      image: "assets/images/project-quality.svg",
      summary: "Monitoring dashboard logic for accuracy, completeness, consistency, timeliness, uniqueness, and validity.",
      problem: "Analytics teams need confidence that reporting data is complete, valid, consistent, timely, and trustworthy.",
      solution: "Built data-quality monitoring structures and reporting logic around common quality dimensions and SQL-based checks.",
      impact: "Strengthens trust in analytics outputs and shows practical ability to combine data engineering with reporting governance.",
      tech: ["SQL", "Data Quality", "Dashboards", "Analytics Pipelines", "Reporting"],
      links: {
        github: "#",
        demo: "#",
        report: "#"
      }
    },
    {
      title: "Data Engineering Pipeline Project",
      category: "Data Engineering",
      image: "assets/images/project-engineering.svg",
      summary: "Production-oriented practice project using SQL, Python, Airflow, Docker, and CI/CD concepts.",
      problem: "Modern data teams need pipelines that are reproducible, scheduled, containerized, and easier to maintain.",
      solution: "Practiced a complete data engineering workflow using SQL, Python, Airflow orchestration, Docker, and CI/CD principles.",
      impact: "Demonstrates readiness to move from notebooks into production-style data workflows and analytics engineering systems.",
      tech: ["SQL", "Python", "Airflow", "Docker", "CI/CD"],
      links: {
        github: "#",
        demo: "#",
        report: "#"
      }
    }
  ],

  experience: [
    {
      role: "Data Science Intern",
      organization: "Cenfri Rwanda",
      period: "Jun 2025 — Oct 2025",
      points: [
        "Designed analytical frameworks and developed SQL-based data analysis pipelines.",
        "Built data-quality monitoring dashboards tracking accuracy, completeness, consistency, timeliness, uniqueness, and validity.",
        "Contributed to data visualization, modeling, and technical reporting."
      ]
    },
    {
      role: "Monitoring & Evaluation Intern",
      organization: "One Acre Fund",
      period: "Apr 2025 — Sep 2025",
      points: [
        "Automated data cleaning and processing pipelines to enhance data reliability and efficiency.",
        "Developed agricultural monitoring dashboards improving survey data accessibility and insights.",
        "Collaborated with teams to optimize data workflows and support decision-making processes."
      ]
    },
    {
      role: "Customer Accounts Officer — Finance Department",
      organization: "Sanlam Vie Plc",
      period: "Jun 2024 — Sep 2024",
      points: [
        "Reconciled customer accounts and managed financial disbursements with high accuracy.",
        "Applied analytical methods to support decision-making and improve account processing workflows."
      ]
    },
    {
      role: "Data Analyst Intern",
      organization: "Rwanda ICT Chamber",
      period: "Apr 2023 — Jul 2023",
      points: [
        "Conducted data analysis and visualization to support technology companies in decision-making."
      ]
    }
  ],

  education: [
    {
      degree: "Master's in Mathematical Modelling",
      school: "University of L'Aquila",
      period: "Sep 2025 — Present",
      detail: "Focus: advanced mathematical modelling, dynamical systems, and computational methods."
    },
    {
      degree: "Master's in Mathematical Sciences — Data Science",
      school: "African Institute for Mathematical Sciences, Rwanda",
      period: "Sep 2024 — Jun 2025",
      detail: "Graduated with honors, 83%. Core areas: machine learning, SQL/NoSQL databases, big data analytics, advanced numerical linear algebra, Python, and R."
    },
    {
      degree: "BSc in Mathematics and Statistics",
      school: "University of Rwanda",
      period: "Jan 2021 — Jun 2024",
      detail: "Graduated with honors, 82%. Key areas: linear algebra, numerical analysis, statistical computing, time series, survival analysis, and design of experiments."
    }
  ],

  certifications: [
    { name: "Data Science and Machine Learning Fundamentals", organization: "Corporate Finance Institute", date: "Aug 2024" },
    { name: "Fundamentals of Data Analysis in Excel", organization: "Corporate Finance Institute", date: "Aug 2024" },
    { name: "Machine Learning, Data Science & AI Engineering with Python", organization: "Udemy", date: "Jan 2026" },
    { name: "Data Engineering Project: SQL, Python, Airflow, Docker, CI/CD", organization: "Udemy", date: "Feb 2026" },
    { name: "Advanced Training in Hotel Management and Operations", organization: "Agora Italian Academy", date: "Mar 2026" },
    { name: "First Aid Certification", organization: "Rwanda Red Cross", date: "" }
  ],

  achievements: [
    "Exceptional Integrity Award — AIMS Rwanda",
    "Principal Roll of Honor — University of Rwanda",
    "Top academic performance awards for two consecutive years"
  ]
};
