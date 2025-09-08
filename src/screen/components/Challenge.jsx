import { useState, useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";
import {
  ExternalLink,
  FileText,
  Download,
  Calendar,
  Clock,
  Award,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Challenge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [isMounted, setIsMounted] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  useEffect(() => {
    if (isInView && !isMounted) {
      setIsMounted(true);
    }
  }, [isInView, isMounted]);

  const challenges = [
    {
      id: 1,
      title: "JavaScript Zero to Hero: Bank App",
      description:
        "A comprehensive 10-day challenge to build a complete banking application from scratch using vanilla JavaScript. Master DOM manipulation, local storage, API integration, and modern ES6+ features.",
      difficulty: "Intermediate",
      duration: "10 Days",
      type: "Project-Based",
      tech: ["Vanilla JavaScript"],
      pdfFile: "/javascript_zero_to_hero_bank_app_day1_10.pdf",
      dateCreated: "September 6, 2024",
      status: "Completed",
      highlights: ["Learn advanced JavaScript concepts"],
    },
    {
      id: 2,
      title: "React Native Mobile Development",
      description:
        "Master mobile app development with React Native. Build cross-platform applications with navigation, state management, and native device features.",
      difficulty: "Advanced",
      duration: "14 Days",
      type: "Mobile Development",
      tech: [
        "React Native",
        "Redux",
        "Navigation",
        "AsyncStorage",
        "Native Modules",
      ],
      pdfFile: null, // Coming soon
      dateCreated: "Coming Soon",
      status: "Coming Soon",
      highlights: [
        "Cross-platform mobile development",
        "State management with Redux",
        "Native device integrations",
        "Performance optimization",
        "App store deployment",
      ],
    },
    {
      id: 3,
      title: "Full-Stack MERN Challenge",
      description:
        "Build a complete full-stack application using MongoDB, Express.js, React, and Node.js. Learn authentication, database design, and deployment.",
      difficulty: "Advanced",
      duration: "21 Days",
      type: "Full-Stack",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Deployment"],
      pdfFile: null, // Coming soon
      dateCreated: "Coming Soon",
      status: "Coming Soon",
      highlights: [
        "Complete MERN stack mastery",
        "Authentication & authorization",
        "Database design and optimization",
        "RESTful API development",
        "Production deployment",
      ],
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "text-green bg-green/10 border-green/20";
      case "intermediate":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "advanced":
        return "text-red-400 bg-red-400/10 border-red-400/20";
      default:
        return "text-slate bg-slate/10 border-slate/20";
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "text-green bg-green/10 border-green/20";
      case "in progress":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "coming soon":
        return "text-slate bg-slate/10 border-slate/20";
      default:
        return "text-slate bg-slate/10 border-slate/20";
    }
  };

  const openPDF = (pdfFile) => {
    if (pdfFile) {
      // Extract filename from path (remove leading slash)
      const filename = pdfFile.startsWith("/") ? pdfFile.substring(1) : pdfFile;
      // Navigate to the PDF viewer route
      window.location.href = `/challenge/${filename}`;
    }
  };

  return (
    <section className="section" ref={ref}>
      {/* Header */}
      <div className="mb-16">
        <Link
          to="/"
          className={`inline-flex items-center text-green hover:text-green/80 mb-8 transition-all duration-500 ${
            isMounted ? "opacity-100" : "opacity-0 translate-x-4"
          }`}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <h1
          className={`text-4xl md:text-6xl font-bold text-lightest-slate mb-4 transition-all duration-500 ${
            isMounted ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          Development Challenges
        </h1>

        <p
          className={`text-xl text-slate max-w-2xl transition-all duration-500 ${
            isMounted ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMounted ? "200ms" : "0ms" }}
        >
          Level up your coding skills with hands-on challenges designed to push
          your development abilities to the next level.
        </p>
      </div>

      {/* Challenge Grid */}
      <div className="grid gap-8 lg:gap-12">
        {challenges.map((challenge, index) => (
          <div
            key={challenge.id}
            className={`bg-light-navy rounded-lg border border-lightest-navy/30 overflow-hidden hover:border-green/30 hover:-translate-y-1 transition-all duration-500 ${
              isMounted ? "opacity-100" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMounted ? `${index * 200 + 300}ms` : "0ms",
            }}
          >
            {/* Challenge Header */}
            <div className="p-6 border-b border-lightest-navy/30">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-semibold text-lightest-slate mb-2">
                    {challenge.title}
                  </h2>
                  <p className="text-slate leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                {challenge.pdfFile && (
                  <Link
                    to={`/challenge/${
                      challenge.pdfFile.startsWith("/")
                        ? challenge.pdfFile.substring(1)
                        : challenge.pdfFile
                    }`}
                    className="button flex items-center gap-2 flex-shrink-0"
                  >
                    <FileText size={18} />
                    View PDF
                  </Link>
                )}
              </div>

              {/* Meta Information */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Award size={16} className="text-green" />
                  <span className="text-light-slate">Difficulty:</span>
                  <span
                    className={`px-2 py-1 rounded text-xs border ${getDifficultyColor(
                      challenge.difficulty
                    )}`}
                  >
                    {challenge.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-green" />
                  <span className="text-light-slate">Duration:</span>
                  <span className="text-lightest-slate">
                    {challenge.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-green" />
                  <span className="text-light-slate">Created:</span>
                  <span className="text-lightest-slate">
                    {challenge.dateCreated}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <FileText size={16} className="text-green" />
                  <span className="text-light-slate">Status:</span>
                  <span
                    className={`px-2 py-1 rounded text-xs border ${getStatusColor(
                      challenge.status
                    )}`}
                  >
                    {challenge.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Challenge Body */}
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-lightest-slate mb-3 flex items-center">
                    <ChevronRight size={16} className="text-green mr-1" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {challenge.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-lightest-navy text-light-slate rounded border border-lightest-navy/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-lg font-semibold text-lightest-slate mb-3 flex items-center">
                    <ChevronRight size={16} className="text-green mr-1" />
                    What You'll Learn
                  </h3>
                  <ul className="space-y-2">
                    {challenge.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-green mr-2 mt-0.5 flex-shrink-0">
                          ▹
                        </span>
                        <span className="text-slate">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-lightest-navy/30">
                {challenge.pdfFile ? (
                  <>
                    <button
                      onClick={() => openPDF(challenge.pdfFile)}
                      className="button flex items-center gap-2"
                    >
                      <FileText size={18} />
                      View Challenge
                    </button>
                    <Link
                      to={`/challenge/${
                        challenge.pdfFile.startsWith("/")
                          ? challenge.pdfFile.substring(1)
                          : challenge.pdfFile
                      }`}
                      className="button bg-transparent hover:bg-green/10 flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Open Full Page
                    </Link>
                  </>
                ) : (
                  <button
                    disabled
                    className="button opacity-50 cursor-not-allowed flex items-center gap-2"
                  >
                    <Clock size={18} />
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        className={`mt-16 text-center transition-all duration-500 ${
          isMounted ? "opacity-100" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: isMounted ? "800ms" : "0ms" }}
      >
        <div className="bg-light-navy rounded-lg p-8 border border-lightest-navy/30">
          <h3 className="text-2xl font-semibold text-lightest-slate mb-4">
            Want to Create Your Own Challenge?
          </h3>
          <p className="text-slate mb-6 max-w-2xl mx-auto">
            Have an idea for a development challenge or want to contribute to
            the community? Let's collaborate and create something amazing
            together.
          </p>
          <Link
            to="/#contact"
            className="button inline-flex items-center gap-2"
          >
            <ExternalLink size={18} />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
