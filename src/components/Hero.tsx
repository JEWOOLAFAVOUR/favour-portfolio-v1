import Pendulum from "./Pendulum";
import ProcessLine from "./ProcessLine";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-28 pt-24 lg:px-4">
      <div className="mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-medium leading-none tracking-[-0.05em] text-zinc-900 sm:text-7xl lg:text-[84px]">
            Full-stack engineer
          </h1>

          <h1 className="text-6xl font-medium leading-none tracking-[-0.05em] text-zinc-900 sm:text-7xl lg:text-[84px]">
            building modern software
          </h1>
        </div>

        {/* Bottom */}
        <div className="mt-44 grid items-start gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="flex justify-center lg:col-span-3 lg:justify-start">
            <div className="mt-2 flex items-start gap-4">
              <Pendulum length={60} duration={3.6} angle={8} delay={0} />
              <Pendulum length={72} duration={4} angle={10} delay={0.2} />
              <Pendulum length={84} duration={4.4} angle={12} delay={0.4} />
              <Pendulum length={96} duration={4.8} angle={14} delay={0.6} />
              <Pendulum length={108} duration={5.2} angle={16} delay={0.8} />
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:col-start-5">
            <p className="max-w-4xl text-[50px] font-medium leading-[1.15] tracking-[-0.04em] text-zinc-900">
              Built products used by 10K+ users.
              <br />
              web, mobile and backend software.
            </p>

            <ProcessLine />
          </div>
        </div>
      </div>
    </section>
  );
}
