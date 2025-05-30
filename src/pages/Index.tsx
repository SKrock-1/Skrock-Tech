import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Index = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [featuresRef, featuresInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const roles = [
    "CEO of SKrock.AI",
    "Tech Entrepreneur", 
    "Software Engineer",
    "Full Stack Developer",
    "Tech Enthusiast"
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center relative pt-16 overflow-hidden">
        {/* Desktop Background Elements */}
        <div className="hidden lg:block absolute inset-0 overflow-hidden">
          {/* Main gradient orbs */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-slate-900/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-600/20 via-blue-600/20 to-slate-900/20 rounded-full blur-3xl"
          />

          {/* Tech pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-900/5 dark:to-slate-900/10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          {/* Desktop Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Desktop Glowing accent lines */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-500/10 dark:border-blue-400/10 rounded-full blur-sm" />
            <div className="absolute top-1/3 right-1/3 w-96 h-96 border border-purple-500/10 dark:border-purple-400/10 rounded-full blur-sm" />
          </motion.div>
        </div>

        {/* Mobile Background Elements */}
        <div className="lg:hidden absolute inset-0 overflow-hidden">
          {/* Mobile floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`mobile-particle-${i}`}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
          
          {/* Mobile gradient waves */}
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/10 to-transparent blur-xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column: Logo and Text Content */}
            <div className="flex flex-col items-center lg:items-start space-y-12">
              {/* Desktop Logo Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative w-full max-w-sm mx-auto lg:mx-0 mb-8 sm:mb-0"
              >
                <div className="absolute inset-0 -m-4 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 dark:from-black/95 dark:via-slate-900/95 dark:to-black/95 rounded-2xl backdrop-blur-md border border-slate-800/30 dark:border-slate-700/30 overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-slate-900/10 rounded-2xl"
                  />
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-purple-600/10 to-blue-600/10 rounded-2xl"
                  />
                </div>
                <div className="relative z-10 p-4 flex flex-col sm:flex-row items-center gap-4">
                  <Logo size="xl" />
                  <div>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={heroInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-base sm:text-lg font-tech text-slate-700 dark:text-slate-300 text-center sm:text-left"
                    >
                      Innovating
                      <br />
                      <span className="text-blue-600 dark:text-blue-400">Tomorrow's Tech</span>
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Logo Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:hidden relative w-full max-w-sm mx-auto mb-8"
              >
                <div className="absolute inset-0 -m-4 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 dark:from-black/95 dark:via-slate-900/95 dark:to-black/95 rounded-2xl backdrop-blur-md border border-slate-800/30 dark:border-slate-700/30 overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-slate-900/10 rounded-2xl"
                  />
                </div>
                <div className="relative z-10 p-4 flex flex-col items-center gap-4">
                  <Logo size="xl" />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg font-tech text-slate-700 dark:text-slate-300 text-center"
                  >
                    Innovating
                    <br />
                    <span className="text-blue-600 dark:text-blue-400">Tomorrow's Tech</span>
                  </motion.p>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8 text-center lg:text-left"
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight font-heading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-charm">
                    Sonu Kumar
                  </span>
                  <br className="lg:hidden"/>
                  <span className="text-slate-600 dark:text-slate-400 text-2xl sm:text-3xl md:text-4xl ml-0 lg:ml-2 font-heading">
                    aka{" "}
                    <span className="font-light tracking-wider text-slate-700 dark:text-slate-300 relative inline-block">
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-sm transform -rotate-1"></span>
                      <span className="relative transform -rotate-1 inline-block">
                        SKROCK
                      </span>
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600/30 to-purple-600/30"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </span>
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 space-y-2 lg:space-y-3 font-sans"
                >
                  {roles.map((role, index) => (
                    <motion.div
                      key={role}
                      initial={{ opacity: 0, x: -20 }}
                      animate={heroInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="block"
                    >
                      {role}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 1.0 }}
                  className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-full lg:max-w-2xl leading-relaxed font-sans px-4 lg:px-0"
                >
                  Building the future through innovative technology solutions and entrepreneurial vision. 
                  Transforming ideas into reality with cutting-edge software engineering.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start px-4 lg:px-0"
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <Link to="/projects" className="flex items-center justify-center">
                      <Code className="mr-2 h-5 w-5" />
                      View My Work
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer"
                  >
                    <Link to="/about" className="flex items-center justify-center">
                      <User className="mr-2 h-5 w-5" />
                      About Me
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column: Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full flex justify-center lg:justify-end px-4 lg:px-0"
            >
              <div className="relative w-full max-w-md">
                <motion.img 
                  src="/profile_image.jpg"
                  alt="Sonu Kumar Profile"
                  className="w-full h-auto object-cover rounded-xl shadow-xl"
                  initial={{ scale: 0.95 }}
                  animate={heroInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-6 text-center px-4 lg:px-0"
                >
                  <blockquote className="relative">
                    <div className="absolute -top-4 -left-4 text-4xl text-blue-600/20 dark:text-blue-400/20">"</div>
                    <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
                      In the symphony of technology, every line of code is a note, every algorithm a melody, and every innovation a masterpiece waiting to be composed.
                    </p>
                    <div className="absolute -bottom-4 -right-4 text-4xl text-blue-600/20 dark:text-blue-400/20 transform rotate-180">"</div>
                  </blockquote>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-4 text-sm text-slate-600 dark:text-slate-400 font-medium"
                  >
                    — Sonu Kumar
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-8 lg:transform-none"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-slate-400 dark:text-slate-600"
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section ref={featuresRef} className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading">
              Innovation Through Technology
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI & Machine Learning",
                  description: "Pioneering AI solutions that transform businesses and create value.",
                  icon: "🤖",
                  gradient: "from-blue-600/20 to-purple-600/20",
                  hoverGradient: "from-blue-600/30 to-purple-600/30",
                  stats: [
                    { label: "Projects Completed", value: "50+" },
                    { label: "Success Rate", value: "95%" }
                  ],
                  keyPoints: [
                    "Natural Language Processing",
                    "Computer Vision Solutions",
                    "Predictive Analytics",
                    "Deep Learning Models"
                  ]
                },
                {
                  title: "Software Engineering",
                  description: "Building scalable, efficient applications with modern technologies.",
                  icon: "💻",
                  gradient: "from-purple-600/20 to-pink-600/20",
                  hoverGradient: "from-purple-600/30 to-pink-600/30",
                  stats: [
                    { label: "Lines of Code", value: "1M+" },
                    { label: "Active Users", value: "100K+" }
                  ],
                  keyPoints: [
                    "Full Stack Development",
                    "Cloud Architecture",
                    "Microservices",
                    "DevOps Integration"
                  ]
                },
                {
                  title: "Tech Leadership", 
                  description: "Leading teams and projects to deliver exceptional results.",
                  icon: "🚀",
                  gradient: "from-pink-600/20 to-orange-600/20",
                  hoverGradient: "from-pink-600/30 to-orange-600/30",
                  stats: [
                    { label: "Team Size", value: "50+" },
                    { label: "Projects Led", value: "100+" }
                  ],
                  keyPoints: [
                    "Agile Methodology",
                    "Team Mentoring",
                    "Strategic Planning",
                    "Innovation Management"
                  ]
                },
                {
                  title: "Cloud Solutions",
                  description: "Designing and implementing robust cloud infrastructure for optimal performance.",
                  icon: "☁️",
                  gradient: "from-cyan-600/20 to-blue-600/20",
                  hoverGradient: "from-cyan-600/30 to-blue-600/30",
                  stats: [
                    { label: "Cloud Deployments", value: "200+" },
                    { label: "Cost Savings", value: "40%" }
                  ],
                  keyPoints: [
                    "AWS Architecture",
                    "Serverless Solutions",
                    "Cloud Security",
                    "Scalable Infrastructure"
                  ]
                },
                {
                  title: "Blockchain Development",
                  description: "Creating secure and innovative blockchain solutions for modern businesses.",
                  icon: "⛓️",
                  gradient: "from-emerald-600/20 to-teal-600/20",
                  hoverGradient: "from-emerald-600/30 to-teal-600/30",
                  stats: [
                    { label: "Smart Contracts", value: "30+" },
                    { label: "Transactions/sec", value: "10K+" }
                  ],
                  keyPoints: [
                    "Smart Contract Development",
                    "DeFi Solutions",
                    "NFT Platforms",
                    "Blockchain Security"
                  ]
                },
                {
                  title: "Mobile Development",
                  description: "Crafting intuitive and powerful mobile applications for iOS and Android.",
                  icon: "📱",
                  gradient: "from-violet-600/20 to-indigo-600/20",
                  hoverGradient: "from-violet-600/30 to-indigo-600/30",
                  stats: [
                    { label: "Apps Published", value: "25+" },
                    { label: "User Rating", value: "4.8/5" }
                  ],
                  keyPoints: [
                    "Cross-platform Development",
                    "Native App Development",
                    "Mobile UI/UX",
                    "App Store Optimization"
                  ]
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content wrapper */}
                  <div className="relative z-10">
                    {/* Icon with animation */}
                    <motion.div 
                      className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Title with underline effect */}
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 relative inline-block">
                      {feature.title}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </h3>

                    {/* Description with fade effect */}
                    <motion.p 
                      className="text-slate-600 dark:text-slate-400 mb-6"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.description}
                    </motion.p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {feature.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="text-center p-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                        >
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {stat.value}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Key Points */}
                    <div className="space-y-2">
                      {feature.keyPoints.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2" />
                          {point}
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover indicator */}
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
