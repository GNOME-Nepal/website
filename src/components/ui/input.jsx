import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
       
        "border-gray-300 bg-white text-black placeholder-gray-500 ring-gray-300 ring-offset-white dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:ring-gray-600 dark:ring-offset-gray-800",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
