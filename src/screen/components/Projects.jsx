import { useState, useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { ExternalLink, Folder, Github, X, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [isMounted, setIsMounted] = useState(false);
  const [showPrivateRepoModal, setShowPrivateRepoModal] = useState(false);

  useEffect(() => {
    if (isInView && !isMounted) {
      setIsMounted(true);
    }
  }, [isInView, isMounted]);

  const featuredProjects = [
    {
      title: "StudyPadi Website",
      description:
        "An educational platform that provides students with free CBT practice, past questions, and performance tracking tools.",
      tech: ["React", "Shadcn", "Tailwind CSS", "Vercel"],
      link: "https://studypady.com.ng",
      github: "#",
      image: "/slide1.jpeg",
    },
    {
      title: "JTB Website",
      description:
        "A comprehensive website developed for a state government, featuring modern design and user-friendly interface.",
      tech: ["React", "Supabase", "Tailwind CSS", "Vercel"],
      link: "https://jtb-website.vercel.app/",
      github: "https://github.com/JEWOOLAFAVOUR/JTB-Website.git",
      image: "/slide2.jpeg",
    },
  ];

  const otherProjects = [
    {
      title: "HonourWorld",
      description:
        "A client project at Cephas ICT Hub offering VTU services with 10k+ downloads.",
      tech: ["React Native", "Tanstack", "Redux", "API-Integration"],
      link: "https://play.google.com/store/apps/details?id=com.ng.honourworld&pcampaignid=web_share",
      github: "#",
    },
    {
      title: "VickyBest Telecom",
      description:
        "A client project at Cephas ICT Hub offering VTU services with 1k+ downloads.",
      tech: ["React Native", "Tanstack", "Redux", "API-Integration"],
      link: "https://play.google.com/store/apps/details?id=com.vickybest&pcampaignid=web_share",
      github: "#",
    },
    {
      title: "CAC Chapel LAUTECH",
      description:
        "A church website with features for sermons, events, and community engagement.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      link: "https://cac-chapel-lautech.vercel.app/",
      github: "#",
    },
    {
      title: "Skill Remit",
      description: "Freelancer-focused mobile app for Ghana and Nigeria.",
      tech: ["React Native", "Redux", "Node.js"],
      link: "https://play.google.com/store/apps/details?id=com.skillremitartisan&pcampaignid=web_share",
      github: "#",
    },
    {
      title: "Virtual R",
      description: "A quick landing page with React.",
      tech: ["React Native", "Firebase", "Redux"],
      link: "https://virtual-r-six-taupe.vercel.app/",
      github: "https://github.com/JEWOOLAFAVOUR/VirtualR-React-Project.git",
    },
  ];

  const handleGithubClick = (e, githubUrl) => {
    if (githubUrl === "#") {
      e.preventDefault();
      setShowPrivateRepoModal(true);
    }
  };

  return (
    <section id="projects" className="section" ref={ref}>
      {/* Private Repository Modal */}
      {showPrivateRepoModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-navy/80 backdrop-blur-sm">
          <div className="bg-light-navy p-8 rounded-lg shadow-xl max-w-md w-full relative border border-green/20">
            <button
              onClick={() => setShowPrivateRepoModal(false)}
              className="absolute top-4 right-4 text-light-slate hover:text-green"
            >
              <X size={20} />
            </button>
            <div className="flex flex-col items-center text-center">
              <Github className="text-green mb-4" size={48} />
              <h3 className="text-lightest-slate text-xl font-semibold mb-2">
                Private Repository
              </h3>
              <p className="text-slate mb-6">
                This project's source code is in a private repository due to
                client confidentiality or proprietary code.
              </p>
              <div className="w-full h-px bg-lightest-navy mb-6"></div>
              <p className="text-light-slate text-sm">
                Feel free to check out my public repositories on{" "}
                <a
                  href="https://github.com/JEWOOLAFAVOUR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green hover:underline"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      <h2
        className={`numbered-heading text-2xl mb-10 transition-all duration-500 ${
          isMounted ? "opacity-100" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-green font-mono mr-2">03.</span> Some Things I've
        Built
      </h2>

      <div className="space-y-24">
        {featuredProjects.map((project, i) => (
          <div
            key={i}
            className={`relative grid md:grid-cols-12 gap-4 items-center transition-all duration-500 ${
              isMounted ? "opacity-100" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMounted ? `${i * 200}ms` : "0ms" }}
          >
            <div
              className={`md:col-span-7 relative rounded overflow-hidden ${
                i % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="absolute inset-0 bg-green/30 hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </div>

            <div
              className={`md:col-span-5 ${
                i % 2 === 0 ? "md:order-2 md:text-right" : "md:order-1"
              }`}
            >
              <p className="font-mono text-green mb-1">Featured Project</p>
              <h3 className="text-lightest-slate text-2xl font-semibold mb-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green transition-colors duration-200"
                >
                  {project.title}
                </a>
              </h3>
              <div className="bg-light-navy p-6 rounded-md shadow-xl mb-4">
                <p className="text-slate">{project.description}</p>
              </div>
              <ul
                className={`flex flex-wrap gap-3 text-xs font-mono mb-4 ${
                  i % 2 === 0 ? "md:justify-end" : ""
                }`}
              >
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>
              <div
                className={`flex gap-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightest-slate hover:text-green transition-colors duration-200"
                  onClick={(e) => handleGithubClick(e, project.github)}
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightest-slate hover:text-green transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3
        className={`text-center text-lightest-slate text-2xl font-semibold mt-24 mb-10 transition-all duration-500 ${
          isMounted ? "opacity-100" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: isMounted ? "400ms" : "0ms" }}
      >
        Other Noteworthy Projects
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, i) => (
          <div
            key={i}
            className={`cursor-pointer project-card flex flex-col h-full transition-all duration-500 ${
              isMounted ? "opacity-100" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMounted ? `${i * 100 + 500}ms` : "0ms",
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <Folder className="text-green" size={40} />
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightest-slate hover:text-green transition-colors duration-200"
                    onClick={(e) => handleGithubClick(e, project.github)}
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightest-slate hover:text-green transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lightest-slate text-xl font-semibold mb-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green transition-colors duration-200"
              >
                {project.title}
              </a>
            </h3>

            <p className="text-slate mb-6 flex-grow">{project.description}</p>

            <ul className="flex flex-wrap gap-3 text-xs font-mono mt-auto">
              {project.tech.map((tech, j) => (
                <li key={j}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Challenge Section */}
      <div
        className={`mt-16 text-center transition-all duration-500 ${
          isMounted ? "opacity-100" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: isMounted ? "800ms" : "0ms" }}
      >
        <div className="bg-light-navy p-8 rounded-lg shadow-xl border border-lightest-navy/30">
          <Code2 className="text-green mx-auto mb-4" size={48} />
          <h3 className="text-lightest-slate text-2xl font-semibold mb-4">
            Ready for a Challenge?
          </h3>
          <p className="text-slate mb-6 max-w-2xl mx-auto">
            Take your coding skills to the next level with hands-on development
            challenges. Build real projects and level up your expertise.
          </p>
          <Link
            to="/challenge"
            className="button inline-flex items-center gap-2"
          >
            <Code2 size={18} />
            View Challenges
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
