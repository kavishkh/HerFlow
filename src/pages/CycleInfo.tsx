import React, { useState } from 'react';
import { Calendar, Clock, Droplets, Activity } from 'lucide-react';

const CycleInfo = () => {
  const [formData, setFormData] = useState({
    lastPeriodDate: '',
    cycleLength: '28',
    periodLength: '5',
    flow: 'medium',
    symptoms: [],
    mood: 'neutral',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleSymptomToggle = (symptom: string) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }));
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Track Your
          <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Menstrual Cycle
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Keep track of your cycle to better understand your body and get personalized insights.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm">
          {/* Last Period Date */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Calendar className="h-5 w-5 text-rose-500 mr-2" />
              When did your last period start?
            </label>
            <input
              type="date"
              value={formData.lastPeriodDate}
              onChange={(e) => setFormData(prev => ({ ...prev, lastPeriodDate: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              required
            />
          </div>

          {/* Cycle Length */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Clock className="h-5 w-5 text-rose-500 mr-2" />
              Average Cycle Length (days)
            </label>
            <select
              value={formData.cycleLength}
              onChange={(e) => setFormData(prev => ({ ...prev, cycleLength: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
              {Array.from({ length: 15 }, (_, i) => i + 21).map(num => (
                <option key={num} value={num}>{num} days</option>
              ))}
            </select>
          </div>

          {/* Period Length */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Clock className="h-5 w-5 text-rose-500 mr-2" />
              Average Period Length (days)
            </label>
            <select
              value={formData.periodLength}
              onChange={(e) => setFormData(prev => ({ ...prev, periodLength: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num} days</option>
              ))}
            </select>
          </div>

          {/* Flow Intensity */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Droplets className="h-5 w-5 text-rose-500 mr-2" />
              Flow Intensity
            </label>
            <div className="grid grid-cols-4 gap-4">
              {['light', 'medium', 'heavy', 'very heavy'].map(flow => (
                <button
                  key={flow}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, flow }))}
                  className={`p-3 rounded-lg border transition ${
                    formData.flow === flow
                      ? 'bg-rose-500 text-white border-rose-500'
                      : 'border-gray-300 hover:border-rose-500'
                  }`}
                >
                  {flow.charAt(0).toUpperCase() + flow.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Symptoms */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Activity className="h-5 w-5 text-rose-500 mr-2" />
              Symptoms
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {symptoms.map(symptom => (
                <button
                  key={symptom}
                  type="button"
                  onClick={() => handleSymptomToggle(symptom)}
                  className={`p-3 rounded-lg border transition ${
                    formData.symptoms.includes(symptom)
                      ? 'bg-rose-500 text-white border-rose-500'
                      : 'border-gray-300 hover:border-rose-500'
                  }`}
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>

          {/* Mood */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700">
              Mood
            </label>
            <div className="grid grid-cols-5 gap-4">
              {moods.map(({ mood, emoji }) => (
                <button
                  key={mood}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, mood }))}
                  className={`p-3 rounded-lg border transition text-2xl ${
                    formData.mood === mood
                      ? 'bg-rose-50 border-rose-500'
                      : 'border-gray-300 hover:border-rose-500'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700">
              Additional Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              rows={4}
              placeholder="Any additional information you'd like to track..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition font-medium text-lg"
          >
            Save Cycle Information
          </button>
        </form>

        <div className="mt-8 bg-rose-50 p-6 rounded-xl">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Why Track Your Cycle?</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const symptoms = [
  'Cramps',
  'Headache',
  'Bloating',
  'Fatigue',
  'Breast Tenderness',
  'Acne',
  'Back Pain',
  'Nausea',
  'Mood Swings'
];

const moods = [
  { mood: 'happy', emoji: '😊' },
  { mood: 'neutral', emoji: '😐' },
  { mood: 'sad', emoji: '😢' },
  { mood: 'angry', emoji: '😠' },
  { mood: 'energetic', emoji: '⚡' }
];

const benefits = [
  'Predict your next period with better accuracy',
  'Identify patterns in your symptoms and mood',
  'Get personalized health insights',
  'Track your overall menstrual health',
  'Share accurate information with healthcare providers'
];

export default CycleInfo;