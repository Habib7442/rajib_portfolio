import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'PhD VLSI Design',
    institution: 'National Institute of Technology Silchar',
    duration: 'Aug 2025 – Present',
    score: 'Ongoing',
    desc: 'Research focusing on lead-free halide perovskites and ReRAM devices.',
  },
  {
    degree: 'M.Tech Microelectronics & VLSI',
    institution: 'National Institute of Technology Silchar',
    duration: '2023 – 2025',
    score: 'CGPA: 8.06',
    desc: 'Specialized in semiconductor device modeling and fabrication.',
  },
  {
    degree: 'B.Tech Electronics & Telecom',
    institution: 'Barak Valley Engineering College, Karimganj',
    duration: '2019 – 2023',
    score: 'CGPA: 8.38',
    desc: 'Foundation in electronics, communication systems, and VLSI basics.',
  },
  {
    degree: 'Class XII',
    institution: 'Elite Academy Junior College, Sonari',
    duration: '2017 – 2019',
    score: '84%',
    desc: 'Science stream with focus on Physics and Mathematics.',
  },
  {
    degree: 'Class X',
    institution: 'Shankardev Shishu Vidya Niketan, Sonari',
    duration: '2005 – 2017',
    score: '92%',
    desc: 'Completed secondary education with distinction.',
  },
];

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 bg-navy/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">Academic Journey</h2>
          <h3 className="text-4xl font-display font-bold">Education Timeline</h3>
        </div>

        <div className="relative border-l-2 border-teal/30 ml-4 md:ml-0" ref={ref}>
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-0 w-5 h-5 bg-navy border-2 border-teal rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              </div>
              
              <div className="glass p-6 rounded-2xl border-teal/10 hover:border-teal/40 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-teal transition-colors">
                    {item.degree}
                  </h4>
                  <span className="text-teal font-mono text-sm bg-teal/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {item.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/60 mb-3">
                  <FaGraduationCap className="text-teal" />
                  <span className="font-medium">{item.institution}</span>
                </div>
                <p className="text-white/50 text-sm mb-4">{item.desc}</p>
                <div className="inline-block px-4 py-1 bg-white/5 rounded-lg border border-white/10 text-gold font-bold">
                  {item.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
