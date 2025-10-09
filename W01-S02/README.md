# Week 01 - Session 02  
## TypeScript Basics: Array Utilities, Linting & Testing

### 🎯 Goal
In this session, we focused on **developing and testing reusable array utilities** (`map`, `filter`, and `reduce`) using **TypeScript**.  
You also learned how to set up **ESLint**, **Prettier**, and **Vitest** for a clean and maintainable TypeScript workflow.

---

### 📂 Project Structure
```
W01-S02/
│
├── src/
│   ├── myArrayUtils.ts          # Custom implementations of map, filter, reduce
│   └── tests/
│       └── myArrayUtils.test.ts # Unit tests using Vitest
│
├── tsconfig.json                # TypeScript compiler configuration
├── package.json                 # Dependencies and scripts
├── package-lock.json
└── README.md                    # This documentation file
```

---

### ⚙️ Setup & Installation

1. Navigate to this folder:
   ```bash
   cd W01-S02
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Format code and check for style errors:
   ```bash
   npm run format
   npm run lint
   ```

4. Run type checking:
   ```bash
   npm run typecheck
   ```

5. Run tests:
   ```bash
   npx vitest run
   ```
   or for watch mode:
   ```bash
   npx vitest
   ```

---

### 🧩 Concepts Covered
- TypeScript generics in function signatures
- Implementing `map`, `filter`, and `reduce` manually
- Writing and structuring test cases with Vitest
- Using ESLint and Prettier for code quality
- Type-checking automation via `tsc --noEmit`

---

### ✅ Definition of Done (DoD)
- All ESLint and Prettier checks pass  
- `npm run typecheck` completes with no errors  
- All tests pass (`npm test` or `npx vitest run`)  
- README updated with examples and explanations

---

### 🧠 Notes
This session emphasized **functional programming patterns** and **clean code** practices in TypeScript.  
The utilities you built here will be reused and extended in later sessions.


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