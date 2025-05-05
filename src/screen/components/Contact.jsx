import { useState, useEffect, useRef } from "react"
import { useInView } from "../../hooks/useInView"
import { Mail, Phone, X, Send } from "lucide-react"
import { sendEmail } from "../../api/auth"

/**
 * NOTE FOR DEVELOPERS:
 * - Replace the `recipient` value with your own email address before deploying.
 * - Ensure proper input validation and error handling are implemented for security and reliability.
 */


const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { threshold: 0.25 })
    const [isMounted, setIsMounted] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        recipient: "jewoolafavour2020@gmail.com", // Default recipient email
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState(null)

    useEffect(() => {
        if (isInView && !isMounted) {
            setIsMounted(true)
        }
    }, [isInView, isMounted])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitError(null)

        try {
            // Send the form data to the API
            const response = await sendEmail(formData)

            // Check if the API call was successful
            if (response.data && response.data.success) {
                setSubmitSuccess(true)

                // Reset form after showing success message
                setTimeout(() => {
                    setShowModal(false)
                    setSubmitSuccess(false)
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                        recipient: "jewoolafavour2020@gmail.com", // Reset to default recipient
                    })
                }, 2000)
            } else {
                // Handle API error
                setSubmitError(response.data?.message || "Failed to send message. Please try again.")
            }
        } catch (error) {
            // Handle network or other errors
            setSubmitError("An error occurred. Please try again later.")
            console.error("Error sending email:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

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
                className={`text-slate max-w-md mx-auto mb-6 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isMounted ? "300ms" : "0ms" }}
            >
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
            </p>

            <div
                className={`flex flex-col items-center space-y-3 mb-8 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: isMounted ? "350ms" : "0ms" }}
            >
                <a
                    href="mailto:jewoolafavour2020@gmail.com"
                    className="flex items-center text-light-slate hover:text-green transition-colors duration-200"
                >
                    <Mail className="mr-2" size={18} />
                    jewoolafavour2020@gmail.com
                </a>
                <a
                    href="tel:+2349139265126"
                    className="flex items-center text-light-slate hover:text-green transition-colors duration-200"
                >
                    <Phone className="mr-2" size={18} />
                    +234 913 926 5126
                </a>
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={() => setShowModal(true)}
                    className={`button inline-block text-lg px-7 py-4 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: isMounted ? "450ms" : "0ms" }}
                >
                    Let's Talk
                </button>
            </div>

            {/* Contact Form Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div
                        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
                        onClick={() => !isSubmitting && !submitSuccess && setShowModal(false)}
                    ></div>

                    <div className="bg-light-navy rounded-lg shadow-2xl w-full max-w-md relative z-10 transform transition-all duration-300 scale-100 opacity-100">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lightest-slate text-xl font-semibold">Get in Touch</h3>
                                {!isSubmitting && !submitSuccess && (
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="text-light-slate hover:text-green transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>

                            {submitSuccess ? (
                                <div className="text-center py-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green/20 text-green mb-4">
                                        <Send size={32} />
                                    </div>
                                    <h4 className="text-lightest-slate text-xl font-semibold mb-2">Message Sent!</h4>
                                    <p className="text-slate">Thank you for reaching out. I'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-light-slate text-sm font-medium mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-lightest-navy border border-lightest-navy/50 focus:border-green rounded-md px-4 py-2 text-lightest-slate focus:outline-none focus:ring-1 focus:ring-green transition-colors"
                                            placeholder="Your name"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-light-slate text-sm font-medium mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-lightest-navy border border-lightest-navy/50 focus:border-green rounded-md px-4 py-2 text-lightest-slate focus:outline-none focus:ring-1 focus:ring-green transition-colors"
                                            placeholder="your.email@example.com"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-light-slate text-sm font-medium mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full bg-lightest-navy border border-lightest-navy/50 focus:border-green rounded-md px-4 py-2 text-lightest-slate focus:outline-none focus:ring-1 focus:ring-green transition-colors resize-none"
                                            placeholder="Your message..."
                                            disabled={isSubmitting}
                                        ></textarea>
                                    </div>

                                    {/* Hidden recipient field - For developers who fork this project */}
                                    {/* 
                    NOTE FOR DEVELOPERS:
                    The 'recipient' field specifies where the contact form messages will be sent.
                    When implementing this in your own project, replace the default value with your
                    own email address where you want to receive messages from the contact form.
                  */}

                                    {submitError && (
                                        <div className="bg-red-900/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-md text-sm">
                                            {submitError}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full button py-3 flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-green"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={18} className="ml-2" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="bg-lightest-navy/30 rounded-b-lg py-3 px-6 text-center">
                            <p className="text-light-slate text-sm">
                                Or email me directly at{" "}
                                <a href="mailto:jewoolafavour2020@gmail.com" className="text-green hover:underline">
                                    jewoolafavour2020@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Contact



// import { useState, useEffect, useRef } from "react"
// import { useInView } from "../../hooks/useInView"

// const Contact = () => {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { threshold: 0.25 })
//     const [isMounted, setIsMounted] = useState(false)

//     useEffect(() => {
//         if (isInView && !isMounted) {
//             setIsMounted(true)
//         }
//     }, [isInView, isMounted])

//     return (
//         <section id="contact" className="section text-center" ref={ref}>
//             <h2
//                 className={`numbered-heading text-2xl mb-6 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
//             >
//                 <span className="text-green font-mono mr-2">04.</span> What's Next?
//             </h2>

//             <h3
//                 className={`text-lightest-slate text-4xl font-semibold mb-4 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
//                 style={{ transitionDelay: isMounted ? "200ms" : "0ms" }}
//             >
//                 Get In Touch
//             </h3>

//             <p
//                 className={`text-slate max-w-md mx-auto mb-10 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
//                 style={{ transitionDelay: isMounted ? "300ms" : "0ms" }}
//             >
//                 I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
//                 best to get back to you!
//             </p>

//             <a
//                 href="mailto:jewoolafavour2020@gmail.com"
//                 className={`button inline-block text-lg px-7 py-4 transition-all duration-500 ${isMounted ? "opacity-100" : "opacity-0 translate-y-4"}`}
//                 style={{ transitionDelay: isMounted ? "400ms" : "0ms" }}
//             >
//                 Say Hello
//             </a>
//         </section>
//     )
// }

// export default Contact
