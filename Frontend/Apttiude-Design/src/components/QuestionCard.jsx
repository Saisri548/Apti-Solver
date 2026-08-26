import { Calculator, Sparkles } from "lucide-react";

function QuestionCard({
  question,
  questionNumber = 1,
  totalQuestions = 10,
  topic = "Quantitative Aptitude",
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur-xl">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
            <Calculator size={19} />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              {topic}
            </p>

            <p className="text-xs text-slate-500">
              Question {questionNumber} of {totalQuestions}
            </p>
          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
          <Sparkles size={13} />
          AI Generated
        </div>

      </div>


      {/* Progress */}

      <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-white transition-all"
          style={{
            width: `${(questionNumber / totalQuestions) * 100}%`,
          }}
        />

      </div>


      {/* Question */}

      <div className="mt-8">

        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-slate-500">
          Question
        </p>

        <h2 className="text-xl font-medium leading-relaxed text-slate-100 sm:text-2xl">
          {question}
        </h2>

      </div>

    </div>
  );
}

export default QuestionCard;