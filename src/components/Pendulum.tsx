type PendulumProps = {
  length: number;
  duration: number;
  angle: number;
  delay?: number;
};

export default function Pendulum({
  length,
  duration,
  angle,
  delay = 0,
}: PendulumProps) {
  return (
    <div
      className="origin-top"
      style={{
        animation: `pendulum ${duration}s ease-in-out ${delay}s infinite`,
        ["--angle" as any]: `${angle}deg`,
      }}
    >
      {/* Pivot */}
      <div className="mx-auto h-2 w-2 rounded-full bg-zinc-900" />

      {/* Rod */}
      <div
        className="mx-auto w-px bg-zinc-300"
        style={{ height: `${length}px` }}
      />

      {/* Weight */}
      <div className="-mt-1 flex justify-center">
        <div className="h-5 w-5 rounded-full border border-zinc-300 bg-white shadow-sm" />
      </div>
    </div>
  );
}
