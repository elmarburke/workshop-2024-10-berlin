import { Backpack, Bot } from "lucide-react";
import Link from "next/link";
import { NavLink } from "@/components/nav-item";
import { ModeToggle } from "./theme-toggle";

export async function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Backpack className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Travel Planner</span>
        </Link>
        <NavLink href="/chat" icon={<Bot />}>
          Chat
        </NavLink>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <ModeToggle />
      </nav>
    </aside>
  );
}
