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
    tagline: "From rigorous models to useful decisions.",
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
    { icon: "📐", title: "Statistical Learning", text: "Statistical modelling, time-series analysis, machine learning and careful model evaluation." },
    { icon: "🧮", title: "Mathematical Modelling", text: "Stochastic methods, numerical analysis, optimization and dynamical systems." },
    { icon: "👁️", title: "Computer Vision", text: "Object detection and image-based learning, including YOLOv8 experiments on traffic footage." },
    { icon: "🔧", title: "Data Engineering", text: "Python and SQL workflows, scheduled ETL pipelines, data validation and reproducible processing." },
    { icon: "📊", title: "Analytics & Dashboards", text: "Power BI reporting, monitoring and evaluation, and clear decision-support visuals." },
    { icon: "🔬", title: "Research Mindset", text: "Connecting mathematical assumptions with experiments, uncertainty and interpretable results." }
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
      text: "Uncertainty-aware modelling, time series, computer vision, and data-driven models of urban transport networks."
    },
    {
      title: "Professional interests",
      text: "Data science, machine learning, analytics engineering, and applied research roles that combine mathematical depth with practical delivery."
    }
  ],

projectFilters: ["All", "Research", "Computer Vision", "Data Engineering", "Analytics", "Dashboards"],

projects: [
    {
      title: "Nonlinear Bitcoin Time-Series Modelling",
      category: "Research",
      kind: "AIMS Master's thesis",
      image: "assets/images/project-ai.svg",
      summary: "Explored financial time-series dynamics with classical forecasting and deep generative modelling approaches.",
      problem: "Volatile financial series challenge linear assumptions and require careful comparison across model families.",
      solution: "Investigated ARIMA, LSTM, GRU-GAN and LSTM-VAE approaches for modelling nonlinear Bitcoin time-series behaviour.",
      impact: "Research experience in time-series modelling, generative methods and comparing model assumptions; results are not presented as investment advice.",
      tech: ["Python", "ARIMA", "LSTM", "GAN", "VAE", "Time Series"],
      links: { github: "#", demo: "#", report: "#" }
    },
    {
      title: "Traffic-Video Object Detection",
      category: "Computer Vision",
      kind: "Applied computer vision",
      image: "assets/images/project-traffic.svg",
      summary: "Used YOLOv8 to study vehicle and object detection in Istanbul traffic video.",
      problem: "Busy road scenes contain moving objects, occlusion and changing visual conditions.",
      solution: "Applied a YOLOv8 detection workflow to traffic footage and inspected the model's predictions.",
      impact: "Demonstrates practical computer-vision workflow experience with transport-related visual data.",
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
      summary: "SQL analysis and monitoring dashboards focused on reliable, consistent reporting data.",
      problem: "Reporting teams need to identify missing, inconsistent and invalid records before making decisions.",
      solution: "Developed SQL-based analysis workflows and dashboards around data-quality dimensions.",
      impact: "Practical experience translating data-validation requirements into monitoring and technical reporting.",
      tech: ["SQL", "Data Quality", "Dashboards", "Reporting"],
      links: { github: "#", demo: "#", report: "#" }
    },
    {
      title: "Agricultural Monitoring Dashboards",
      category: "Dashboards",
      kind: "Professional experience",
      image: "assets/images/project-dashboard.svg",
      summary: "Survey-data cleaning and dashboards supporting monitoring and evaluation at One Acre Fund.",
      problem: "Agricultural survey datasets need consistent preparation and accessible views for programme teams.",
      solution: "Automated parts of data cleaning and developed reporting views for monitoring workflows.",
      impact: "Experience making operational data more accessible for analysis and decision support.",
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
