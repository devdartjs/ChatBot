import "bun:dotenv";
import { Elysia, t } from "elysia";
import swagger from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import Chatbot from "./lib/chat-bot-lib";
import chatOpenAI from "./lib/chat-bot-lib-AI";
const PORT = process.env.PORT || 5000;
Chatbot.addResponses({
    "what is your name": "I'm Chatbot!",
    "tell me a joke": () => "Why don't scientists trust atoms? Because they make up everything!",
});
const app = new Elysia()
    .use(cors())
    .use(swagger())
    .get("/", () => "Hello, That is build to integrate AI chatbot!")
    .post("/chat", async ({ body }) => {
    const { message } = body;
    if (!message || typeof message !== "string") {
        return { reply: "Please, send a valid message." };
    }
    const reply = Chatbot.getResponse(message);
    return { reply };
}, {
    body: t.Object({
        message: t.String(),
    }),
})
    .post("/chatAI", async ({ body, set }) => {
    const { message } = body;
    if (!message || typeof message !== "string") {
        set.status = 400;
        return { reply: "Please provide a valid message." };
    }
    return await chatOpenAI(message);
}, {
    body: t.Object({
        message: t.String(),
    }),
})
    .listen({
    port: PORT,
    hostname: "0.0.0.0",
});
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
//# sourceMappingURL=server.js.map