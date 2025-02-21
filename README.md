<style>
    .content {
        font-size: 24px;
    }

    .content pre, .content code {
        font-size: 24px;
    }

    .content table, 
    .content table th, 
    .content table td {
        font-size: 24px;
    }

    .content ul, .content li {
        font-size: 24px;
    }

    .content a {
        font-size: 24px;
    }
</style>

<div class="content">
    <p>Ensure you have Node.js (LTS version) installed. <a href="https://nodejs.org/">Download it here</a></p>
    <pre><code>node -v
npm -v</code></pre>

    <p>You need Git for version control. <a href="https://git-scm.com/downloads">Download Git</a></p>
    <pre><code>git --version</code></pre>

    <pre><code>git clone https://github.com/firefya/zaida-zane-site.git
cd zaida-zane-site</code></pre>

    <pre><code>npm install</code></pre>

    <pre><code>npm run dev</code></pre>

    <p>Now visit <a href="http://localhost:5173/">http://localhost:5173/</a> in your browser.</p>

    <pre><code>
zz-planet/
│── node_modules/       
│── public/             
│   ├── images/         
│   ├── index.html      
│── src/                
│   ├── components/     
│   │   ├── Scene.jsx   
│   ├── App1.jsx        
│   ├── main.jsx        
│   ├── style.css       
│── .gitignore          
│── package.json        
│── vite.config.js      
│── README.md           
</code></pre>

    <ul>
        <li><code>public/</code></li>
        <li><code>src/</code></li>
        <li><code>components/</code></li>
        <li><code>vite.config.js</code></li>
        <li><code>.gitignore</code></li>
    </ul>

    <table>
        <tr><th>Branch</th><th>Purpose</th></tr>
        <tr><td><code>main</code></td><td>Stable, production-ready branch.</td></tr>
        <tr><td><code>dev</code></td><td>Active development branch.</td></tr>
    </table>

    <pre><code>git checkout -b feature/new-menu
git commit -m "Added new menu layout"
git push origin feature/new-menu</code></pre>

    <p>After development, create a Pull Request (PR) and request a review before merging.</p>

    <pre><code>git checkout -b fix/navbar-bug</code></pre>

    <p>After testing, merge it into <code>dev</code> first, then into <code>main</code> once verified.</p>

    <ul>
        <li>Always pull the latest changes before starting:
            <pre><code>git pull origin main</code></pre>
        </li>
        <li>Use descriptive commit messages:
            <pre><code>git commit -m "Fixed menu animation delay"</code></pre>
        </li>
        <li>Open Pull Requests (PRs) before merging.</li>
    </ul>

    <p>Deployment is handled via GitHub Pages (or another hosting service). Ensure <code>vite.config.js</code> is set correctly:</p>

    <pre><code>export default defineConfig({
    base: "./",
});</code></pre>

    <ul>
        <li>Add unit tests for UI components.</li>
        <li>Optimize Three.js performance.</li>
        <li>Implement SEO improvements.</li>
    </ul>

    <p>If you encounter issues, open a <a href="https://github.com/firefya/zaida-zane-site/issues">GitHub Issue</a> or reach out to the maintainer.</p>

    <p>Happy coding!</p>
</div>
