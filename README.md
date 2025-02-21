<p>Ensure you have Node.js (LTS version) installed. <a href="https://nodejs.org/">Download it here</a></p>
<pre><code>node -v
npm -v
<p>You need Git for version control. <a href="https://git-scm.com/downloads">Download Git</a></p>
<pre><code>git --version</code></pre>

<pre><code>git clone https://github.com/firefya/zaida-zane-site.git
cd zaida-zane-site
<pre><code>npm install</code></pre>

<pre><code>npm run dev</code></pre>
<p>Now visit <a href="http://localhost:5173/">http://localhost:5173/</a> in your browser.</p>

<pre><code>

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
    
<ul>
    <li><code>public/</code> → Stores static files like images.</li>
    <li><code>src/</code> → Contains all React components and logic.</li>
    <li><code>components/</code> → Encapsulates modular UI logic (like <code>Scene.jsx</code>).</li>
    <li><code>vite.config.js</code> → Ensures Vite serves assets correctly.</li>
    <li><code>.gitignore</code> → Prevents unnecessary files from being committed.</li>
</ul>

<table>
    <tr><th>Branch</th><th>Purpose</th></tr>
    <tr><td><code>main</code></td><td>The stable, production-ready branch. Always functional.</td></tr>
    <tr><td><code>dev</code></td><td>Active development branch. New features are merged here before <code>main</code>.</td></tr>
</table>

<pre><code>


<ul>
    <li><code>public/</code> → Stores static files like images.</li>
    <li><code>src/</code> → Contains all React components and logic.</li>
    <li><code>components/</code> → Encapsulates modular UI logic (like <code>Scene.jsx</code>).</li>
    <li><code>vite.config.js</code> → Ensures Vite serves assets correctly.</li>
    <li><code>.gitignore</code> → Prevents unnecessary files from being committed.</li>
</ul>

<table>
    <tr><th>Branch</th><th>Purpose</th></tr>
    <tr><td><code>main</code></td><td>The stable, production-ready branch. Always functional.</td></tr>
    <tr><td><code>dev</code></td><td>Active development branch. New features are merged here before <code>main</code>.</td></tr>
</table>

<pre><code>

git checkout -b feature/new-menu
git commit -m "Added new menu layout"
git push origin feature/new-menu
After development, create a Pull Request (PR) and request a review before merging.
<pre><code>
git checkout -b fix/navbar-bug
After testing, merge it into dev first, then into main once verified.
<ul>
    <li>Always pull the latest changes before starting:
    <pre><code>git pull origin main</code></pre></li>
    <li>Use descriptive commit messages:
    <pre><code>git commit -m "Fixed menu animation delay"</code></pre></li>
    <li>Open Pull Requests (PRs) before merging to avoid breaking the codebase.</li>
</ul>

<p>Deployment is handled via GitHub Pages (or another hosting service). Ensure <code>vite.config.js</code> is set correctly:</p>
<pre><code>export default defineConfig({
base: "./", // Ensures assets resolve properly in production
});
<ul>
    <li>Add unit tests for UI components.</li>
    <li>Optimize Three.js performance for better loading times.</li>
    <li>Implement SEO improvements for better search visibility.</li>
</ul>

<p>If you encounter issues, open a <a href="https://github.com/firefya/zaida-zane-site/issues">GitHub Issue</a> or reach out to the maintainer.</p>

<p>Happy coding!</p>
