import { useState, useEffect, useRef } from "react"
import { useInView } from "../../hooks/useInView"

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { threshold: 0.25 })
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isInView && !isMounted) {
            setIsMounted(true)
        }
    }, [isInView, isMounted])

    const skills = [
        "React Native",
        "React",
        "JavaScript",
        "TypeScript",
        "Redux/Redux Toolkit",
        "Nodejs",
        "TanStack",
        "Firebase/Supabase",
        "MongoDB",
        "REST APIs",
        "Git",
        "System Design",
        "DevOps",
        "Kotlin"
    ]

    return (
        <section id="about" className="section" ref={ref}>
            <h2
                className={`numbered-heading text-2xl mb-10 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
            >
                <span className="text-green font-mono mr-2">01.</span> About Me
            </h2>

            <div
                className={`grid md:grid-cols-3 gap-12 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isMounted ? "200ms" : "0ms" }}
            >
                <div className="md:col-span-2 text-slate">
                    <p className="mb-4">
                        Hi! I’m Favour, a Software Developer who enjoys building meaningful digital experiences. I currently intern at{" "}
                        <strong
                            className="green"
                            onClick={() => window.open("https://www.cephasict.com", "_blank")}
                            style={{ cursor: "pointer" }}
                        >
                            Cephas ICT Hub
                        </strong>, where I build mobile and web apps that are fast, clean, and user-friendly.
                    </p>

                    <p className="mb-4">
                        I’m also the creator of <strong>Studypadi</strong> (formerly LauHub), a growing education software helping over 1000+ students access free CBTs and past questions.
                    </p>
                    <p className="mb-4">
                        Outside of code, I love mentoring junior devs and I'm a 500-level Computer Science student at LAUTECH. You’ll also find me serving in my student church, organizing resources as a Library Unit Member.
                    </p>

                    <p className="mt-4">Here are a few technologies I've been working with recently:</p>
                    <ul className="grid grid-cols-2 mt-4 gap-x-2 gap-y-2">
                        {skills.map((skill, i) => (
                            <li key={i} className="flex items-start">
                                <span className="text-green mr-2">▹</span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative group">
                    <div className="relative rounded-md overflow-hidden w-full max-w-[300px] mx-auto cursor-pointer">
                        <div className="absolute inset-0 bg-green/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                        <img
                            src="/profile_pic.jpg"
                            alt="Jewoola Favour"
                            className="grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 border-2 border-green rounded-md translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-[-1]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
