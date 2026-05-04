# Deploying the Portfolio on GitHub Pages

## Option A: Personal website URL — recommended

This gives you a clean URL:

```text
https://your-github-username.github.io/
```

### Steps

1. Create a new GitHub repository named exactly:

```text
your-github-username.github.io
```

Example:

```text
jeanaimeiraguha.github.io
```

2. Upload all files from this portfolio folder into that repository.

3. Go to the repository on GitHub.

4. Open:

```text
Settings → Pages
```

5. Under **Build and deployment**, choose:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

6. Save.

7. Wait 1–3 minutes, then open:

```text
https://your-github-username.github.io/
```

## Option B: Project website URL

This gives a URL like:

```text
https://your-github-username.github.io/portfolio/
```

Create any repository name, for example:

```text
portfolio
```

Then follow the same GitHub Pages settings above.

## Updating the live website

Every time you edit files and push/commit to GitHub, the website updates automatically after a short delay.

## No backend server is required

The content is controlled through:

```text
js/data.js
```

Think of `js/data.js` as your small content backend. You can update your status, projects, certifications, links, and skills there without touching the design files.
