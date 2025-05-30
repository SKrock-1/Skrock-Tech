import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SKrockAIDemo = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [modelAccuracy, setModelAccuracy] = useState(0);
  const [isTraining, setIsTraining] = useState(false);
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      if (isTraining) {
        setDataPoints(prev => [...prev, Math.random() * 100]);
        setModelAccuracy(prev => Math.min(prev + Math.random() * 2, 98));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isTraining]);

  const chartData = {
    labels: dataPoints.map((_, i) => `Epoch ${i + 1}`),
    datasets: [
      {
        label: 'Model Accuracy',
        data: dataPoints,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Training Progress',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/projects')}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Button>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                SKrock.AI Platform
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                Live Demo
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-4">
            {['dashboard', 'models', 'analytics', 'deploy'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Model Training Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Model Training
            </h2>
            <div className="space-y-4">
              <div className="h-64">
                <Line data={chartData} options={chartOptions} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Current Accuracy: {modelAccuracy.toFixed(2)}%
                </span>
                <button
                  onClick={() => setIsTraining(!isTraining)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    isTraining
                      ? 'bg-red-600 text-white'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {isTraining ? 'Stop Training' : 'Start Training'}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Data Analysis Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Data Analysis
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Total Datasets</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">24</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Active Models</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">8</p>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">Processing Speed</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">1.2M req/s</p>
              </div>
            </div>
          </motion.div>

          {/* Model Deployment Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Model Deployment
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">Deployment Status</p>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    All Systems Operational
                  </p>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Deploy New Model
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SKrockAIDemo; 