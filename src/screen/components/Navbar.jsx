import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "About", url: "#about" },
        { name: "Experience", url: "#experience" },
        { name: "Work", url: "#projects" },
        { name: "Contact", url: "#contact" },
    ]

    return (
        <header
            className={`fixed w-full z-50 px-6 lg:px-12 transition-all duration-300 ${scrolled ? "bg-navy/90 backdrop-blur shadow-lg py-4" : "bg-transparent py-6"}`}
        >
            <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
                <a href="#" className="text-green text-3xl font-bold">
                    JF
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <a href={link.url} className="nav-link">
                                    <span className="text-green font-mono">0{i + 1}.</span> {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-green" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu size={24} />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-light-navy/90 z-50 flex flex-col justify-center items-center transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <button className="absolute top-6 right-6 text-green" onClick={() => setIsMenuOpen(false)}>
                    <X size={24} />
                </button>

                <ul className="flex flex-col space-y-6 text-center">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <a
                                href={link.url}
                                className="text-lightest-slate text-xl block py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="text-green font-mono mb-1">0{i + 1}.</div>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button mt-8"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Resume
                </a>
            </div>
        </header>
    )
}

export default Navbar
