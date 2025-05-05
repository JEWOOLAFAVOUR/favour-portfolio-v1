import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SocialSidebar from "./components/SocialSidebar"
import EmailSidebar from "./components/EmailSidebar"
import Loader from "./components/Loader"

function HomePage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="bg-navy text-slate min-h-screen font-mono">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <div className="px-6 lg:px-12 xl:px-24 max-w-screen-xl mx-auto relative">
                        <SocialSidebar />
                        <EmailSidebar />
                        <main className="py-24 md:py-32">
                            <Hero />
                            <About />
                            <Experience />
                            <Projects />
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                </>
            )}
        </div>
    )
}

export default HomePage



// import React from 'react'

// export default function HomePage() {
//     return (
//         <div>HomePage</div>
//     )
// }
