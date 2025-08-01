import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import chatOpenAI from "../lib/chat-bot-lib-AI";
describe("chatOpenAI()", () => {
    const fetchMock = vi.spyOn(globalThis, "fetch");
    beforeEach(() => {
        fetchMock.mockReset();
        process.env.OPENAI_API_KEY = "test-api-key";
    });
    afterEach(() => {
        fetchMock.mockClear();
    });
    it("returns reply from OpenAI response", async () => {
        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                choices: [
                    {
                        message: {
                            content: "Hello from AI",
                        },
                    },
                ],
            }),
        });
        const res = await chatOpenAI("Hello?");
        expect(res).toEqual({ reply: "Hello from AI" });
    });
    it("returns error if API key is missing", async () => {
        delete process.env.OPENAI_API_KEY;
        const res = await chatOpenAI("Hello?");
        expect(res).toEqual({ message: "OpenAI API key is missing" });
    });
    it("returns internal error on fetch failure", async () => {
        fetchMock.mockRejectedValueOnce(new Error("Network error"));
        const res = await chatOpenAI("Hi");
        expect(res).toEqual({ message: "Erro interno ao conectar à OpenAI." });
    });
    it("returns error text when response is not ok", async () => {
        fetchMock.mockResolvedValueOnce({
            ok: false,
            text: async () => "Invalid request",
        });
        const res = await chatOpenAI("Hello?");
        expect(res).toEqual({ message: "Erro da OpenAI: Invalid request" });
    });
});
//# sourceMappingURL=chat-bot-lib-AI.test.js.map