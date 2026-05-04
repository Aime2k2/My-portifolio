# How to Update Your Portfolio

The easiest way to update the website is to edit this file:

```text
js/data.js
```

You do not need to change `index.html`, `css/styles.css`, or `js/main.js` unless you want to change design or behavior.

---

## 1. Update your profile photo

Put your photo here:

```text
assets/images/profile.jpg
```

Then open `js/data.js` and update:

```js
photo: "assets/images/profile.jpg"
```

Use a clear professional image. Recommended size:

```text
900 x 980 pixels or larger
```

---

## 2. Update your current status

Find this section in `js/data.js`:

```js
status: [
  {
    title: "Current academic focus",
    text: "..."
  }
]
```

Add a new status item like this:

```js
{
  title: "New Hugging Face demo",
  text: "Published a Gradio demo for customer churn prediction using scikit-learn."
}
```

---

## 3. Add a new project

Find the `projects` list in `js/data.js` and add a new object:

```js
{
  title: "Customer Churn Prediction",
  category: "AI",
  image: "assets/images/customer-churn.svg",
  summary: "Built a machine learning model to predict customers at risk of leaving.",
  problem: "The company needed to identify customers likely to churn before renewal.",
  solution: "Cleaned customer data, trained classification models, compared metrics, and explained drivers.",
  impact: "Improved targeting for retention campaigns and demonstrated predictive modeling skills.",
  tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Power BI"],
  links: {
    github: "https://github.com/yourusername/customer-churn",
    demo: "https://huggingface.co/spaces/yourusername/customer-churn",
    report: "#"
  }
}
```

Important: the category should match one of these filter names:

```text
AI
Dashboards
Data Engineering
Analytics
```

---

## 4. Add or update GitHub, Kaggle, and Hugging Face links

Find:

```js
links: {
  linkedin: "...",
  github: "#",
  kaggle: "#",
  huggingFace: "#",
  resume: "assets/cv/Jean_Aime_Iraguha_CV.pdf"
}
```

Replace `#` with your real links.

---

## 5. Upload a public CV

Create a public-safe CV without private references, phone numbers of referees, or unnecessary personal details.

Put it here:

```text
assets/cv/Jean_Aime_Iraguha_CV.pdf
```

The website already has buttons pointing to this path.

---

## 6. Update skills and statistics

### Skills

Edit:

```js
skills: [
  { name: "Python & Scientific Computing", level: 92 }
]
```

The `level` controls the progress bar percentage.

### Statistics

Edit:

```js
stats: [
  { icon: "🎓", value: 3, suffix: "", label: "Degree programs..." }
]
```

The dashboard counters animate automatically.

---

## 7. Best update routine

Each month, update:

1. One status item
2. One project result or metric
3. One GitHub repository link
4. One screenshot or demo link
5. One new skill/certification, if relevant

This keeps the portfolio active and trustworthy for recruiters.
