# React Portfolio

A modern React-based portfolio website with dark/light theme support.

## Features

- **Modern React Architecture**: Built with Vite, React Router, and Framer Motion
- **Dual Theme System**: Light mode (white/dark gray/tomato) and Dark mode (ThinkPad style)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Animated transitions, modals, and filters
- **Project Showcase**: Filterable project gallery with detailed views
- **Contact Form**: With validation and submission handling

## Color Scheme

### Light Mode
- Background: White (#FFFFFF)
- Text: Dark Gray (#1F2937)
- Accent/Hover: Tomato (#FF6347)
- Links: Maroon (#800000) → Tomato on hover

### Dark Mode (ThinkPad Style)
- Background: Dark Charcoal (#0A0A0A)
- Text: Silver/Light Gray (#D1D5DB)
- Accent/Hover: ThinkPad Red (#E41F1F)
- Links: Silver → ThinkPad Red on hover

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

See [INSTALL.md](INSTALL.md) for detailed installation instructions.

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

1. **Home** (`/`) - Hero section, featured projects, quick intro
2. **About** (`/about`) - Personal intro, skills, education, interests
3. **Projects** (`/projects`) - Filterable project gallery with detailed views
4. **Contact** (`/contact`) - Contact form and information

## Technologies Used

- **React 18** - Frontend library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **CSS Variables** - Theme management
- **LocalStorage** - Theme persistence

## Development Notes

- Theme is automatically detected from system preferences
- Theme preference is saved in localStorage
- All components are responsive
- Accessibility features included
- Performance optimized with code splitting

## Next Steps

1. Add actual project images and assets
2. Implement backend for contact form
3. Add blog/thoughts section
4. Integrate analytics
5. Deploy to Vercel/Netlify
