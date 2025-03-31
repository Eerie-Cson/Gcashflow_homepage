import { PieChart } from "lucide-react";
import React from "react";

const ProfitDefinitionSection = () => {
  return (
    <>
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Automated Profit Calculation
              </h2>
              <p className="mt-6 text-xl text-gray-300">
                Say goodbye to manual calculations. Our intelligent system
                automatically applies the right profit margins based on
                transaction amount.
              </p>

              <div className="mt-8 space-y-4">
                <div className="relative p-0.5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="relative bg-gray-900 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-medium text-white">₱1 - ₱45</p>
                      <p className="text-lg font-bold text-blue-400">
                        ₱5 profit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-0.5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="relative bg-gray-900 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-medium text-white">
                        ₱46 - ₱250
                      </p>
                      <p className="text-lg font-bold text-blue-400">
                        ₱10 profit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-0.5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="relative bg-gray-900 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-medium text-white">
                        ₱251 - ₱500
                      </p>
                      <p className="text-lg font-bold text-blue-400">
                        ₱15 profit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-0.5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="relative bg-gray-900 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-medium text-white">
                        ₱501 - ₱1000
                      </p>
                      <p className="text-lg font-bold text-blue-400">
                        ₱20 profit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-0.5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="relative bg-gray-900 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-medium text-white">
                        Beyond ₱1000
                      </p>
                      <p className="text-lg font-bold text-blue-400">
                        Cumulative profit
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-gray-400 italic">
                *Profit rates are fully customizable to match your business
                model
              </p>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
                  <div className="bg-gray-900 rounded-3xl p-8">
                    <div className="bg-gray-800 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-gray-400 text-sm">
                            Total Profit Today
                          </p>
                          <p className="text-3xl font-bold text-white">
                            ₱1,245.00
                          </p>
                        </div>
                        <div className="bg-blue-900/40 h-12 w-12 rounded-xl flex items-center justify-center text-blue-400">
                          <PieChart className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">
                              Cash-In Profit
                            </span>
                            <span className="text-white font-medium">
                              ₱745.00
                            </span>
                          </div>
                          <div className="mt-1 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">
                              Cash-Out Profit
                            </span>
                            <span className="text-white font-medium">
                              ₱500.00
                            </span>
                          </div>
                          <div className="mt-1 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <p className="text-lg font-semibold text-white">
                        Recent Transactions
                      </p>

                      <div className="bg-gray-800 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-white">Cash-In</p>
                            <p className="text-sm text-gray-400">10:45 AM</p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-400 font-semibold">
                              +₱500.00
                            </p>
                            <p className="text-sm text-gray-400">
                              Profit: ₱15.00
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-white">Cash-Out</p>
                            <p className="text-sm text-gray-400">09:30 AM</p>
                          </div>
                          <div className="text-right">
                            <p className="text-red-400 font-semibold">
                              -₱1,000.00
                            </p>
                            <p className="text-sm text-gray-400">
                              Profit: ₱20.00
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
        </div>
      </section>
    </>
  );
};

export default ProfitDefinitionSection;
