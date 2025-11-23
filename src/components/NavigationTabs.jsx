"use client";

import { cn } from "@/lib/utils";

/**
 * NavigationTabs Component
 *
 * A reusable component for creating styled navigation tabs with rounded pill design.
 * Features dark mode support, smooth transitions, and hover effects.
 *
 * @example
 * ```jsx
 * const tabs = [
 *   { id: "tab1", label: "First Tab" },
 *   { id: "tab2", label: "Second Tab" }
 * ];
 *
 * <NavigationTabs
 *   tabs={tabs}
 *   activeTab={activeTab}
 *   onTabChange={(tabId) => setActiveTab(tabId)}
 * />
 * ```
 *
 * @param {Object} props - Component props
 * @param {Array<{id: string, label: string}>} props.tabs - Array of tab objects with id and label
 * @param {string} props.activeTab - Currently active tab id
 * @param {function} props.onTabChange - Callback function called when tab is clicked, receives tab id
 * @param {string} [props.className=""] - Additional CSS classes for the container
 */
export default function NavigationTabs({
  tabs = [],
  activeTab,
  onTabChange,
  className = "",
}) {
  // Default activeTab to first tab's id if not provided
  const safeActiveTab = typeof activeTab !== "undefined"
    ? activeTab
    : (tabs.length > 0 ? tabs[0].id : "");
  // Default onTabChange to a no-op function if not provided
  const safeOnTabChange = typeof onTabChange === "function"
    ? onTabChange
    : () => {};
  // Warn if tabs are present but activeTab is missing
  if (tabs.length > 0 && typeof activeTab === "undefined") {
    console.warn("NavigationTabs: 'activeTab' prop is missing. Defaulting to first tab.");
  }
  return (
    <div className={cn("flex justify-center mb-6", className)}>
      <div className="bg-[#f9f9f9] dark:bg-black rounded-full p-1 inline-flex shadow-lg border border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => safeOnTabChange(tab.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              safeActiveTab === tab.id
                ? "bg-black dark:bg-[#f9f9f9] text-[#f9f9f9] dark:text-black shadow-md"
                : "text-black dark:text-[#f9f9f9] hover:bg-gray-200/50 dark:hover:bg-gray-800/50",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
