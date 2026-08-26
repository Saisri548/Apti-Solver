import { Link } from "react-router-dom";
import { Brain, MessageCircle, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
            <Brain size={20} />
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            Apti<span className="text-slate-400">Solve</span>
          </span>
        </Link>


        {/* Navigation */}

        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/quantitative"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Learn
          </Link>

          <Link
            to="/solver"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Practice
          </Link>

        </div>


        {/* Right */}

        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">

          <Sparkles size={16} />

          AI Solver

        </button>

      </div>

    </nav>
  );
}

export default Navbar;