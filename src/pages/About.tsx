import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Mail, Code, Star, User, Award, Globe, Rocket, Lightbulb, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: "React & Next.js", level: 95, icon: "⚛️" },
    { name: "Node.js & Express", level: 90, icon: "🟢" },
    { name: "Python & AI/ML", level: 88, icon: "🐍" },
    { name: "TypeScript", level: 92, icon: "📘" },
    { name: "Cloud & DevOps", level: 85, icon: "☁️" },
    { name: "Leadership", level: 95, icon: "👥" },
    { name: "Blockchain Development", level: 87, icon: "⛓️" },
    { name: "Mobile Development", level: 90, icon: "📱" },
    { name: "UI/UX Design", level: 88, icon: "🎨" },
    { name: "System Architecture", level: 92, icon: "🏗️" },
    { name: "Database Management", level: 89, icon: "🗄️" },
    { name: "Project Management", level: 93, icon: "📊" }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "CEO & Founder",
      description: "Built a Parent Company SKrock.AI which is a group of 16 companies, in sectors like technology, education, media, automotive and consulting. "
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Tech Innovation",
      description: "Developed cutting-edge AI solutions that have transformed business operations for multiple clients."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Staying at the forefront of technology trends while pursuing advanced studies in computer science."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship",
      description: "Mentoring young developers and entrepreneurs to help them achieve their career goals."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Project Excellence",
      description: "Successfully delivered over 100+ projects with a 95% client satisfaction rate."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Developed solutions that have positively impacted businesses across 20+ countries."
    }
  ];

  const expertise = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        "React.js & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux & Context API",
        "Responsive Design",
        "Performance Optimization"
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        "Node.js & Express",
        "Python & Django",
        "RESTful APIs",
        "GraphQL",
        "Microservices",
        "Database Design"
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "TensorFlow & PyTorch",
        "Model Deployment"
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        "AWS & Azure",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Cloud Architecture",
        "Security & Compliance"
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  About 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Me</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                I'm Sonu Kumar, a passionate tech entrepreneur and the CEO of SKrock.AI. With a deep love for 
                technology and innovation, I've dedicated my career to building solutions that make a real 
                difference in people's lives.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                My journey spans from being a curious student to leading a tech company, always driven by 
                the belief that technology should empower and inspire. I specialize in AI/ML, full-stack 
                development, and building scalable solutions that solve complex business challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <a href="mailto:contact@skrock.ai" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <Link to="/projects" className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    View Projects
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gradient-to-b from-slate-50/50 via-slate-100/50 to-slate-50/50 dark:from-slate-800/50 dark:via-slate-900/50 dark:to-slate-800/50 relative overflow-hidden">
        {/* Enhanced Background Effects */}
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
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 via-purple-600/20 to-blue-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 via-blue-600/20 to-purple-400/20 rounded-full blur-3xl"
        />

        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-900/5 dark:to-slate-900/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skills & Expertise
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                initial={{ scaleX: 0 }}
                animate={skillsInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A comprehensive skill set spanning technology, leadership, and innovation, backed by years of experience and continuous learning.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
            >
              <motion.h3 
                className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 relative inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Technical Skills
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ scaleX: 0 }}
                  animate={skillsInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-3">
                        <motion.span 
                          className="text-xl"
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span 
                        className="text-slate-600 dark:text-slate-400 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={skillsInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 h-2 rounded-full relative"
                      >
                        <motion.div
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
            >
              <motion.h3 
                className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 relative inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Key Achievements
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ scaleX: 0 }}
                  animate={skillsInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="group flex items-start space-x-4 p-4 bg-white/70 dark:bg-slate-900/70 rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <motion.div 
                      className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        {achievement.title}
                      </motion.h4>
                      <motion.p 
                        className="text-slate-600 dark:text-slate-400"
                        initial={{ opacity: 0, y: 10 }}
                        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      >
                        {achievement.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <motion.h3 
              className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center relative inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Areas of Expertise
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                initial={{ scaleX: 0 }}
                animate={skillsInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group bg-white/70 dark:bg-slate-900/70 rounded-xl p-6 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.span 
                      className="text-2xl"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {area.icon}
                    </motion.span>
                    <motion.h4 
                      className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    >
                      {area.category}
                    </motion.h4>
                  </div>
                  <ul className="space-y-2">
                    {area.skills.map((skill, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 + idx * 0.05 }}
                        className="flex items-center text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors"
                      >
                        <motion.span 
                          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-2 group-hover:scale-150 transition-transform"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                        />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
