import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';

// Initialize EmailJS with public key
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "kCOMt4Yqd03TWNW1o");

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_b1ncoz8';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_2if8pop';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'kCOMt4Yqd03TWNW1o';

const Professional: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',     // Updated to match template variables
    user_email: '',    // Updated to match template variables
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.user_name.trim() || !formData.user_email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Log configuration for debugging
      console.log('Attempting to send email with config:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        formData: {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message
        }
      });

      // Send email using emailjs.sendForm
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current!,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', result);

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ user_name: '', user_email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error: any) {
      console.error('EmailJS Error Details:', error);
      setSubmitStatus({
        type: 'error',
        message: error?.text || 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error message when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen cosmic-background">
        <div className="section-container pt-24">
        {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gradient mb-8">Education</h2>
            <div className="card hover-glow">
              <h3 className="text-xl font-semibold text-text-primary mb-2">San Francisco State University</h3>
              <p className="text-text-secondary">Bachelor's in Computer Science</p>
              <p className="text-text-secondary">Beginning: Fall 2025</p>
              <p className="text-text-secondary">Expected Graduation: Fall 2026</p>
            </div>
            <div className="card hover-glow mt-4">
              <h3 className="text-xl font-semibold text-text-primary mb-2">City College of San Francisco</h3>
              <p className="text-text-secondary">Associate's in Computer Science</p>
              <p className="text-text-secondary">Fall 2023 - Spring 2025</p>
            </div>
            <div className="card hover-glow mt-4">
              <h3 className="text-xl font-semibold text-text-primary mb-2">Himalayan White House International SS</h3>
              <p className="text-text-secondary">High School graduate</p>
              <p className="text-text-secondary">Stream: <a href="https://ccrc.edu.np/science/#:~:text=Science%20%E2%80%93%20NEB%20(%2B2)&text=In%20Science%20Stream%2C%20the%20students,other%20fields%20of%20Physical%20Sciences." target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light">Science</a></p>
              <p className="text-text-secondary">2019 - 2022</p>
          </div>
        </motion.section>

        {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gradient mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card hover-glow">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'TypeScript', 'Java'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 rounded-full text-text-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card hover-glow">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 rounded-full text-text-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card hover-glow">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'VS Code', 'Firebase', 'Vercel', 'AI Prompting'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 rounded-full text-text-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gradient mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pakwan Restaurant Management System */}
              <div className="card hover-glow p-6">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">Pakwan Restaurant Management System</h3>
                <p className="text-text-secondary mb-6">
                  A modern, full-stack restaurant management system built with Node.js and React. This system handles orders, payments, notifications, and kitchen operations efficiently.<br/>
                  <span className="text-accent font-semibold">Note:</span> This project is currently under active development. Some features are in progress or planned for future implementation.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-400 mb-2">✅ Completed Features</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                    <li><span className="font-semibold">Backend Infrastructure:</span> Basic Express.js server setup, ES Modules configuration, environment variable management, error handling middleware, CORS configuration, API route structure</li>
                    <li><span className="font-semibold">Order Management:</span> Order creation endpoint, order validation, special requests handling, order status updates, mock database implementation for testing</li>
                    <li><span className="font-semibold">Payment Processing:</span> Stripe integration setup, payment intent creation, basic refund processing, webhook handling structure</li>
                    <li><span className="font-semibold">Notification System:</span> Email notification structure (Nodemailer), SMS notification structure (Twilio), mock notification service for testing</li>
                    <li><span className="font-semibold">Receipt Printing:</span> Thermal printer service structure, mock printer service for testing, receipt formatting templates</li>
                    <li><span className="font-semibold">Testing:</span> Basic test payment flow script, mock services for testing</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">🚧 In Progress / Needs Attention</h4>
                  <p className="text-text-secondary ml-2">Database integration, authentication, advanced payment, full frontend, notifications, printing, testing, deployment, and documentation improvements.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">Node.js</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">Express.js</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">React</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">MongoDB</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">Stripe API</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">Nodemailer</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">Twilio</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">node-thermal-printer</span>
                </div>
              </div>

              {/* Portfolio Website */}
              <div className="card hover-glow p-6">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">Portfolio Website</h3>
                <p className="text-text-secondary mb-6">
                  A modern, responsive portfolio website showcasing my professional journey and projects. 
                  Built with a cosmic theme featuring smooth animations and interactive elements.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 ml-2">
                    <li>Interactive UI with smooth animations</li>
                    <li>Responsive design for all devices</li>
                    <li>Custom cosmic theme with starry background</li>
                    <li>Modern component architecture</li>
                    <li>Contact form with email integration</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Technical Highlights:</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 ml-2">
                    <li>Built with React and TypeScript for type safety</li>
                    <li>Styled using Tailwind CSS for efficiency</li>
                    <li>Animations powered by Framer Motion</li>
                    <li>EmailJS integration for contact form</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">React</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">TypeScript</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">Framer Motion</span>
                  <span className="px-4 py-2 bg-button/20 rounded-full text-text-secondary border border-accent/30">EmailJS</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Resume Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gradient mb-8">Resume</h2>
            <div className="card hover-glow p-6 flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 text-accent">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M13,13V15H17V13H13M13,17V19H17V17H13M9,13H11V19H9V13Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Resume</h3>
              <p className="text-text-secondary text-center mb-6">
                Download my latest resume to learn more about my experience and skills.
              </p>
              <a
                href="/resume.pdf"
                download="Manisha_Chand_Resume.pdf"
                className="flex items-center space-x-2 px-6 py-3 bg-button hover:bg-button-hover text-white rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-16 pt-16"
          >
            <h2 className="text-3xl font-bold text-gradient mb-12 text-center">Send a Message</h2>
            <div className="max-w-2xl mx-auto">
              <form ref={form} onSubmit={handleSubmit} className="space-y-8 bg-background-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-accent/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-text-primary text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background-secondary/50 border border-accent/20 
                               text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent
                               focus:ring-1 focus:ring-accent backdrop-blur-sm transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-text-primary text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background-secondary/50 border border-accent/20 
                               text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent
                               focus:ring-1 focus:ring-accent backdrop-blur-sm transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-text-primary text-lg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background-secondary/50 border border-accent/20 
                             text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent
                             focus:ring-1 focus:ring-accent backdrop-blur-sm transition-all resize-none"
                    placeholder="Your message"
                  />
                </div>
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-button hover:bg-button-hover text-white font-semibold rounded-lg
                             transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]
                             disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center gap-8 mt-12">
                  <a
                    href="https://www.linkedin.com/in/manisha-chand-393908304/"
                target="_blank"
                rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)]"
              >
                    <svg className="w-6 h-6 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
              </a>
              <a
                    href="https://github.com/manesha63"
                target="_blank"
                rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)]"
              >
                    <svg className="w-6 h-6 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
              </a>
              <a
                    href="https://leetcode.com/u/manesha63/"
                target="_blank"
                rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)]"
              >
                    <svg className="w-6 h-6 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
              </a>
            </div>
              </form>
          </div>
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default Professional; 