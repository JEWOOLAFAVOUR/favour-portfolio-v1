export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-24 pb-28 lg:px-4">
      <div className="mx-auto">
        {/* Main Heading */}
        <div className="mt-8 flex flex-col gap-5">
          <h1 className="text-6xl font-medium leading-none tracking-[-0.05em] text-zinc-900 sm:text-7xl lg:text-[84px]">
            Full-stack engineer
          </h1>

          <h1 className="text-6xl font-medium leading-none tracking-[-0.05em] text-zinc-900 sm:text-7xl lg:text-[84px]">
            building modern software
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 grid gap-16 lg:grid-cols-12">
          {/* Right */}
          <div className="lg:col-span-6">
            <div className="max-w-xl space-y-8">
              <p className="text-3xl font-medium leading-tight tracking-[-0.03em] text-zinc-900">
                I'm Favour, a Full-Stack Software Engineer focused on building
                thoughtful digital products.
              </p>

              <p className="text-lg leading-8 text-zinc-500">
                Currently building modern software at
                <span className="font-medium text-zinc-900"> Ennovate Lab</span>
                , creating scalable mobile and web experiences with clean
                engineering and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
