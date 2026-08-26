function OptionCard({
  option,
  index,
  selected,
  onClick,
  disabled = false,
}) {
  const letters = ["A", "B", "C", "D"];

  const isSelected = selected === index;

  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled}
      className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
        isSelected
          ? "border-white bg-white text-slate-950"
          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >

      {/* Letter */}

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${
          isSelected
            ? "bg-slate-950 text-white"
            : "bg-white/5 text-slate-400 group-hover:text-white"
        }`}
      >
        {letters[index]}
      </div>


      {/* Option */}

      <span className="text-sm font-medium sm:text-base">
        {option}
      </span>

    </button>
  );
}

export default OptionCard;