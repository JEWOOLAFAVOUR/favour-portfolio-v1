import { useState, useEffect, useRef } from "react"
import { useInView } from "../../hooks/useInView"

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { threshold: 0.25 })
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isInView && !isMounted) {
            setIsMounted(true)
        }
    }, [isInView, isMounted])

    return (
        <section id="contact" className="section text-center" ref={ref}>
            <h2
                className={`numbered-heading text-2xl mb-6 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
            >
                <span className="text-green font-mono mr-2">04.</span> What's Next?
            </h2>

            <h3
                className={`text-lightest-slate text-4xl font-semibold mb-4 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isMounted ? "200ms" : "0ms" }}
            >
                Get In Touch
            </h3>

            <p
                className={`text-slate max-w-md mx-auto mb-10 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isMounted ? "300ms" : "0ms" }}
            >
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
            </p>

            <a
                href="mailto:jewoolafavour2020@gmail.com"
                className={`button inline-block text-lg px-7 py-4 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isMounted ? "400ms" : "0ms" }}
            >
                Say Hello
            </a>
        </section>
    )
}

export default Contact
