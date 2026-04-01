import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Cs2CuBiCl6 Double Perovskite & ReRAM Devices',
    org: 'IIT Guwahati + NIT Silchar',
    duration: 'Aug 2024 – May 2025',
    desc: 'Fabricated non-volatile ReRAM using lead-free halide perovskite, demonstrated bipolar resistive switching behavior for memory applications.',
    tags: ['Perovskite', 'ReRAM', 'Fabrication'],
    featured: true,
    award: 'Best Paper Award',
  },
  {
    title: 'EEG-Based Driver Drowsiness Detection',
    org: 'BVEC Karimganj',
    duration: 'Sep 2022 – Apr 2023',
    desc: 'Developed a real-time system using MATLAB to detect driver fatigue levels through EEG signal processing.',
    tags: ['MATLAB', 'Signal Processing', 'EEG'],
    featured: false,
  },
  {
    title: 'Portfolio Website',
    org: 'Unschool',
    duration: '2022',
    desc: 'Built a responsive personal website showcasing projects and skills using modern web technologies.',
    tags: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    featured: false,
  },
  {
    title: 'Early Heart Disease Detection',
    org: 'BVEC Karimganj',
    duration: 'May – Jul 2022',
    desc: 'Implemented a machine learning model in Python for early prediction of heart diseases based on patient data.',
    tags: ['Python', 'Machine Learning', 'Healthcare'],
    featured: false,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-navy/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">My Portfolio</h2>
          <h3 className="text-4xl font-display font-bold">Research & Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-3xl overflow-hidden border-teal/10 hover:border-teal/50 transition-all group flex flex-col ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-teal/10 text-teal text-[10px] font-mono uppercase tracking-widest rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.award && (
                    <div className="flex items-center gap-2 text-gold text-[10px] font-bold bg-gold/10 px-4 py-2 rounded-full whitespace-nowrap flex-shrink-0 ml-2">
                      <FaAward size={14} />
                      {project.award}
                    </div>
                  )}
                </div>

                <h4 className={`font-display font-bold mb-2 group-hover:text-teal transition-colors ${
                  project.featured ? 'text-3xl' : 'text-xl'
                }`}>
                  {project.title}
                </h4>
                <p className="text-white/50 text-sm mb-4 font-mono">{project.org} • {project.duration}</p>
                <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <button className="text-teal font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Details <FaExternalLinkAlt size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
