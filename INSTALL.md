# Installation

## Quick Start

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

All dependencies are managed in `package.json`. Running `npm install` will install:

### Production Dependencies
- `react` ^18.2.0
- `react-dom` ^18.2.0  
- `react-router-dom` ^6.20.0
- `react-icons` ^5.0.1
- `framer-motion` ^10.16.4

### Development Dependencies
- `@types/react` ^18.2.15
- `@types/react-dom` ^18.2.7
- `@vitejs/plugin-react` ^4.0.3
- `autoprefixer` ^10.4.16
- `eslint` ^8.45.0
- `eslint-plugin-react` ^7.32.2
- `eslint-plugin-react-hooks` ^4.6.0
- `eslint-plugin-react-refresh` ^0.4.3
- `postcss` ^8.4.31
- `tailwindcss` ^3.3.5
- `vite` ^4.4.5

## Available Scripts

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

After installation, run:
```bash
npm run dev
```

The app will be available at: http://localhost:5173

## Troubleshooting

### Common Issues

1. **Node.js version too old**
   - Update to Node.js v18 or higher from [nodejs.org](https://nodejs.org/)

2. **npm install fails**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Port 5173 already in use**
   ```bash
   # Change port in .env file
   echo "PORT=3000" >> .env
   ```

## Environment Variables

Create `.env` file for configuration:
```env
PORT=5173
# VITE_API_URL=https://api.example.com
```

Variables prefixed with `VITE_` are available in React via `import.meta.env.VITE_VARIABLE_NAME`.