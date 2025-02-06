import React from 'react';
import { Activity, Brain, Heart, Droplets, Book, Stethoscope, LineChart } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Features for Your
          <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Menstrual Wellness Journey
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our suite of tools designed to support your menstrual health and well-being.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-rose-100 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
            </div>
            <p className="text-gray-600 flex-grow">{feature.description}</p>
            <div className="mt-4">
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    icon: <Droplets className="h-6 w-6 text-rose-500" />,
    title: "Discharge Monitor",
    description: "Track and understand your discharge patterns for better reproductive health awareness.",
    benefits: [
      "Daily tracking system",
      "Pattern recognition",
      "Health insights",
      "Early anomaly detection"
    ]
  },
  {
    icon: <Brain className="h-6 w-6 text-rose-500" />,
    title: "AI Mood Support",
    description: "Get emotional support and understanding through our AI-powered companion.",
    benefits: [
      "24/7 emotional support",
      "Personalized conversations",
      "Mood pattern analysis",
      "Coping strategies"
    ]
  },
  {
    icon: <Heart className="h-6 w-6 text-rose-500" />,
    title: "Hygiene Tips",
    description: "Expert guidance on maintaining optimal menstrual hygiene and health.",
    benefits: [
      "Daily care routines",
      "Product guidance",
      "Infection prevention",
      "Best practices"
    ]
  },
  {
    icon: <Stethoscope className="h-6 w-6 text-rose-500" />,
    title: "PCOS Management",
    description: "Comprehensive tools and guidance for managing PCOS/PCOD effectively.",
    benefits: [
      "Symptom tracking",
      "Diet recommendations",
      "Exercise plans",
      "Treatment reminders"
    ]
  },
  {
    icon: <LineChart className="h-6 w-6 text-rose-500" />,
    title: "Symptom Tracker",
    description: "Monitor and analyze your menstrual symptoms for better health management.",
    benefits: [
      "Comprehensive tracking",
      "Pattern analysis",
      "Health reports",
      "Doctor sharing"
    ]
  },
  {
    icon: <Book className="h-6 w-6 text-rose-500" />,
    title: "Boys' Education",
    description: "Comprehensive resources to help boys understand and support menstrual health.",
    benefits: [
      "Age-appropriate content",
      "Myth-busting information",
      "Empathy building",
      "Support guidelines"
    ]
  }
];

export default Features;