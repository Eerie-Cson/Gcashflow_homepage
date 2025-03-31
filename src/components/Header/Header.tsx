// src/components/Header/Header.tsx
"use client";
import React, { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { SignInButton } from "./SignInButton";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const scrollPosition = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollPosition > 10
            ? "bg-black/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <Navigation />
              <SignInButton />
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">Open menu</span>
                {/* Add your mobile menu icon here */}
              </button>
            </div>
          </div>
        </div>
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>
    </>
  );
};
