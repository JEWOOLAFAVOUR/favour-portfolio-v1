import { useState, useEffect } from "react"
import { Home, ArrowLeft, Code, Terminal } from "lucide-react"
import { Link } from "react-router-dom"

const NotFound = () => {
    const [mounted, setMounted] = useState(false)
    const [typedText, setTypedText] = useState("")
    const [cursorVisible, setCursorVisible] = useState(true)
    const fullText = "404_PAGE_NOT_FOUND"

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Typing effect
    useEffect(() => {
        if (!mounted) return

        let currentIndex = 0
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.substring(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(typingInterval)
            }
        }, 100)

        return () => clearInterval(typingInterval)
    }, [mounted])

    // Blinking cursor effect
    useEffect(() => {
        if (!mounted) return

        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev)
        }, 530)

        return () => clearInterval(cursorInterval)
    }, [mounted])

    // Matrix-like raining code effect in the background
    const MatrixRain = () => {
        return (
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-green font-mono text-sm animate-matrix-rain"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `-${Math.random() * 50}%`,
                            animationDuration: `${Math.random() * 10 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    >
                        {Array.from({ length: Math.floor(Math.random() * 20) + 10 }).map((_, j) => (
                            <div key={j} className="my-1">
                                {String.fromCharCode(Math.floor(Math.random() * 94) + 33)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="bg-navy min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
            <MatrixRain />

            <div
                className={`relative z-10 max-w-3xl w-full transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="bg-light-navy border border-lightest-navy/30 rounded-lg shadow-2xl overflow-hidden">
                    {/* Terminal header */}
                    <div className="bg-lightest-navy px-4 py-2 flex items-center">
                        <div className="flex space-x-2 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green"></div>
                        </div>
                        <div className="text-light-slate font-mono text-sm flex-1 text-center">Terminal - Error</div>
                    </div>

                    {/* Terminal content */}
                    <div className="p-6 md:p-8 font-mono">
                        <div className="flex items-center text-light-slate mb-4">
                            <Terminal className="mr-2 text-green" size={18} />
                            <span>jewoola@portfolio:~$</span>
                        </div>

                        <div className="flex items-start mb-6">
                            {/* <span className="text-light-slate mr-2">></span> */}
                            <div>
                                <div className="text-green text-xl md:text-3xl font-bold mb-1">
                                    {typedText}
                                    <span
                                        className={`inline-block w-3 h-6 bg-green ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
                                    ></span>
                                </div>
                                <div className="text-light-slate">
                                    The page you're looking for has been moved, deleted, or possibly never existed.
                                </div>
                            </div>
                        </div>

                        <div className="text-light-slate mb-6">
                            <div className="mb-2">
                                <span className="text-green">ERROR:</span> Page not found in directory.
                            </div>
                            <div className="pl-4 border-l-2 border-lightest-navy">
                                <div>
                                    <span className="text-green">LOCATION:</span> {window.location.pathname}
                                </div>
                                <div>
                                    <span className="text-green">TIMESTAMP:</span> {new Date().toLocaleString()}
                                </div>
                            </div>
                        </div>

                        <div className="text-light-slate mb-8">
                            <div className="mb-2">
                                <span className="text-green">SUGGESTION:</span> Try one of the following:
                            </div>
                            <ul className="list-disc pl-8 space-y-1">
                                <li>Check the URL for typos</li>
                                <li>Return to the homepage</li>
                                <li>Check out my projects</li>
                                <li>Contact me if you need help</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/"
                                className="button flex items-center"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.location.href = "/"
                                }}
                            >
                                <Home size={18} className="mr-2" />
                                Return Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="button flex items-center bg-transparent hover:bg-green/10"
                            >
                                <ArrowLeft size={18} className="mr-2" />
                                Go Back
                            </button>
                            <Link
                                to="/#projects"
                                className="button flex items-center bg-transparent hover:bg-green/10"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.location.href = "/#projects"
                                }}
                            >
                                <Code size={18} className="mr-2" />
                                View Projects
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-light-slate text-sm">
                    <p>
                        Lost? No problem. Let's get you back on track. If you think this is a mistake, please{" "}
                        <a href="mailto:jewoolafavour2020@gmail.com" className="text-green hover:underline">
                            let me know
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound
