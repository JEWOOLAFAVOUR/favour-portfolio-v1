import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";

const socials = [
  { label: "GitHub", href: "https://github.com/JEWOOLAFAVOUR" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jewoola-favour-5b7607217",
  },
  { label: "X (Twitter)", href: "https://x.com/favourlop" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jewoolafavourgbemi/",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white px-6 pb-16 pt-12 text-[#383838] sm:px-10 lg:px-[4.7vw] lg:pt-24">
        <section>
          <h1 className="max-w-5xl text-[clamp(3rem,8vw,8.5rem)] font-normal leading-[.88] tracking-[-.075em]">
            Contact
          </h1>
          <p className="mt-10 max-w-2xl text-[clamp(1.2rem,2vw,2rem)] leading-[1.15] tracking-[-.04em]">
            Have a project in mind or just want to say hello? I would love to
            hear from you.
          </p>
        </section>

        <section className="mt-20 pt-10 lg:mt-28">
          <a
            href="mailto:jewoolafavour2020@gmail.com"
            className="group inline-flex items-center gap-3 text-[clamp(1.6rem,3.4vw,3.4rem)] leading-none tracking-[-.06em] underline decoration-[#ff542d] decoration-2 underline-offset-8 transition-colors hover:text-[#ff542d]"
          >
            jewoolafavour2020@gmail.com
            <ArrowUpRight
              className="text-[#ff542d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              size={40}
              strokeWidth={1.5}
            />
          </a>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm uppercase tracking-[.12em] text-[#5d5d59] underline-offset-4 transition-colors hover:text-[#ff542d] hover:underline"
              >
                {social.label}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
