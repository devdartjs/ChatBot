# 🟢 A Ready to Integrate AI Chatbot Project as an Available Template

A ready-to-use backend project as a template for an AI chatbot featuring predefined responses and OpenAI GPT integration. Built with **Bun**, **Elysia.js**, **TypeScript**, **Vitest**, **Swagger**, and containerized with **Docker**. Designed for developers who want a modern, extensible, and testable backend API for AI chatbots. **All SDLC reports** steps are available in this project.

> Ideal for developers looking to build or extend chat interfaces with AI capabilities.

---

## 🔵 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Customization](#customization)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🟠 Features

- 🔌 Predefined responses with smart keyword matching
- 🧠 OpenAI GPT integration (via `gpt-3.5-turbo`)
- 📦 Full-stack app: React + Tailwind frontend, Bun + Elysia backend with tests and docker
- 📄 API schema validation and auto-generated Swagger docs
- 🛠️ Easily extendable and customizable architecture
- 🧪 Ready for CI/CD and deployment

---

## 🟡 Tech Stack

### Backend

- [Bun](https://bun.sh/)
- [Elysia.js](https://elysiajs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)
- [Vitest](https://vitest.dev/)
- [Docker](https://www.docker.com/)

### AI Integration

- [OpenAI API](https://platform.openai.com/docs)

---

## 🟣 Getting Started

### Backend Setup

```bash
git clone https://github.com/your-username/ai-chatbot-template.git
cd ai-chatbot-template/backend
bun install
```

### Start the backend server (It will be running at http://localhost:3000)

```bash
bun run start
```

### ⚪ API Documentation

http://localhost:3050/swagger

### Main Endpoints

POST /chat: Responds using predefined local rules.
POST /chatAI: Responds using OpenAI GPT model

### 🟠 Customization

You can define new hardcoded chatbot responses in:
/backend/lib/chatBotLib.ts
You can edit AI behavior in:
/backend/lib/chatBotLibAI.ts
