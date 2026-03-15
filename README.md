# Descendants: 3D Generative Agent Simulations

Research project website for **"Descendants: Architecture, Embodiment, and Emergent Behavior in Browser-Based 3D Generative Agent Simulations"** — University of Sri Jayewardenepura, Faculty of Technology.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

The production build is output to the `dist/` folder and can be deployed to any static hosting provider (GitHub Pages, Netlify, Vercel, etc.).

## Project Structure

```
src/
  data.js              # All site content (text, team info, etc.)
  App.jsx              # Root component
  index.css            # Global styles and CSS variables
  components/
    Navbar.jsx         # Fixed navigation bar
    HeroSection.jsx    # Hero/header section
    IntroductionSection.jsx
    ArchitectureSection.jsx
    ScenariosSection.jsx
    ContributionsSection.jsx
    TeamSection.jsx
    Footer.jsx
    ScrollToTop.jsx
public/
  report.pdf           # Downloadable thesis PDF
```

## Tech Stack

- React 18 + Vite 5
- CSS (no external UI library)
- Google Fonts (Inter, Space Grotesk)
