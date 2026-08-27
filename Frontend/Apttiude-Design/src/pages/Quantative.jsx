import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  Sparkles,
  BookOpen,
  AlertCircle,
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api/quants";

function Quantative() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_BASE_URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch topics: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error("Backend returned an unsuccessful response");
        }

        setTopics(data.topics || []);
      } catch (err) {
        console.error("Error fetching quantitative topics:", err);
        setError("Unable to load quantitative topics.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[-180px] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="absolute right-[5%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute bottom-[-200px] left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[130px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
              <Calculator size={19} />
            </div>

            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Apti
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Solve
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-medium text-cyan-700 sm:flex">
            <Sparkles size={14} className="text-cyan-500" />
            AI Powered Learning
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        {/* Hero */}
        <section className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-medium text-cyan-700">
            <BookOpen size={14} />
            Quantitative Aptitude
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build your
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              quantitative skills.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Learn concepts, formulas and shortcuts behind each topic,
            then test yourself with practice problems.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">

          {/* Topics */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
            <p className="text-2xl font-semibold text-cyan-600">
              {loading ? "..." : topics.length}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Topics
            </p>
          </div>

          {/* Problems */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
            <p className="text-2xl font-semibold text-blue-600">
              100+
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Practice Problems
            </p>
          </div>

          {/* AI */}
          <div className="hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md sm:block">
            <p className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent">
              AI
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Smart Solver
            </p>
          </div>
        </section>

        {/* Topics */}
        <section className="mt-20">

          {/* Header */}
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-600">
                Explore
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Choose a topic
              </h2>
            </div>

            <p className="hidden text-sm text-slate-400 sm:block">
              Learn → Practice → Master
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />

              <p className="mt-4 text-sm text-slate-500">
                Loading quantitative topics...
              </p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center">
              <AlertCircle className="mx-auto text-red-500" size={28} />

              <p className="mt-4 font-medium text-red-600">
                {error}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Please make sure the backend is running on port 5000.
              </p>
            </div>
          )}

          {/* No topics */}
          {!loading && !error && topics.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
              <BookOpen
                className="mx-auto text-slate-400"
                size={30}
              />

              <p className="mt-4 font-medium text-slate-700">
                No topics available
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Add quantitative topics to the backend database.
              </p>
            </div>
          )}

          {/* Topic Cards */}
          {!loading && !error && topics.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic, index) => (
                <Link
                  key={topic.slug}
                  to={`/solver?topic=${encodeURIComponent(topic.slug)}`}
                  className="group"
                >
                  <article className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10">

                    {/* Decorative glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/15" />

                    {/* Number */}
                    <div className="absolute right-5 top-5 text-xs font-medium text-slate-300 transition group-hover:text-cyan-500">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 text-xl font-semibold text-cyan-600 transition-all duration-300 group-hover:border-cyan-300 group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
                      {getTopicIcon(topic.slug)}
                    </div>

                    {/* Content */}
                    <div className="relative mt-7">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                        {topic.name}
                      </h3>

                      <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                        Learn concepts, formulas, shortcuts and practice
                        problems for this topic.
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="relative mt-8 flex items-center justify-between border-t border-slate-100 pt-5">

                      <span className="text-xs font-medium text-slate-500 transition group-hover:text-cyan-600">
                        Learn & Practice
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
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
          )}
        </section>

        {/* CTA */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-sm sm:p-10">

            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

              <div>
                <p className="text-sm font-medium text-cyan-600">
                  Ready to practice?
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Let AI solve your aptitude problems.
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Submit a question and get a step-by-step solution.
                </p>
              </div>

              <Link
                to="/solver"
                className="group flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30"
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

/**
 * UI-only icon mapping.
 * These are NOT topic data.
 * The backend remains the source of truth for topics.
 */
function getTopicIcon(slug) {
  const icons = {
    percentages: "%",
    profit_and_loss: "₹",
    ratio_and_proportion: "∶",
    averages: "x̄",
    time_and_work: "⏱",
    time_speed_and_distance: "🚗",
  };

  return icons[slug] || "📚";
}

export default Quantative;