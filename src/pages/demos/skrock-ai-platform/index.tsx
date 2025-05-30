import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause, RefreshCw, ExternalLink } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
  const [isTraining, setIsTraining] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [epoch, setEpoch] = useState(0);
  const [trainingData, setTrainingData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Training Accuracy',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Validation Accuracy',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTraining) {
      interval = setInterval(() => {
        setEpoch(prev => prev + 1);
        setAccuracy(prev => Math.min(prev + Math.random() * 2, 95));
        
        setTrainingData(prev => ({
          labels: [...prev.labels, epoch],
          datasets: [
            {
              ...prev.datasets[0],
              data: [...prev.datasets[0].data, accuracy]
            },
            {
              ...prev.datasets[1],
              data: [...prev.datasets[1].data, accuracy - Math.random() * 5]
            }
          ]
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTraining, epoch, accuracy]);

  const handleStartTraining = () => {
    setIsTraining(true);
  };

  const handleStopTraining = () => {
    setIsTraining(false);
  };

  const handleReset = () => {
    setIsTraining(false);
    setAccuracy(0);
    setEpoch(0);
    setTrainingData({
      labels: [],
      datasets: [
        {
          label: 'Training Accuracy',
          data: [],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'Validation Accuracy',
          data: [],
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
        }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Model Training Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Model Training
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Current Epoch
                    </span>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      {epoch}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Training Accuracy
                    </span>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      {accuracy.toFixed(2)}%
                    </span>
                  </div>
                </div>
                <div className="h-[300px]">
                  <Line
                    data={trainingData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100
                        }
                      }
                    }}
                  />
                </div>
                <div className="flex space-x-4">
                  <Button
                    onClick={isTraining ? handleStopTraining : handleStartTraining}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  >
                    {isTraining ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Stop Training
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start Training
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="flex-1"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Model Architecture Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Model Architecture
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <pre className="text-sm text-slate-600 dark:text-slate-400">
{`model = Sequential([
    Dense(128, activation='relu'),
    Dropout(0.2),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])`}
                    </pre>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                        Input Layer
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        784 neurons (28x28 pixels)
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                        Hidden Layers
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        128 → 64 neurons with ReLU
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                        Output Layer
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        10 neurons (digits 0-9)
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                        Optimizer
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Adam with learning rate 0.001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Real-time Training</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Monitor model training progress with live accuracy metrics and performance visualization.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Model Architecture</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Customizable neural network architecture with support for various layer types and configurations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Performance Analytics</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Comprehensive analytics dashboard for monitoring model performance and training metrics.
              </p>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SKrockAIDemo; 