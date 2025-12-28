#!/bin/bash

# Kasparro Frontend - Quick Start Setup Script
# This script sets up the development environment

echo "🚀 Kasparro Frontend Setup"
echo "============================"
echo ""

# Check Node.js
echo "✓ Checking Node.js version..."
node --version || (echo "❌ Node.js not found. Please install Node.js 18+"; exit 1)

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
  echo "✨ Creating .env.local..."
  cat > .env.local << 'EOF'
# Development environment variables
NEXT_PUBLIC_APP_NAME=Kasparro
NODE_ENV=development
EOF
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Available commands:"
echo "   npm run dev      - Start development server"
echo "   npm run build    - Build for production"
echo "   npm start        - Start production server"
echo "   npm run lint     - Run TypeScript check"
echo ""
echo "🌐 Development server will run at: http://localhost:3000"
echo ""
echo "Happy coding! 🎉"
