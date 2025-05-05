import { useEffect, useState } from "react"

const Loader = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 10)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-navy z-50 transition-opacity duration-500 ${isMounted ? "opacity-100" : "opacity-0"}`}
        >
            <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-green">
                <g className="opacity-20">
                    <path d="M50 5 L50 95" strokeWidth="10" strokeLinecap="round" />
                    <path d="M5 50 L95 50" strokeWidth="10" strokeLinecap="round" />
                    <path d="M15 15 L85 85" strokeWidth="10" strokeLinecap="round" />
                    <path d="M15 85 L85 15" strokeWidth="10" strokeLinecap="round" />
                </g>
                <g>
                    <path
                        d="M50 5 L50 95"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray="90"
                        strokeDashoffset="90"
                        className="animate-[dash_1.5s_ease-in-out_forwards]"
                    />
                    <path
                        d="M5 50 L95 50"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray="90"
                        strokeDashoffset="90"
                        className="animate-[dash_1.5s_ease-in-out_0.3s_forwards]"
                    />
                    <path
                        d="M15 15 L85 85"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray="120"
                        strokeDashoffset="120"
                        className="animate-[dash_1.5s_ease-in-out_0.6s_forwards]"
                    />
                    <path
                        d="M15 85 L85 15"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray="120"
                        strokeDashoffset="120"
                        className="animate-[dash_1.5s_ease-in-out_0.9s_forwards]"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Loader
