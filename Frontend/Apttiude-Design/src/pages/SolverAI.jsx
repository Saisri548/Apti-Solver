import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Brain,
  Sparkles,
  Send,
  CheckCircle2,
  CircleAlert,
  Loader2,
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api/ai";

function SolverAI() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Convert snake_case into readable text
  const formatLabel = (text) => {
    if (!text) return "";

    return text
      .replaceAll("_", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const solveQuestion = async () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const response = await fetch(`${API_BASE_URL}/solve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question.trim(),
        }),
      });

      const data = await response.json();

      console.log("AI SOLVER RESPONSE:", data);

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to solve the question."
        );
      }

      setResult(data);
    } catch (err) {
      console.error("AI Solver Error:", err);

      setError(
        err.message ||
          "Something went wrong while solving the question."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.ctrlKey) {
      solveQuestion();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg">
              <Brain size={19} />
            </div>

            <span className="text-lg font-semibold">
              Apti
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Solve
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-medium text-cyan-700 sm:flex">
            <Sparkles size={14} />
            AI Powered Solver
          </div>

        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-4xl px-6 py-10">

        {/* Back */}

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-600"
        >
          <ArrowLeft size={16} />
          Dashboard
        </Link>

        {/* ================= HERO ================= */}

        <section className="mb-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-xl shadow-cyan-500/20">
            <Brain size={30} />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            AI Aptitude Solver
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Enter any aptitude question and let our AI engine
            identify the domain and solve it for you.
          </p>

        </section>

        {/* ================= QUESTION CARD ================= */}

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">

          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600">
            <Sparkles size={16} />
            Ask AI
          </div>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Example: A shopkeeper buys an article for Rs. 800 and sells it for Rs. 920. What is the profit percentage?"
            rows={6}
            className="mt-4 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
          />

          <div className="mt-4 flex items-center justify-between">

            <p className="text-xs text-slate-400">
              Press Ctrl + Enter to solve
            </p>

            <button
              onClick={solveQuestion}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Solving...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Solve with AI
                </>
              )}

            </button>

          </div>

        </section>

        {/* ================= ERROR ================= */}

        {error && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-5 text-red-700">

            <CircleAlert
              size={20}
              className="mt-0.5 shrink-0"
            />

            <div>
              <p className="font-semibold">
                Unable to solve
              </p>

              <p className="mt-1 text-sm">
                {error}
              </p>
            </div>

          </div>
        )}

        {/* ================= RESULT ================= */}

        {result && (
          <section className="mt-8 overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-xl shadow-slate-200/50">

            {/* RESULT HEADER */}

            <div className="border-b border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-6">

              <div className="flex flex-wrap items-center justify-between gap-4">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                    AI Result
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    {result.engine === "quant"
                      ? "Quantitative Aptitude"
                      : result.engine === "english"
                      ? "English"
                      : formatLabel(result.intent)}
                  </h2>

                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">

                  <CheckCircle2 size={16} />

                  {result.confidence != null
                    ? `${(result.confidence * 100).toFixed(0)}% Confidence`
                    : "Solved"}

                </div>

              </div>

            </div>

            {/* RESULT BODY */}

            <div className="space-y-7 p-6 sm:p-8">

              {/* ================= TOPIC ================= */}

              {(result.result?.topic ||
                result.result?.subtopic ||
                result.result?.difficulty) && (

                <div className="flex flex-wrap gap-3">

                  {result.result?.topic && (
                    <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-medium capitalize text-cyan-700">
                      Topic:{" "}
                      {formatLabel(result.result.topic)}
                    </span>
                  )}

                  {result.result?.subtopic && (
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium capitalize text-blue-700">
                      {formatLabel(result.result.subtopic)}
                    </span>
                  )}

                  {result.result?.difficulty && (
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium capitalize text-slate-600">
                      {formatLabel(result.result.difficulty)}
                    </span>
                  )}

                </div>
              )}

              {/* ================= ANSWERS ================= */}
{/* ================= ANSWERS ================= */}
{result.result?.answers &&
  Object.keys(result.result.answers).length > 0 && (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-cyan-600">
        Answer
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(result.result.answers).map(
          ([key, value]) => {
            // Support both:
            // { answer: "60" }
            // and:
            // { result: { answer: "60" } }

            const answer =
              value?.answer ??
              value?.result?.answer ??
              null;

            if (answer == null) {
              return null;
            }

            return (
              <div
                key={key}
                className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-medium capitalize text-slate-500">
                  {key === "result"
                    ? "Correct Answer"
                    : formatLabel(key)}
                </p>

                <p className="mt-3 text-4xl font-bold text-blue-600">
                  {answer}
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  )}

              {/* ================= ENGLISH ANSWER ================= */}

              {result.result?.answer && (
                <div className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-6">

                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                    Correct Answer
                  </p>

                  <p className="mt-2 text-3xl font-bold text-blue-600">
                    {result.result.answer}
                  </p>

                </div>
              )}

              {/* ================= METHOD ================= */}

              {result.result?.method && (
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    AI Method
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    {result.result.method}
                  </p>

                </div>
              )}

              {/* ================= EXPLANATION ================= */}

              {result.result?.explanation && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Explanation
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    {result.result.explanation}
                  </p>

                </div>
              )}

              {/* ================= FALLBACK ================= */}

              {!result.result?.answers &&
                !result.result?.answer &&
                !result.result?.method &&
                !result.result?.explanation && (

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <p className="text-sm text-slate-500">
                    The AI returned a result, but there is no
                    displayable answer data.
                  </p>

                </div>
              )}

            </div>

          </section>
        )}

      </main>
    </div>
  );
}

export default SolverAI;