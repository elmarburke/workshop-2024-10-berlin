"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement, ReactElement, ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface NavItemProps {
  href: string;
  icon: ReactElement<{ className?: string }>;
  children: ReactNode;
  tooltipSide?: "top" | "right" | "bottom" | "left";
}

export function NavLink({
  href,
  icon,
  children: label,
  tooltipSide = "right",
}: NavItemProps) {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" asChild>
          <Link
            href={href}
            className={cn(
              pathname === href
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground",
            )}
          >
            {cloneElement(icon, {
              className: cn(
                "h-5 w-5 transition-all group-hover:scale-110",
                icon.props.className,
              ),
            })}
            <span className="sr-only">{label}</span>
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side={tooltipSide}>{label}</TooltipContent>
    </Tooltip>
  );
}
