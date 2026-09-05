import { aboutParagraphs } from "../data/content";
import Reveal from "./Reveal";

export default function AboutSection(): JSX.Element {
  return (
    <section id="about" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-12 md:px-8 md:py-14">
      <Reveal>
        <h2 className="text-lg font-medium text-cream">About Me</h2>
        <p className="mt-1 text-sm text-neutral-400">Here's a little bit more about me</p>
      </Reveal>

      <div className="mt-6 space-y-5">
        <Reveal>
          <p className="text-base font-normal leading-relaxed text-neutral-200">{aboutParagraphs[0]}</p>
        </Reveal>
        {aboutParagraphs.slice(1).map((paragraph, index) => (
          <Reveal key={index} delay={index * 90}>
            <p className="text-sm font-normal leading-relaxed text-neutral-400">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
