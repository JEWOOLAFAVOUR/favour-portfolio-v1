import { useLocation } from "react-router-dom";

export default function LoadingScreen() {
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  const isWorkPage = pathname === "/work";
  const pageMessage = isAboutPage
    ? "A little more about the person behind the work."
    : isWorkPage
      ? "A closer look at the work behind the ideas."
      : null;

  return (
    <div className="loader fixed inset-0 z-[9999] overflow-hidden bg-[#0d0d0d]">
      {/* Logo */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-[58px] font-semibold leading-[0.9] tracking-[-0.06em]">
            JEWOOLA
            <br />
            FAVOUR
          </h1>
          {pageMessage && (
            <p className="mt-5 text-lg font-light leading-snug tracking-[0.02em] text-white/75 md:whitespace-nowrap">
              {pageMessage}
            </p>
          )}
        </div>
      </div>

      {/* Orange Screen */}
      <div className="loader-orange" />

      {/* White Screen */}
      <div className="loader-white" />
    </div>
  );
}
