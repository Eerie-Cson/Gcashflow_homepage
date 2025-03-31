import { smoothScroll } from "@/utils/scrollUtils";

const Logo = () => {
  return (
    <a
      href="/"
      onClick={(e) => smoothScroll(e, "#hero")}
      className="flex items-center"
    >
      <img
        src="/images/icon.png"
        alt="GCash Flow Logo"
        className="h-10 w-auto"
      />
      <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hidden md:block">
        GCashFlow
      </span>
    </a>
  );
};

export default Logo;
