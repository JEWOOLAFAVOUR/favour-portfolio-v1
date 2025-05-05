import { useState, useEffect, useRef } from "react"
import { useInView } from "../../hooks/useInView"

const Experience = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { threshold: 0.25 })
    const [isMounted, setIsMounted] = useState(false)
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        if (isInView && !isMounted) {
            setIsMounted(true)
        }
    }, [isInView, isMounted])

    const jobs = [
        {
            company: "Cephas Digital Technology",
            title: "Mobile App Developer",
            range: "March 2022 - Present",
            duties: [
                "Spearheaded the design and maintenance of various mobile applications utilizing React Native.",
                "Conducted workshops and training sessions for professionals and students, emphasizing Mobile app development techniques.",
                "Developed customized training programs to address specific skill requirements and learning objectives in Mobile App Development.",
                "Delivered engaging sessions with real-world examples and practical exercises to enhance understanding and application of React Native concepts.",
                "Stayed abreast of the latest trends and advancements in Mobile app development, incorporating industry best practices into training materials.",
                "Collaborated with clients to understand their needs, contributing to the design and development of tailored Mobile App solutions.",
            ],
        },
        {
            company: "Compellers Digital",
            title: "Freelance Mobile App Developer",
            range: "September 2023 - November 2023",
            duties: [
                "Worked closely with a client to conceptualize and understand their requirements for a mobile application.",
                "Utilized React Native to design and develop a feature-rich mobile app, ensuring a seamless and user-friendly experience.",
                "Successfully managed the end-to-end process of uploading the app to the Google Play Store, including the necessary optimizations and configurations.",
                "Implemented rigorous testing procedures to guarantee the app's functionality, performance, and security met high standards.",
                "Maintained open communication channels with the client, incorporating feedback and ensuring the final product aligned with their vision.",
            ],
        },
        {
            company: "Versecog Farm Enterprise",
            title: "Freelance Mobile App Developer",
            range: "November 2023 - December 2023",
            duties: [
                "Worked closely with a freelance client to understand their project requirements and coding needs for a mobile application.",
                "Took an active role in coding a substantial portion of the application screens, ensuring alignment with the client's vision and functional requirements.",
                "Utilized React Native to implement the client's design concepts into fully functional and responsive screens.",
                "Engaged in an iterative coding process, incorporating client feedback to refine and enhance the functionality of the coded screens.",
                "Collaborated with the client to address challenges, proposing effective solutions and ensuring a smooth coding process.",
                "Attained high levels of client satisfaction by delivering coded screens that met both the design aesthetics and functional objectives.",
            ],
        },
        {
            company: "LAUTECH",
            title: "Mobile App Developer",
            range: "June 2023 - November 2023",
            duties: [
                "Initiated and actively contributed to the development of LauHub, a comprehensive project aimed at providing valuable resources to students within LauTech University.",
                "Leveraged React Native to create a mobile application as part of the LauHub project, ensuring cross-platform compatibility and optimal user experience.",
                "Engineered a platform within LauHub to grant students access to free CBTs and past questions, enhancing their academic preparation.",
                "Successfully deployed LauHub to the Google Play Store, making it accessible to the university community and beyond.",
                "Actively collected and incorporated user feedback, ensuring continuous improvement and alignment with the evolving needs of LauTech students.",
            ],
        },
    ]

    return (
        <section id="experience" className="section" ref={ref}>
            <h2
                className={`numbered-heading text-2xl mb-10 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
            >
                <span className="text-green font-mono mr-2">02.</span> Where I've Worked
            </h2>

            <div
                className={`grid md:grid-cols-4 gap-4 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isMounted ? "200ms" : "0ms" }}
            >
                <div className="md:col-span-1 overflow-x-auto">
                    <div className="flex md:flex-col border-b md:border-b-0 md:border-l border-lightest-navy">
                        {jobs.map((job, i) => (
                            <button
                                key={i}
                                className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap ${activeTab === i ? "text-green bg-light-navy md:border-l-2 md:border-l-green md:pl-[calc(1rem-2px)]" : "text-slate hover:text-green hover:bg-light-navy/50"} transition-all duration-200`}
                                onClick={() => setActiveTab(i)}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="min-h-[320px]">
                        <h3 className="text-xl text-lightest-slate mb-1">
                            {jobs[activeTab].title} <span className="text-green">@ {jobs[activeTab].company}</span>
                        </h3>
                        <p className="font-mono text-sm mb-4">{jobs[activeTab].range}</p>
                        <ul className="space-y-2.5">
                            {jobs[activeTab].duties.map((duty, i) => (
                                <li key={i} className="flex">
                                    <span className="text-green mr-2 mt-1">▹</span>
                                    <span>{duty}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
