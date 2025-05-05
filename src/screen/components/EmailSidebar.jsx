const EmailSidebar = () => {
    return (
        <div className="hidden md:flex fixed bottom-0 right-6 lg:right-12 xl:right-24 flex-col items-center">
            <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
                <a
                    href="mailto:jewoolafavour2020@gmail.com"
                    className="font-mono text-light-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl]"
                >
                    jewoolafavour2020@gmail.com
                </a>
            </div>
        </div>
    )
}

export default EmailSidebar
