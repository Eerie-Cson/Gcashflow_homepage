import React from "react";
import {
  RefreshCcw,
  BarChart,
  Smartphone,
  Settings,
  Activity,
  LineChart,
  CheckCircle,
} from "lucide-react";

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-white transform skew-y-3"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Smartphone size={24} className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Your GCash Business
          </h2>
          <p className="text-xl text-gray-600">
            Our platform offers everything you need to manage your GCash
            transactions efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <RefreshCcw size={28} />,
              title: "Seamless Transactions",
              description:
                "Process cash-in and cash-out transactions quickly with automatic balance updates.",
              color: "bg-gradient-to-br from-blue-600 to-indigo-600",
            },
            {
              icon: <BarChart size={28} />,
              title: "Balance Management",
              description:
                "Track both your GCash and physical cash balances in real-time with every transaction.",
              color: "bg-gradient-to-br from-purple-600 to-indigo-700",
            },
            {
              icon: <Activity size={28} />,
              title: "Transaction History",
              description:
                "Keep detailed records of all transactions with searchable history and insights.",
              color: "bg-gradient-to-br from-blue-500 to-cyan-600",
            },
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl opacity-75 bg-gradient-to-r from-blue-600 to-indigo-600 blur group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-xl p-8 h-full flex flex-col">
                <div
                  className={`w-14 h-14 rounded-xl text-white flex items-center justify-center mb-6 ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl h-full">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mr-4">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold">Custom Analytics</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Get detailed insights into your transaction patterns, profit
              trends, and customer behavior with our powerful analytics tools.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span>Daily, weekly, and monthly reports</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span>Profit breakdown by transaction type</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span>Export data in multiple formats</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl h-full">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mr-4">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-bold">Customizable Settings</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Tailor the platform to match your unique business needs with
              flexible profit structures and transaction settings.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span>Configure your own profit structure</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span>Set transaction limits and notifications</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span>Define custom transaction categories</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-blue-50 transform -skew-y-3"></div>
    </section>
  );
};

export default Features;
