// src/components/Header/MobileMenu.tsx
import React from "react";
import Navigation from "./Navigation";
import { SignInButton } from "./SignInButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-black/90 backdrop-blur-xl pt-4 pb-6 px-6 border-b border-blue-900/40">
      <Navigation isMobile={true} onItemClick={onClose} />
      <SignInButton fullWidth={true} />
    </div>
  );
};
