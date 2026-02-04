export default function ArchivePage(): JSX.Element {
  return null;
}

/*
  const allProjects: ArchiveProject[] = [
    {
      year: "2025",
      title: "StudyPadi",
      madeAt: "Personal",
      builtWith: ["React", "Shadcn", "Tailwind CSS", "Vercel"],
      link: "https://www.studypady.com.ng/",
      linkText: "studypady.com.ng",
    },
    {
      year: "2025",
      title: "Ennovate Lab Projects",
      madeAt: "Ennovate Lab",
      builtWith: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      link: "https://www.ennovatelab.com/",
      linkText: "ennovatelab.com",
    },
    {
      year: "2025",
      title: "JTB Website",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React", "Supabase", "Tailwind CSS", "Vercel"],
      link: "#",
      linkText: "",
    },
    {
      year: "2025",
      title: "CAC Chapel LAUTECH Website",
      madeAt: "Personal",
      builtWith: ["React", "Tailwind CSS", "Vercel"],
      link: "#",
      linkText: "",
    },
    {
      year: "2024",
      title: "HonourWorld",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "TanStack", "Redux", "API Integration"],
      link: "#",
      linkText: "",
    },
    {
      year: "2024",
      title: "VickyBest Telecom",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "TanStack", "Redux", "API Integration"],
      link: "#",
      linkText: "",
    },
    {
      year: "2024",
      title: "Versecog Farm Mobile App",
      madeAt: "Freelance",
      builtWith: ["React Native", "JavaScript", "Mobile Development"],
      link: null,
      linkText: "",
    },
    {
      year: "2024",
      title: "Compellers Digital Mobile App",
      madeAt: "Freelance",
      builtWith: ["React Native", "JavaScript", "Firebase"],
      link: "https://www.instagram.com/compellers_digitals/",
      linkText: "Instagram",
    },
    {
      year: "2024",
      title: "Skill Remit",
      madeAt: "Cephas ICT Hub",
      builtWith: ["React Native", "Redux", "Node.js"],
      link: "#",
      linkText: "",
    },

    {
      year: "2022",
      title: "Mobile App Development Projects",
      madeAt: "Cephas Digital Technology",
      builtWith: ["React Native", "Node.js", "Express", "MongoDB"],
      link: "https://www.cephasict.com/",
      linkText: "cephasict.com",
    },
  ];

  return (
    <div className="relative min-h-screen bg-navy antialiased selection:bg-teal/30 selection:text-teal">
      {/* Mouse follower gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <main className="pt-24 lg:py-24">
          {/* Back Link */}
          <Link
            to="/"
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal"
          >
            <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
            Jewoola Favour
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-slate-lightest sm:text-5xl">
            All Projects
          </h1>

          {/* Table */}
          <table className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate/30 bg-navy/75 px-6 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-lightest">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-lightest">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-lightest lg:table-cell">
                  Made at
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-lightest lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 text-sm font-semibold text-slate-lightest sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project, index) => (
                <tr
                  key={index}
                  className="border-b border-slate/10 last:border-none"
                >
                  <td className="py-4 pr-8 align-top text-sm text-slate">
                    {project.year}
                  </td>
                  <td className="py-4 pr-8 align-top font-semibold leading-snug text-slate-lightest">
                    <div className="block sm:hidden">
                      {project.link && project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:text-teal focus-visible:text-teal"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight className="ml-1 h-4 w-4 shrink-0" />
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </div>
                    <div className="hidden sm:block">
                      <span>{project.title}</span>
                    </div>
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate lg:table-cell">
                    {project.madeAt}
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex -translate-y-1.5 flex-wrap">
                      {project.builtWith.map((tech) => (
                        <li key={tech} className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    {project.link &&
                      project.link !== "#" &&
                      project.linkText && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-slate hover:text-teal focus-visible:text-teal"
                        >
                          <span>{project.linkText}</span>
                          <ArrowUpRight className="ml-1 h-4 w-4 shrink-0" />
                        </a>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
