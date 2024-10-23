"use server";

import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { getMutableAIState, streamUI } from "ai/rsc";
import "next/navigation";
import { ReactNode } from "react";
import { weatherTool } from "@/ai/tools";
import type { AI } from "./ai";

export type ServerMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ClientMessage = {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
};

export async function sendMessage(message: string) {
  const response = await generateText({
    system: "You are a trip planner assistant.",
    model: openai("gpt-4o-mini"),
    tools: {
      getWeather: weatherTool,
    },
    prompt: message,
  });

  return response.text;
}

export async function sendMessageWithPriorMessages(message: string) {
  const history = getMutableAIState<typeof AI>();

  history.update([...history.get(), { role: "user", content: message }]);

  const response = await generateText({
    system: "You are a trip planner assistant.",
    model: openai("gpt-4o-mini"),
    tools: {
      getWeather: weatherTool,
    },
    // We don't need prompt any more
    messages: history.get(),
  });

  history.done([
    ...history.get(),
    { role: "assistant", content: response.text },
  ]);

  return response;
}

export async function sendMessageStreamUI(message: string): Promise<ReactNode> {
  const history = getMutableAIState<typeof AI>();

  history.update([...history.get(), { role: "user", content: message }]);

  const result = await streamUI({
    system: "You are a trip planner assistant.",
    model: openai("gpt-4o-mini"),
    text: async ({ content }) => <div>{content}</div>,
    tools: {
      getWeather: weatherTool,
    },
    messages: history.get(),
  });

  console.log(result.rawResponse);

  // history.done([
  //   ...history.get(),
  //   { role: "assistant", content: result.rawResponse },
  // ]);

  return result.value;
}
