/* eslint no-use-before-define: 0 */
import React from "react";

const TALLY_SRC = "https://tally.so/widgets/embed.js";
const TALLY_FORM_URL = "https://tally.so/r/w551JP?transparentBackground=1";

const Tickets = () => {
  React.useEffect(() => {
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
    if (!document.querySelector(`script[src="${TALLY_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = TALLY_SRC;
      script.onload = loadTally;
      script.onerror = loadTally;
      document.body.appendChild(script);
    } else {
      // If script is present but not loaded yet, wait for it
      document
        .querySelector(`script[src="${TALLY_SRC}"]`)
        .addEventListener("load", loadTally);
    }
  }, []);

  return (
    <iframe
      data-tally-src={TALLY_FORM_URL}
      width="100%"
      height="100%"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Registration form"
    ></iframe>
  );
};

export default Tickets;
