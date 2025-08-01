import { describe, it, expect } from "vitest";
import Chatbot from "../lib/chat-bot-lib";

describe("Chatbot.getResponse()", () => {
  it("responds to known input", () => {
    const res = Chatbot.getResponse("flip a coin");
    expect(res).toMatch(/heads|tails/i);
  });

  it("responds with fallback for unknown input", () => {
    const res = Chatbot.getResponse("blablabla");
    expect(res).toMatch(/didn't quite understand/i);
  });

  it("responds with message for empty input", () => {
    const res = Chatbot.getResponse("");
    expect(res).toMatch(/empty/i);
  });

  it("allows adding custom responses", () => {
    Chatbot.addResponses({ "who are you": "I am an AI bot" });
    const res = Chatbot.getResponse("who are you");
    expect(res).toBe("I am an AI bot");
  });
});
