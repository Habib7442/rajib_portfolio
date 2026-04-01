import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaMicrochip, FaTools, FaLaptopCode } from 'react-icons/fa';

const technicalSkills = [
  { name: 'Semiconductor Device Physics', level: 90 },
  { name: 'Device Fabrication', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'MS Office', level: 95 },
];

const languages = [
  { name: 'English', icon: '🇺🇸' },
  { name: 'Hindi', icon: '🇮🇳' },
  { name: 'Assamese', icon: '🇮🇳' },
  { name: 'Bangla', icon: '🇮🇳' },
];

const webSkills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20" ref={ref}>
          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-teal/20 rounded-2xl text-teal">
                <FaMicrochip size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold">Technical Expertise</h3>
            </div>
            
            <div className="space-y-8">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80 font-medium">{skill.name}</span>
                    <span className="text-teal font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-teal shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-teal/20 rounded-2xl text-teal">
                <FaLaptopCode size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold">Web Technologies</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {webSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-teal/50 transition-all group"
                >
                  <div className="text-4xl text-white/40 group-hover:text-teal transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-white/60 font-mono text-sm uppercase tracking-widest">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
