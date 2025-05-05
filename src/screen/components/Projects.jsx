import { useState, useEffect, useRef } from "react"
import { useInView } from "../../hooks/useInView"
import { ExternalLink, Folder, Github } from "lucide-react"

const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { threshold: 0.1 })
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isInView && !isMounted) {
            setIsMounted(true)
        }
    }, [isInView, isMounted])

    const featuredProjects = [
        {
            title: "JTB Website",
            description:
                "A comprehensive website developed for a state government, featuring modern design and user-friendly interface.",
            tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
            link: "https://jtb-website.vercel.app/",
            github: "#",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "CAC Chapel LAUTECH",
            description: "A church website with features for sermons, events, and community engagement.",
            tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
            link: "https://cac-chapel-lautech.vercel.app/",
            github: "#",
            image: "/placeholder.svg?height=400&width=600",
        },
    ]

    const otherProjects = [
        {
            title: "HonourWorld",
            description: "A client project at Cephas ICT Hub offering VTU services with 10k+ downloads.",
            tech: ["React Native", "Firebase", "Redux"],
            link: "https://play.google.com/store/apps/details?id=com.ng.honourworld&pcampaignid=web_share",
            github: "#",
        },
        {
            title: "Africart",
            description: "E-commerce app for seamless product access.",
            tech: ["React Native", "Redux", "Node.js"],
            link: "https://play.google.com/store/apps/details?id=com.africartzng.com&pcampaignid=web_share",
            github: "#",
        },
        {
            title: "Screen Class",
            description: "Educational app for quizzes and classroom learning with 5k+ downloads.",
            tech: ["React Native", "Firebase", "Redux"],
            link: "https://play.google.com/store/apps/details?id=com.screenclass&pcampaignid=web_share",
            github: "#",
        },
        {
            title: "Suru",
            description: "Food ordering app with seamless user experience.",
            tech: ["React Native", "Redux", "Node.js"],
            link: "https://play.google.com/store/apps/details?id=com.compellersdigitals.suruts&pcampaignid=web_share",
            github: "#",
        },
        {
            title: "LauHub",
            description: "University app for academic resources and features.",
            tech: ["React Native", "Firebase", "Redux"],
            link: "https://play.google.com/store/apps/details?id=com.lauhub&pcampaignid=web_share",
            github: "#",
        },
        {
            title: "Skill Remit",
            description: "Freelancer-focused app for Ghana and Nigeria.",
            tech: ["React Native", "Redux", "Node.js"],
            link: "#",
            github: "#",
        },
    ]

    return (
        <section id="projects" className="section" ref={ref}>
            <h2
                className={`numbered-heading text-2xl mb-10 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
            >
                <span className="text-green font-mono mr-2">03.</span> Some Things I've Built
            </h2>

            <div className="space-y-24">
                {featuredProjects.map((project, i) => (
                    <div
                        key={i}
                        className={`relative grid md:grid-cols-12 gap-4 items-center transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                        style={{ transitionDelay: isMounted ? `${i * 200}ms` : "0ms" }}
                    >
                        <div
                            className={`md:col-span-7 relative rounded overflow-hidden ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                                <div className="absolute inset-0 bg-green/30 hover:bg-transparent transition-colors duration-300 z-10"></div>
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </a>
                        </div>

                        <div className={`md:col-span-5 ${i % 2 === 0 ? "md:order-2 md:text-right" : "md:order-1"}`}>
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
                            <ul className={`flex flex-wrap gap-3 text-xs font-mono mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                                {project.tech.map((tech, j) => (
                                    <li key={j}>{tech}</li>
                                ))}
                            </ul>
                            <div className={`flex gap-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lightest-slate hover:text-green transition-colors duration-200"
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
                className={`text-center text-lightest-slate text-2xl font-semibold mt-24 mb-10 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isMounted ? "400ms" : "0ms" }}
            >
                Other Noteworthy Projects
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project, i) => (
                    <div
                        key={i}
                        className={`project-card flex flex-col h-full transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                        style={{ transitionDelay: isMounted ? `${i * 100 + 500}ms` : "0ms" }}
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
        </section>
    )
}

export default Projects
