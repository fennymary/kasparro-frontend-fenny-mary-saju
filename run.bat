@echo off
REM Kasparro Frontend - Quick Start Script for Windows
REM This script installs dependencies and runs the dev server

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║           KASPARRO FRONTEND - STARTUP SCRIPT                  ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

echo 📦 Installing dependencies...
echo.
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Installation failed. Make sure Node.js is installed.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo ✅ Installation complete!
echo.
echo 🚀 Starting development server...
echo.

call npm run dev

echo.
pause
