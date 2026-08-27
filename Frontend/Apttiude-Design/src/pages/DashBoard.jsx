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
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">

      <Navbar />

      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.08] blur-[130px]" />

        <div className="absolute right-[-100px] top-[15%] h-[450px] w-[450px] rounded-full bg-blue-500/[0.07] blur-[140px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[400px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-300/[0.06] blur-[140px]" />

      </div>


      {/* =========================
          HERO
      ========================== */}

      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-32">

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">

                <Sparkles
                  size={15}
                  className="text-cyan-500"
                />

                AI-powered aptitude learning

              </div>


              {/* Heading */}

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">

                Master aptitude.

                <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent">

                  Solve smarter.

                </span>

              </h1>


              {/* Description */}

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">

                Learn concepts, discover shortcuts, practice questions,
                and solve problems with an AI-powered aptitude engine.

              </p>


              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-4">

                {/* Start Learning */}

                <Link
                  to="/quantitative"
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25"
                >

                  Start Learning

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </Link>


                {/* AI SOLVER */}

                <Link
                  to="/solver-ai"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 shadow-sm transition duration-300 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                >

                  Open AI Solver

                </Link>

              </div>


              {/* Stats */}

              <div className="mt-10 flex flex-wrap gap-8">

                <div>

                  <p className="text-2xl font-semibold text-slate-900">
                    3+
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Learning Domains
                  </p>

                </div>


                <div>

                  <p className="text-2xl font-semibold text-slate-900">
                    50+
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Practice Topics
                  </p>

                </div>


                <div>

                  <p className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent">
                    AI
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Powered Solver
                  </p>

                </div>

              </div>

            </div>


            {/* =========================
                AI SOLVER CARD
            ========================== */}

            <div className="relative">

              {/* Glow */}

              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-3xl" />


              {/* Main Card */}

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">

                {/* Header */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-md shadow-cyan-500/20">

                      <Brain size={22} />

                    </div>

                    <div>

                      <p className="font-semibold text-slate-900">
                        AI Solver
                      </p>

                      <p className="text-xs text-slate-500">
                        Ready to solve
                      </p>

                    </div>

                  </div>


                  <div className="flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    <span className="text-xs font-medium text-emerald-600">
                      Online
                    </span>

                  </div>

                </div>


                {/* Question */}

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600">

                    <Zap size={14} />

                    Question

                  </div>

                  <p className="mt-4 leading-relaxed text-slate-700">

                    A product costs ₹500 and is sold for ₹600.
                    What is the profit percentage?

                  </p>


                  <div className="mt-4 flex gap-2">

                    <span className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                      Quantitative
                    </span>

                    <span className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                      Easy
                    </span>

                  </div>

                </div>


                {/* Answer */}

                <div className="mt-4 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <CheckCircle2
                        size={17}
                        className="text-cyan-600"
                      />

                      <span className="text-sm text-slate-500">
                        Answer
                      </span>

                    </div>

                    <span className="text-lg font-semibold text-blue-600">
                      20%
                    </span>

                  </div>


                  {/* Confidence */}

                  <div className="mt-4">

                    <div className="flex justify-between text-xs text-slate-500">

                      <span>
                        AI Confidence
                      </span>

                      <span>
                        95%
                      </span>

                    </div>


                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">

                      <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

                    </div>

                  </div>


                  <p className="mt-4 text-sm leading-relaxed text-slate-600">

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

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Choose your domain
          </h2>

          <p className="mt-3 max-w-xl text-slate-500">

            Build your fundamentals, practice problems, and improve
            your speed with intelligent learning tools.

          </p>

        </div>


        <div className="grid gap-5 md:grid-cols-3">

          {/* QUANTITATIVE */}

          <Link
            to="/quantitative"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60"
          >

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl transition group-hover:bg-cyan-400/[0.15]" />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-md shadow-cyan-500/20">

                  <Calculator size={22} />

                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-cyan-500"
                />

              </div>


              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                Quantitative Aptitude
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">

                Percentages, profit & loss, ratios, averages,
                time & work and more.

              </p>

              <div className="mt-6 text-sm font-medium text-cyan-600">
                6+ topics available
              </div>

            </div>

          </Link>


          {/* ENGLISH */}

          <Link
            to="/english"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
          >

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/[0.07] blur-3xl transition group-hover:bg-blue-500/[0.14]" />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20">

                  <BookOpen size={22} />

                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500"
                />

              </div>


              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                English
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">

                Vocabulary, grammar, sentence correction,
                synonyms and verbal ability.

              </p>

              <div className="mt-6 text-sm font-medium text-blue-600">
                English Engine
              </div>

            </div>

          </Link>


          {/* LOGICAL REASONING */}

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 opacity-70">

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500">

                <BarChart3 size={22} />

              </div>

              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                Soon
              </span>

            </div>


            <h3 className="mt-8 text-xl font-semibold text-slate-700">
              Logical Reasoning
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">

              Text reasoning, patterns, coding-decoding
              and diagram-based reasoning.

            </p>

            <div className="mt-6 text-sm text-slate-400">
              Coming soon
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}

      <section className="relative mx-auto max-w-5xl px-6 pb-24">

        <div className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-10 text-center shadow-sm sm:p-14">

          <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-300/[0.12] blur-3xl" />

          <div className="relative">

            <Sparkles
              className="mx-auto text-cyan-500"
              size={28}
            />

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              Ready to solve smarter?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-500">

              Start learning concepts, practice questions,
              and use AI to improve your aptitude preparation.

            </p>


            {/* AI SOLVER CTA */}

            <Link
              to="/solver-ai"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25"
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