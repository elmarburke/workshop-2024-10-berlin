import { createAI } from "ai/rsc";
import { ClientMessage, sendMessage, ServerMessage } from "./actions";

export type AIState = ServerMessage[];
export type UIState = ClientMessage[];
export type AIActions = {
  sendMessage: typeof sendMessage;
};

// Create the AI provider with the initial states and allowed actions
export const AI = createAI<AIState, UIState, AIActions>({
  initialAIState: [],
  initialUIState: [],
  actions: {
    sendMessage,
  },
});
