import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <motion.div
          key="sun"
          initial={{ rotate: 90, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: -90, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ rotate: -90, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
