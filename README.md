# arsyopraza.com

Personal website and blog of Arsy Opraza Akma — Software Engineer specializing in Backend and Cloud technologies.

Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [React](https://react.dev/).

## Features

- Blog posts written in Markdown/MDX
- About page with experiences, certifications, projects, and talks
- Search functionality with Fuse.js
- RSS feed
- SEO optimized
- Fully responsive

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Format

```bash
npm run format
```

## Project Structure

```
src/
├── config/          # Site configuration (metadata, menu, social links)
├── content/
│   ├── about/       # About page content
│   ├── posts/       # Blog posts (Markdown)
│   ├── projects/    # Project entries
│   ├── talks/       # Talk entries
│   ├── certifications/
│   └── experiences/
├── layouts/         # Page layouts
└── pages/           # Astro pages and routes
public/
├── fonts/           # Self-hosted fonts
└── images/          # Static images
```

## License

MIT
