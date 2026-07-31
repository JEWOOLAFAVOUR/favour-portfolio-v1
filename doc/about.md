# Favour Portfolio — About / Data Reference

This document contains all the data extracted from the portfolio components:

- `src/components/sections/About.tsx`
- `src/components/sections/Experience.tsx`
- `src/components/sections/Projects.tsx`
- `src/screen/ArchivePage.tsx`
- `src/App.tsx`

---

## 1. About Section Data

Source: `src/components/sections/About.tsx`

### Bio

> Hi! I'm Favour, a Full-Stack Software Developer who enjoys building meaningful digital experiences.

- **Current Company:** [Ennovate Lab](https://www.ennovatelab.com/)
- **Role Description:** Design and build end-to-end mobile and web applications, focusing on clean architecture, reliable backend systems, and smooth user experiences.
- **Creator of:** [Studypadi](https://www.studypady.com.ng/) (formerly LauHub) — a growing education software helping over 2000+ students access free CBTs and past questions.
- **Education:** Computer Science graduate from [LAUTECH](https://www.lautech.edu.ng/)
- **Other:** Mentoring junior devs, serving in student church, organizing resources as a Library Unit Member.

### Skills (Recent Technologies)

```ts
const skills: string[] = [
  "React Native",
  "React",
  "JavaScript",
  "TypeScript",
  "Redux/Redux Toolkit/Zustand",
  "TanStack",
  "Node.js",
  "Golang",
  "Firebase/Supabase",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Docker",
  "Linux",
  "AWS",
  "Azure",
  "DevOps",
  "Git",
  "Microservices",
  // "System Design",  (currently commented out)
];
```

---

## 2. Experience Section Data

Source: `src/components/sections/Experience.tsx`

### Experience 1 — Ennovate Lab

| Field           | Value                                                                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Duration**    | `OCT 2025 — PRESENT`                                                                                                                                                                                                                                                                                                         |
| **Title**       | Software Developer                                                                                                                                                                                                                                                                                                           |
| **Company**     | Ennovate Lab                                                                                                                                                                                                                                                                                                                 |
| **URL**         | https://www.ennovatelab.com/                                                                                                                                                                                                                                                                                                 |
| **Description** | Designing and developing scalable full-stack applications with a focus on clean architecture and robust performance. Implementing backend services and collaborating with cross-functional teams to deliver high-quality solutions. Practicing software engineering best practices and contributing to technical excellence. |
| **Skills**      | React Native, React, Tailwind, Node.js, TypeScript, PostgreSQL, Golang, Docker, Azure                                                                                                                                                                                                                                        |

### Experience 2 — Cephas Digital Technology

| Field           | Value                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Duration**    | `MAR 2022 — SEP 2025`                                                                                                                                                                                                                                                                                                                                                                                 |
| **Title**       | Software Developer                                                                                                                                                                                                                                                                                                                                                                                    |
| **Company**     | Cephas Digital Technology                                                                                                                                                                                                                                                                                                                                                                             |
| **URL**         | https://www.cephasict.com/                                                                                                                                                                                                                                                                                                                                                                            |
| **Description** | Spearheaded the design and maintenance of various mobile applications utilizing React Native. Conducted workshops and training sessions for professionals and students. Designed and implemented RESTful APIs and backend services using Node.js, Express, MongoDB. Collaborated with clients to understand their needs, contributing to the design and development of tailored Mobile App solutions. |
| **Skills**      | React Native, React, Node.js, Express, MongoDB, Cloud, REST APIs                                                                                                                                                                                                                                                                                                                                      |

### Experience 3 — Versecog Farm Enterprise (Freelance)

| Field           | Value                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Duration**    | `NOV 2024 — JAN 2025`                                                                                               |
| **Title**       | Freelance Mobile App Developer                                                                                      |
| **Company**     | Versecog Farm Enterprise                                                                                            |
| **URL**         | `null`                                                                                                              |
| **Description** | Built mobile applications as a freelance developer to support e-commerce operations and improve business processes. |
| **Skills**      | React Native, React, Typescript, Mobile Development                                                                 |

### Experience 4 — Compellers Digital (Freelance)

| Field           | Value                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Duration**    | `AUG 2024 — NOV 2024`                                                                                                                                                                                                |
| **Title**       | Freelance Mobile Developer                                                                                                                                                                                           |
| **Company**     | Compellers Digital                                                                                                                                                                                                   |
| **URL**         | https://www.instagram.com/compellers_digitals/                                                                                                                                                                       |
| **Description** | Developed mobile applications as a freelance developer, delivering user-friendly food ordering app solutions for clients. Collaborated with design teams to implement clean interfaces and optimize app performance. |
| **Skills**      | React Native, Typescript, Node.js                                                                                                                                                                                    |

---

## 3. Projects Section Data (Featured Projects)

Source: `src/components/sections/Projects.tsx`

### Project 1 — Oreno

| Field           | Value                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Title**       | Oreno                                                                                                                                                                                            |
| **Description** | Your daily standup companion. Track progress, manage tasks, and walk into every meeting prepared. Features real-time collaboration and smart auto-linking of completed tasks to standup reports. |
| **URL**         | https://oreno.vercel.app/                                                                                                                                                                        |
| **Image**       | `/oreno_screenshot.app.jpeg`                                                                                                                                                                     |
| **Skills**      | Next.js, Redis, Pusher, PostgreSQL, Prisma, Tailwind CSS, WebSocket, OAuth 2.0, Zustand                                                                                                          |
| **Stars**       | `null`                                                                                                                                                                                           |
| **Featured**    | `true`                                                                                                                                                                                           |
| **Platform**    | `web`                                                                                                                                                                                            |

### Project 2 — Irisi Fashion

| Field           | Value                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Title**       | Irisi Fashion                                                                                                                                      |
| **Description** | A modern fashion brand website showcasing the latest collections, trends, and style inspiration. Elegant design with seamless shopping experience. |
| **URL**         | https://irisi-fashion.vercel.app/                                                                                                                  |
| **Image**       | `/irisi_fashion_screenshot.png`                                                                                                                    |
| **Skills**      | Next.js, Tailwind CSS, Framer Motion, Zustand, Vercel                                                                                              |
| **Stars**       | `null`                                                                                                                                             |
| **Featured**    | `true`                                                                                                                                             |
| **Platform**    | `web`                                                                                                                                              |

### Project 3 — HonourWorld

| Field           | Value                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **Title**       | HonourWorld                                                                                     |
| **Description** | A client project at Cephas ICT Hub offering VTU services with 10k+ downloads on the Play Store. |
| **URL**         | https://play.google.com/store/apps/details?id=com.ng.honourworld                                |
| **Image**       | `/honour_world_screenshot.png`                                                                  |
| **Skills**      | React Native, TanStack, Redux, API Integration                                                  |
| **Stars**       | `null`                                                                                          |
| **Featured**    | `true`                                                                                          |
| **Platform**    | `mobile`                                                                                        |

### Project 4 — Skill Remit

| Field           | Value                                                               |
| --------------- | ------------------------------------------------------------------- |
| **Title**       | Skill Remit                                                         |
| **Description** | Freelancer-focused mobile app for Ghana and Nigeria markets.        |
| **URL**         | https://play.google.com/store/apps/details?id=com.skillremitartisan |
| **Image**       | `/skill_remit_screenshot.png`                                       |
| **Skills**      | React Native, Redux, Node.js                                        |
| **Stars**       | `null`                                                              |
| **Featured**    | `true`                                                              |
| **Platform**    | `mobile`                                                            |

### Project 5 — VickyBest Telecom

| Field           | Value                                                                        |
| --------------- | ---------------------------------------------------------------------------- |
| **Title**       | VickyBest Telecom                                                            |
| **Description** | A client project at Cephas ICT Hub offering VTU services with 1k+ downloads. |
| **URL**         | https://play.google.com/store/apps/details?id=com.vickybest                  |
| **Image**       | `/vicky_best_screenshot.png`                                                 |
| **Skills**      | React Native, TanStack, Redux, API Integration                               |
| **Stars**       | `null`                                                                       |
| **Featured**    | `true`                                                                       |
| **Platform**    | `mobile`                                                                     |

### Project 6 — StudyPady

| Field           | Value                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Title**       | StudyPady                                                                                                                                                                              |
| **Description** | An educational platform that provides students with free CBT practice, past questions, and performance tracking tools. Helping over 1000+ students access quality education resources. |
| **URL**         | https://www.studypady.com.ng/                                                                                                                                                          |
| **Image**       | `/studypady_screenshot.png`                                                                                                                                                            |
| **Skills**      | React, Shadcn, Tailwind CSS, Vercel                                                                                                                                                    |
| **Stars**       | `null`                                                                                                                                                                                 |
| **Featured**    | `true`                                                                                                                                                                                 |
| **Platform**    | `web`                                                                                                                                                                                  |

### Project 7 — JTB Website

| Field           | Value                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| **Title**       | JTB Website                                                                                                    |
| **Description** | A comprehensive website developed for a state government, featuring modern design and user-friendly interface. |
| **URL**         | https://jtb-website-01.gilgal.tech/                                                                            |
| **Image**       | `/jtb_screenshot.png`                                                                                          |
| **Skills**      | React, Supabase, Tailwind CSS, Vercel                                                                          |
| **Stars**       | `null`                                                                                                         |
| **Featured**    | `true`                                                                                                         |
| **Platform**    | `web`                                                                                                          |

### Commented-out Project — CAC Chapel LAUTECH (NOT displayed)

```ts
// {
//     title: "CAC Chapel LAUTECH",
//     description:
//         "A church website with features for sermons, events, and community engagement.",
//     url: "#",
//     skills: ["React", "Tailwind CSS", "Vercel"],
//     stars: null,
//     featured: false,
// },
```

---

## 4. Archive Page Data (All Projects)

Source: `src/screen/ArchivePage.tsx`

| Year | Title                           | Made At                   | Built With                                                                     | Link                                                                | Link Text                          | Platform |
| ---- | ------------------------------- | ------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ---------------------------------- | -------- |
| 2026 | Oreno                           | Personal                  | Next.js, Redis, Pusher, PostgreSQL, Prisma, Tailwind CSS, WebSocket, OAuth 2.0 | https://oreno.vercel.app/                                           | oreno.vercel.app                   | web      |
| 2026 | Loop Chat                       | Personal                  | React, Node.js, Socket.io, Express, MongoDB, JWT                               | https://github.com/JEWOOLAFAVOUR/Loop-Chat                          | github.com/JEWOOLAFAVOUR/Loop-Chat | web      |
| 2026 | Gilgal Tech                     | Personal                  | React, Node.js, Docker, Azure, PostgreSQL, CI/CD                               | http://gilgal.tech/                                                 | gilgal.tech                        | web      |
| 2026 | Irisi Fashion                   | Personal                  | React, Tailwind CSS, Vercel                                                    | https://irisi-fashion.vercel.app/                                   | irisi-fashion.vercel.app           | web      |
| 2026 | Iwadii Lab                      | Personal                  | React, Tailwind CSS, Vercel                                                    | https://iwadii-lab.vercel.app/                                      | iwadii-lab.vercel.app              | web      |
| 2025 | StudyPadi                       | Personal                  | React, Shadcn, Tailwind CSS, Vercel                                            | https://www.studypady.com.ng/                                       | studypady.com.ng                   | web      |
| 2025 | Ennovate Lab Projects           | Ennovate Lab              | React, Node.js, TypeScript, AWS, PostgreSQL                                    | https://www.ennovatelab.com/                                        | ennovatelab.com                    | web      |
| 2025 | JTB Website                     | Cephas ICT Hub            | React, Supabase, Tailwind CSS, Vercel                                          | https://jtb-website-01.gilgal.tech/                                 | jtb-website-01.gilgal.tech         | web      |
| 2025 | CAC Chapel LAUTECH Website      | Personal                  | React, Tailwind CSS, Vercel                                                    | `#`                                                                 | (empty)                            | web      |
| 2024 | HonourWorld                     | Cephas ICT Hub            | React Native, TanStack, Redux, API Integration                                 | https://play.google.com/store/apps/details?id=com.ng.honourworld    | play.google.com/store/apps         | mobile   |
| 2024 | VickyBest Telecom               | Cephas ICT Hub            | React Native, TanStack, Redux, API Integration                                 | https://play.google.com/store/apps/details?id=com.vickybest         | play.google.com/store/apps         | mobile   |
| 2024 | Versecog Farm Mobile App        | Freelance                 | React Native, JavaScript, Mobile Development                                   | `null`                                                              | (empty)                            | mobile   |
| 2024 | Compellers Digital Mobile App   | Freelance                 | React Native, JavaScript, Firebase                                             | https://www.instagram.com/compellers_digitals/                      | Instagram                          | mobile   |
| 2024 | Skill Remit                     | Cephas ICT Hub            | React Native, Redux, Node.js                                                   | https://play.google.com/store/apps/details?id=com.skillremitartisan | play.google.com/store/apps         | mobile   |
| 2022 | Mobile App Development Projects | Cephas Digital Technology | React Native, Node.js, Express, MongoDB                                        | https://www.cephasict.com/                                          | cephasict.com                      | mobile   |

---

## 5. App.tsx Data

Source: `src/App.tsx`

### Page Structure

- **Layout:** Left sidebar (sticky `Navigation`), right content (scrollable `main`) — `lg:w-1/2`
- **Sections rendered:** `<About />`, `<Experience />`, `<Projects />`
- **Footer:** Credit + copyright

### Footer Links

| Label                              | URL                                                  |
| ---------------------------------- | ---------------------------------------------------- |
| Designed & Built by Jewoola Favour | https://github.com/JEWOOLAFAVOUR/favour-portfolio-v1 |
| Inspired by Brittany Chiang        | https://brittanychiang.com/                          |

### Copyright

```
© 2026 Jewoola Favour. All Rights Reserved.
```

### Page Theme

- Background: `bg-navy`
- Text selection: `selection:bg-teal/30 selection:text-teal`
- Mouse follower gradient: `radial-gradient(600px at {x}px {y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
- Max width container: `max-w-screen-xl`

---

## 6. Type Definitions Reference

Source: `src/types/index.ts`

```ts
// Experience Types
export interface Experience {
  duration: string;
  title: string;
  company: string;
  url: string | null;
  description: string;
  skills: string[];
}

// Project Types
export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  skills: string[];
  stars: number | null;
  featured: boolean;
  platform: "web" | "mobile";
}

// Archive Project Types
export interface ArchiveProject {
  year: string;
  title: string;
  madeAt: string;
  builtWith: string[];
  link: string | null;
  linkText: string;
  platform: "web" | "mobile";
}

// Mouse Position Type
export interface MousePosition {
  x: number;
  y: number;
}
```
