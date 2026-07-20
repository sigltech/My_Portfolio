import {
  ArrowRightIcon,
  GithubLogoIcon,
  SparkleIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Projects } from "@/data/Projects";
import { ProjectCard } from "./project-card";

const stack = [
  "GCP",
  "Golang",
  "JavaScript",
  "React",
  "Postgres",
  "Snowflake",
  "MongoDB",
  "Kubernetes",
  "Node.js",
  "Kotlin",
];

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Stack />
      <ContactCta />
    </>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-xs text-accent tracking-widest">
        / {index}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl p-6 md:px-10 pt-12 pb-20 md:pb-32 grain">
      <div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.95]">
            Hi, I'm <span className="text-accent">Richard</span>.
            <br />
            <span className="text-muted-foreground">
              I build software for the web.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Full-stack engineer with a soft spot for the frontend — currently
            working in <span className="text-foreground">Kotlin</span> and{" "}
            <span className="text-foreground">React</span> on customer reporting
            tools at Unity Gaming Services.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/experience">
                View experience
                <ArrowRightIcon size={18} weight="bold" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <a
                href="https://github.com/sigltech"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubLogoIcon size={18} weight="bold" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-12">
      <SectionLabel index="01" label="Selected Work" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-12">
      <SectionLabel index="02" label="Tools of the trade" />
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <Badge
            key={s}
            variant="secondary"
            className="rounded-full px-4 py-2 text-sm font-mono"
          >
            <SparkleIcon size={12} weight="fill" className="text-accent" />
            {s}
          </Badge>
        ))}
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="rounded-3xl border border-border bg-secondary/40 p-10 md:p-16 text-center grain">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Let's talk
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-2xl mx-auto leading-[1.05]">
          Got an idea worth building?
        </h2>
        <p className="mt-5 text-muted-foreground max-w-md mx-auto">
          I'm always open to interesting conversations — product, code,
          opportunities, or just a hello.
        </p>
        <Button asChild size="lg" className="rounded-full mt-8">
          <a href="mailto:siglrichardoskar@gmail.com">
            <EnvelopeSimpleIcon size={18} weight="bold" />
            Get in touch
          </a>
        </Button>
      </div>
    </section>
  );
}
