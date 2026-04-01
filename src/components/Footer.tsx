import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-bold text-teal tracking-tighter">
          RS<span className="text-white">.</span>
        </div>
        
        <div className="text-white/40 text-sm font-mono">
          © 2025 Rajib Sutradhar • Built with React & Tailwind
        </div>

        <div className="flex space-x-6 text-white/60 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-teal transition-colors">Privacy</a>
          <a href="#" className="hover:text-teal transition-colors">Terms</a>
          <a
            href="https://www.linkedin.com/in/rajib-sutradhar-3a4589192/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal transition-all hover:scale-110 flex items-center gap-2 px-3 py-1 bg-teal/10 rounded-full text-teal font-mono text-[10px]"
          >
            <FaLinkedin size={14} />
            Connect
          </a>
        </div>
      </div>
    </footer>
  );
}
