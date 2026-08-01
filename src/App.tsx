import Navbar from "./components/Navbar";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <section id="about" className="max-w-3xl space-y-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
            Digital product designer & developer
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            Building sharp, modern experiences for ambitious brands.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            I craft thoughtful interfaces, polished frontends, and landing pages
            that feel as refined as they perform.
          </p>
        </section>

        <section id="work" className="mt-20 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Featured project
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">
              Studio-led landing experience
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              A minimal, premium layout that balances clarity, motion, and
              simplicity.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Approach
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">
              Strong systems, thoughtful detail
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Clean structure, responsive behavior, and carefully tuned
              interactions.
            </p>
          </article>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-slate-200 px-5 py-10 text-center text-sm text-slate-500 sm:px-6 lg:px-8"
      >
        <a
          href="mailto:hello@favour.dev"
          className="font-medium text-slate-950 transition-colors hover:text-slate-600"
        >
          hello@favour.dev
        </a>
      </footer>
    </div>
  );
}
