import React from 'react';
import { Book, Video, FileText, Users } from 'lucide-react';

const EducationHub = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Menstrual Health
          <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Education Hub
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive resources designed to educate and empower you about menstrual health.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-rose-100 rounded-lg">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold ml-3">{resource.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="space-y-3">
              {resource.topics.map((topic, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-rose-50 transition"
                >
                  <p className="text-gray-900 font-medium">{topic.title}</p>
                  <p className="text-gray-600 text-sm">{topic.duration}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const resources = [
  {
    icon: <Book className="h-6 w-6 text-rose-500" />,
    title: "Essential Guides",
    description: "Comprehensive guides covering all aspects of menstrual health.",
    topics: [
      { title: "Understanding Your Cycle", duration: "10 min read" },
      { title: "Menstrual Hygiene Basics", duration: "8 min read" },
      { title: "Common Myths Debunked", duration: "12 min read" }
    ]
  },
  {
    icon: <Video className="h-6 w-6 text-rose-500" />,
    title: "Video Library",
    description: "Educational videos explaining complex topics in simple terms.",
    topics: [
      { title: "The Menstrual Cycle Explained", duration: "5 min video" },
      { title: "Managing Period Pain", duration: "4 min video" },
      { title: "Exercise During Periods", duration: "6 min video" }
    ]
  },
  {
    icon: <FileText className="h-6 w-6 text-rose-500" />,
    title: "Research Articles",
    description: "Latest research and studies about menstrual health.",
    topics: [
      { title: "PCOS Research Updates", duration: "15 min read" },
      { title: "Diet and Menstrual Health", duration: "10 min read" },
      { title: "Mental Health Connection", duration: "12 min read" }
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-rose-500" />,
    title: "Community Stories",
    description: "Real experiences and stories from our community members.",
    topics: [
      { title: "Living with Endometriosis", duration: "8 min read" },
      { title: "My PCOS Journey", duration: "10 min read" },
      { title: "Breaking Period Stigma", duration: "7 min read" }
    ]
  }
];

export default EducationHub;