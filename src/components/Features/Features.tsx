import {
  Activity,
  ChevronRight,
  Clock,
  CreditCard,
  LayoutDashboard,
  Search,
  Users,
} from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <>
      {/* Key Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="mt-6 text-xl text-gray-300">
              Everything you need to streamline your GCash business operations
              in one powerful app
            </p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative p-1 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-70"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600/30 inline-flex p-3 rounded-xl text-blue-400">
                    <LayoutDashboard className="h-6 w-6" />
                  </div>
                  <div className="bg-blue-900/30 text-blue-400 text-xs font-bold py-1 px-2 rounded-full">
                    CORE
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Dynamic Dashboard
                </h3>
                <p className="mt-3 text-gray-300 flex-grow">
                  Real-time tracking of GCash and cash balances with visual
                  analytics for instant business insights.
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative p-1 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-70"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600/30 inline-flex p-3 rounded-xl text-blue-400">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div className="bg-blue-900/30 text-blue-400 text-xs font-bold py-1 px-2 rounded-full">
                    ANALYTICS
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Smart Profit Reports
                </h3>
                <p className="mt-3 text-gray-300 flex-grow">
                  Automatically generate daily, weekly, and monthly profit
                  reports with comprehensive analytics.
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative p-1 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-70"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600/30 inline-flex p-3 rounded-xl text-blue-400">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="bg-blue-900/30 text-blue-400 text-xs font-bold py-1 px-2 rounded-full">
                    TRANSACTIONS
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Seamless Transactions
                </h3>
                <p className="mt-3 text-gray-300 flex-grow">
                  Handle cash-in and cash-out transactions effortlessly with
                  automated profit calculation.
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative p-1 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-70"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600/30 inline-flex p-3 rounded-xl text-blue-400">
                    <Search className="h-6 w-6" />
                  </div>
                  <div className="bg-blue-900/30 text-blue-400 text-xs font-bold py-1 px-2 rounded-full">
                    SEARCH
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Advanced Search
                </h3>
                <p className="mt-3 text-gray-300 flex-grow">
                  Powerful search and filter functionality to find, update, or
                  delete transactions instantly.
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative p-1 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-70"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600/30 inline-flex p-3 rounded-xl text-blue-400">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="bg-blue-900/30 text-blue-400 text-xs font-bold py-1 px-2 rounded-full">
                    USERS
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Multi-User Access
                </h3>
                <p className="mt-3 text-gray-300 flex-grow">
                  Support for different user roles with customizable permissions
                  for cashiers and admins.
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="relative p-1 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-70"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600/30 inline-flex p-3 rounded-xl text-blue-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="bg-blue-900/30 text-blue-400 text-xs font-bold py-1 px-2 rounded-full">
                    HISTORY
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Transaction History
                </h3>
                <p className="mt-3 text-gray-300 flex-grow">
                  Comprehensive transaction records with detailed history and
                  customizable filters.
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
