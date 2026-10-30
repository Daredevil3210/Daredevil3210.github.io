# Cui Xuecheng · Academic Homepage

**English** | [简体中文](README.zh.md)

A personal academic website for Cui Xuecheng, a master's student in Computer Technology at Northeastern University. It presents education, project experience, honors, and certificates.

**Live website:** [daredevil3210.github.io](https://daredevil3210.github.io/)

## Content

- Personal introduction, contact details, GitHub profile, and supervisor link.
- Education history, academic results, and selected coursework.
- Four featured projects: MailFlow email agent, Agentic RAG knowledge base, ERNIE literature search, and multi-objective video recommendation.
- Project filtering by Agent, RAG, and retrieval/recommendation, plus links to Agent Loop, LangGraph, and Transformer learning resources.
- Honors and twelve certificates with links to full-size images.

## Implementation

Built with plain HTML, CSS, and JavaScript and published through GitHub Pages. No frontend dependency installation or build step is required.

The desktop header places the introduction beside a portrait. The main reading area has a maximum width of 1040px; the introduction uses a narrower line length. Education is ordered from undergraduate to postgraduate study. Project cards use two columns on desktop and one on mobile. Body text is 16px, section headings are 28px, and the name scales from 32px on mobile to 40px on desktop.

Project filters use keyboard-accessible buttons; all projects remain visible when JavaScript is disabled. Certificate images use WebP and lazy loading, preserve their full aspect ratios, and show four items initially with eight more in an expandable section. Focus indicators and reduced-motion preferences are supported.

The header uses a light blue background and an original retrieval-path illustration around the portrait. The portrait is displayed at a 4:5 ratio, with a desktop width of 180px and responsive sizing on mobile. Original photo assets are retained.

## Repository contents

- [index.html](index.html): page content, navigation, and certificate links.
- [styles.css](styles.css): colors, layout, and responsive styling.
- [script.js](script.js): project filtering, status messages, and progressive entrance animations.
- [portrait-clear.webp](portrait-clear.webp): the displayed portrait.
- [research-paths.svg](research-paths.svg): the header background illustration.
- [innovation-scholarship.webp](innovation-scholarship.webp): the scholarship certificate updated from its replacement PDF on 2026-09-11.
- Other `.webp` files: certificates and earlier portrait assets.
- [LICENSE](LICENSE): MIT software license.

## Local preview

Clone the repository and open `index.html` in a browser:

```sh
git clone https://github.com/Daredevil3210/Daredevil3210.github.io.git
cd Daredevil3210.github.io
```

Alternatively, with Python 3 installed, serve the repository locally:

```sh
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). This command is a preview server, not an automated test suite.

## Maintenance and publishing

1. Update personal information, projects, and honors in `index.html`.
2. Adjust visual styling in `styles.css`.
3. Keep project `data-category` values (`agent`, `rag`, or `retrieval`), filter status counts, and repository links consistent. Describe projects according to their public implementations.
4. Keep certificate filenames and links synchronized. Refresh stylesheet/script version query parameters after changing those files.
5. Preview desktop and mobile layouts; check filtering, images, links, and browsing with JavaScript disabled. Push the changes to `main`.
6. GitHub Pages publishes from the repository root on `main`. Inspect publishing status in Actions or Settings → Pages.

## License and personal content

Website source code is distributed under the [MIT License](LICENSE). Personal photographs, certificates, identity information, and third-party marks are not reusable software assets. Their rights remain with their respective owners; the software license does not grant rights to use them.

## Contact

- Email: [cuixc@mails.neu.edu.cn](mailto:cuixc@mails.neu.edu.cn)
- GitHub: [Daredevil3210](https://github.com/Daredevil3210)
