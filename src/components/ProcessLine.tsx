export default function ProcessLine() {
  return (
    <div className="mt-16 max-w-3xl">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium  tracking-[0.2em] text-zinc-400">
          Idea
        </span>

        <span className="text-xs font-medium  tracking-[0.2em] text-zinc-400">
          Execution
        </span>
      </div>

      <svg viewBox="0 0 1000 16" className="h-4 w-full overflow-visible">
        {/* Left square */}
        <rect x="0" y="5" width="6" height="6" rx="1" fill="#18181b" />

        {/* Right square */}
        <rect x="994" y="5" width="6" height="6" rx="1" fill="#18181b" />

        {/* Animated Line */}
        <line
          x1="6"
          y1="8"
          x2="994"
          y2="8"
          stroke="#18181b"
          strokeWidth="1.5"
          className="draw-line"
        />
      </svg>
    </div>
  );
}
