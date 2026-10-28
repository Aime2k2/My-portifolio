/*
  Portfolio content backend
  --------------------------------------------------
  Edit this file to update the website without touching HTML/CSS.
  After editing, commit changes to GitHub and GitHub Pages will update the site.
*/

window.PORTFOLIO_DATA = {
profile: {
    name: "Jean Aime Iraguha",
    title: "Data Scientist | Machine Learning & Mathematical Modelling",
    headline: "Statistical Learning, Machine Learning & Mathematical Modelling",
    tagline: "I work at the intersection of mathematical models and messy, real-world data.",
    location: "Nice, France",
    email: "jeanaime.iraguha@aims.ac.rw",
    photo: "assets/images/profile.jpg",
    availability: "Open to data science, ML & research collaborations",
    links: {
      linkedin: "https://www.linkedin.com/in/jean-aime-iraguha-08584a33a",
      github: "https://github.com/Aime2k2",
      kaggle: "https://www.kaggle.com/jeanaimeiraguha",
      huggingFace: "https://huggingface.co/Aime2k2",
      resume: "#"
    }
  },

values: [
    { icon: "📐", title: "Statistical Learning", text: "I compare forecasting approaches and check what the results actually support—most recently ARIMA, LSTM and generative models in my AIMS thesis." },
    { icon: "🧮", title: "Mathematical Modelling", text: "My Erasmus Mundus studies build on probability and numerical methods to understand changing systems and uncertainty." },
    { icon: "👁️", title: "Computer Vision", text: "I prepared Istanbul traffic-video frames and annotations, then fine-tuned YOLOv8 to identify road users." },
    { icon: "🔧", title: "Data Engineering", text: "I use Python and SQL to prepare data, check quality and build reproducible analysis workflows; a public Airflow project shows the orchestration side." },
    { icon: "📊", title: "Analytics & Dashboards", text: "At One Acre Fund, I cleaned agricultural survey records and helped build dashboards to follow seasonal indicators." },
    { icon: "🔬", title: "Research Mindset", text: "My Bitcoin thesis taught me that a more complex model is not automatically the better forecaster." }
  ],

stats: [
    { icon: "🎓", value: 3, suffix: "", label: "Degree programmes, including an Erasmus Mundus MSc in progress" },
    { icon: "💼", value: 4, suffix: "", label: "Roles across data, monitoring, analytics and finance" },
    { icon: "🚀", value: 6, suffix: "", label: "Selected research and applied projects" },
    { icon: "🏅", value: 83, suffix: "%", label: "AIMS Rwanda MSc result, with honours" }
  ],

skills: [
    { name: "Python · NumPy · pandas" },
    { name: "SQL · Data Quality" },
    { name: "Statistics · Time Series" },
    { name: "Machine Learning · Deep Learning" },
    { name: "GANs · VAEs · LSTM" },
    { name: "Computer Vision · YOLOv8" },
    { name: "R · Statistical Computing" },
    { name: "Power BI · Data Visualisation" },
    { name: "Airflow · Docker · ETL" },
    { name: "Numerical Analysis · Optimization" }
  ],

status: [
    {
      title: "Erasmus Mundus MSc · 2026–27",
      text: "Second-year track in Stochastic Modelling and Statistical Learning at Université Côte d'Azur, Nice; first year completed at the University of L'Aquila."
    },
    {
      title: "Current research interests",
      text: "Reliable prediction under uncertainty, nonlinear time series and statistical learning; I am also exploring how computer vision could inform transport modelling."
    },
    {
      title: "Professional interests",
      text: "Roles where I can investigate the data, test a model carefully and communicate what its predictions can—and cannot—tell us."
    }
  ],

projectFilters: ["All", "Research", "Computer Vision", "Data Engineering", "Analytics", "Dashboards"],

projects: [
    {
      title: "Nonlinear Bitcoin Time-Series Modelling",
      category: "Research",
      kind: "AIMS Master's thesis",
      image: "assets/images/project-ai.svg",
      summary: "For my AIMS thesis, I analysed daily Bitcoin prices from 2012 to 2025 and compared classical forecasts with deep generative models.",
      problem: "I wanted to know whether models able to generate plausible price sequences would also make more accurate point forecasts.",
      solution: "Trained GRU-GAN and LSTM-VAE models and benchmarked them against ARIMA and LSTM on Bitcoin time-series data.",
      impact: "ARIMA gave the best point forecasts in my comparison (2.59% MAPE). Generative models reflected distributional patterns but were sensitive to overfitting and market shifts.",
      tech: ["Python", "ARIMA", "LSTM", "GAN", "VAE", "Time Series"],
      links: { github: "#", demo: "#", report: "#" }
    },
    {
      title: "Traffic-Video Object Detection",
      category: "Computer Vision",
      kind: "Applied computer vision",
      image: "assets/images/project-traffic.svg",
      summary: "Turned Istanbul traffic footage into labelled training data and fine-tuned YOLOv8 for road-user detection.",
      problem: "Video data is not ready-made training data: frames and bounding-box labels must be consistently extracted and prepared.",
      solution: "Extracted frames, converted annotations into YOLO format, normalized bounding boxes, split training and validation data, and fine-tuned the model.",
      impact: "Built a pipeline to detect cars, buses, motorcycles, bicycles and pedestrians; no unsupported accuracy claim is made.",
      tech: ["Python", "YOLOv8", "Computer Vision", "Object Detection"],
      links: { github: "#", demo: "#", report: "#" }
    },
    {
      title: "YouTube Data Engineering & Quality Pipeline",
      category: "Data Engineering",
      kind: "Public code repository",
      image: "assets/images/project-engineering.svg",
      summary: "Airflow DAGs for extracting video metadata, loading staging and core tables, and running data-quality checks.",
      problem: "Multi-stage data collection needs reproducible orchestration and checks before analysis.",
      solution: "Organised extraction, warehouse loading and Soda data-quality validation into connected Airflow workflows.",
      impact: "The repository provides inspectable Python, Airflow, Docker and testing code.",
      tech: ["Python", "Airflow", "SQL", "Docker", "Soda"],
      links: { github: "https://github.com/Aime2k2/My_Data_engneering_repo", demo: "#", report: "#" }
    },
    {
      title: "Data Quality Monitoring at Cenfri",
      category: "Analytics",
      kind: "Professional experience",
      image: "assets/images/project-quality.svg",
      summary: "At Cenfri Rwanda, I combined SQL analysis with dashboards to make data-quality issues easier to track.",
      problem: "Reporting teams need to identify missing, inconsistent and invalid records before making decisions.",
      solution: "Wrote SQL queries and Python-based checks for accuracy, completeness, consistency, timeliness, uniqueness and validity, then displayed results in monitoring dashboards.",
      impact: "Contributed to the reporting and evidence teams use to investigate unreliable records before analysis.",
      tech: ["SQL", "Data Quality", "Dashboards", "Reporting"],
      links: { github: "#", demo: "#", report: "#" }
    },
    {
      title: "Agricultural Monitoring Dashboards",
      category: "Dashboards",
      kind: "Professional experience",
      image: "assets/images/project-dashboard.svg",
      summary: "Prepared agricultural survey data and dashboard views for seasonal monitoring at One Acre Fund.",
      problem: "Agricultural survey datasets need consistent preparation and accessible views for programme teams.",
      solution: "Cleaned, processed and structured survey records; developed automated cleaning steps and dashboard components for indicators and trends.",
      impact: "Helped teams work from more consistent survey datasets and inspect seasonal patterns without repeating manual preparation.",
      tech: ["Power BI", "Python", "Data Cleaning", "M&E"],
      links: { github: "#", demo: "#", report: "#" }
    },
    {
      title: "2D Ising Model with Monte Carlo Simulation",
      category: "Research",
      kind: "Public numerical project",
      image: "assets/images/project-simulation.svg",
      summary: "Metropolis Monte Carlo simulation of a two-dimensional square-lattice Ising model.",
      problem: "Studying collective behaviour in a spin lattice requires repeated stochastic updates and observable tracking.",
      solution: "Implemented periodic boundaries, Metropolis updates, and energy and magnetisation measurements in Python.",
      impact: "Public numerical code demonstrates stochastic simulation and reproducible scientific computing.",
      tech: ["Python", "NumPy", "Numba", "Monte Carlo", "Statistical Physics"],
      links: { github: "https://github.com/Aime2k2/Montecarlo_simulation", demo: "#", report: "#" }
    }
  ],

  experience: [
    {
      role: "Data Science Fellow",
      organization: "Cenfri Rwanda",
      period: "Feb 2025 — Oct 2025",
      points: [
        "Developed analytical frameworks and SQL queries for project analysis, data exploration and reporting.",
        "Built data-quality monitoring dashboards tracking accuracy, completeness, consistency, timeliness, uniqueness, and validity.",
        "Contributed to data visualization, modeling, and technical reporting."
      ]
    },
    {
      role: "Monitoring & Evaluation",
      organization: "One Acre Fund",
      period: "Jan 2025 — Jun 2025",
      points: [
        "Cleaned and structured agricultural survey datasets and automated parts of recurring data-preparation work.",
        "Built dashboard components for seasonal indicator tracking, trend monitoring and survey reporting.",
        "Supported monitoring and evaluation reporting by preparing survey data for more consistent analysis."
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
      role: "Academic Intern",
      organization: "Rwanda ICT Chamber",
      period: "Apr 2023 — Jul 2023",
      points: [
        "Analysed and visualised data for technology-sector reporting at Rwanda ICT Chamber."
      ]
    }
  ],

education: [
    {
      degree: "Erasmus Mundus Joint MSc in Mathematical Modelling (InterMaths / MathMods)",
      school: "University of L'Aquila, Italy · Université Côte d'Azur, France",
      period: "2025 — 2027 · In progress",
      detail: "Year 1 in L'Aquila (2025–26); Year 2 in Nice (2026–27), specialising in Stochastic Modelling and Statistical Learning."
    },
    {
      degree: "MSc in Mathematical Sciences — Data Science",
      school: "African Institute for Mathematical Sciences (AIMS), Rwanda",
      period: "Sep 2024 — Jun 2025",
      detail: "Graduated with honours (83%). Studied machine learning, data-driven optimisation, numerical analysis and scientific computing."
    },
    {
      degree: "BSc in Mathematics and Statistics",
      school: "University of Rwanda — College of Science and Technology",
      period: "Jan 2021 — Jun 2024",
      detail: "Graduated with honours (82%). Foundations in probability, statistics, numerical methods and mathematical analysis."
    }
  ],

certifications: [
    { name: "Data Science and Machine Learning Fundamentals", organization: "Corporate Finance Institute", date: "Aug 2024" },
    { name: "Fundamentals of Data Analysis in Excel", organization: "Corporate Finance Institute", date: "Aug 2024" },
    { name: "Machine Learning, Data Science & AI Engineering with Python", organization: "Udemy", date: "Jan 2026" },
    { name: "Data Engineering Project: SQL, Python, Airflow, Docker, CI/CD", organization: "Udemy", date: "Feb 2026" }
  ],

  achievements: [
    "AIMS Rwanda — Award of Integrity (student vote)",
    "University of Rwanda — Principal Roll of Honour",
    "Honours graduate — AIMS Rwanda (83%) and University of Rwanda (82%)"
  ]
};
