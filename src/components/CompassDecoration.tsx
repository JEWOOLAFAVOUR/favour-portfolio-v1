export default function CompassDecoration() {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      {/* Outer Ring */}
      <div className="absolute h-28 w-28 rounded-full border border-zinc-200" />

      {/* Rotating Part */}
      <div className="absolute animate-[spin_18s_linear_infinite]">
        {/* Vertical */}
        <div className="absolute left-1/2 top-0 h-28 w-px -translate-x-1/2 bg-zinc-300" />

        {/* Horizontal */}
        <div className="absolute left-0 top-1/2 h-px w-28 -translate-y-1/2 bg-zinc-300" />

        {/* Diagonal */}
        <div className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zinc-300" />

        {/* Diagonal */}
        <div className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-zinc-300" />
      </div>

      {/* Center Dot */}
      <div className="relative z-10 h-3 w-3 rounded-full bg-zinc-900" />
    </div>
  );
}
