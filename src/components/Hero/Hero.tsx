import { ArrowUpRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-600/40 text-blue-400 font-medium">
              Manage Your GCash Business Effortlessly
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white to-blue-400 bg-clip-text text-transparent mb-8">
              GCash Flow
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Automatically track GCash ↔ Cash balances and calculate profits on
              every transaction - no spreadsheets needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button className="relative group bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                Get Started
                <div className="absolute -top-1 -right-1 bg-white w-8 h-8 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </button>
              <a
                href="#how-it-works"
                className="border border-blue-600/40 hover:border-blue-400 hover:bg-blue-900/20 font-bold px-8 py-4 rounded-full transition-all duration-300"
              >
                How It Works
              </a>
            </div>

            {/* Image Container */}
            {/* <div className="w-full max-w-4xl relative">
              <div className="relative bg-gradient-to-r from-black to-gray-900 p-2 rounded-3xl border border-gray-800 shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden mx-auto">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400"></div>
                <div className="aspect-video bg-gray-800/30 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Dashboard Preview</span>
                </div>
              </div>

              {/* Background Effects *}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
