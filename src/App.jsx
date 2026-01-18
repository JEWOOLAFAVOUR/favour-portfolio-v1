import React from "react";
import { ThemeProvider } from "./components/template/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black dark:text-white">
            Hi, my name is Favour
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Portfolio Coming Soon...
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}
