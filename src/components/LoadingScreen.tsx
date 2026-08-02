export default function LoadingScreen() {
  return (
    <div className="loader fixed inset-0 z-[9999] overflow-hidden bg-[#0d0d0d]">
      {/* Logo */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <h1 className="text-center text-[58px] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
          Jewoola
          <br />
          Favour
        </h1>
      </div>

      {/* Orange Screen */}
      <div className="loader-orange" />

      {/* White Screen */}
      <div className="loader-white" />
    </div>
  );
}
