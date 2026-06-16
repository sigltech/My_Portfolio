import {
  BriefcaseIcon,
  GraduationCapIcon,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";
import { resume } from "@/data/resume";
import { education } from "@/data/education";

export function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:px-10 pb-20">
      <header className="mb-16 md:mb-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Experience
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
          A few stops along the way.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          The path from a business degree to writing software — finance, freelancing, bootcamp, and now Unity.
        </p>
      </header>

      <Section icon={BriefcaseIcon} index="01" title="Work">
        <Timeline>
          {resume.map((entry) => (
            <TimelineItem
              key={entry.id}
              date={entry.startDate}
              location={entry.location}
              title={entry.role}
              subtitle={entry.company}
              detail={entry.roleDetails}
              summary={entry.summary}
              points={entry.description}
            />
          ))}
        </Timeline>
      </Section>

      <Section icon={GraduationCapIcon} index="02" title="Education">
        <Timeline>
          {education.map((entry) => (
            <TimelineItem
              key={entry.id}
              date={entry.graduated}
              location={entry.course}
              title={entry.degreeLevel}
              subtitle={entry.institution}
            />
          ))}
        </Timeline>
      </Section>
    </div>
  );
}

function Section({
  icon: Icon,
  index,
  title,
  children,
}: {
  icon: PhosphorIcon;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Icon size={20} weight="bold" />
        </div>
        <span className="font-mono text-xs text-muted-foreground tracking-widest">
          / {index}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <ol className="relative border-l border-border pl-8 md:pl-10 space-y-12 ml-3">
      {children}
    </ol>
  );
}

function TimelineItem({
  date,
  location,
  title,
  subtitle,
  detail,
  summary,
  points,
}: {
  date: string;
  location?: string;
  title: string;
  subtitle: string;
  detail?: string | null;
  summary?: string;
  points?: string[];
}) {
  return (
    <li className="relative">
      <span className="absolute -left-[2.55rem] md:-left-[3.05rem] top-2 flex h-3.5 w-3.5 items-center justify-center">
        <span className="absolute h-3.5 w-3.5 rounded-full bg-accent/30" />
        <span className="relative h-2 w-2 rounded-full bg-accent" />
      </span>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {date}
        </p>
        {location && (
          <>
            <span className="text-muted-foreground/40 font-mono text-xs">
              ·
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {location}
            </p>
          </>
        )}
      </div>

      <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
        {title}
      </h3>
      <p className="mt-1 text-base text-foreground/80">
        <span className="text-accent">{subtitle}</span>
        {detail && (
          <span className="text-muted-foreground"> · {detail}</span>
        )}
      </p>

      {summary && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{summary}</p>
      )}

      {points && points.length > 0 && (
        <ul className="mt-4 space-y-2 text-muted-foreground">
          {points.map((p, i) => (
            <li key={i} className="flex gap-3 leading-relaxed">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
