const Footer = () => {
    return (
        <footer className="py-6 text-center text-slate text-sm">
            <div className="flex md:hidden justify-center space-x-6 mb-4">
                <a
                    href="https://github.com/JEWOOLAFAVOUR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-green transition-colors duration-200"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/jewoola-favour-5b7607217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-green transition-colors duration-200"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:jewoolafavour2020@gmail.com"
                    className="text-slate hover:text-green transition-colors duration-200"
                >
                    Email
                </a>
            </div>

            <div className="space-y-3">
                <p>
                    <a href="https://github.com/JEWOOLAFAVOUR" target="_blank" rel="noopener noreferrer" className="green-link">
                        Designed & Built by Jewoola Favour
                    </a>
                </p>

                <p className="text-light-slate text-xs">
                    Inspired by{" "}
                    <a
                        href="https://v4.brittanychiang.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green hover:text-green/80 transition-colors duration-200"
                    >
                        Brittany Chiang
                    </a>
                </p>

                <p className="text-light-slate text-xs">
                    &copy; {new Date().getFullYear()} Jewoola Favour. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
