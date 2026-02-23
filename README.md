# React Portfolio

A modern React-based portfolio website with dark/light theme support.

## Project Structure

```
react_portfolio/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Layout/     # Header, Footer, Navigation
│   │   ├── Pages/      # Page components (Home, About, Projects, Contact)
│   │   ├── UI/         # Reusable UI components
│   │   └── shared/     # Shared components
│   ├── context/        # React Context (Theme)
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # CSS styles
│   ├── utils/          # Utility functions and data
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── package.json
└── vite.config.js
```

## Getting Started

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

### Preview
```bash
npm run preview
```

## Pages

1. **Home** (`/`) - Hero section with animated sprite, featured projects, quick intro
2. **About** (`/about`) - Personal intro, skills, education, interests
3. **Projects** (`/projects`) - Filterable project gallery with detailed views
4. **Contact** (`/contact`) - Contact form and information

## Tech Stack

- **React 18** - Frontend library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **CSS Variables** - Theme management
- **LocalStorage** - Theme persistence
