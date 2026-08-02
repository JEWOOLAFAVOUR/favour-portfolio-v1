import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";

const journey = [
  {
    number: "01",
    color: "#f1c6b5",
    text: "I start by understanding the people, product, and problem. Every good digital experience begins with curiosity and a clear sense of what needs to be solved.",
    position: "left",
  },
  {
    number: "02",
    color: "#b9cbb7",
    text: "I ask a lot of questions and turn those answers into a practical technical direction, with clean architecture and a plan that can grow with the product.",
    position: "right",
  },
  {
    number: "03",
    color: "#70445e",
    text: "Then I build. From React Native mobile applications to full-stack web products, I care about thoughtful interfaces, reliable systems, and maintainable code.",
    position: "left",
    light: true,
  },
  {
    number: "04",
    color: "#bfd4e6",
    text: "I connect the pieces through APIs, databases, cloud infrastructure, and collaboration—making sure the experience feels simple even when the technology underneath is not.",
    position: "right",
  },
  {
    number: "05",
    color: "#ddc79c",
    text: "I refine, test, and learn from feedback. The goal is not only to ship software, but to deliver something useful, dependable, and genuinely enjoyable to use.",
    position: "left",
  },
  {
    number: "06",
    color: "#92c3bd",
    text: "By the end, you have a clear product, a strong technical foundation, and a developer who is invested in making the next iteration even better.",
    position: "right",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="about-editorial overflow-hidden  text-[#383838]">
        <section className="px-8 pb-24 pt-16 sm:px-14 lg:px-[7vw] lg:pb-32 lg:pt-24">
          <h1 className="max-w-[1100px] text-[clamp(2rem,3.35vw,4.25rem)] font-normal leading-[1.1] tracking-[-0.055em]">
            Hi! I&apos;m Favour, a Full-Stack Software Developer who enjoys
            building meaningful digital experiences.
          </h1>
          <p className="mt-14 max-w-3xl text-[clamp(1.1rem,1.45vw,1.8rem)] leading-[1.25] tracking-[-0.035em]">
            I design and build end-to-end mobile and web applications, focusing
            on clean architecture, reliable backend systems, and smooth user
            experiences.
          </p>
        </section>

        <section className="border-y border-[#383838]/20 px-6 py-16 sm:px-10 lg:px-[4.7vw] lg:py-24">
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,.55fr)] lg:gap-20">
            <div className="max-w-5xl space-y-9 text-[clamp(1.25rem,2.1vw,2.45rem)] leading-[1.2] tracking-[-0.045em]">
              <p>
                I currently work at{" "}
                <a
                  className="underline decoration-[#ff542d] decoration-2 underline-offset-4"
                  href="https://www.ennovatelab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ennovate Lab
                </a>
                , where I design and build products from the first idea to the
                final experience.
              </p>
              <p>
                I&apos;m also the creator of{" "}
                <a
                  className="underline decoration-[#ff542d] decoration-2 underline-offset-4"
                  href="https://www.studypady.com.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  StudyPady
                </a>
                , an education platform helping over 2,000 students access free
                CBTs and past questions.
              </p>
              <p>
                I&apos;m a Computer Science graduate from LAUTECH. Outside of
                code, I mentor junior developers, serve in student church, and
                organize resources as a library unit member.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-[350px] rotate-[2deg] lg:mt-8">
              <img
                src="/profile_pic.jpg"
                alt="Favour Jewoola"
                className="aspect-[.78] w-full object-cover"
              />
              <figcaption className="mt-4 text-sm uppercase tracking-[.12em]">
                Favour Jewoola / Developer
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-[1.6vw] lg:py-32">
          <h2 className="mb-20 px-[3vw] text-[clamp(2.4rem,6.5vw,7.5rem)] font-normal uppercase leading-[.92] tracking-[-0.055em]">
            Here&apos;s what
            <br />
            my process looks like
          </h2>
          <div className="space-y-[-1px] mx-24">
            {journey.map((item) => (
              <article
                key={item.number}
                className={`relative flex min-h-[280px] w-full max-w-[1080px] rounded-[14px] px-6 py-7 transition-transform duration-500 hover:rotate-0 sm:min-h-[320px] sm:px-10 sm:py-9 lg:px-14 ${item.position === "right" ? "ml-auto rotate-[2deg]" : "rotate-[-2deg]"}`}
                style={{
                  backgroundColor: item.color,
                  color: item.light ? "#f5f4f0" : "#383838",
                }}
              >
                <div className="flex w-full flex-col justify-between">
                  <span className="text-[70px] font-bold leading-none tracking-[-0.08em]">
                    {item.number}
                  </span>
                  <div>
                    <div className="mb-5 h-px w-full bg-current opacity-20" />
                    <p className="max-w-4xl text-[22px] font-light leading-relaxed tracking-tight text-current">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-28 pt-8 text-center sm:px-10 lg:pb-40">
          <p className="mb-5 text-sm uppercase tracking-[.16em]">
            Have a project in mind?
          </p>
          <a
            href="/contact"
            className="group mx-auto inline-flex items-center gap-2 rounded-full bg-[#f3ddd4] px-5 py-1.5 transition-all duration-500 hover:scale-[1.015]"
          >
            <span className="text-[clamp(1.6rem,3vw,3.5rem)] font-medium tracking-[-0.06em]">
              GET IN TOUCH
            </span>

            <span className="text-[#ff542d] transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
              <ArrowUpRight
                aria-hidden="true"
                className="h-[clamp(1.7rem,3vw,3.2rem)] w-[clamp(1.7rem,3vw,3.2rem)]"
                strokeWidth={1.7}
              />
            </span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
