import React from "react";
import Routes from "./routes";
import { ToastContainer } from "./components/utilis";
import { ThemeProvider } from "./components/template/ThemeProvider";


export default function App() {
  return (
    <>
      <ThemeProvider>
        <ToastContainer />
        <Routes />
      </ThemeProvider>
    </>
  );
}
