// Pricing.jsx
import React from "react";
import { Check, Info, AlertCircle } from "lucide-react";

interface PricingProps {
  id: string;
}
const Pricing: React.FC<PricingProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-white"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-blue-50 to-white"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Info size={24} className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Profit Structure & Transaction Fees
          </h2>
          <p className="text-xl text-gray-600">
            Transparent and customizable profit settings to maximize your GCash
            business revenue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beginner Tier */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform transition-transform hover:scale-105">
            <div className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <h3 className="text-xl font-bold mb-2">Starter Plan</h3>
              <div className="flex items-end">
                <span className="text-4xl font-bold">₱0</span>
                <span className="text-lg ml-2 mb-1">/month</span>
              </div>
              <p className="mt-2 text-blue-100">Perfect for occasional users</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>3% profit on Cash-In transactions</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>2% profit on Cash-Out transactions</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Basic transaction tracking</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Daily transaction limit: ₱10,000</span>
                </li>
              </ul>
              <button className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Start Free
              </button>
            </div>
          </div>

          {/* Professional Tier */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-600 transform transition-transform hover:scale-105 relative z-20">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
              Most Popular
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <h3 className="text-xl font-bold mb-2">Professional Plan</h3>
              <div className="flex items-end">
                <span className="text-4xl font-bold">₱199</span>
                <span className="text-lg ml-2 mb-1">/month</span>
              </div>
              <p className="mt-2 text-blue-100">For serious GCash businesses</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Customizable profit percentages</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Customer management system</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Daily transaction limit: ₱50,000</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Email notifications</span>
                </li>
              </ul>
              <button className="w-full mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform transition-transform hover:scale-105">
            <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
              <h3 className="text-xl font-bold mb-2">Enterprise Plan</h3>
              <div className="flex items-end">
                <span className="text-4xl font-bold">₱499</span>
                <span className="text-lg ml-2 mb-1">/month</span>
              </div>
              <p className="mt-2 text-indigo-100">
                For multi-branch operations
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>All Professional features</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Multi-user access with roles</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Unlimited transaction history</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>API integration capabilities</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full mt-8 px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start">
            <AlertCircle
              size={24}
              className="text-blue-600 mr-4 flex-shrink-0"
            />
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                Custom Solutions Available
              </h4>
              <p className="text-gray-700">
                Need a custom profit structure or specific features for your
                business? We offer tailored solutions to match your exact
                requirements. Contact our team to discuss your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
