import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause, RefreshCw, Plus, Trash2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumGate {
  id: string;
  type: 'H' | 'X' | 'Y' | 'Z' | 'CNOT';
  qubit: number;
  controlQubit?: number;
}

interface Measurement {
  qubit: number;
  result: '0' | '1' | null;
}

const QuantumSimulatorDemo: React.FC = () => {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [numQubits, setNumQubits] = useState(3);
  const [circuit, setCircuit] = useState<QuantumGate[]>([]);
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [stateVector, setStateVector] = useState<number[]>([]);
  const [selectedGate, setSelectedGate] = useState<QuantumGate['type']>('H');

  // Initialize measurements
  useEffect(() => {
    setMeasurements(Array(numQubits).fill(null).map((_, i) => ({
      qubit: i,
      result: null
    })));
  }, [numQubits]);

  // Simulate quantum circuit
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        // Simulate quantum state evolution
        const newStateVector = simulateCircuit(circuit, numQubits);
        setStateVector(newStateVector);

        // Simulate measurements
        const newMeasurements = measurements.map(measurement => ({
          ...measurement,
          result: Math.random() > 0.5 ? '1' : '0'
        }));
        setMeasurements(newMeasurements);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, circuit, numQubits, measurements]);

  const simulateCircuit = (gates: QuantumGate[], numQubits: number): number[] => {
    // Simplified simulation - in a real implementation, this would perform actual quantum computations
    return Array(Math.pow(2, numQubits)).fill(0).map((_, i) => Math.random());
  };

  const addGate = (type: QuantumGate['type'], qubit: number, controlQubit?: number) => {
    const newGate: QuantumGate = {
      id: `${type}-${qubit}-${Date.now()}`,
      type,
      qubit,
      controlQubit
    };
    setCircuit(prev => [...prev, newGate]);
  };

  const removeGate = (gateId: string) => {
    setCircuit(prev => prev.filter(gate => gate.id !== gateId));
  };

  const resetCircuit = () => {
    setCircuit([]);
    setMeasurements(Array(numQubits).fill(null).map((_, i) => ({
      qubit: i,
      result: null
    })));
    setStateVector([]);
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
          <h1 className="text-2xl font-bold">Quantum Computing Simulator</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Circuit Builder */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Quantum Circuit</h2>
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
                        Run
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={resetCircuit}
                    variant="outline"
                    size="sm"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>

              {/* Gate Selection */}
              <div className="flex space-x-2 mb-4">
                {(['H', 'X', 'Y', 'Z', 'CNOT'] as const).map((gate) => (
                  <Button
                    key={gate}
                    variant={selectedGate === gate ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedGate(gate)}
                  >
                    {gate}
                  </Button>
                ))}
              </div>

              {/* Circuit Visualization */}
              <div className="space-y-4">
                {Array(numQubits).fill(null).map((_, qubit) => (
                  <div key={qubit} className="flex items-center space-x-4">
                    <span className="w-8 text-sm">q{qubit}</span>
                    <div className="flex-1 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg p-2">
                      <div className="flex items-center h-full">
                        <AnimatePresence>
                          {circuit
                            .filter(gate => gate.qubit === qubit || gate.controlQubit === qubit)
                            .map(gate => (
                              <motion.div
                                key={gate.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="relative"
                              >
                                {gate.type === 'CNOT' && gate.controlQubit === qubit ? (
                                  <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                                    <span className="text-xs">•</span>
                                  </div>
                                ) : (
                                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                                    {gate.type}
                                  </div>
                                )}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="absolute -top-2 -right-2 h-4 w-4 p-0"
                                  onClick={() => removeGate(gate.id)}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </motion.div>
                            ))}
                        </AnimatePresence>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addGate(selectedGate, qubit)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* State Vector Visualization */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <h2 className="text-lg font-semibold mb-4">Quantum State</h2>
              <div className="space-y-4">
                {stateVector.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {stateVector.map((amplitude, i) => (
                      <div key={i} className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                        <div className="text-sm mb-2">|{i.toString(2).padStart(numQubits, '0')}⟩</div>
                        <div className="h-2 bg-slate-200 rounded-full">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${Math.abs(amplitude) * 100}%` }}
                          />
                        </div>
                        <div className="text-xs mt-1">
                          {amplitude.toFixed(4)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Measurements */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Measurements</h2>
            <div className="space-y-4">
              {measurements.map((measurement) => (
                <div
                  key={measurement.qubit}
                  className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Qubit {measurement.qubit}</span>
                    <span className={`text-lg font-bold ${
                      measurement.result === '1'
                        ? 'text-green-500'
                        : measurement.result === '0'
                        ? 'text-blue-500'
                        : 'text-slate-400'
                    }`}>
                      {measurement.result || '?'}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        measurement.result === '1'
                          ? 'bg-green-500'
                          : measurement.result === '0'
                          ? 'bg-blue-500'
                          : 'bg-slate-400'
                      }`}
                      style={{ width: measurement.result ? '100%' : '50%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumSimulatorDemo; 