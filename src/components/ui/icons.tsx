import { Shell } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconSpinner({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return <Shell className={cn("animate-spin", className)} {...props} />;
}
