import React from "react";
import { ExternalLink, Users } from "lucide-react";

const Cta = () => {
  // Custom gradient styles
  const primaryGradient = {
    background:
      "linear-gradient(135deg, #1a56db 0%, #4f46e5 50%, #6366f1 100%)",
  };

  return (
    <section className="pt-40 pb-64 relative overflow-hidden">
      {/* New background - clean light gradient instead */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-200 rounded-full opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Have questions about this GCash tool?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            I'd love to hear your feedback and help you manage your GCash
            transactions more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center">
              Get in Touch <Users size={18} className="ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
