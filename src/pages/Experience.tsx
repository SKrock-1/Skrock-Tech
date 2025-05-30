import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, Star } from 'lucide-react';

const Experience = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [timelineRef, timelineInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "CEO & Founder",
      company: "SKrock.AI",
      period: "Present",
      type: "Leadership",
      description: "Leading innovation in AI and technology solutions, building a team of talented engineers and data scientists.",
      achievements: [
        "Founded and scaled AI technology company",
        "Built and led high-performing engineering teams",
        "Developed cutting-edge AI solutions",
        "Established strategic partnerships"
      ],
      technologies: ["AI/ML", "Leadership", "Strategy", "Innovation"]
    },
    {
      title: "Operating System Developer",
      company: "SKrock OS",
      period: "2023-2024",
      type: "Engineering",
      description: "Designed and developed a custom operating system with advanced features and optimizations.",
      achievements: [
        "Built custom kernel with real-time processing capabilities",
        "Implemented advanced memory management system",
        "Developed custom file system with enhanced security",
        "Created system utilities and development tools"
      ],
      technologies: ["C/C++", "Assembly", "Kernel Development", "System Architecture"]
    },
    {
      title: "Game Engine Architect",
      company: "SKrock Engine",
      period: "2023-2024",
      type: "Engineering",
      description: "Architected and developed a high-performance game engine with advanced rendering capabilities.",
      achievements: [
        "Built custom physics engine with real-time simulation",
        "Implemented advanced rendering pipeline with PBR",
        "Developed cross-platform support system",
        "Created comprehensive game development tools"
      ],
      technologies: ["C++", "OpenGL/Vulkan", "Game Development", "Graphics Programming"]
    },
    {
      title: "Web Server Developer",
      company: "SKrock Web",
      period: "2023-2024",
      type: "Engineering",
      description: "Developed high-performance web servers and networking solutions.",
      achievements: [
        "Built custom HTTP server with advanced caching",
        "Implemented load balancing and clustering",
        "Developed custom routing and middleware system",
        "Created monitoring and analytics tools"
      ],
      technologies: ["Node.js", "C++", "Networking", "System Design"]
    },
    {
      title: "Software Engineering Intern",
      company: "Meta",
      period: "2024",
      type: "Engineering",
      description: "Worked on cutting-edge AI and machine learning projects, contributing to Meta's innovative technology stack.",
      achievements: [
        "Contributed to User research projects",
        "Implemented advanced algorithms",
        "Collaborated with senior engineers",
        "Enhanced system performance"
      ],
      technologies: ["AI/ML", "Python", "TensorFlow", "Research"]
    },
    {
      title: "Software Engineering Intern",
      company: "Google",
      period: "2023",
      type: "Engineering",
      description: "Developed innovative solutions and gained hands-on experience with Google's advanced technology infrastructure.",
      achievements: [
        "Worked on core infrastructure projects",
        "Developed scalable solutions",
        "Optimized system performance",
        "Implemented best practices"
      ],
      technologies: ["Go", "Cloud", "Infrastructure", "Scalability"]
    },
    {
      title: "Manager",
      company: "Amazon College Club",
      period: "2023-2024",
      type: "Leadership",
      description: "Led a team of students in organizing tech events, workshops, and hackathons, fostering innovation and learning.",
      achievements: [
        "Organized successful tech events",
        "Mentored student developers",
        "Conducted technical workshops",
        "Built strong community"
      ],
      technologies: ["Leadership", "Event Planning", "Mentorship", "Community"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Leadership": return "from-emerald-500 to-cyan-500";
      case "Engineering": return "from-blue-500 to-purple-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 via-cyan-600/20 to-emerald-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [10, 0, 10],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-emerald-600/20 to-cyan-400/20 rounded-full blur-3xl"
          />
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0.1,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {['⚛️', '🚀', '💻', '🔧', '⚡', '🌐', '🎮', '🔮'][i % 8]}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                Professional
                <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent"> Experience</span>
              </h1>
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              A journey through innovation, leadership, and technical excellence. 
              From intern to CEO, building impactful solutions and leading high-performing teams.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8"
            >
              {[
                { label: "Innovation Awards", value: "15+" },
                { label: "Projects Completed", value: "100+" },
                { label: "Patents Filed", value: "300+" },
                { label: "Companies Worked", value: "4+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-gradient-to-b from-slate-50/50 via-slate-100/50 to-slate-50/50 dark:from-slate-800/50 dark:via-slate-900/50 dark:to-slate-800/50 relative overflow-hidden">
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-900/5 dark:to-slate-900/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-600 via-cyan-600 to-emerald-600"
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={timelineInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-full border-4 border-white dark:border-slate-900 z-10`}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.span 
                          initial={{ opacity: 0, x: -20 }}
                          animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(exp.type)} mb-2`}
                        >
                          {exp.type}
                        </motion.span>
                        <motion.h3 
                          initial={{ opacity: 0, y: 20 }}
                          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                          className="text-xl font-bold text-slate-900 dark:text-white"
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                          className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 mt-1"
                        >
                          <Building className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                        className="flex items-center text-slate-500 dark:text-slate-400"
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                      className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed"
                    >
                      {exp.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.9 }}
                      className="mb-4"
                    >
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + 1 + idx * 0.1 }}
                          >
                            <span className="text-emerald-500 mr-2 mt-1">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 1.2 }}
                      className="flex flex-wrap gap-2"
                    >
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={timelineInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + 1.3 + idx * 0.1 }}
                          className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;