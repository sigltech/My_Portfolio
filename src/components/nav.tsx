import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/experience", label: "Experience" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <NavLink to="/" className="group flex items-center gap-2">
          <span className="hidden sm:inline text-sm font-mono text-muted-foreground group-hover:text-accent transition-colors">
            /richard-sigl
          </span>
        </NavLink>

        <nav className="flex items-center gap-1 md:gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:text-foreground",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground"
                )
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
          <div className="ml-2 pl-2 border-l border-border/60">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
