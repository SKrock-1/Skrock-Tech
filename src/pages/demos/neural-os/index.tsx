import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause, RefreshCw, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Process {
  id: number;
  name: string;
  status: 'running' | 'waiting' | 'completed';
  priority: number;
  cpu: number;
  memory: number;
}

interface SystemLog {
  timestamp: string;
  level: 'info' | 'warning' | 'error';
  message: string;
}

const NeuralOSDemo: React.FC = () => {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 0,
    memory: 0
  });
  const [processes, setProcesses] = useState<Process[]>([
    { id: 1, name: 'System Monitor', status: 'running', priority: 1, cpu: 5, memory: 10 },
    { id: 2, name: 'Task Scheduler', status: 'running', priority: 2, cpu: 8, memory: 15 },
    { id: 3, name: 'Memory Manager', status: 'waiting', priority: 3, cpu: 3, memory: 20 },
  ]);
  const [logs, setLogs] = useState<SystemLog[]>([
    { timestamp: new Date().toISOString(), level: 'info', message: 'System initialized' },
    { timestamp: new Date().toISOString(), level: 'info', message: 'Task scheduler started' },
  ]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        // Update system metrics
        const newMetrics = {
          cpu: Math.min(100, Math.max(0, systemMetrics.cpu + (Math.random() * 10 - 5))),
          memory: Math.min(100, Math.max(0, systemMetrics.memory + (Math.random() * 5 - 2.5)))
        };
        setSystemMetrics(newMetrics);

        // Update processes
        setProcesses(prev => prev.map(process => ({
          ...process,
          cpu: Math.min(100, Math.max(0, process.cpu + (Math.random() * 5 - 2.5))),
          memory: Math.min(100, Math.max(0, process.memory + (Math.random() * 3 - 1.5))),
        })));

        // Add new log
        const newLog: SystemLog = {
          timestamp: new Date().toISOString(),
          level: Math.random() > 0.9 ? 'warning' : 'info',
          message: `System metrics updated: CPU ${newMetrics.cpu.toFixed(1)}%, Memory ${newMetrics.memory.toFixed(1)}%`
        };
        setLogs(prev => [...prev.slice(-9), newLog]);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, systemMetrics]);

  const handleAddProcess = () => {
    const newProcess: Process = {
      id: processes.length + 1,
      name: `Process ${processes.length + 1}`,
      status: 'waiting',
      priority: Math.floor(Math.random() * 3) + 1,
      cpu: Math.random() * 10,
      memory: Math.random() * 20,
    };
    setProcesses(prev => [...prev, newProcess]);
    setLogs(prev => [...prev, {
      timestamp: new Date().toISOString(),
      level: 'info',
      message: `New process added: ${newProcess.name}`
    }]);
  };

  const handleRemoveProcess = (id: number) => {
    const process = processes.find(p => p.id === id);
    setProcesses(prev => prev.filter(p => p.id !== id));
    if (process) {
      setLogs(prev => [...prev, {
        timestamp: new Date().toISOString(),
        level: 'info',
        message: `Process removed: ${process.name}`
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/projects')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
          <h1 className="text-2xl font-bold">NeuralOS</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* System Metrics */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">System Metrics</h2>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => setIsRunning(!isRunning)}
                    size="sm"
                  >
                    {isRunning ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Stop
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={() => {
                      setIsRunning(false);
                      setSystemMetrics({
                        cpu: 0,
                        memory: 0
                      });
                      setLogs([{
                        timestamp: new Date().toISOString(),
                        level: 'info',
                        message: 'System reset'
                      }]);
                    }}
                    variant="outline"
                    size="sm"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">CPU Usage</span>
                    <span className="text-sm">{systemMetrics.cpu.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${systemMetrics.cpu}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Memory Usage</span>
                    <span className="text-sm">{systemMetrics.memory.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${systemMetrics.memory}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Process Management */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Process Management</h2>
                <Button
                  onClick={handleAddProcess}
                  size="sm"
                >
                  Add Process
                </Button>
              </div>
              <div className="space-y-4">
                <AnimatePresence>
                  {processes.map(process => (
                    <motion.div
                      key={process.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{process.name}</span>
                        <Button
                          onClick={() => handleRemoveProcess(process.id)}
                          variant="ghost"
                          size="sm"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs">CPU</span>
                            <span className="text-xs">{process.cpu.toFixed(1)}%</span>
                          </div>
                          <div className="h-1 bg-slate-200 rounded-full">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: `${process.cpu}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs">Memory</span>
                            <span className="text-xs">{process.memory.toFixed(1)}%</span>
                          </div>
                          <div className="h-1 bg-slate-200 rounded-full">
                            <div
                              className="h-full bg-purple-500 rounded-full"
                              style={{ width: `${process.memory}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* System Logs */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">System Logs</h2>
            <div className="space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`text-sm p-2 rounded ${
                    log.level === 'error'
                      ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                      : log.level === 'warning'
                      ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                    <span className="uppercase text-xs font-medium">{log.level}</span>
                  </div>
                  <p className="mt-1">{log.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralOSDemo; 