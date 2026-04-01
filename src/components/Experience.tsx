import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Teaching Assistant',
    org: 'National Institute of Technology, Silchar',
    duration: 'Aug 2023 – May 2025',
    points: [
      'Assisted in conducting lab sessions for VLSI and Microelectronics.',
      'Mentored undergraduate students in their final year projects.',
    ],
  },
  {
    role: 'Full Stack Web Dev Intern',
    org: 'Unschool (Remote)',
    duration: 'Aug 2022 – Sep 2022',
    points: [
      'Designed and developed a portfolio website using HTML, CSS, JavaScript, and Bootstrap.',
    ],
  },
  {
    role: 'Academic Intern VLSI',
    org: 'MSME, Guwahati, India',
    duration: 'Jun 2021 – Jul 2021',
    points: [
      'Acquired hands-on exposure to VLSI design and fabrication fundamentals.',
    ],
  },
  {
    role: 'Social Internship',
    org: 'Barak Valley Engineering College, Karimganj',
    duration: 'Nov 2020 – Mar 2021',
    points: [
      'Conducted research on the impact of COVID-19 on the education sector.',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">Professional Path</h2>
          <h3 className="text-4xl font-display font-bold">Work Experience</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-2xl border-l-4 border-l-teal hover:bg-white/10 transition-all h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal/20 rounded-lg text-teal">
                  <Briefcase size={20} />
                </div>
                <span className="text-teal font-mono text-xs font-bold uppercase tracking-tighter">
                  {exp.duration}
                </span>
              </div>
              
              <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
              <p className="text-white/60 text-sm mb-6 font-medium">{exp.org}</p>
              
              <ul className="space-y-3 mt-auto">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-white/50 text-xs flex gap-2">
                    <span className="text-teal mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
