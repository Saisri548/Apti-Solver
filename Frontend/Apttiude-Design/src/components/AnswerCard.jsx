import {
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

function AnswerCard({
  answer,
  explanation,
  rule,
  confidence,
}) {
  return (
    <div className="rounded-3xl border border-emerald-400/10 bg-emerald-400/[0.03] p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">

            <CheckCircle2 size={21} />

          </div>

          <div>

            <p className="font-medium text-white">
              Correct Answer
            </p>

            <p className="text-xs text-slate-500">
              AI explanation
            </p>

          </div>

        </div>


        {confidence !== undefined && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">

            <Sparkles size={13} />

            {Math.round(confidence * 100)}% confidence

          </div>
        )}

      </div>


      {/* Answer */}

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">

        <p className="text-xs uppercase tracking-widest text-slate-500">
          Answer
        </p>

        <p className="mt-2 text-2xl font-semibold text-emerald-400">
          {answer}
        </p>

      </div>


      {/* Explanation */}

      {explanation && (
        <div className="mt-5">

          <div className="flex items-center gap-2">

            <Lightbulb
              size={17}
              className="text-amber-300"
            />

            <p className="font-medium text-white">
              Explanation
            </p>

          </div>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            {explanation}
          </p>

        </div>
      )}


      {/* Rule */}

      {rule && (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Rule / Shortcut
          </p>

          <p className="mt-2 text-sm text-slate-300">
            {rule}
          </p>

        </div>
      )}

    </div>
  );
}

export default AnswerCard;