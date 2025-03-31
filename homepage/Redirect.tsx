import React from "react";
import { CheckCircle, ExternalLink, BarChart } from "lucide-react";

const Redirect = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Calculate Your Profits
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Use our dedicated app to calculate transaction profits, manage
                your GCash business, and track your performance in real-time.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <p>Accurate profit calculations for any transaction amount</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <p>Track your daily, weekly, and monthly earnings</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <p>Comprehensive transaction history and analytics</p>
                </li>
              </ul>
              <a
                href="/app"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Go to App <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Smart Profit Management
                </h3>
                <p className="text-white/80 max-w-xs mx-auto">
                  Take control of your GCash business with our specialized
                  profit management tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redirect;
