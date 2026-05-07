# Multi-page portfolio structure

This website now uses separate HTML pages instead of showing all sections on one long page.

## Pages

- `index.html` — Home / landing page
- `about.html` — About page
- `dashboard.html` — Dashboard page
- `projects.html` — Projects page
- `experience.html` — Experience page
- `credentials.html` — Education, certificates, achievements
- `contact.html` — Contact page

## How navigation works

The navigation bar links directly to these files. For example:

```html
<a href="projects.html">Projects</a>
```

## How to update content

Most content still lives in:

```text
js/data.js
```

Update this file when you want to change:

- profile photo path
- LinkedIn / GitHub / Kaggle / Hugging Face links
- projects
- work experience
- skills
- certifications
- current status

## How to add a new page

1. Create a new file, for example `blog.html`.
2. Copy the header and footer structure from one of the existing pages.
3. Add a new link in the navigation area of every page:

```html
<a data-nav="blog" href="blog.html">Blog</a>
```

4. Set the body attribute on the new page:

```html
<body data-page="blog">
```

## How to push updates to GitHub

```bash
git add .
git commit -m "Update portfolio pages"
git push
```

GitHub Pages will redeploy automatically.
