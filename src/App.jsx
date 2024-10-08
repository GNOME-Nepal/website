import React from "react";
import Router from "./route.jsx";
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
  </ThemeProvider>
      
    </>
  );
}

export default App;
