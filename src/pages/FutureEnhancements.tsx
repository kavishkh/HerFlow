import React from 'react';
import { Sparkles, Clock, Star, Zap } from 'lucide-react';

const FutureEnhancements = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The Future of
          <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Menstrual Wellness
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover what's next on our journey to revolutionize menstrual health technology.
        </p>
      </div>

      <div className="space-y-24">
        {roadmapSections.map((section, index) => (
          <div key={index} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 md:left-1/2"></div>
            
            <div className="relative grid gap-8 md:grid-cols-2">
              <div className={`md:text-right ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4 md:justify-end">
                    <div className="p-2 bg-rose-100 rounded-lg">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-3">{section.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="space-y-2">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center md:justify-end text-gray-700">
                        <span>{feature}</span>
                        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full ml-2"></span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center md:justify-end">
                    <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm">
                      {section.timeline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Help Shape Our Future</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We value your input! Share your ideas and suggestions to help us build the features you need most.
        </p>
        <button className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition">
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

const roadmapSections = [
  {
    icon: <Sparkles className="h-6 w-6 text-rose-500" />,
    title: "Advanced AI Integration",
    description: "Enhanced AI capabilities for more personalized support and predictions.",
    features: [
      "Predictive symptom analysis",
      "Personalized health recommendations",
      "Natural language processing improvements"
    ],
    timeline: "Q2 2024"
  },
  {
    icon: <Clock className="h-6 w-6 text-rose-500" />,
    title: "Real-time Health Monitoring",
    description: "Integration with wearable devices for comprehensive health tracking.",
    features: [
      "Wearable device integration",
      "Real-time symptom tracking",
      "Health metric visualization"
    ],
    timeline: "Q3 2024"
  },
  {
    icon: <Star className="h-6 w-6 text-rose-500" />,
    title: "Community Features",
    description: "Building a supportive community for shared experiences and knowledge.",
    features: [
      "Moderated forums",
      "Expert Q&A sessions",
      "Resource sharing"
    ],
    timeline: "Q4 2024"
  },
  {
    icon: <Zap className="h-6 w-6 text-rose-500" />,
    title: "Telehealth Integration",
    description: "Direct access to healthcare professionals through the platform.",
    features: [
      "Virtual consultations",
      "Prescription management",
      "Secure health records"
    ],
    timeline: "Q1 2025"
  }
];

export default FutureEnhancements;