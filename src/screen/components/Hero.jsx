import { useEffect, useState } from "react"

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [])

    const items = [
        { id: 1, content: "Hi, my name is", className: "text-green font-mono mb-4 opacity-0 translate-y-4", delay: 100 },
        {
            id: 2,
            content: "Jewoola Favour.",
            className: "text-lightest-slate text-5xl sm:text-6xl md:text-7xl font-bold mb-2 opacity-0 translate-y-4",
            delay: 200,
        },
        {
            id: 3,
            content: "I build things for mobile and web.",
            className: "text-slate text-4xl sm:text-5xl md:text-6xl font-bold mb-6 opacity-0 translate-y-4",
            delay: 300,
        },
        {
            id: 4,
            content:
                "I'm a Software Developer specializing in building exceptional, human-centered digital experiences. Currently, I'm focused on crafting accessible products at Cephas ICT Hub.",
            className: "text-slate max-w-xl mb-12 opacity-0 translate-y-4",
            delay: 400,
        },
        {
            id: 5,
            content: "Check out my projects!",
            className: "button text-lg px-7 py-4 opacity-0 translate-y-4",
            delay: 500,
        },
    ]

    return (
        <section className="min-h-screen flex flex-col justify-center">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`${item.className} transition-all duration-500 ${isMounted ? "opacity-100 translate-y-0" : ""}`}
                    style={{ transitionDelay: isMounted ? `${item.delay}ms` : "0ms" }}
                >
                    {item.id === 5 ? (
                        <a href="#projects" className={item.content.includes("button") ? "button text-lg px-7 py-4" : ""}>
                            {item.content}
                        </a>
                    ) : (
                        item.content
                    )}
                </div>
            ))}
        </section>
    )
}

export default Hero
