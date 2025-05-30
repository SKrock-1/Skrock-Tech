import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Mail, Code, User } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Email", path: "mailto:sonu@skrock.ai", external: true },
        { name: "LinkedIn", path: "https://in.linkedin.com/in/sonu-kumar-6a2491345#:~:text=Sonu%20Kumar%20%2D%20Chief%20Executive%20Officer,Ltd.", external: true },
        { name: "GitHub", path: "https://github.com/SKrock-1", external: true },
        { name: "Twitter", path: "#", external: true },
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold"
              >
                SK
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Sonu Kumar</h3>
                <p className="text-slate-400 text-sm">CEO @ SKrock.AI</p>
              </div>
            </Link>
            
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Building the future through innovative technology solutions. 
              Passionate about AI, software engineering, and creating meaningful digital experiences.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Mail, href: "mailto:sonu@skrock.ai", label: "Email" },
                { icon: Code, href: "#", label: "GitHub" },
                { icon: User, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        className="text-slate-400 hover:text-white transition-colors duration-200 block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-slate-400 hover:text-white transition-colors duration-200 block"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* HOPE Logo Section - Moved to the right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col items-center lg:items-end justify-start"
          >
            <motion.div 
              className="text-sm font-medium text-slate-300 mb-4 text-center lg:text-right tracking-wider"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              POWERED BY
            </motion.div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-40 h-40">
                {/* Hexagonal background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-cyan-600/20 to-violet-600/20"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Glowing border */}
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 border-2 border-emerald-500/50 dark:border-emerald-400/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                      boxShadow: [
                        "0 0 15px rgba(16, 185, 129, 0.3)",
                        "0 0 25px rgba(16, 185, 129, 0.5)",
                        "0 0 15px rgba(16, 185, 129, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                {/* Inner hexagon */}
                <motion.div 
                  className="absolute inset-4"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 border-2 border-violet-500/50 dark:border-violet-400/50"
                    animate={{
                      scale: [1, 1.15, 1],
                      rotate: [360, 0],
                      boxShadow: [
                        "0 0 15px rgba(139, 92, 246, 0.3)",
                        "0 0 25px rgba(139, 92, 246, 0.5)",
                        "0 0 15px rgba(139, 92, 246, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                {/* HOPE text */}
                <div className="relative flex items-center justify-center w-full h-full">
                  <motion.div
                    className="text-4xl font-bold"
                    style={{
                      background: "linear-gradient(45deg, #10B981, #06B6D4, #8B5CF6)",
                      backgroundSize: "200% 200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 30px rgba(16, 185, 129, 0.5)"
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    HOPE
                  </motion.div>
                </div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full ${
                      i % 3 === 0 
                        ? 'bg-emerald-500/70' 
                        : i % 3 === 1 
                        ? 'bg-cyan-500/70' 
                        : 'bg-violet-500/70'
                    }`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      filter: "blur(0.5px)"
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 2, 1],
                      x: [0, Math.random() * 20 - 10, 0]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                ))}

                {/* Additional glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm flex items-center">
            © {currentYear} Sonu Kumar
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
