import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const AISupport = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI-Powered
          <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Support Companion
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get 24/7 emotional support and answers to your menstrual health questions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="h-[500px] overflow-y-auto mb-4 space-y-4">
            <div className="flex items-start">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Bot className="h-6 w-6 text-rose-500" />
              </div>
              <div className="ml-3 bg-gray-100 rounded-lg p-4 max-w-[80%]">
                <p className="text-gray-800">
                  Hello! I'm your AI support companion. I'm here to help you with any questions about menstrual health, 
                  provide emotional support, or discuss any concerns you might have. How can I assist you today?
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition flex items-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Quick Topics</h3>
            <div className="space-y-2">
              {quickTopics.map((topic, index) => (
                <button
                  key={index}
                  className="block w-full text-left p-2 text-gray-700 hover:bg-rose-50 rounded transition"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Support Features</h3>
            <ul className="space-y-2">
              {supportFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const quickTopics = [
  "How can I manage period pain?",
  "What's normal discharge?",
  "PCOS symptoms and management",
  "Irregular periods - when to worry?",
  "Emotional support during PMS"
];

const supportFeatures = [
  "24/7 AI-powered support",
  "Evidence-based information",
  "Emotional well-being focus",
  "Private and secure conversations",
  "Personalized recommendations"
];

export default AISupport;