/* eslint no-use-before-define: 0 */
import React from "react";

const TALLY_SRC = "https://tally.so/widgets/embed.js";
const TALLY_FORM_URL = "https://tally.so/r/ja95O6";

const CoreTeamForm = () => {
  React.useEffect(() => {
    const scriptSelector = `script[src="${TALLY_SRC}"]`;

    const loadTally = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        document
          .querySelectorAll("iframe[data-tally-src]:not([src])")
          .forEach((iframeEl) => {
            iframeEl.src = iframeEl.dataset.tallySrc;
          });
      }
    };

    // If Tally is already loaded, just load the embeds
    if (window.Tally) {
      loadTally();
      return;
    }

    // If the script is not present, add it
    if (!document.querySelector(scriptSelector)) {
      const script = document.createElement("script");
      script.src = TALLY_SRC;
      script.onload = loadTally;
      script.onerror = loadTally;
      document.body.appendChild(script);
    } else {
      // If script is present but not loaded yet, wait for it
      document
        .querySelector(scriptSelector)
        .addEventListener("load", loadTally);
    }

    return () => {
      const existingScript = document.querySelector(scriptSelector);
      if (existingScript) {
        existingScript.removeEventListener("load", loadTally);
      }
    };
  }, []);

  return (
    <iframe
      data-tally-src={TALLY_FORM_URL}
      width="100%"
      height="100%"
      title="GNOME Nepal Leaders Application form"
      style={{
        background: "#fff",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "block",
      }}
      sandbox="allow-scripts allow-same-origin allow-forms"
    ></iframe>
  );
};

export default CoreTeamForm;
