# TypeScript Boilerplate

A minimal, modern TypeScript boilerplate with support for Jest, TDD workflow, and clean project structure — ready for backend services, CLI tools, or libraries!

---

## 🛠 Tech Stack

- **TypeScript** – Strongly typed JavaScript
- **ts-node** – Run `.ts` files directly
- **Jest** – Testing framework with watch mode
- **ts-jest** – TypeScript support for Jest
- **Nodemon** _(optional)_ – Auto-reload for development

---

## 📂 Project Structure

```
├── src/ # Application helper code
│ └── index.ts
├── tests/ # Unit tests (mirrors src/ structure)
│ └── index.spec.ts
├── jest.config.ts # Jest configuration
├── tsconfig.json # TypeScript configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### To Setup Repository!

1. Clone this repository: `git clone https://github.com/xlatios1/typescript-boilerplate.git`
2. Install dependencies: `npm ci`
3. Checkout new branch: `git checkout -b <name>`

### 🚀 Available Scripts

| Script                  | Description                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| `npm run dev`           | Runs the application once using `ts-node`.                                     |
| `npm run dev:watch`     | Watches for file changes in `src/` and restarts automatically using `nodemon`. |
| `npm run test`          | Runs all tests once using `jest`.                                              |
| `npm run test:watch`    | Runs tests in watch mode (ideal for TDD).                                      |
| `npm run test:coverage` | Generates a test coverage report using `jest --coverage`.                      |

Optionally, you may use the tasks by `shift+cmd+p` -> `Tasks: Run Task`

---

## 🧪 TDD Workflow (Recommended)

1. Start tests in watch mode:

```bash
npm run test:watch
```

2. Optionally run your app with auto-restart on changes:

```bash
npm run dev:watch
```

## ALL THE BEST!

## Contributors

- Yi Jun
