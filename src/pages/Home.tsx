import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Activity, ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Embrace Your Cycle,<br />
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Empower Your Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your personalized menstrual wellness companion. Track, learn, and thrive with AI-powered insights and support.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/dashboard"
                className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
              >
                Get Started
              </Link>
              <Link
                to="/features"
                className="px-8 py-3 bg-white text-rose-500 rounded-full hover:bg-gray-50 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose HerFlow?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Activity className="h-8 w-8 text-rose-500" />}
            title="Smart Tracking"
            description="Monitor your cycle, symptoms, and patterns with our intelligent tracking system."
          />
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-rose-500" />}
            title="AI Support"
            description="Get personalized insights and emotional support from our AI companion."
          />
          <FeatureCard
            icon={<Heart className="h-8 w-8 text-rose-500" />}
            title="Health Education"
            description="Access comprehensive resources about menstrual and reproductive health."
          />
          <FeatureCard
            icon={<ShoppingBag className="h-8 w-8 text-rose-500" />}
            title="Essential Products"
            description="Shop curated menstrual and wellness products from trusted brands."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Cycle?</h2>
          <p className="text-lg mb-8">Join thousands of others who have transformed their menstrual wellness journey.</p>
          <Link
            to="/dashboard"
            className="inline-block px-8 py-3 bg-white text-rose-500 rounded-full hover:bg-gray-100 transition"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;