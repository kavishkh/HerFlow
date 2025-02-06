import React from 'react';
import { Calendar, Activity, Brain, LineChart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
        <p className="text-gray-600">Track and manage your menstrual wellness journey.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-rose-100 rounded-lg">
                {stat.icon}
              </div>
              <h3 className="ml-3 font-semibold text-gray-600">{stat.title}</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Cycle Calendar</h3>
          <div className="aspect-[4/3] bg-gray-100 rounded-lg"></div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Symptom Tracker</h3>
          <div className="space-y-4">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-center">
                <span className="w-32 text-gray-600">{symptom.name}</span>
                <div className="flex-grow bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-rose-500 h-2 rounded-full"
                    style={{ width: `${symptom.level}%` }}
                  ></div>
                </div>
                <span className="ml-4 text-gray-600">{symptom.level}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Insights & Recommendations</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">{insight.title}</h4>
                <p className="text-gray-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const quickStats = [
  {
    icon: <Calendar className="h-6 w-6 text-rose-500" />,
    title: "Next Period",
    value: "8 Days",
    description: "March 15, 2025"
  },
  {
    icon: <Activity className="h-6 w-6 text-rose-500" />,
    title: "Cycle Length",
    value: "28 Days",
    description: "Regular cycle"
  },
  {
    icon: <Brain className="h-6 w-6 text-rose-500" />,
    title: "Mood",
    value: "Stable",
    description: "Past 7 days"
  },
  {
    icon: <LineChart className="h-6 w-6 text-rose-500" />,
    title: "Tracked Days",
    value: "45",
    description: "Last 2 cycles"
  }
];

const symptoms = [
  { name: "Cramps", level: 60 },
  { name: "Mood", level: 80 },
  { name: "Energy", level: 40 },
  { name: "Sleep", level: 70 }
];

const insights = [
  {
    title: "Cycle Patterns",
    description: "Your cycle has been regular for the past 3 months. Keep up the good work!"
  },
  {
    title: "Mood Insights",
    description: "Your mood tends to dip 2 days before your period. Consider planning relaxing activities."
  },
  {
    title: "Exercise Impact",
    description: "Light exercise during PMS has shown to improve your symptoms."
  },
  {
    title: "Sleep Quality",
    description: "Your sleep quality improves when you maintain a regular sleep schedule."
  }
];

export default Dashboard;