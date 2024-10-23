"use server";

import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import "next/navigation";
import { ReactNode } from "react";
import { weatherTool } from "@/ai/tools";

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
