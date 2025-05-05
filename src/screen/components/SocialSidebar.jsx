import { Github, Linkedin, Mail } from "lucide-react"

const SocialSidebar = () => {
    return (
        <div className="hidden md:flex fixed bottom-0 left-6 lg:left-12 xl:left-24 flex-col items-center">
            <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
                <li>
                    <a
                        href="https://github.com/JEWOOLAFAVOUR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200"
                    >
                        <Github size={20} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com/in/jewoola-favour-5b7607217"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200"
                    >
                        <Linkedin size={20} />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:jewoolafavour2020@gmail.com"
                        className="text-light-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200"
                    >
                        <Mail size={20} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialSidebar
