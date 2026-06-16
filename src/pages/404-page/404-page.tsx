import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function Page404() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent mb-6">
          / Error 404
        </p>
        <h1 className="font-display text-7xl md:text-9xl font-bold leading-none">
          Not <span className="text-accent">here</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          The page you're looking for doesn't exist, or maybe it never did.
        </p>
        <Button asChild size="lg" className="rounded-full mt-8">
          <Link to="/">
            <ArrowLeftIcon size={18} weight="bold" />
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
}
