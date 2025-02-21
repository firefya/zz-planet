Project Setup Guide
Ensure you have Node.js (LTS version) installed. You can download it here: https://nodejs.org/

To check if Node.js and npm are installed, run:

nginx
Copy
Edit
node -v  
npm -v  
Install Git
You also need Git for version control. Download it here: https://git-scm.com/downloads

Check if Git is installed by running:

css
Copy
Edit
git --version  
Clone the Repository and Install Dependencies
Run the following commands to clone the project and install dependencies:

bash
Copy
Edit
git clone https://github.com/firefya/zaida-zane-site.git  
cd zaida-zane-site  
npm install  
npm run dev  
Now, open your browser and visit: http://localhost:5173/

Project Structure
The project directory is structured as follows:

pgsql
Copy
Edit
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
Key Files & Folders
public/ – Contains static assets like images and index.html.
src/ – Holds the source code and components.
components/ – Contains reusable UI components.
vite.config.js – Configuration file for Vite.
.gitignore – Lists files to be ignored by Git.
Working with Git
The project uses two main branches:

Branch	Purpose
main	Stable, production-ready branch.
dev	Active development branch.
To start a new feature branch:

css
Copy
Edit
git checkout -b feature/new-menu  
git commit -m "Added new menu layout"  
git push origin feature/new-menu  
After development, create a Pull Request (PR) and request a review before merging.

To fix a bug and create a separate branch:

bash
Copy
Edit
git checkout -b fix/navbar-bug  
After testing, merge it into dev first, then into main once verified.

Before starting work, always pull the latest changes:

css
Copy
Edit
git pull origin main  
Use descriptive commit messages when making changes:

css
Copy
Edit
git commit -m "Fixed menu animation delay"  
Deployment
The project is deployed via GitHub Pages (or another hosting service). Ensure the vite.config.js file is set correctly:

cpp
Copy
Edit
export default defineConfig({  
    base: "./",  
});  
Next Steps
Add unit tests for UI components.
Optimize Three.js performance.
Implement SEO improvements.
If you encounter any issues, open a GitHub Issue here: https://github.com/firefya/zaida-zane-site/issues or reach out to the maintainer.
