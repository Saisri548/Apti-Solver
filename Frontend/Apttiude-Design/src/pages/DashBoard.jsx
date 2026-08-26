import { Link } from "react-router-dom";

import {
  ArrowRight,
  Brain,
  Calculator,
  BookOpen,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      <Navbar />

      {/* =========================
          BACKGROUND GLOWS
      ========================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-20 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[120px]" />

        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-yellow-300/10 blur-[140px]" />

        <div className="absolute left-1/2 top-[50%] h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      {/* =========================
          HERO
      ========================== */}

      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-200">
                <Sparkles size={15} />
                AI-powered aptitude learning
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Master aptitude.
                <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
                  Solve smarter.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Learn concepts, discover shortcuts, practice questions,
                and solve problems with an AI-powered aptitude engine.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/quantitative"
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-300 px-6 py-3 font-semibold text-black shadow-lg shadow-pink-500/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-pink-500/20"
                >
                  Start Learning

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/solver"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition duration-300 hover:border-pink-400/30 hover:bg-pink-500/10"
                >
                  Open AI Solver
                </Link>
              </div>

              {/* Small stats */}
              <div className="mt-10 flex flex-wrap gap-8 text-sm">
                <div>
                  <p className="text-2xl font-semibold">3+</p>
                  <p className="mt-1 text-slate-500">Learning Domains</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">50+</p>
                  <p className="mt-1 text-slate-500">Practice Topics</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">AI</p>
                  <p className="mt-1 text-slate-500">Powered Solver</p>
                </div>
              </div>
            </div>

            {/* RIGHT - AI CARD */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-pink-500/10 to-yellow-300/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                {/* AI Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-yellow-300 text-black">
                      <Brain size={22} />
                    </div>

                    <div>
                      <p className="font-semibold">
                        AI Solver
                      </p>

                      <p className="text-xs text-slate-500">
                        Ready to solve
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="text-xs text-emerald-400">
                      Online
                    </span>
                  </div>
                </div>

                {/* Question Card */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">

                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-pink-300">
                    <Zap size={14} />
                    Question
                  </div>

                  <p className="mt-4 leading-relaxed text-slate-200">
                    A product costs ₹500 and is sold for ₹600.
                    What is the profit percentage?
                  </p>

                  <div className="mt-4 flex gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                      Quantitative
                    </span>

                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                      Easy
                    </span>
                  </div>
                </div>

                {/* Answer Card */}
                <div className="mt-4 rounded-2xl border border-yellow-300/20 bg-gradient-to-br from-yellow-300/[0.08] to-pink-500/[0.06] p-5">

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={17}
                        className="text-yellow-300"
                      />

                      <span className="text-sm text-slate-400">
                        Answer
                      </span>
                    </div>

                    <span className="text-lg font-semibold text-yellow-300">
                      20%
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>AI Confidence</span>
                      <span>95%</span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-pink-400 to-yellow-300" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    Profit = ₹600 − ₹500 = ₹100.
                    Profit percentage = (100 / 500) × 100 = 20%.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          DOMAINS
      ========================== */}

      <section className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-400">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose your domain
          </h2>

          <p className="mt-3 max-w-xl text-slate-400">
            Build your fundamentals, practice problems, and improve
            your speed with intelligent learning tools.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {/* QUANTITATIVE */}
          <Link
            to="/quantitative"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-yellow-300/[0.04]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl transition group-hover:bg-yellow-300/20" />

            <div className="relative">
              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300 text-black">
                  <Calculator size={22} />
                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-yellow-300"
                />
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                Quantitative Aptitude
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Percentages, profit & loss, ratios, averages,
                time & work and more.
              </p>

              <div className="mt-6 text-sm text-yellow-300/70">
                6+ topics available
              </div>
            </div>
          </Link>

          {/* ENGLISH */}
          <Link
            to="/english"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:bg-pink-500/[0.04]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl transition group-hover:bg-pink-500/20" />

            <div className="relative">
              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-400 text-black">
                  <BookOpen size={22} />
                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-pink-300"
                />
              </div>

              <h3 className="mt-8 text-xl font-semibold">
                English
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Vocabulary, grammar, sentence correction,
                synonyms and verbal ability.
              </p>

              <div className="mt-6 text-sm text-pink-300/70">
                English Engine
              </div>
            </div>
          </Link>

          {/* LOGICAL REASONING */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 opacity-70">

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10">
                <BarChart3 size={22} />
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-600">
                Soon
              </span>

            </div>

            <h3 className="mt-8 text-xl font-semibold">
              Logical Reasoning
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Text reasoning, patterns, coding-decoding
              and diagram-based reasoning.
            </p>

            <div className="mt-6 text-sm text-slate-600">
              Coming soon
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}

      <section className="relative mx-auto max-w-5xl px-6 pb-24">

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-pink-500/[0.08] to-yellow-300/[0.08] p-10 text-center sm:p-14">

          <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative">

            <Sparkles
              className="mx-auto text-yellow-300"
              size={28}
            />

            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Ready to solve smarter?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Start learning concepts, practice questions,
              and use AI to improve your aptitude preparation.
            </p>

            <Link
              to="/solver"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-300 px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5"
            >
              Try AI Solver
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Dashboard;