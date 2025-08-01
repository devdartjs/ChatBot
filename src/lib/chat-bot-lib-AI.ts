type ChatRequest = {
  message: string;
};

type ChatResponse = { reply: string } | { message: string };

export const chatOpenAI = async (message: string): Promise<ChatResponse> => {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return { message: "OpenAI API key is missing" };
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
        max_tokens: 100,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      return { message: `Erro da OpenAI: ${errorText}` };
    }

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Não consegui gerar resposta.";

    return { reply };
  } catch (error) {
    return { message: "Erro interno ao conectar à OpenAI." };
  }
};

export default chatOpenAI;
