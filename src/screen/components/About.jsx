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
        "Redux",
        "Redux Toolkit",
        "TanStack",
        "Firebase",
        "MongoDB",
        "REST APIs",
        "HTML & CSS",
        "Git",
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
                        Favour is an Intern Mobile App Developer at Cephas ICT Hub and the founder of Studypadi. As an intern,
                        Favour is responsible for developing innovative mobile applications that enhance user experience and
                        engagement. He has a proven track record of creating seamless and efficient applications using React Native,
                        and has a strong background in backend development with Node.js, MongoDB, and Express.
                    </p>
                    <p className="mb-4">
                        Favour is the driving force behind Studypadi, an educational platform that provides students with access to
                        free CBT and past questions. Originally launched as LauHub and now available on the Web with over 800+
                        users, Studypadi features a leaderboard to encourage healthy competition among students.
                    </p>
                    <p className="mb-4">
                        In addition to his technical skills, Favour is passionate about mentoring junior developers and helping them
                        achieve their career goals. He is currently a 400 Level Computer Science student at Ladoke Akintola
                        University of Technology, where he continues to expand his knowledge and skills in software development.
                    </p>
                    <p>
                        As the Library Unit Coordinator of his student church, Favour is also actively engaged in community service
                        and support.
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
                    <div className="relative rounded-md overflow-hidden w-full max-w-[300px] mx-auto">
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
