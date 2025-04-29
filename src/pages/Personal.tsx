import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "kCOMt4Yqd03TWNW1o");

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_b1ncoz8';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_2if8pop';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'kCOMt4Yqd03TWNW1o';

const Personal: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
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
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current!,
        EMAILJS_PUBLIC_KEY
      );

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
      console.error('EmailJS Error:', error);
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="cosmic-background min-h-screen">
        <div className="section-container pt-24 px-4 md:px-6">
          {/* Profile Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent/30 shadow-[0_0_30px_rgba(139,92,246,0.3)] mb-6">
                <img
                  src={process.env.PUBLIC_URL + "/profile.jpg"}
                  alt="Manisha Chand"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
                >
                  Hey, this is Manisha.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-text-secondary leading-relaxed"
                >
                  I'm a CS student at SFSU. I spend most of my time buried in schoolwork, and the rest doing absolutely nothing — which somehow gets boring too. So eventually, I'm forced to go out and do something just to keep myself entertained. Welcome to my page — no promises, but you might find something mildly interesting here.
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Things I Do Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gradient mb-8">Things I Happen to Do Instead of Nothing</h2>
            
            {/* Cafe Hopping */}
            <div className="mb-6">
              <div className="card hover-glow mb-4">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Café Hopping to Stay Sane</h3>
                <p className="text-text-secondary">
                  Coffee shops feel like my second home at this point. I can't really handle coffee (it makes me nauseous), 
                  but I keep showing up for the vibe — and surprisingly, I do get a lot done. Mostly, it's just my way of 
                  escaping my room before I lose my mind. Even if I end up sipping sweet green tea instead of coffee, it's a win.
                </p>
              </div>
              <div className="max-w-3xl mx-auto px-2">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12 card hover-glow aspect-[16/9] overflow-hidden">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/cafe1.jpg"}
                      alt="Cozy café interior with laptop setup"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-6 card hover-glow aspect-[16/9] overflow-hidden">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/cafe2.jpg"}
                      alt="Pink dessert and coffee setup"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-6 card hover-glow aspect-[16/9] overflow-hidden">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/cafe3.jpg"}
                      alt="Study session with assignments and coffee"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-6 card hover-glow aspect-[16/9] overflow-hidden">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/cafe4.jpg"}
                      alt="Cozy café interior with warm lighting"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-6 card hover-glow aspect-[16/9] overflow-hidden">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/cafe5.jpg"}
                      alt="Heart-shaped latte art"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reading */}
            <div className="mb-6">
              <div className="card hover-glow mb-4">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Reading</h3>
                <p className="text-text-secondary">
                  Another thing I somehow find myself doing is reading — mostly fiction, that makes me feel deeply and disassociate. 
                  I'm always chasing stories that leave me absolutely wrecked. A few books that broke me (in the best way) were 
                  Against the Loveless World, A Little Life (still not over it), and A Long Way Gone — a memoir that completely shattered me.
                  Every once in a while, I read nonfiction too. Are Prisons Obsolete? is a must-read that helped me actually understand 
                  a lot about the world we live in today.
                </p>
              </div>
              <div className="max-w-3xl mx-auto px-2">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12 card hover-glow aspect-[16/9] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/reading1.jpg"}
                      alt="Reading setup with coffee and dessert"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-4 card hover-glow aspect-[4/3] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/reading2.jpg"}
                      alt="Book with coffee"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-8 card hover-glow aspect-[16/9] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/reading3.jpg"}
                      alt="Study and reading session"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-6 card hover-glow aspect-[4/3] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/reading4.jpg"}
                      alt="Reading corner"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-6 card hover-glow aspect-[4/3] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/reading5.jpg"}
                      alt="Book collection"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Photography */}
            <div className="mb-6">
              <div className="card hover-glow mb-4">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Taking Pictures</h3>
                <p className="text-text-secondary">
                  Another thing I do is take pictures — random things, moments, people I notice. Just me trying to 
                  freeze a little slice of life, even if it's just for my own messy little collection of living.
                </p>
              </div>
              <div className="max-w-3xl mx-auto px-2">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6 card hover-glow aspect-[4/3] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/photo1.jpg"}
                      alt="Orange cat on a wooden table with plants"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-6 card hover-glow aspect-[4/3] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/photo2.jpg"}
                      alt="Caffe Trieste espresso sign with colorful buildings"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-12 card hover-glow aspect-[16/9] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/photo3.jpg"}
                      alt="Building mural with floating books at dusk"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-8 card hover-glow aspect-[16/9] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/photo4.jpg"}
                      alt="Night scene with people on bench under streetlight"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-4 card hover-glow aspect-[3/4] overflow-hidden relative">
                    <img
                      src={process.env.PUBLIC_URL + "/gallery/photo5.jpg"}
                      alt="Terraced hills and mountains in morning light"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Centered outro message */}
            <div className="mb-12 flex justify-center">
              <p className="text-xl text-text-primary text-center max-w-2xl">
                This is pretty much me — these are the little things that keep my regular days a little less boring and a little more mine. Thanks for visiting!
              </p>
            </div>

            {/* Contact Form Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gradient mb-8">Questions, Queries, Comments, Feedback—All Welcome!</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-background-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-accent/10">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="user_name" className="text-text-primary text-lg block mb-2">
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
                  <div>
                    <label htmlFor="user_email" className="text-text-primary text-lg block mb-2">
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
                  <div>
                    <label htmlFor="message" className="text-text-primary text-lg block mb-2">
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
                      placeholder="What's on your mind?"
                    />
                  </div>
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
              </form>
            </motion.section>

            {/* Social Links */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gradient mb-8">Want to connect!</h2>
              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/manesha63/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-button hover:bg-button-hover
                           transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </motion.section>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Personal; 