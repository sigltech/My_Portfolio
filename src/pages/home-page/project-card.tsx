import {
  ArrowUpRightIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const primary = project.live_demo || project.git_repo;

  return (
    <article className="group relative rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:border-accent/60 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1">
          {project.git_repo && (
            <a
              href={project.git_repo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
              className="p-1.5 rounded-md text-muted-foreground hover:text-accent hover:bg-secondary/60 transition-colors"
            >
              <GithubLogoIcon size={18} weight="bold" />
            </a>
          )}
          {project.live_demo && (
            <a
              href={project.live_demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} live demo`}
              className="p-1.5 rounded-md text-muted-foreground hover:text-accent hover:bg-secondary/60 transition-colors"
            >
              <ArrowUpRightIcon size={18} weight="bold" />
            </a>
          )}
        </div>
      </div>

      <a
        href={primary || "#"}
        target="_blank"
        rel="noreferrer noopener"
        className="block"
      >
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>
      </a>

      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="rounded-full font-mono text-xs"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
}
