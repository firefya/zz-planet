🛠️ Setting Up for Local Development
1️⃣ Prerequisites
Ensure you have the following installed on your machine:

Node.js (latest LTS version recommended) → Download Here
npm (comes with Node.js) → Check if installed:
bash
Copy
Edit
node -v   # Check Node.js version  
npm -v    # Check npm version  
2️⃣ Cloning the Repo & Installing Dependencies
Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install project dependencies:
bash
Copy
Edit
npm install
3️⃣ Running the Development Server
To start the local development server, run:

bash
Copy
Edit
npm run dev
This will spin up the application for local development. Changes will reflect automatically if hot-reloading is enabled.

4️⃣ Running Tests Locally
Before committing code, run tests to ensure everything works:

bash
Copy
Edit
npm test
or, for watching test files while coding:

bash
Copy
Edit
npm run test:watch
5️⃣ Running Linting & Formatting Checks
To maintain code consistency, run:

bash
Copy
Edit
npm run lint    # Check for linting issues  
npm run format  # Auto-format code  
🔍 Debugging Common Development Issues
1️⃣ npm install Fails / Dependency Issues
If you see errors during npm install, try clearing npm cache:
bash
Copy
Edit
npm cache clean --force
npm install
If issues persist, delete node_modules and package-lock.json, then reinstall:
bash
Copy
Edit
rm -rf node_modules package-lock.json
npm install
2️⃣ "Port Already in Use" When Running npm run dev
Sometimes the development server fails to start because another process is using the default port. To fix this:
bash
Copy
Edit
kill -9 $(lsof -t -i:3000)  # Replace 3000 with your app’s port
npm run dev
Alternatively, change the port manually in .env or package.json scripts.
3️⃣ Tests Failing Locally but Passing in CI/CD
Make sure dependencies are correctly installed:
bash
Copy
Edit
npm install
Run tests in watch mode to debug issues:
bash
Copy
Edit
npm run test:watch
If using Jest, try running with logging enabled:
bash
Copy
Edit
npm test -- --verbose

📖 Best Practices for Collaboration
✅ Branching Strategy
main branch → Always stable, production-ready code.
Feature branches (feature-xyz) → Work on separate features or fixes.
Always pull latest changes before working on a new branch:
bash
Copy
Edit
git checkout main
git pull origin main
git checkout -b my-feature-branch
✅ Creating a Pull Request (PR)
Push your feature branch to GitHub:
bash
Copy
Edit
git push origin my-feature-branch
Open a PR in GitHub from your branch → main.
Assign reviewers & wait for approval before merging.
Ensure CI/CD checks pass before merging.
Delete your branch after merging:
bash
Copy
Edit
git branch -d my-feature-branch
git push origin --delete my-feature-branch
