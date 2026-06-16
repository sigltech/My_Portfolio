import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/sigltech",
    Icon: GithubLogoIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/richard-sigl/",
    Icon: LinkedinLogoIcon,
  },
  {
    label: "Email",
    href: "mailto:siglrichardoskar@gmail.com",
    Icon: EnvelopeSimpleIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-mono text-sm text-muted-foreground">
          © Richard Sigl 2026
        </p>

        <div className="flex items-center gap-1">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="p-2 rounded-md text-muted-foreground hover:text-accent hover:bg-secondary/60 transition-colors"
            >
              <Icon size={20} weight="bold" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
