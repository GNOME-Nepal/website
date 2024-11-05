import { useEffect } from "react";

const sponsor_url = import.meta.env.VITE_SPONSOR_URL;

const Sponsor = () => {
  useEffect(() => {
    window.location.href = sponsor_url;
  }, []);

  return;
};

export default Sponsor;
