import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";
import Loader from "./components/Loader";
import Challenge from "./components/Challenge";

function ChallengePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-navy text-slate min-h-screen font-mono">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="px-6 lg:px-12 xl:px-24 max-w-screen-xl mx-auto relative">
            <SocialSidebar />
            <EmailSidebar />
            <main className="py-24 md:py-32">
              <Challenge />
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default ChallengePage;
