import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                className="rounded-md"
                src="/images/logo2.png"
                alt="Logo"
                width={96}
                height={96}
              />
              <span className="text-lg font-bold ml-2">GCash Manager</span>
            </div>
            <p className="text-gray-400">
              A personal side project to help simplify GCash transactions for
              businesses and individuals.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">About This Project</h3>
            <p className="text-gray-400 mb-4">
              This tool was developed as a personal side project to address
              common challenges faced by GCash users who manage cash-in and
              cash-out transactions.
            </p>
            <p className="text-gray-400">
              Not affiliated with GCash or any financial institution.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
            <p className="text-gray-400 mb-4">
              I'm always looking to improve this tool. Feel free to reach out
              with suggestions or feedback.
            </p>
            <a
              href="mailto:contact@example.com"
              className="text-blue-400 hover:text-blue-300 transition flex items-center"
            >
              <ExternalLink size={16} className="mr-2" /> contact@example.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 GCash Manager. Personal project - All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
