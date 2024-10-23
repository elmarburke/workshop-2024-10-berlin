import {
  useActions as useActionsCore,
  useUIState as useUIStateCore,
  useAIState as useAIStateCore,
} from "ai/rsc";
import type { AI } from "./ai";

export const useActions = useActionsCore<typeof AI>;

export const useUIState = useUIStateCore<typeof AI>;

export const useAIState = useAIStateCore<typeof AI>;
