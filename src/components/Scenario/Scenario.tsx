import React from "react";

const Scenario = () => {
  return (
    <>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="mt-6 text-xl text-gray-300">
              GCash Flow handles all transaction scenarios with ease
            </p>
          </div>

          <div className="mt-20">
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 transform -translate-y-1/2 z-0"></div>

              <div className="grid gap-12 lg:grid-cols-3 relative z-10">
                {/* Scenario 1 */}
                <div className="relative">
                  <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 items-center justify-center text-white font-bold text-xl z-20">
                    1
                  </div>
                  <div className="relative p-0.5 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 transform transition-all duration-300 hover:scale-105 lg:mt-6">
                    <div className="bg-gray-900 rounded-2xl p-6">
                      <div className="lg:hidden flex items-center mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                          1
                        </div>
                        <h3 className="ml-4 text-2xl font-bold text-white">
                          Cash-In
                        </h3>
                      </div>
                      <div className="lg:block hidden">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">
                          Cash-In
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              1
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                Customer pays with real cash (including profit
                                fee)
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              2
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                You transfer the equivalent amount (excluding
                                profit) to their GCash account
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              3
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                Your GCash balance decreases, real cash
                                increases
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scenario 2 */}
                <div className="relative">
                  <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-600 items-center justify-center text-white font-bold text-xl z-20">
                    2
                  </div>
                  <div className="relative p-0.5 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 transform transition-all duration-300 hover:scale-105 lg:mt-6">
                    <div className="bg-gray-900 rounded-2xl p-6">
                      <div className="lg:hidden flex items-center mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                          2
                        </div>
                        <h3 className="ml-4 text-2xl font-bold text-white">
                          Cash-Out (Profit in GCash)
                        </h3>
                      </div>
                      <div className="lg:block hidden">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">
                          Cash-Out (Profit in GCash)
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              1
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                Customer transfers amount plus profit to your
                                GCash
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              2
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                You provide equivalent real cash (excluding
                                profit)
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              3
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                Your GCash balance increases, real cash
                                decreases
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scenario 3 */}
                <div className="relative">
                  <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-400 items-center justify-center text-white font-bold text-xl z-20">
                    3
                  </div>
                  <div className="relative p-0.5 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 transform transition-all duration-300 hover:scale-105 lg:mt-6">
                    <div className="bg-gray-900 rounded-2xl p-6">
                      <div className="lg:hidden flex items-center mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-xl">
                          3
                        </div>
                        <h3 className="ml-4 text-2xl font-bold text-white">
                          Cash-Out (Profit in Cash)
                        </h3>
                      </div>
                      <div className="lg:block hidden">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">
                          Cash-Out (Profit in Cash)
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              1
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                Customer transfers just the cash-out amount to
                                your GCash
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              2
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                Customer pays profit separately in real cash
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl">
                          <div className="flex items-start">
                            <div className="bg-blue-900/40 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-blue-400">
                              3
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-300">
                                You provide cash-out amount from your real cash
                                balance
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
          <p className="mt-6 text-gray-400 italic">
            *This app doesn't connect to GCash. All transaction data must be
            manually inputted.
          </p>
        </div>
      </section>
    </>
  );
};

export default Scenario;
