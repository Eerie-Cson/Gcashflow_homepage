import { useEffect } from "react";

const useHashScroll = () => {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Handle initial scroll
    handleHashScroll();

    // Handle hash changes
    window.addEventListener("hashchange", handleHashScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);
};

export default useHashScroll;
