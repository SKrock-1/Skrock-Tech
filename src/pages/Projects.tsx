import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Star, User, Image, X, Lock, ChevronDown, Github, ExternalLink, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  status: string;
  demoFeatures?: string[];
}

interface Partner {
  name: string;
  logo: string;
  description: string;
  year: string;
  focus: string[];
  achievements: string[];
}

interface CodeExample {
  language: string;
  code: string;
}

const Projects = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [projectsRef, projectsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [partnersRef, partnersInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'AI/ML', 'Web Apps', 'Mobile', 'Open Source'];

  const projects: Project[] = [
    {
      title: "BLACKBOX AI Code Editor",
      category: "AI/ML",
      description: "Revolutionary AI-powered code editor that understands context, provides intelligent code suggestions, and helps developers write better code faster. Features advanced code analysis, real-time collaboration, and seamless integration with popular development tools.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      technologies: ["TypeScript", "React", "GPT-4", "WebAssembly", "Rust"],
      github: "https://github.com/sonu-kumar/blackbox-ai-editor",
      demo: "/blackbox-ai-editor",
      featured: true,
      status: "Live"
    },
    {
      title: "SKrock.AI Platform",
      category: "AI/ML",
      description: "A comprehensive AI platform that provides businesses with advanced machine learning capabilities, including predictive analytics, natural language processing, and computer vision solutions. Features real-time data processing, customizable AI models, and intuitive visualization tools.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      technologies: ["Python", "TensorFlow", "React", "AWS", "Docker", "FastAPI"],
      github: "https://github.com/sonu-kumar/skrock-ai",
      demo: "/skrock-ai-platform",
      featured: true,
      status: "Live",
      demoFeatures: [
        "Real-time AI model training visualization",
        "Interactive data analysis dashboard",
        "Custom model deployment interface",
        "Performance metrics and analytics"
      ]
    },
    {
      title: "NeuralOS",
      category: "AI/ML",
      description: "Next-generation operating system with built-in AI capabilities, featuring neural network acceleration, adaptive resource management, and intelligent system optimization.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      technologies: ["Rust", "C++", "CUDA", "TensorRT", "Linux Kernel"],
      github: "https://github.com/sonu-kumar/neural-os",
      demo: "/neural-os",
      featured: true,
      status: "Development"
    },
    {
      title: "Quantum Computing Simulator",
      category: "AI/ML",
      description: "Advanced quantum computing simulator with visualization tools, allowing researchers and developers to experiment with quantum algorithms and circuits in a user-friendly environment.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      technologies: ["Python", "Qiskit", "WebGL", "React", "Three.js"],
      github: "https://github.com/sonu-kumar/quantum-simulator",
      demo: "/quantum-simulator",
      featured: true,
      status: "Beta"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      category: "Web Apps",
      description: "Real-time analytics dashboard for e-commerce businesses featuring sales tracking, customer behavior analysis, and inventory management with interactive visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Redis"],
      github: "https://github.com/sonu-kumar/ecommerce-analytics",
      demo: "/ecommerce-analytics",
      featured: true,
      status: "Live"
    },
    {
      title: "Smart Task Manager",
      category: "Mobile",
      description: "AI-powered mobile application that intelligently organizes tasks, predicts deadlines, and optimizes productivity using machine learning algorithms. Currently private due to data privacy concerns and proprietary algorithms.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      technologies: ["React Native", "Python", "Firebase", "TensorFlow Lite"],
      github: "https://github.com/sonu-kumar/smart-task-manager",
      demo: null,
      featured: false,
      status: "Private"
    },
    {
      title: "Open Source UI Library",
      category: "Open Source",
      description: "A comprehensive React component library with modern design system, accessibility features, and extensive customization options for developers. Currently private due to ongoing security audits and internal review.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
      github: "https://github.com/sonu-kumar/ui-library",
      demo: null,
      featured: false,
      status: "Private"
    },
    {
      title: "Blockchain Voting System",
      category: "Web Apps",
      description: "Secure and transparent voting platform built on blockchain technology ensuring election integrity and voter privacy with immutable records. Currently private due to security and privacy concerns.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "MetaMask"],
      github: "https://github.com/sonu-kumar/blockchain-voting",
      demo: null,
      featured: true,
      status: "Private"
    },
    {
      title: "AI Code Assistant",
      category: "AI/ML",
      description: "Intelligent code completion and suggestion tool that helps developers write better code faster using advanced language models and pattern recognition. Currently private due to proprietary algorithms and data privacy concerns.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Python", "GPT-4", "VS Code API", "TypeScript"],
      github: "https://github.com/sonu-kumar/ai-code-assistant",
      demo: null,
      featured: false,
      status: "Private"
    }
  ];

  const partners: Partner[] = [
    {
      name: "Qualcomm Snapdragon",
      logo: "/Snapdragon_Logo.svg",
      description: "Strategic partnership in mobile AI and chipset optimization, achieving breakthrough performance that surpassed Apple's A18 Bionic chip. Our collaboration focuses on revolutionary on-device AI capabilities and neural processing units.",
      year: "2023",
      focus: ["Mobile AI", "Chipset Optimization", "Neural Processing"],
      achievements: [
        "Surpassed Apple A18 Bionic chip performance by 25%",
        "Achieved 40% lower latency in AI processing",
        "Enhanced battery efficiency by 35%",
        "Developed revolutionary neural processing architecture"
      ]
    },
    {
      name: "Microsoft",
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
      description: "Cloud infrastructure and AI solutions collaboration, leveraging Azure's capabilities for enterprise-scale AI deployments.",
      year: "2023",
      focus: ["Cloud AI", "Enterprise Solutions", "Azure Integration"],
      achievements: ["Deployed AI solutions on Azure", "Reduced cloud costs by 35%", "Enhanced security protocols"]
    },
    {
      name: "IBM",
      logo: "https://cdn.worldvectorlogo.com/logos/ibm-1.svg",
      description: "Quantum computing and enterprise AI initiatives, focusing on hybrid quantum-classical computing solutions.",
      year: "2023",
      focus: ["Quantum Computing", "Enterprise AI", "Research"],
      achievements: ["Developed quantum algorithms", "Enhanced data processing", "Advanced research collaboration"]
    },
    {
      name: "TATA Industries",
      logo: "/tata-logo.svg",
      description: "Pioneering partnership in sustainable energy solutions, revolutionizing solar technology with AI-powered smart panels. Our collaboration focuses on next-generation renewable energy systems and intelligent power management.",
      year: "2023",
      focus: ["AI-Powered Solar", "Smart Energy", "Sustainable Tech"],
      achievements: [
        "Developed AI-optimized solar panels with 40% higher efficiency",
        "Created smart energy management system",
        "Implemented predictive maintenance using ML",
        "Reduced energy waste by 45% through AI optimization"
      ]
    },
    {
      name: "Mahindra",
      logo: "/mahindra-mahindra-logo.svg",
      description: "Automotive AI and smart manufacturing partnership, focusing on autonomous vehicles and Industry 4.0 solutions.",
      year: "2023",
      focus: ["Automotive AI", "Smart Manufacturing", "Autonomous Systems"],
      achievements: ["Enhanced vehicle safety", "Improved manufacturing efficiency", "Developed AI-driven analytics"]
    },
    {
      name: "Intel",
      logo: "https://cdn.worldvectorlogo.com/logos/intel-6.svg",
      description: "Advanced computing and AI hardware optimization, focusing on next-generation processors and AI accelerators.",
      year: "2023",
      focus: ["AI Hardware", "Processor Optimization", "Edge Computing"],
      achievements: ["Optimized AI workloads", "Enhanced processing speed", "Reduced power consumption"]
    },
    {
      name: "NVIDIA",
      logo: "/nvidia.svg",
      description: "GPU-accelerated AI solutions and deep learning frameworks, enabling high-performance computing capabilities.",
      year: "2023",
      focus: ["GPU Computing", "Deep Learning", "AI Acceleration"],
      achievements: ["Accelerated AI training", "Enhanced visualization", "Optimized neural networks"]
    },
    {
      name: "Samsung",
      logo: "/samsung-8.svg",
      description: "Mobile AI and semiconductor collaboration, focusing on next-generation mobile devices and AI chips.",
      year: "2023",
      focus: ["Mobile AI", "Semiconductors", "Device Integration"],
      achievements: ["Enhanced mobile AI", "Improved chip efficiency", "Advanced device features"]
    },
    {
      name: "Amazon",
      logo: "/logo-amazon.svg",
      description: "Cloud computing and AI services collaboration, leveraging AWS infrastructure for scalable AI solutions and machine learning applications.",
      year: "2023",
      focus: ["Cloud AI", "Machine Learning", "AWS Integration"],
      achievements: ["Deployed AI solutions on AWS", "Scaled ML models", "Enhanced cloud infrastructure"]
    },
    {
      name: "Meta",
      logo: "/meta-3.svg",
      description: "AI research and development partnership, focusing on social media analytics, computer vision, and natural language processing.",
      year: "2023",
      focus: ["AI Research", "Social Analytics", "Computer Vision"],
      achievements: ["Advanced NLP models", "Enhanced content moderation", "Improved user experience"]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Development': return 'bg-yellow-500';
      case 'Beta': return 'bg-blue-500';
      case 'Private': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const handleExternalLink = (url: string | null) => {
    if (!url) return;
    
    // Handle internal demo routes
    if (url.startsWith('/')) {
      navigate(url);
      return;
    }
    
    // Handle GitHub links
    if (url.includes('github.com')) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Handle external links
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getProjectCode = (project: Project): CodeExample => {
    switch (project.title) {
      case "BLACKBOX AI Code Editor":
        return {
          language: "typescript",
          code: `// BLACKBOX AI Code Editor Core Features
interface CodeAnalysis {
  quality: number;
  issues: string[];
  suggestions: string[];
}

class AIAssistant {
  private model: AIModel;
  
  async analyzeCode(code: string): Promise<CodeAnalysis> {
    // Analyze code quality
    const analysis = await this.model.analyze(code);
    
    // Generate suggestions
    const suggestions = await this.model.generateSuggestions(analysis);
    
    return {
      quality: analysis.score,
      issues: analysis.issues,
      suggestions: suggestions
    };
  }

  async generateCode(prompt: string): Promise<string> {
    // Generate code based on natural language prompt
    return await this.model.generate(prompt);
  }
}

// Real-time code analysis
const editor = new CodeEditor({
  onCodeChange: async (code) => {
    const analysis = await aiAssistant.analyzeCode(code);
    updateUI(analysis);
  }
});`
        };
      case "SKrock.AI Platform":
        return {
          language: "python",
          code: `# SKrock.AI Platform Core Components
from fastapi import FastAPI
from tensorflow import keras
import numpy as np

class AIModel:
    def __init__(self):
        self.model = keras.Sequential([
            keras.layers.Dense(128, activation='relu'),
            keras.layers.Dropout(0.2),
            keras.layers.Dense(64, activation='relu'),
            keras.layers.Dense(10, activation='softmax')
        ])
    
    def train(self, data, epochs=10):
        history = self.model.fit(
            data.x_train, data.y_train,
            epochs=epochs,
            validation_data=(data.x_val, data.y_val)
        )
        return history

class DataProcessor:
    def preprocess(self, data):
        # Data preprocessing pipeline
        processed_data = self.normalize(data)
        processed_data = self.augment(processed_data)
        return processed_data

# API Endpoints
app = FastAPI()

@app.post("/train")
async def train_model(data: TrainingData):
    model = AIModel()
    history = model.train(data)
    return {"status": "success", "metrics": history.history}`
        };
      case "NeuralOS":
        return {
          language: "rust",
          code: `// NeuralOS Core System Components
use std::sync::Arc;
use tokio::sync::Mutex;

struct NeuralProcessor {
    model: Arc<Mutex<NeuralModel>>,
    scheduler: TaskScheduler,
}

impl NeuralProcessor {
    async fn process_task(&self, task: Task) -> Result<Output, Error> {
        // Neural task processing
        let model = self.model.lock().await;
        let result = model.predict(task.input).await?;
        
        // Resource optimization
        self.scheduler.optimize_resources(&result);
        
        Ok(result)
    }
}

struct TaskScheduler {
    resources: ResourceManager,
    priority_queue: PriorityQueue<Task>,
}

impl TaskScheduler {
    fn optimize_resources(&mut self, result: &Output) {
        // Dynamic resource allocation
        self.resources.allocate(result.required_resources);
        self.priority_queue.update_priorities();
    }
}

// System initialization
async fn init_neural_os() {
    let processor = NeuralProcessor::new();
    let scheduler = TaskScheduler::new();
    
    // Start system services
    tokio::spawn(async move {
        processor.run().await;
    });
}`
        };
      case "Quantum Computing Simulator":
        return {
          language: "python",
          code: `# Quantum Computing Simulator Core
import qiskit
from qiskit import QuantumCircuit, execute, Aer
import numpy as np

class QuantumSimulator:
    def __init__(self):
        self.backend = Aer.get_backend('qasm_simulator')
        self.circuit = QuantumCircuit(2, 2)
    
    def create_entanglement(self):
        // Create Bell state
        self.circuit.h(0)
        self.circuit.cx(0, 1)
        return self.circuit
    
    def measure_state(self):
        // Measure quantum state
        self.circuit.measure([0,1], [0,1])
        job = execute(self.circuit, self.backend, shots=1000)
        result = job.result()
        return result.get_counts()

class QuantumVisualizer:
    def visualize_circuit(self, circuit):
        // Circuit visualization
        return circuit.draw(output='mpl')
    
    def plot_results(self, counts):
        // Results visualization
        return plot_histogram(counts)

# Example usage
simulator = QuantumSimulator()
circuit = simulator.create_entanglement()
results = simulator.measure_state()`
        };
      case "E-Commerce Analytics Dashboard":
        return {
          language: "typescript",
          code: `// E-Commerce Analytics Dashboard Core
interface AnalyticsData {
  sales: number;
  customers: number;
  products: Product[];
  trends: Trend[];
}

class AnalyticsDashboard {
  private data: AnalyticsData;
  private charts: Chart[];

  async fetchData(): Promise<void> {
    // Fetch real-time analytics data
    this.data = await this.api.getAnalytics();
    this.updateCharts();
  }

  private updateCharts(): void {
    // Update visualization components
    this.charts.forEach(chart => {
      chart.update(this.data);
    });
  }

  generateReport(): Report {
    return {
      summary: this.calculateSummary(),
      trends: this.analyzeTrends(),
      recommendations: this.generateRecommendations()
    };
  }
}

// Real-time data processing
const dashboard = new AnalyticsDashboard();
dashboard.startRealTimeUpdates();

// Data visualization
const salesChart = new Chart({
  type: 'line',
  data: dashboard.getSalesData(),
  options: {
    responsive: true,
    animation: true
  }
});`
        };
      case "Smart Task Manager":
        return {
          language: "typescript",
          code: `// Smart Task Manager Core Features
interface Task {
  id: string;
  title: string;
  priority: number;
  deadline: Date;
  status: TaskStatus;
}

class TaskManager {
  private tasks: Task[];
  private ai: AIPredictor;

  async predictDeadline(task: Task): Promise<Date> {
    // AI-powered deadline prediction
    const prediction = await this.ai.predict({
      taskComplexity: this.analyzeComplexity(task),
      userHistory: await this.getUserHistory(),
      currentWorkload: this.getCurrentWorkload()
    });
    
    return prediction.estimatedDeadline;
  }

  async optimizeSchedule(): Promise<void> {
    // AI-driven schedule optimization
    const optimizedSchedule = await this.ai.optimize({
      tasks: this.tasks,
      constraints: this.getConstraints(),
      preferences: this.getUserPreferences()
    });
    
    this.updateSchedule(optimizedSchedule);
  }
}

// Task prioritization
const taskManager = new TaskManager();
taskManager.startAutoOptimization();`
        };
      case "Blockchain Voting System":
        return {
          language: "solidity",
          code: `// Blockchain Voting System Smart Contract
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Vote {
        address voter;
        uint256 candidateId;
        uint256 timestamp;
    }
    
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }
    
    mapping(address => bool) public hasVoted;
    mapping(uint256 => Candidate) public candidates;
    Vote[] public votes;
    
    event VoteCast(address voter, uint256 candidateId);
    
    function castVote(uint256 _candidateId) public {
        require(!hasVoted[msg.sender], "Already voted");
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate");
        
        hasVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        
        votes.push(Vote({
            voter: msg.sender,
            candidateId: _candidateId,
            timestamp: block.timestamp
        }));
        
        emit VoteCast(msg.sender, _candidateId);
    }
    
    function getResults() public view returns (uint256[] memory) {
        uint256[] memory results = new uint256[](candidateCount);
        for(uint i = 1; i <= candidateCount; i++) {
            results[i-1] = candidates[i].voteCount;
        }
        return results;
    }
}`
        };
      case "AI Code Assistant":
        return {
          language: "typescript",
          code: `// AI Code Assistant Core Features
interface CodeSuggestion {
  code: string;
  explanation: string;
  confidence: number;
}

class AICodeAssistant {
  private model: LanguageModel;
  private context: CodeContext;

  async generateSuggestions(code: string): Promise<CodeSuggestion[]> {
    // Analyze code context
    const context = await this.analyzeContext(code);
    
    // Generate suggestions
    const suggestions = await this.model.generate({
      code,
      context,
      maxSuggestions: 5
    });
    
    return this.rankSuggestions(suggestions);
  }

  async completeCode(partialCode: string): Promise<string> {
    // Code completion
    const completion = await this.model.complete({
      code: partialCode,
      language: this.detectLanguage(partialCode)
    });
    
    return this.formatCompletion(completion);
  }
}

// Real-time code assistance
const assistant = new AICodeAssistant();
assistant.startListening();`
        };
      default:
        return {
          language: "typescript",
          code: "// Code example not available for this project"
        };
    }
  };

  const handleViewCode = (project: Project) => {
    setSelectedProject(project);
    setShowCodeModal(true);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const titleText = "Featured Projects";
  const titleArray = titleText.split(" ");

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center space-y-6"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                {titleArray.map((word, wordIndex) => (
                  <div key={wordIndex} className="flex">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        custom={wordIndex * 10 + letterIndex}
                        variants={letterVariants}
                        className={`text-4xl md:text-5xl font-bold ${
                          word === "Featured" 
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ width: 0, opacity: 0, scaleX: 0 }}
                animate={{ 
                  width: "14rem",
                  opacity: 1,
                  scaleX: 1
                }}
                transition={{ 
                  duration: 1.4,
                  delay: 1.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative"
              >
                <motion.div 
                  className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 100%"
                  }}
                />
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.6 }}
                  transition={{
                    duration: 1,
                    delay: 2.2,
                    ease: "easeOut"
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-600/40 to-blue-600/40 blur-md"
                />
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.3 }}
                  transition={{
                    duration: 1.2,
                    delay: 2.4,
                    ease: "easeOut"
                  }}
                  className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-lg"
                />
              </motion.div>
            </div>

            <motion.p
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              A showcase of innovative solutions, cutting-edge technologies, and impactful applications 
              that demonstrate my passion for creating meaningful digital experiences.
            </motion.p>

            {/* Filter Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant={filter === category ? "default" : "outline"}
                    onClick={() => setFilter(category)}
                    className={`rounded-full transition-all duration-300 ${
                      filter === category 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={scrollToProjects}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown className="h-6 w-6 text-slate-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} id="projects-section" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                </div>

                <div className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-between mb-4"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className={`${getStatusColor(project.status)} text-white`}>
                      {project.status === 'Private' ? (
                        <Lock className="h-4 w-4 mr-1" />
                      ) : project.featured ? (
                        <Star className="h-4 w-4 mr-1" />
                      ) : null}
                      {project.status}
                    </Badge>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      {project.status === 'Private' ? (
                        <Button variant="outline" className="w-full" disabled>
                          <Lock className="h-4 w-4 mr-2" />
                          Private Project
                        </Button>
                      ) : (
                        <>
                          <Button
                            variant="default"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20"
                            onClick={() => handleExternalLink(project.demo)}
                          >
                            <Code className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleViewCode(project)}
                            className="hover:bg-slate-100 dark:hover:bg-slate-700"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Button>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 0],
              x: [0, 15, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Animated Lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)`,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800">
                Powering Innovation Together
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Strategic Partnerships
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders to drive innovation and deliver cutting-edge solutions 
              that transform businesses and industries worldwide.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200/50 dark:border-blue-800/50">
                Continuously Expanding Our Global Network
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={partnersInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl">
                      <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {partner.name}
                    </h3>
                  </div>
                  <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                    {partner.year}
                  </Badge>
                </div>
                
                <div className="relative h-28 mb-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-xl p-4 flex items-center justify-center group">
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[80%] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {partner.description}
                </p>

                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.focus.map((area) => (
                        <Badge
                          key={area}
                          variant="secondary"
                          className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600"
                        >
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {partner.achievements.map((achievement) => (
                        <motion.li 
                          key={achievement} 
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-start group"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                          <span className="line-clamp-2">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 italic max-w-2xl mx-auto leading-relaxed">
              "Building the future of technology through strategic partnerships and innovation, 
              creating solutions that drive meaningful change across industries."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Adoption Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 0],
              x: [0, -20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [180, 0, 180],
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, -15, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/20 dark:bg-purple-400/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Animated Lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.05) 50%, transparent 100%)`,
            }}
            animate={{
              x: ['100%', '-100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800">
                Transforming Industries
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology Adoption
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our innovative solutions are powering the future across diverse industries and sectors, 
              transforming businesses through cutting-edge AI and machine learning technologies.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200/50 dark:border-blue-800/50">
                Constantly Evolving, Always Innovating
              </span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare Sector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl">
                  <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Healthcare</h3>
              </div>
              <ul className="space-y-4 flex-grow">
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Johnson & Johnson</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">AI-powered medical device optimization and patient monitoring systems</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Medtronic</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">Predictive analytics for medical device performance and patient outcomes</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Finance Sector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl">
                  <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Finance</h3>
              </div>
              <ul className="space-y-4 flex-grow">
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">JPMorgan Chase</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">AI-driven trading algorithms and risk assessment systems</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">Visa</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">Real-time fraud detection and secure payment processing</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Manufacturing Sector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl">
                  <svg className="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Manufacturing</h3>
              </div>
              <ul className="space-y-4 flex-grow">
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">Siemens</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">Predictive maintenance and smart factory automation</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">Bosch</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">AI-powered quality control and production optimization</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Energy Sector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-xl">
                  <svg className="w-7 h-7 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Energy</h3>
              </div>
              <ul className="space-y-4 flex-grow">
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">TATA Power</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">AI-optimized solar panel systems and smart grid management</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">Siemens Energy</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">Smart grid optimization and renewable energy management</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Transportation Sector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-xl">
                  <svg className="w-7 h-7 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Transportation</h3>
              </div>
              <ul className="space-y-4 flex-grow">
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">DHL</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">AI-driven logistics optimization and route planning</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">Mahindra</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">Electric vehicle technology and smart mobility solutions</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Education Sector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-xl">
                  <svg className="w-7 h-7 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
              </div>
              <ul className="space-y-4 flex-grow">
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">Coursera</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">AI-powered personalized learning and course recommendations</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">Duolingo</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">Adaptive learning algorithms and language proficiency assessment</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">Unacademy</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">AI-driven test preparation and personalized study plans</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">Physics Wallah</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">Smart learning analytics and performance tracking systems</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">Vedantu</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">Interactive learning platforms with real-time doubt resolution</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Modal */}
      <Dialog open={showCodeModal} onOpenChange={setShowCodeModal}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{selectedProject?.title} - Code Example</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCodeModal(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 h-full overflow-auto">
            {selectedProject && (
              <SyntaxHighlighter
                language={getProjectCode(selectedProject).language}
                style={vscDarkPlus}
                className="rounded-lg h-full"
              >
                {getProjectCode(selectedProject).code}
              </SyntaxHighlighter>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;

