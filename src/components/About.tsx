import React from 'react';
import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Years Research', value: 4, suffix: '+' },
  { label: 'IIT Collaborations', value: 3, suffix: '' },
  { label: 'Certifications', value: 5, suffix: '+' },
  { label: 'Awards', value: 3, suffix: '' },
];

const languages = [
  { name: 'English', icon: '🇺🇸' },
  { name: 'Hindi', icon: '🇮🇳' },
  { name: 'Assamese', icon: '🇮🇳' },
  { name: 'Bangla', icon: '🇮🇳' },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">About Me</h2>
            <h3 className="text-4xl font-display font-bold mb-6">
              Advancing the future of <span className="text-teal">Nanoelectronics</span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              I am a PhD scholar at NIT Silchar working on lead-free halide perovskites and ReRAM devices. 
              My research is driven by a passion for bridging materials science and nanoelectronics to create 
              next-generation memory and semiconductor technologies.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              As a Samsung Fellow and Best Paper awardee, I have collaborated with prestigious institutions 
              like IIT Guwahati to fabricate non-volatile ReRAM devices.
            </p>

            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-4 py-2 glass rounded-full text-sm font-medium text-teal flex items-center gap-2"
                >
                  <span className="text-lg">{lang.icon}</span> {lang.name}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border-teal/20 hover:border-teal/50 transition-colors group"
              >
                <div className="text-4xl font-display font-bold text-teal mb-2 group-hover:text-glow">
                  {inView && (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
