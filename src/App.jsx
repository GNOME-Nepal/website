import Router from "./route.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
