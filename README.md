Zaida Zane Website

This is the source code for Zaida Zane’s interactive Three.js-powered website. It leverages React, Vite, and Three.js to create an immersive visual experience.

🛠️ Pre-requisites for Local Development

1. Install Node.js (LTS)

Ensure you have Node.js (LTS version) installed.👅 Download it here

Check if it's installed:

node -v
npm -v

2. Install Git

You need Git for version control.👅 Download Git

Check if it's installed:

git --version

3. Clone the Repository

git clone https://github.com/firefya/zaida-zane-site.git
cd zaida-zane-site

4. Install Dependencies

npm install

5. Start the Development Server

npm run dev

Now visit http://localhost:5173/ in your browser.

📂 Core Repository Architecture

The project is structured to ensure separation of concerns while optimizing for performance and maintainability.

zz-planet/
│── node_modules/       # Dependencies installed by npm
│── public/             # Static files (served as-is by Vite)
│   ├── images/         # Background visuals used in Three.js
│   ├── index.html      # The root HTML file (React mounts here)
│── src/                # All application code
│   ├── components/     # Reusable React components
│   │   ├── Scene.jsx   # The Three.js scene logic
│   ├── App1.jsx        # The main React component
│   ├── main.jsx        # React entry point
│   ├── style.css       # Global styles
│── .gitignore          # Specifies ignored files (e.g., node_modules)
│── package.json        # Project metadata & dependencies
│── vite.config.js      # Configuration for Vite (asset handling, server)
│── README.md           # Documentation (this file)

Why This Structure?

✅ public/ → Stores static files like images.

✅ src/ → Contains all React components and logic.

✅ components/ → Encapsulates modular UI logic (like Scene.jsx).

✅ vite.config.js → Ensures Vite serves assets correctly.

✅ .gitignore → Prevents unnecessary files from being committed.

🚀 Branching Etiquette

To maintain a clean and organized Git workflow, follow these branching conventions:

Main Branches

Branch

Purpose

main

The stable, production-ready branch. Always functional.

dev

Active development branch. New features are merged here before main.

Feature & Fix Branches

Create feature branches for new work:

git checkout -b feature/new-menu
git commit -m "Added new menu layout"
git push origin feature/new-menu

After development, create a Pull Request (PR) and request a review before merging.

Bug Fixes

For urgent bug fixes, create a branch off main:

git checkout -b fix/navbar-bug

After testing, merge it into dev first, then into main once verified.

Branch Naming Conventions

Type

Naming Format

Features

feature/<name>

Fixes

fix/<name>

Hotfixes

hotfix/<name>

🔋 Contributing

Always pull the latest changes before starting:

git pull origin main

Use descriptive commit messages:

git commit -m "Fixed menu animation delay"

Open Pull Requests (PRs) before merging to avoid breaking the codebase.

⚡ Deployment

Deployment is handled via GitHub Pages (or another hosting service). Ensure vite.config.js is set correctly:

export default defineConfig({
  base: "./", // Ensures assets resolve properly in production
});

🎯 Future Enhancements

Add unit tests for UI components.

Optimize Three.js performance for better loading times.

Implement SEO improvements for better search visibility.

📞 Need Help?

If you encounter issues, open a GitHub Issue or reach out to the maintainer.

🔥 Happy coding! 🚀

