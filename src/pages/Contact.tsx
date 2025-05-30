import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, User, MapPin, Settings, Star, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formSectionRef, formInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_5yyf0dt', // Replace with your Service ID (e.g., 'service_abc123')
        'template_u4gy138', // Replace with your Template ID (e.g., 'template_xyz789')
        formRef.current!,
        'cnFSsljT0P8PDA6q1' // Replace with your Public Key (e.g., 'public_key_123abc')
      );

      setSubmitStatus('success');
      toast.success('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ceo@skrock.ai",
      description: "Drop me a line anytime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      description: "or anywhere in the world",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Settings,
      title: "Response Time",
      value: "24 Hours",
      description: "I'll get back to you quickly",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 relative overflow-hidden">
        {/* Desktop Background Elements */}
        <div className="hidden lg:block absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"
          />
        </div>

        {/* Mobile Background Elements */}
        <div className="lg:hidden absolute inset-0">
          {/* Mobile floating particles */}
          {[...Array(10)].map((_, i) => (
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
            >
              <h1 className="text-3xl lg:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Let's
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Connect</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base lg:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0"
            >
              Have a project in mind? Want to collaborate? Or just want to say hello? 
              I'd love to hear from you. Let's build something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 lg:py-20 bg-slate-50/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8 mb-12 lg:mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="lg:block"
              >
                <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${info.color} mb-3 lg:mb-4`}
                    >
                      <info.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-1 lg:mb-2">
                      {info.title}
                    </h3>
                    <p className="text-base lg:text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1 lg:mb-2">
                      {info.value}
                    </p>
                    <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              ref={formSectionRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:block"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">
                Send Me a Message
              </h2>
              <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 mb-6 lg:mb-8 leading-relaxed">
                Whether you have a question about my work, want to discuss a potential collaboration, 
                or just want to connect, I'm always excited to hear from fellow innovators and creators.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="pl-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 h-10 lg:h-11"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="pl-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 h-10 lg:h-11"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <div className="relative">
                    <Star className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration"
                      className="pl-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 h-10 lg:h-11"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Message
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={4}
                      className="pl-10 pt-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 resize-none min-h-[120px] lg:min-h-[150px]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative"
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full py-5 lg:py-6 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <XCircle className="mr-2 h-5 w-5" />
                        Failed to Send
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8 mt-8 lg:mt-0"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl p-6 lg:p-8 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">
                  Why Work With Me?
                </h3>
                
                <div className="space-y-4 lg:space-y-6">
                  {[
                    {
                      icon: "🚀",
                      title: "Innovation First",
                      description: "I bring cutting-edge solutions and creative thinking to every project."
                    },
                    {
                      icon: "⚡",
                      title: "Fast Delivery",
                      description: "Efficient workflows and agile methodologies ensure timely project completion."
                    },
                    {
                      icon: "🎯",
                      title: "Results Driven",
                      description: "Focused on delivering measurable results that drive business growth."
                    },
                    {
                      icon: "🤝",
                      title: "Collaborative",
                      description: "I believe in transparent communication and working closely with clients."
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-3 lg:space-x-4"
                    >
                      <div className="text-xl lg:text-2xl">{benefit.icon}</div>
                      <div>
                        <h4 className="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-1 lg:mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-6 lg:mt-8 p-4 lg:p-6 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50"
                >
                  <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 italic text-center">
                    "Ready to turn your ideas into reality? Let's build something extraordinary together."
                  </p>
                  <p className="text-sm lg:text-base text-slate-900 dark:text-white font-semibold text-center mt-2">
                    - Sonu Kumar
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
