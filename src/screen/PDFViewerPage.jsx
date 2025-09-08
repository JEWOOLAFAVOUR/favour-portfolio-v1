import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";
import Loader from "./components/Loader";

const PDFViewerPage = () => {
  const { pdfName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pdfExists, setPdfExists] = useState(false);
  const [challengeInfo, setChallengeInfo] = useState(null);

  // Challenge data mapping
  const challengeMap = {
    "javascript_zero_to_hero_bank_app_day1_10.pdf": {
      title: "JavaScript Zero to Hero: Bank App",
      description:
        "A comprehensive 10-day challenge to build a complete banking application from scratch using vanilla JavaScript.",
      difficulty: "Intermediate",
      duration: "10 Days",
      tech: ["Vanilla JavaScript"],
      dateCreated: "September 6, 2024",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Check if PDF exists in our challenge map
      if (challengeMap[pdfName]) {
        setPdfExists(true);
        setChallengeInfo(challengeMap[pdfName]);

        // Update document title for better SEO and user experience
        document.title = `${challengeMap[pdfName].title} - Jewoola Favour`;
      } else {
        document.title = `Challenge Not Found - Jewoola Favour`;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [pdfName]);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = `/${pdfName}`;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openPDFInNewTab = () => {
    window.open(`/${pdfName}`, "_blank");
  };

  if (isLoading) {
    return (
      <div className="bg-navy text-slate min-h-screen font-mono">
        <Loader />
      </div>
    );
  }

  if (!pdfExists) {
    return (
      <div className="bg-navy text-slate min-h-screen font-mono">
        <Navbar />
        <div className="px-6 lg:px-12 xl:px-24 max-w-screen-xl mx-auto relative">
          <SocialSidebar />
          <EmailSidebar />
          <main className="py-24 md:py-32 min-h-screen flex flex-col justify-center items-center text-center">
            <FileText className="text-green mb-8" size={80} />
            <h1 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-4">
              Challenge Not Found
            </h1>
            <p className="text-xl text-slate mb-8 max-w-2xl">
              The challenge PDF "{pdfName}" doesn't exist or may have been
              moved.
            </p>
            <div className="flex gap-4">
              <Link to="/challenge" className="button flex items-center gap-2">
                <ArrowLeft size={18} />
                Back to Challenges
              </Link>
              <Link
                to="/"
                className="button bg-transparent hover:bg-green/10 flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Go Home
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy text-slate min-h-screen font-mono">
      <Navbar />
      <div className="px-6 lg:px-12 xl:px-24 max-w-screen-xl mx-auto relative">
        <SocialSidebar />
        <EmailSidebar />
        <main className="py-24 md:py-32">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/challenge"
              className="inline-flex items-center text-green hover:text-green/80 mb-6 transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Challenges
            </Link>

            <div className="bg-light-navy rounded-lg p-6 border border-lightest-navy/30 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-4">
                {challengeInfo.title}
              </h1>
              <p className="text-slate mb-6">{challengeInfo.description}</p>

              {/* Meta Information */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-light-slate">Difficulty:</span>
                  <span className="text-green">{challengeInfo.difficulty}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-light-slate">Duration:</span>
                  <span className="text-lightest-slate">
                    {challengeInfo.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-light-slate">Created:</span>
                  <span className="text-lightest-slate">
                    {challengeInfo.dateCreated}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-light-slate">Type:</span>
                  <span className="text-lightest-slate">PDF Guide</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-lightest-slate mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {challengeInfo.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-lightest-navy text-light-slate rounded border border-lightest-navy/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={downloadPDF}
                  className="button flex items-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </button>
                <button
                  onClick={openPDFInNewTab}
                  className="button bg-transparent hover:bg-green/10 flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Open in New Tab
                </button>
              </div>
            </div>
          </div>

          {/* PDF Embed */}
          <div className="bg-light-navy rounded-lg p-4 border border-lightest-navy/30">
            <div
              className="bg-white rounded overflow-hidden"
              style={{ height: "80vh" }}
            >
              <iframe
                src={`/${pdfName}#toolbar=1&navpanes=1&scrollbar=1`}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title={challengeInfo.title}
              />
            </div>
          </div>

          {/* Alternative fallback */}
          <div className="mt-8 text-center">
            <p className="text-slate mb-4">
              Can't view the PDF? Try downloading it or opening in a new tab.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={downloadPDF}
                className="button flex items-center gap-2"
              >
                <Download size={18} />
                Download PDF
              </button>
              <a
                href={`/${pdfName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button bg-transparent hover:bg-green/10 flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Open Direct Link
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PDFViewerPage;
