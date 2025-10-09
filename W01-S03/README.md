# W01-S03 — Code Quality & Continuous Integration

This session focused on improving **code quality, structure, and automation** in our TypeScript project.

## 🔧 Main Topics

- Setup of **ESLint** and **Prettier** for code linting and formatting  
- Added **TypeScript type checking** command (`npm run typecheck`)  
- Configured **GitHub Actions CI** workflow for automatic checks  
- Ensured CI pipeline runs:
  - `npm install`
  - `npm run lint`
  - `npm run typecheck`
  - `npm test`
- Organized project structure into `W01-S01`, `W01-S02`, and `W01-S03` modules

## 🧪 Goal (Definition of Done)

✅ All checks pass in GitHub Actions  
✅ Project lints cleanly with ESLint and Prettier  
✅ TypeScript compiles with no errors  
✅ Tests pass using Vitest  

## 📂 File Overview

| File / Folder | Purpose |
|----------------|----------|
| `.eslintrc.json` / `eslint.config.js` | ESLint configuration files |
| `.prettierrc` | Prettier formatting rules |
| `ci.yml` | GitHub Actions CI pipeline |
| `package.json` | Includes scripts: `lint`, `format`, `typecheck`, and `test` |



--------------------------------------------------------------------------

🧠 Created with ❤️ by **Majid Mansouri**  

### Connect with Me

Thank you for exploring this project! I'm committed to continuous learning and open to collaboration.

| Resource | Link |
| :--- | :--- |
| 🌐 **Portfolio** | [majidproject.github.io/web-portfolio/](https://majidproject.github.io/web-portfolio/) |
| 🔗 **LinkedIn**  | [linkedin.com/in/majid-mansouri-a8163866](https://www.linkedin.com/in/majid-mansouri-a8163866) |
| 📧 **Email**     | [mm.project.8902@gmail.com](mailto:mm.project.8902@gmail.com) |

*This repository is a result of my dedicated Full-Stack learning journey.*

--------------------------------------------------------------------------

> “Learning never stops — each commit is one step closer to mastery.”