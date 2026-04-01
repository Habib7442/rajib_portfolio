import React from 'react';
import { motion } from 'motion/react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 blur-[100px] rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">Get in Touch</h2>
              <h3 className="text-5xl font-display font-bold mb-6">Let's <span className="text-teal">Collaborate</span></h3>
              <p className="text-white/60 text-lg mb-12 leading-relaxed">
                Open to research collaborations, PhD opportunities, and VLSI/semiconductor roles. 
                Feel free to reach out for any inquiries or just to connect.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:rajibsutradhar858@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-4 bg-teal/10 rounded-2xl text-teal group-hover:bg-teal group-hover:text-navy transition-all">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-medium">rajibsutradhar858@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="text-center glass p-10 rounded-3xl border-teal/10">
                <p className="text-white/60 mb-8 italic">"Direct communication is the fastest way to progress research."</p>
                <motion.a
                  href="mailto:rajibsutradhar858@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-teal text-navy font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                >
                  <FaPaperPlane size={18} />
                  Email Me Directly
                </motion.a>
                <p className="mt-6 text-white/30 text-xs font-mono uppercase tracking-widest">Available for Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
