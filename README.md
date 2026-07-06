# aungkko.io

Personal academic and robotics portfolio for **Aung Khant Ko**, built with Jekyll and hosted on GitHub Pages at [https://aungkko.io](https://aungkko.io).

## Structure

```text
├── CNAME                  # Custom domain: aungkko.io
├── _config.yml            # Site config, collections, plugins
├── _layouts/              # default, page, post, project
├── _includes/             # header, footer, social-icons, theme-toggle
├── _posts/                # Technical blog posts (YYYY-MM-DD-title.md)
├── _software/             # Software/project collection entries
├── _publications/         # Publication collection entries
├── assets/
│   ├── css/style.css      # Single stylesheet, dark/light via CSS variables
│   ├── js/theme.js        # Theme toggle with localStorage + system fallback
│   ├── img/               # Photos, figures, favicon
│   └── pdf/               # CV PDF
├── index.md               # Home / bio
├── about.md
├── publications.md
├── software.md
├── posts.md
└── cv.md
```

## Local development

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Deployment (GitHub Pages + custom domain)

1. Create a public GitHub repository named `aungkko.io` under `github.com/akkexd`.
2. Push this repository:
   ```bash
   git init
   git add .
   git commit -m "Initial personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/akkexd/aungkko.io.git
   git push -u origin main
   ```
3. In GitHub: **Settings → Pages → Source: Deploy from branch → Branch: main → Folder: /root**.
4. In **Settings → Pages → Custom domain**, enter `aungkko.io` (the `CNAME` file in this repo keeps it set).
5. In your domain registrar's DNS settings, point `aungkko.io` to GitHub Pages following GitHub's current DNS instructions (apex A/AAAA records, or ALIAS/ANAME if supported).
6. After DNS propagation, enable **Enforce HTTPS** in the Pages settings.
7. Visit `https://aungkko.io`.

## Adding content

- **New post:** add `_posts/YYYY-MM-DD-slug.md` with `title`, `date`, and `tags` front matter. It appears automatically on `/posts/`.
- **New project:** add an entry to `_software/` and a card to `software.md`.
- **New publication:** add an entry to `_publications/` and to `publications.md`. Label status accurately: preprint, under review, in preparation, conference, or journal.
- **Update CV:** replace `assets/pdf/Aung_Khant_Ko_CV.pdf`.
- **Project images:** add to `assets/img/` (keep under 500 KB), then update the matching card in `software.md`.

## Pre-launch checklist

- [ ] GitHub Pages URL works.
- [ ] Dark/light mode toggle works on every page.
- [ ] CV PDF downloads correctly.
- [ ] Email link opens a draft to aungkko.edu@gmail.com.
- [ ] Google Scholar, GitHub, and LinkedIn links work.
- [ ] Publication DOI resolves.
- [ ] All images load on mobile and desktop.
- [ ] No broken internal links.
- [ ] Publications are labeled accurately (preprint / under review / in preparation).
- [ ] Footer shows `© 2026 Aung Khant Ko. All rights reserved.`
