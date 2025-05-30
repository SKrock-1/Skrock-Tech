import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause, RefreshCw, Code, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const BlackboxAIDemo: React.FC = () => {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [code, setCode] = useState(`// Example code
function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

// AI will suggest optimization
const result = calculateFibonacci(10);
console.log(result);`);

  const handleStartAnalysis = () => {
    setIsRunning(true);
  };

  const handleStopAnalysis = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCode(`// Example code
function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

// AI will suggest optimization
const result = calculateFibonacci(10);
console.log(result);`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/projects')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
            <h1 className="text-2xl font-bold">Blackbox AI Code Editor</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('https://www.blackbox.ai/', '_blank', 'noopener,noreferrer')}
          >
            <Code className="h-4 w-4 mr-2" />
            Full Version
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Editor */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Code Editor</h2>
              <div className="flex space-x-2">
                <Button
                  onClick={isRunning ? handleStopAnalysis : handleStartAnalysis}
                  size="sm"
                >
                  {isRunning ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      Stop Analysis
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Analysis
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="sm"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg p-4">
              <pre className="text-slate-300 font-mono text-sm overflow-x-auto">
                {code}
              </pre>
            </div>
          </div>

          {/* AI Analysis */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <h2 className="text-lg font-semibold mb-4">AI Analysis</h2>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Code className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">Code Optimization</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Consider using memoization to improve performance of the Fibonacci calculation.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="h-4 w-4 text-green-500" />
                    <span className="font-medium">Suggested Implementation</span>
                  </div>
                  <pre className="text-sm text-slate-600 dark:text-slate-300 font-mono">
{`function calculateFibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = calculateFibonacci(n - 1, memo) + 
            calculateFibonacci(n - 2, memo);
  return memo[n];
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Original Time Complexity
                  </div>
                  <div className="text-lg font-bold text-red-500">
                    O(2^n)
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Optimized Time Complexity
                  </div>
                  <div className="text-lg font-bold text-green-500">
                    O(n)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackboxAIDemo; 