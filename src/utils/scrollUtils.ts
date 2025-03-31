export const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", targetId === "#hero" ? "/" : targetId);
    } else {
      window.location.hash = targetId;
    }
  }
};
