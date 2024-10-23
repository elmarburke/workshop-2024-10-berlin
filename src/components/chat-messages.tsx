import Markdown from "react-markdown";
import { ClientMessage } from "@/ai/actions";

interface ChatMessagesProps {
  className?: string | undefined;
  messages: readonly ClientMessage[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div>
      {messages.map((message) => {
        switch (message.role) {
          case "assistant":
          case "user":
            return (
              <ChatMessage
                key={message.id}
                role={message.role}
                display={message.display}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export function ChatMessage({
  role,
  display,
}: {
  role: ClientMessage["role"];
  display: ClientMessage["display"];
}) {
  return (
    <div className={`mb-4 ${role === "user" ? "text-right" : "text-left"}`}>
      <span
        className={`inline-block p-2 rounded-lg ${
          role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
        }`}
      >
        {typeof display === "string" ? (
          // we can only markdownify strings
          <Markdown className="prose-sm">{display}</Markdown>
        ) : (
          display
        )}
      </span>
    </div>
  );
}
