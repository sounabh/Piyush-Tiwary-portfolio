# Nidhi Dhameliya - Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-nidhidhameliya.vercel.app/)

A modern portfolio website built with React, Vite, Tailwind CSS, and Motion. It highlights AI and machine learning projects, technical skills, and personal background in data science, MLOps, and generative AI.

## Features

- Responsive portfolio layout for desktop and mobile
- Smooth animations and interactive UI elements
- Project showcase with links to GitHub and live demos
- Skills and technology section
- About Me and Contact sections
- Dark theme and glassmorphism-inspired visuals

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React
- React Icons

## Getting Started

Clone the repository:

```bash
git clone https://github.com/nidhidhameliya/PORTFOLIO.git
```

Navigate into the project directory:

```bash
cd PORTFOLIO
```

Install dependencies with pnpm:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open the local URL shown in the terminal.

## Build for Production

```bash
pnpm run build
```

## Stats Configuration

The portfolio uses a live visitor counter for the `Visitors` stat and a local config file for the manually updated values.

- `src/data/stats.ts` contains:
  - `projects`
  - `yearsExp`
- `Visitors` is fetched from CountAPI on page load and animated into view.

## Project Structure

```text
PORTFOLIO/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── styles/
│   └── imports/
├── public/
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.ts
└── README.md
```

## Deployment

This site is intended to deploy to platforms like Vercel or Netlify. Make sure the build command is `pnpm run build` and the publish directory is `dist`.

## Connect With Me

- **GitHub:** https://github.com/nidhidhameliya
- **LinkedIn:** https://linkedin.com/in/nidhi-dhameliya-866bb7270
- **Medium:** https://nidhidhameliya2004.medium.com/
- **Email:** nidhidhameliya2004@gmail.com

## About Me

I am an M.Tech Data Science & Machine Learning student with a strong interest in AI, ML, generative models, LLMs, RAG, and full-stack AI application development.

## License

This project is licensed under the MIT License.
