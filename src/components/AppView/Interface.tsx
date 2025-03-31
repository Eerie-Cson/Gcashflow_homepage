import {
  BarChart2,
  Filter,
  Shield,
  RefreshCw,
  MoreHorizontal,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import React from "react";

const Interface = () => {
  return (
    <>
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-blue-900/5 to-black/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Interface, Simplified Workflow
              </h2>
              <p className="mt-6 text-xl text-gray-300">
                An intuitive dashboard that gives you complete control over your
                GCash business operations.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-900/30 rounded-lg text-blue-400">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">
                      Real-time Balance Tracking
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Track your GCash and real cash balances simultaneously
                      with instant updates after each transaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-900/30 rounded-lg text-blue-400">
                    <Filter className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">
                      Advanced Filtering
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Quickly find, update, or delete transactions with powerful
                      search and filter capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-900/30 rounded-lg text-blue-400">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">
                      Role-Based Access
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Set different permissions for cashiers and admins to
                      maintain security while enabling team collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-black to-gray-900 p-2 rounded-3xl border border-gray-800 shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400"></div>
                <div className="bg-gray-900 rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Dashboard Overview
                      </h4>
                      <p className="text-sm text-gray-400">
                        Today, March 30, 2025
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-blue-400 transition-colors">
                        <RefreshCw className="h-5 w-5" />
                      </button>
                      <button className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-blue-400 transition-colors">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/80 p-4 rounded-2xl">
                      <p className="text-sm text-gray-400">GCash Balance</p>
                      <p className="text-2xl font-bold text-white">
                        ₱24,567.00
                      </p>
                      <div className="mt-2 flex items-center text-green-400 text-sm">
                        <ArrowRight className="h-4 w-4 mr-1" />
                        <span>+₱1,245 today</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/80 p-4 rounded-2xl">
                      <p className="text-sm text-gray-400">Cash Balance</p>
                      <p className="text-2xl font-bold text-white">
                        ₱18,320.00
                      </p>
                      <div className="mt-2 flex items-center text-red-400 text-sm">
                        <ArrowRight className="h-4 w-4 mr-1" />
                        <span>-₱745 today</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800/60 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-white">Cash-In</p>
                            <p className="text-xs text-gray-400">Just now</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-white">₱500.00</p>
                          <p className="text-xs text-gray-400">
                            Profit: ₱15.00
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/60 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-400">
                            <ArrowUpRight className="h-4 w-4 transform rotate-90" />
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-white">Cash-Out</p>
                            <p className="text-xs text-gray-400">15 mins ago</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-white">₱1,000.00</p>
                          <p className="text-xs text-gray-400">
                            Profit: ₱20.00
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/60 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-white">Cash-In</p>
                            <p className="text-xs text-gray-400">45 mins ago</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-white">₱250.00</p>
                          <p className="text-xs text-gray-400">
                            Profit: ₱10.00
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
      </section>
    </>
  );
};

export default Interface;
