#!/bin/bash
# React Portfolio Setup Script
# Run this script to install all dependencies and get the project ready

echo "========================================="
echo "React Portfolio Setup"
echo "========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
NODE_MAJOR=$(echo $NODE_VERSION | cut -d'.' -f1)
if [ $NODE_MAJOR -lt 18 ]; then
    echo "⚠️  Node.js version $NODE_VERSION detected. Recommended: v18 or higher."
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ Node.js $NODE_VERSION detected"
echo "✅ npm $(npm -v) detected"

# Install dependencies
echo ""
echo "Installing dependencies..."
echo "-----------------------------------------"

if [ -d "node_modules" ]; then
    echo "⚠️  node_modules directory already exists."
    read -p "Remove and reinstall? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Removing existing node_modules..."
        rm -rf node_modules package-lock.json
    fi
fi

echo "Running npm install..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Check npm errors above."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo ""
    echo "Creating .env file..."
    cat > .env << EOF
# React Portfolio Environment Variables
# Add any API keys or environment-specific variables here

# Example:
# VITE_API_URL=https://api.example.com
# VITE_GOOGLE_ANALYTICS_ID=UA-XXXXX-Y

# Development server port (default: 5173)
PORT=5173

# Build configuration
# VITE_APP_TITLE="React Portfolio"
EOF
    echo "✅ Created .env file"
fi

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "Available commands:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run preview - Preview production build"
echo "  npm run lint    - Run ESLint"
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "The app will be available at: http://localhost:5173"
echo "========================================="