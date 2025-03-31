import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center py-4 px-16">
        <div className="flex items-center gap-3">
          <img
            src="/images/icon2.png"
            alt="GCF Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold">GCash Flow</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Features
          </a>
          <a
            href="#scenarios"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Scenarios
          </a>
          <a
            href="#profit"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Pricing
          </a>
          <a
            href="#support"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Support
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-16 shadow-md">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#scenarios"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Scenarios
            </a>
            <a
              href="#profit"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#support"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </a>
            <button className="mt-2 w-full bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
