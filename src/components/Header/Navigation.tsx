"use client";
import React from "react";
import { smoothScroll } from "@/utils/scrollUtils";

const Navigation = ({ isMobile = false, onItemClick = () => {} }) => {
  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => {
            smoothScroll(e, item.href);
            onItemClick();
          }}
          className={`${
            isMobile
              ? "block py-3 text-xl text-gray-200 hover:text-blue-400 font-medium"
              : "text-gray-300 hover:text-blue-400 font-medium transition-colors text-lg"
          }`}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default Navigation;
