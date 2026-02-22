# Installation Guide

## Quick Start

### Option 1: Automated Setup (Recommended)
```bash
# Make the setup script executable (first time only)
chmod +x setup.sh

# Run the setup script
./setup.sh
```

### Option 2: Manual Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher (comes with Node.js)

### Verify Installation
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show v9.x.x or higher
```

## Dependencies

This project uses the following dependencies (automatically installed via `npm install`):

### Production Dependencies
- `react` ^18.2.0 - React library
- `react-dom` ^18.2.0 - React DOM rendering
- `react-router-dom` ^6.20.0 - Client-side routing
- `react-icons` ^5.0.1 - Icon library
- `framer-motion` ^10.16.4 - Animations

### Development Dependencies
- `@types/react` ^18.2.15 - TypeScript definitions for React
- `@types/react-dom` ^18.2.7 - TypeScript definitions for React DOM
- `@vitejs/plugin-react` ^4.0.3 - Vite plugin for React
- `autoprefixer` ^10.4.16 - CSS autoprefixer
- `eslint` ^8.45.0 - JavaScript linter
- `eslint-plugin-react` ^7.32.2 - ESLint React rules
- `eslint-plugin-react-hooks` ^4.6.0 - ESLint React Hooks rules
- `eslint-plugin-react-refresh` ^0.4.3 - ESLint for React Refresh
- `postcss` ^8.4.31 - CSS processor
- `tailwindcss` ^3.3.5 - Utility-first CSS framework
- `vite` ^4.4.5 - Build tool and dev server

## Available Scripts

After installation, you can run:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Development Server

Once installed, the development server will run on:
- **Local URL:** http://localhost:5173
- **Network URL:** http://[your-local-ip]:5173

The page will automatically reload when you make changes.

## Troubleshooting

### Common Issues

1. **Permission denied when running setup.sh**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

2. **Node.js version too old**
   - Update Node.js to v18 or higher from [nodejs.org](https://nodejs.org/)

3. **npm install fails**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Remove node_modules and package-lock.json
   rm -rf node_modules package-lock.json
   
   # Try installing again
   npm install
   ```

4. **Port 5173 already in use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   
   # Or change port in .env file
   echo "PORT=3000" >> .env
   ```

## Environment Variables

Create a `.env` file in the project root for environment-specific configuration:

```env
# Development server port
PORT=5173

# API URLs (if needed)
# VITE_API_URL=https://api.example.com

# Analytics (if needed)
# VITE_GOOGLE_ANALYTICS_ID=UA-XXXXX-Y
```

Variables prefixed with `VITE_` will be available in your React code via `import.meta.env.VITE_VARIABLE_NAME`.

## Project Structure

```
react_portfolio/
├── public/              # Static assets
├── src/                 # Source code
├── node_modules/        # Dependencies (created by npm install)
├── package.json         # Dependencies and scripts
├── package-lock.json    # Lockfile (created by npm install)
├── setup.sh            # Automated setup script
├── INSTALL.md          # This file
├── README.md           # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
```

## Need Help?

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify Node.js and npm versions
3. Check for error messages in the terminal
4. Refer to the main README.md for more details