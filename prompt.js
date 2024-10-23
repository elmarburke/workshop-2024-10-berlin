import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import dotenv from "dotenv";

dotenv.config({ path: ["./.env.local", "./.env"] });

const result = await generateText({
  model: openai("gpt-4o-mini"),
});

console.log(result.text);
