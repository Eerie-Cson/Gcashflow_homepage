import React, { useState } from "react";
import { CheckCircle, ArrowUpDown, ArrowRight, ArrowLeft } from "lucide-react";

const Scenario = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="scenarios" className="py-20 bg-white overflow-hidden relative">
      {/* Enhanced Abstract Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="abstract-pattern"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(10)"
          >
            <circle cx="10" cy="10" r="8" fill="#3B82F6" opacity="0.2" />
            <circle cx="50" cy="50" r="25" fill="#6366F1" opacity="0.3" />
            <path
              d="M80 30 L90 40 L80 50 L70 40 Z"
              fill="#4F46E5"
              opacity="0.3"
            />
            <rect
              x="20"
              y="60"
              width="15"
              height="15"
              fill="#2563EB"
              opacity="0.2"
            />
            <path
              d="M40 80 C50 70, 60 90, 70 80"
              stroke="#4F46E5"
              strokeWidth="3"
              fill="none"
              opacity="0.3"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#abstract-pattern)" />
        </svg>
      </div> */}
      <div className="absolute  w-full h-16 left-1/4 bg-blue-50 transform rotate-3 skew-x-3 top-0 "></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-indigo-50 transform skew-y-3"></div>

      {/* Blurred Background Elements - Kept from original design */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Reversed layout: Content on right, main component on left */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left side: Main component - KEPT DESIGN */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 h-[550px]">
                {/* First Column - Blue Section - KEPT INTACT */}
                <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mt-12 -mr-12"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400 opacity-20 rounded-full -ml-12 -mb-12"></div>

                  {/* Content Section - MODIFIED TEXT DESIGN */}
                  <div className="relative z-10 flex-grow">
                    {activeTab === 0 && (
                      <>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">
                          Cash-In Process
                        </h3>
                        <p className="text-white/90 mb-5 text-sm font-light leading-relaxed">
                          When a customer wants to convert their physical cash
                          to GCash:
                        </p>
                        <ul className="space-y-5">
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                1
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              The customer pays you with real cash, including
                              your profit fee
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                2
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              You transfer the equivalent amount (excluding
                              profit) to their GCash account
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                3
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              Your GCash balance decreases while your cash
                              balance increases
                            </p>
                          </li>
                        </ul>
                      </>
                    )}

                    {activeTab === 1 && (
                      <>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">
                          Cash-Out (Profit in Transfer)
                        </h3>
                        <p className="text-white/90 mb-5 text-sm font-light leading-relaxed">
                          When a customer wants to convert their GCash to
                          physical cash:
                        </p>
                        <ul className="space-y-5">
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                1
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              The customer transfers the cash-out amount plus
                              your profit to your GCash account
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                2
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              You provide them with the equivalent real cash
                              (excluding profit)
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                3
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              Your GCash balance increases while your cash
                              balance decreases
                            </p>
                          </li>
                        </ul>
                      </>
                    )}

                    {activeTab === 2 && (
                      <>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">
                          Cash-Out (Separate Profit)
                        </h3>
                        <p className="text-white/90 mb-5 text-sm font-light leading-relaxed">
                          Alternative cash-out method with separate profit
                          payment:
                        </p>
                        <ul className="space-y-5">
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                1
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              The customer transfers only the cash-out amount to
                              your GCash account
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                2
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              They pay your profit separately in real cash
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mt-1 mr-3 flex-shrink-0">
                              <span className="text-white font-bold text-xs">
                                3
                              </span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                              You provide the cash-out amount from your cash
                              balance
                            </p>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>

                  {/* Improved Tab Section at the Bottom of the Blue Area */}
                  <div className="mt-6 border-t border-white/10 pt-4 relative z-10">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {[
                        "Cash-In",
                        "Cash-Out (Profit in Transfer)",
                        "Cash-Out (Separate Profit)",
                      ].map((tab, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 ${
                            activeTab === index
                              ? "bg-white text-blue-600 shadow-md transform scale-105"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Column - White Section - KEPT DESIGN WITH UPDATED TEXT */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-bold tracking-tight">
                      Transaction Example
                    </h4>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-2">
                        Status:
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-md">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider">
                            Transaction Details
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            {activeTab === 0
                              ? "Cash-In"
                              : activeTab === 1
                              ? "Cash-Out (Profit in Transfer)"
                              : "Cash-Out (Separate Profit)"}
                          </p>
                        </div>
                        <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md">
                          {activeTab === 0 ? (
                            <ArrowRight size={16} className="text-green-600" />
                          ) : (
                            <ArrowLeft size={16} className="text-blue-600" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white">
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-xs font-medium tracking-wide">
                            Transaction Amount
                          </span>
                          <span className="font-medium text-sm">
                            ₱ {activeTab === 0 ? "500.00" : "1,000.00"}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 text-xs font-medium tracking-wide">
                            Profit Fee
                          </span>
                          <span className="font-medium text-green-600 text-sm">
                            ₱ {activeTab === 0 ? "15.00" : "20.00"}
                          </span>
                        </div>

                        {activeTab === 0 && (
                          <>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 text-xs font-medium tracking-wide">
                                Customer Pays (Cash)
                              </span>
                              <span className="font-medium text-sm">
                                ₱ 515.00
                              </span>
                            </div>
                            <div className="flex justify-between py-2">
                              <span className="text-gray-600 text-xs font-medium tracking-wide">
                                Customer Receives (GCash)
                              </span>
                              <span className="font-medium text-sm">
                                ₱ 500.00
                              </span>
                            </div>
                          </>
                        )}

                        {activeTab === 1 && (
                          <>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 text-xs font-medium tracking-wide">
                                Customer Pays (GCash)
                              </span>
                              <span className="font-medium text-sm">
                                ₱ 1,020.00
                              </span>
                            </div>
                            <div className="flex justify-between py-2">
                              <span className="text-gray-600 text-xs font-medium tracking-wide">
                                Customer Receives (Cash)
                              </span>
                              <span className="font-medium text-sm">
                                ₱ 1,000.00
                              </span>
                            </div>
                          </>
                        )}

                        {activeTab === 2 && (
                          <>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 text-xs font-medium tracking-wide">
                                Customer Pays (GCash)
                              </span>
                              <span className="font-medium text-sm">
                                ₱ 1,000.00
                              </span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 text-xs font-medium tracking-wide">
                                Customer Pays (Profit in Cash)
                              </span>
                              <span className="font-medium text-sm">
                                ₱ 20.00
                              </span>
                            </div>
                            <div className="flex justify-between py-2">
                              <span className="text-gray-600 text-xs font-medium tracking-wide">
                                Customer Receives (Cash)
                              </span>
                              <span className="font-medium text-sm">
                                ₱ 1,000.00
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Enhanced info box - smaller */}
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 p-1 bg-blue-100 rounded-md mr-2">
                            <CheckCircle size={14} className="text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-xs tracking-tight">
                              Balance Updates
                            </p>
                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                              Your balances are automatically updated after each
                              transaction, ensuring accurate tracking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Heading and description - UPDATED TEXT DESIGN */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 sticky top-8 self-start">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4 transition-all duration-300 hover:bg-blue-200">
              <ArrowUpDown size={24} className="text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Transaction Scenarios
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed font-light">
              Learn how our system handles different transaction types with our
              interactive explorer
            </p>
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <h3 className="font-medium text-indigo-900 mb-2 tracking-tight">
                Quick Tips
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Click on different scenario tabs to see how each transaction
                type works. The example calculations automatically update to
                show you the numbers.
              </p>
            </div>

            {/* Additional information section - UPDATED TEXT DESIGN */}
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <ArrowRight size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 tracking-tight">
                    Cash Flow Management
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Keep track of your balances to ensure you always have enough
                    cash and GCash to meet customer demands.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 tracking-tight">
                    Profit Tracking
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our system automatically calculates and records your profits
                    from each transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scenario;
