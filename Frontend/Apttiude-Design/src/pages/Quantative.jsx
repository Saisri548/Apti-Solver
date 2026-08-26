import { Link } from "react-router-dom";

import {
  ArrowRight,
  Calculator,
  Sparkles,
  BookOpen,
} from "lucide-react";

import { quantitativeTopics } from "../data/topics";

function Quantative() {
  return (
    <div className="min-h-screen bg-[#08080c] text-white">

      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-[10%] top-[-150px] h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[130px]" />

        <div className="absolute right-[5%] top-[25%] h-[400px] w-[400px] rounded-full bg-yellow-300/10 blur-[130px]" />

        <div className="absolute bottom-[-200px] left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/5 blur-[130px]" />

      </div>


      {/* =========================
          NAVBAR
      ========================== */}

      <header className="relative z-10 border-b border-white/10 bg-[#08080c]/70 backdrop-blur-xl">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            to="/"
            className="group flex items-center gap-3"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-yellow-300 text-black shadow-lg shadow-pink-500/10 transition group-hover:scale-105">
              <Calculator size={19} />
            </div>

            <span className="text-lg font-semibold tracking-tight">
              Apti
              <span className="bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent">
                Solve
              </span>
            </span>

          </Link>


          {/* AI Badge */}

          <div className="hidden items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/5 px-4 py-2 text-xs text-pink-200 sm:flex">

            <Sparkles
              size={14}
              className="text-yellow-300"
            />

            AI Powered Learning

          </div>

        </div>

      </header>


      {/* =========================
          MAIN
      ========================== */}

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-16">


        {/* =========================
            HERO
        ========================== */}

        <section className="max-w-3xl">

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/5 px-4 py-2 text-xs font-medium text-yellow-200">

            <BookOpen size={14} />

            Quantitative Aptitude

          </div>


          {/* Heading */}

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">

            Build your

            <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              quantitative skills.
            </span>

          </h1>


          {/* Description */}

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">

            Learn the concepts, formulas and shortcuts behind each
            topic, then test yourself with practice problems.

          </p>

        </section>


        {/* =========================
            STATS
        ========================== */}

        <section className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">

          {/* Topics */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-yellow-300/20">

            <p className="text-2xl font-semibold text-yellow-300">
              {quantitativeTopics.length}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Topics
            </p>

          </div>


          {/* Problems */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-pink-400/20">

            <p className="text-2xl font-semibold text-pink-400">
              100+
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Practice Problems
            </p>

          </div>


          {/* AI */}

          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-yellow-300/20 sm:block">

            <p className="bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-2xl font-semibold text-transparent">
              AI
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Smart Solver
            </p>

          </div>

        </section>


        {/* =========================
            TOPICS
        ========================== */}

        <section className="mt-20">

          {/* Section Header */}

          <div className="mb-7 flex items-end justify-between">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
                Explore
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Choose a topic
              </h2>

            </div>

            <p className="hidden text-sm text-slate-600 sm:block">
              Learn → Practice → Master
            </p>

          </div>


          {/* =========================
              TOPIC CARDS
          ========================== */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {quantitativeTopics.map((topic, index) => (

              <Link
                key={topic.id}
                to={`/solver?topic=${topic.id}`}
                className="group"
              >

                <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-pink-500/5">


                  {/* Decorative Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-500/5 blur-3xl transition group-hover:bg-pink-500/15" />


                  {/* Number */}

                  <div className="absolute right-5 top-5 text-xs font-medium text-slate-700 transition group-hover:text-pink-400/50">

                    {String(index + 1).padStart(2, "0")}

                  </div>


                  {/* Icon */}

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-2xl transition-all duration-300 group-hover:border-yellow-300/30 group-hover:bg-gradient-to-br group-hover:from-pink-400 group-hover:to-yellow-300 group-hover:text-black">

                    {topic.icon}

                  </div>


                  {/* Content */}

                  <div className="relative mt-7">

                    <h3 className="text-xl font-semibold tracking-tight">

                      {topic.title}

                    </h3>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">

                      {topic.description}

                    </p>

                  </div>


                  {/* Bottom */}

                  <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5">

                    <span className="text-xs font-medium text-slate-500 transition group-hover:text-yellow-300">

                      Learn & Practice

                    </span>


                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 group-hover:border-pink-400/30 group-hover:bg-gradient-to-br group-hover:from-pink-400 group-hover:to-yellow-300 group-hover:text-black">

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />

                    </div>

                  </div>

                </article>

              </Link>

            ))}

          </div>

        </section>


        {/* =========================
            BOTTOM CTA
        ========================== */}

        <section className="mt-24">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-pink-500/[0.08] to-yellow-300/[0.08] p-8 sm:p-10">

            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

              <div>

                <p className="text-sm font-medium text-yellow-300">
                  Ready to practice?
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Let AI solve your aptitude problems.
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Submit a question and get a step-by-step solution.
                </p>

              </div>


              <Link
                to="/solver"
                className="group flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-300 px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5"
              >

                Open Solver

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Quantative;