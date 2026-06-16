import type { ResumeEntry } from "@/types";

export const resume: ResumeEntry[] = [
  {
    id: 1,
    company: "Unity Technologies",
    location: "Edinburgh",
    role: "Software Engineer",
    roleDetails: "Backend Engineer III",
    startDate: "January 2023 — Present",
    summary:
      "Joined Unity Analytics through an acquisition working on Kotlin and Java APIs and ETLs — shipped the SQL data explorer UI, data explorer v2, and migrated the push notifications and game overrides dashboards to a new internal component library. Now on the game backend team, where I helped build the first iteration of a local debugger for Unity's Cloud Code C# product, an internal API for cloud-based runtime data config, and am leading the push notifications service redesign from Kotlin to Golang for high-throughput stability.",
    description: [
      "Contributed an asynchronous token mechanism inside a shared Go library that other internal services depend on — changing shared code that other teams import is a different kind of nervous than changing your own service.",
      "Build Go services and the small CLIs that manage them, using Cobra for the CLI surface and the standard http library — integrations with Google Cloud, APNs, FCM, PostgreSQL and Redis.",
      "Ship Kotlin APIs from spec to production. Sole maintainer of a legacy system that I'm actively migrating to Golang.",
      "Led a redesign of how external studios control feature access across their organisation — four teams' mental models converging on one shared access model.",
      "Infrastructure via Dockerfiles, Helm charts and Terraform.",
      "Maintain Gradle, Maven and npm build configs across the team's repos, and contribute to the CI that releases them.",
    ],
  },
  {
    id: 2,
    company: "Geoconsult Asia Singapore",
    location: "Singapore — Remote",
    role: "Software Engineer",
    roleDetails: "Consultant",
    startDate: "April 2024 — Present",
    summary:
      "Replacing a legacy system with a new on-premises HR platform — no long-term subscription to a managed cloud solution. Scope covers database redesign, API layer, dashboard, and the deployment pipelines that keep maintenance overhead low.",
    description: [
      "Designed a new PostgreSQL schema from scratch with a custom migration ETL to move the legacy database over — preserving both historic and live data, made harder by loose conformity of the legacy MySQL types.",
      "Kotlin REST APIs for the resource and business logic layer — restful paths implementing difficult filtering, email systems and async handling.",
      "Built the dashboard in React and Next.js with shadcn/ui and Phosphor Icons.",
      "Remote work across a six-hour time difference, against on-prem deployment constraints.",
    ],
  },
  {
    id: 3,
    company: "Futureproof",
    location: "Edinburgh",
    role: "Trainee Software Engineer",
    roleDetails: null,
    startDate: "May 2022 — August 2022",
    summary: "A full-stack traineeship across the entire engineering lifecycle.",
    description: [
      "JavaScript, Python, HTML, CSS, SQL and NoSQL databases, plus common unit testing patterns.",
      "Full-stack projects at the end of each phase to demonstrate learning and understanding.",
      "CRUD application development with the ability to structure larger projects effectively.",
    ],
  },
  {
    id: 4,
    company: "TTT Moneycorp",
    location: "Edinburgh",
    role: "Corporate Foreign Exchange",
    roleDetails: "Sales Executive",
    startDate: "July 2019 — August 2020",
    summary:
      "Part of the opening team in Moneycorp's new Edinburgh office, targeting Scottish SMEs with FX exposure.",
    description: [
      "B2B pipeline talking to CFOs, finance managers, and owners of small and mid-sized businesses.",
      "Learned what FCA-regulated workflows actually feel like from inside a team — recommended to anyone planning to write software for financial services later.",
    ],
  },
];
