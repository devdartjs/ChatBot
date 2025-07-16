# A Ready to Integrate AI Chatbot Project as an Available Template

A full-stack project as a template built to integrate a customizable chatbot powered by both predefined responses and OpenAI's GPT models. Built with modern technologies like **React**, **Tailwind CSS**, **Vite**, **Bun**, **Elysia.js**, and **TypeScript**.

> Ideal for developers looking to build or extend chat interfaces with AI capabilities.

---

## 📚 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Customization](#customization)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Features

- 🔌 Predefined responses with smart keyword matching
- 🧠 OpenAI GPT integration (via `gpt-3.5-turbo`)
- 📦 Full-stack app: React + Tailwind frontend, Bun + Elysia backend
- 📄 API schema validation and auto-generated Swagger docs
- 🛠️ Easily extendable and customizable architecture
- 🧪 Ready for CI/CD and deployment

---

## 📺 Demo

<img src="preview.gif" alt="Chatbot Preview" width="600"/>

> Live demo coming soon (optional)

---

## ⚙️ Tech Stack

### Frontend

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

### Backend

- [Bun](https://bun.sh/)
- [Elysia.js](https://elysiajs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)

### AI Integration

- [OpenAI API](https://platform.openai.com/docs)

---

## 🛠️ Getting Started

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

### Frontend Setup

```bash
cd ../frontend
npm install
npm run dev

```

### 🔐 Environment Variables

OPENAI_API_KEY=your_openai_api_key

### 📘 API Documentation

http://localhost:3000/swagger

### Main Endpoints

POST /chat: Responds using predefined local rules.
POST /chatAI: Responds using OpenAI GPT model

### 🧩 Customization

You can define new hardcoded chatbot responses in:
/backend/lib/chatBotLib.ts
You can edit AI behavior in:
/backend/lib/chatBotLibAI.ts

### 🧩 🤝 Contributing

Contributions are welcome! Here's how you can help:
Fork the project
Create a new branch (git checkout -b feature/chat-logging)
Commit your changes (git commit -m 'Add logging feature')
Push to the branch (git push origin feature/chat-logging)

Open a Pull Request

### 📄 License

This project is licensed under the MIT License.
See the LICENSE file for details.

Feel free to fork, clone, and build your own chatbot experience!
