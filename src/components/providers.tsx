import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { AI } from "@/ai/ai";
import { ThemeProvider } from "./theme-provider";

export async function Providers({ children }: { children: ReactNode }) {
  return (
    <AI>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </AI>
  );
}
