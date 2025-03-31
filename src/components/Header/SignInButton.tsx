import Link from "next/link";

interface SignInButtonProps {
  fullWidth?: boolean;
}

export const SignInButton: React.FC<SignInButtonProps> = ({
  fullWidth = false,
}) => {
  return (
    <Link href="/signin">
      <button
        className={`bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 
          text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer
          ${fullWidth ? "w-full mt-4" : ""}`}
      >
        Sign In
      </button>
    </Link>
  );
};
