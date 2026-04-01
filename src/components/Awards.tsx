import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaFileAlt, FaGraduationCap } from 'react-icons/fa';

const awards = [
  {
    title: 'ISSS Postgraduate Award Runner-up',
    year: '2024',
    icon: <FaMedal size={40} color="#C0C0C0" />,
    desc: 'Awarded by Institute Smart Structures and Systems.',
  },
  {
    title: 'Samsung Fellowship Grade II',
    year: '2024',
    icon: <FaTrophy size={40} color="#FFD700" />,
    desc: 'Awarded under the ISWDP program.',
  },
  {
    title: 'Best Paper Award',
    year: '2025',
    icon: <FaFileAlt size={40} color="#2DD4BF" />,
    desc: 'Received at MNDCS 2025 for research on lead-free ReRAM devices.',
  },
  {
    title: 'Best M.Tech Project Award',
    year: '2025',
    icon: <FaGraduationCap size={40} color="#FFFFFF" />,
    desc: 'Awarded for top-performing M.Tech thesis at NIT Silchar.',
  },
];

export default function Awards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" className="py-24 bg-navy/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">Recognition</h2>
          <h3 className="text-4xl font-display font-bold">Awards & Achievements</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-gold/10 hover:border-gold/50 transition-all group text-center"
            >
              <div className="text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {award.icon}
              </div>
              <h4 className="text-lg font-bold mb-2 text-white group-hover:text-gold transition-colors">
                {award.title}
              </h4>
              <span className="text-gold font-mono text-xs mb-4 block">{award.year}</span>
              <p className="text-white/50 text-sm leading-relaxed">
                {award.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
