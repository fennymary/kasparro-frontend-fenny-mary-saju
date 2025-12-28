# 🚀 GETTING STARTED - READ THIS FIRST

Welcome! Follow these steps to run the Kasparro website locally.

---

## ⚡ Quick Start (Copy & Paste These Commands)

Open your terminal/command prompt and run these 3 commands:

```bash
npm install
npm run dev
```

That's it! Your website will be running at:
```
http://localhost:3000
```

**Then open that link in your browser.** 🎉

---

## 📝 Step-by-Step Instructions

### Step 1: Install Dependencies
```bash
npm install
```
*This downloads all the required packages. Wait for it to finish.*

### Step 2: Start the Development Server
```bash
npm run dev
```
*You should see something like:*
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local
```

### Step 3: Open in Browser
Click this link or copy-paste into your browser:
```
http://localhost:3000
```

**Done!** You should now see the Kasparro website. 🎉

---

## 🗺️ What You Can See

Once the website is running, explore these pages:

| URL | What You'll See |
|-----|-----------------|
| `http://localhost:3000/` | Home page |
| `http://localhost:3000/platform` | How the product works |
| `http://localhost:3000/about` | About the company |
| `http://localhost:3000/app/dashboard` | Dashboard with metrics |
| `http://localhost:3000/app/audit` | Audit results (7 modules) |
| `http://localhost:3000/app/architecture` | System architecture |

---

## 🎮 Try These Interactive Features

- **Dashboard**: Select different brands (top left)
- **Audit**: Click modules in the sidebar to see details
- **Metrics**: Watch data update when you switch brands

---

## ⏹️ How to Stop the Server

Press `CTRL + C` in the terminal where you ran `npm run dev`

---

## 🛠️ Other Useful Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check for TypeScript errors |

---

## 🐛 Having Issues?

### "npm: command not found"
→ Install Node.js from https://nodejs.org/

### "Port 3000 already in use"
→ Either close the other app, or run: `npm run dev -- -p 3001`

### "Module not found" or other errors
→ Delete folders and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📚 Next Steps

After the website is running:

1. **Explore the website** — Click around and see what's there
2. **Read the code** — It's clean and well-organized
3. **Check README.md** — For technical details
4. **Read QUICK_START.md** — For more information

---

## ✅ Success Checklist

- [ ] You ran `npm install`
- [ ] You ran `npm run dev`
- [ ] You opened `http://localhost:3000` in your browser
- [ ] You see the Kasparro home page
- [ ] You can click around and explore

If all ✅, **you're all set!** 🎉

---

**That's all you need to know to run this project!**

Any questions? Check the other documentation files or explore the code. It's all here. 😊
