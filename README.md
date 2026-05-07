# Jean Aime Iraguha — Data Scientist & AI Engineer Portfolio

Professional multi-page portfolio website for Jean Aime Iraguha.

## Structure

```text
index.html              # Home page
about.html              # About page
dashboard.html          # Statistics, skills, and status
projects.html           # Project case studies and filters
experience.html         # Work experience timeline
credentials.html        # Education, certifications, achievements
contact.html            # Contact page
css/styles.css          # Website styling
js/data.js              # Content backend for easy updates
js/main.js              # Interactivity and rendering
assets/images/          # Profile and project images
assets/cv/              # Public CV file location
docs/                   # Deployment and update guides
```

## Run locally

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Update content

Edit:

```text
js/data.js
```

Then push:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Add your photo

Save your picture as:

```text
assets/images/profile.jpg
```

Then update `js/data.js`:

```js
photo: "assets/images/profile.jpg"
```

## Deploy

For the simplest GitHub Pages setup:

- Repository settings → Pages
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/root`

Your site will be available at your GitHub Pages URL.
