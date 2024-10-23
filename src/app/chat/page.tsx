"use client";

import { PromptForm } from "@/components/prompt-form";
import { TripSuggestions } from "@/components/trip-suggestions";

export default function ChatGenerateUIPage() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-screen w-full bg-background text-foreground">
      <TripSuggestions onSuggestionClick={() => {}} />

      <PromptForm className="px-2" onSubmit={() => {}} isLoading={false} />
    </div>
  );
}
