"use client";

import { Send } from "lucide-react";
import { ChangeEvent, DetailedHTMLProps, FormHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface PromptFormProps
  extends Pick<
    DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
    "onSubmit" | "action"
  > {
  className?: string | undefined;
  input?: string;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

export function PromptForm({
  className,
  input,
  onInputChange,
  onSubmit,
  isLoading,
}: PromptFormProps) {
  return (
    <form
      className={cn("flex items-center mt-4 mb-px", className)}
      onSubmit={onSubmit}
    >
      <Input
        type="text"
        name="message"
        placeholder="Type your message..."
        value={input}
        onChange={onInputChange}
        className="flex-grow rounded-lg"
        disabled={isLoading}
      />
      <Button type="submit" className="ml-2 rounded-lg" disabled={isLoading}>
        <Send className="h-4 w-4" />
        <span className="sr-only">Send message</span>
      </Button>
    </form>
  );
}
