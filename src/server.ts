import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors())
  .post(
    "/chat",
    async ({ body }) => {
      const { message } = body;

      const openaiRes = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "Você é um assistente de chat educado e útil.",
              },
              { role: "user", content: message },
            ],
            temperature: 0.7,
            max_tokens: 100,
          }),
        }
      );

      const data = await openaiRes.json();
      const reply =
        data.choices?.[0]?.message?.content || "Não consegui responder.";

      return { reply };
    },
    {
      body: t.Object({
        message: t.String(),
      }),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
