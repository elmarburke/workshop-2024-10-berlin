import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ path: ["./.env.local", "./.env"] });

const result = await generateText({
  model: openai("gpt-4o-mini"),
  prompt: "Wie ist das Wetter in Oer-Erkenschwick?",
  toolChoice: "",
  tools: {
    getWeather: {
      description: "Get the current weather for an IATA airport code",
      parameters: z.object({
        iataCode: z
          .string()
          .min(3)
          .max(3)
          .describe("The IATA airport code to get the weather for"),
      }),
      execute: ({ iataCode }) => {
        switch (iataCode) {
          case "AMS":
            return { temperature: 15 };
          case "BER":
            return { temperature: 15 };
          case "ZOJ":
            return { temperature: 20 };
          case "DUS":
            return { temperature: 25 };
          default:
            return "not found";
        }
      },
    },
  },
  maxSteps: 5,
});

console.log(result.text);
