import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaEdit, FaUsers, FaHandshake } from 'react-icons/fa';

const positions = [
  {
    role: 'Editor, College Magazine',
    org: 'BVEC',
    duration: '2021 – 2023',
    icon: <FaEdit />,
  },
  {
    role: 'Training & Placement Coordinator',
    org: 'BVEC',
    duration: '2020 – 2023',
    icon: <FaUsers />,
  },
  {
    role: 'NSS Volunteer',
    org: 'BVEC',
    duration: '2021 – 2023',
    icon: <FaHandshake />,
  },
];

export default function Positions() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-navy/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">Leadership</h2>
          <h3 className="text-4xl font-display font-bold">Positions of Responsibility</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8" ref={ref}>
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl text-center group hover:border-teal/30 transition-all"
            >
              <div className="text-3xl text-teal mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {pos.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{pos.role}</h4>
              <p className="text-white/50 text-sm mb-4">{pos.org}</p>
              <span className="text-teal/60 font-mono text-xs uppercase tracking-widest">
                {pos.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
