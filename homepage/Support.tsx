// Support.jsx
import React from "react";
import { HelpCircle, MessageCircle, Mail, FileText } from "lucide-react";

interface SupportProps {
  id?: string;
}
const Support: React.FC<SupportProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <HelpCircle size={24} className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help? We've Got You Covered
          </h2>
          <p className="text-xl text-gray-600">
            Get support to make the most of your GCash transaction management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <MessageCircle size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Live Chat Support
            </h3>
            <p className="text-gray-600 mb-6">
              Get real-time assistance from our support team whenever you need
              help with your transactions or account.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition w-full md:w-auto">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
              <Mail size={24} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Email Support
            </h3>
            <p className="text-gray-600 mb-6">
              Send us an email with your questions or concerns, and we'll get
              back to you within 24 hours.
            </p>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition w-full md:w-auto">
              Email Us
            </button>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
              <p className="text-blue-100">
                Browse our comprehensive guides, tutorials, and FAQs to find
                quick answers to common questions.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition flex items-center">
              <FileText size={18} className="mr-2" />
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
