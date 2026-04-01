import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, User } from 'lucide-react';

const references = [
  {
    name: 'Prof. Dipankar Bandyopadhyay',
    org: 'Indian Institute of Technology Guwahati',
    email: 'dipban@iitg.ac.in',
  },
  {
    name: 'Dr. Arun Tej Mallajosyula',
    org: 'Indian Institute of Technology Guwahati',
    email: 'aruntej@iitg.ac.in',
  },
  {
    name: 'Dr. Dipjyoti Das',
    org: 'National Institute of Technology Silchar',
    email: 'dipjyoti@ece.nits.ac.in',
  },
  {
    name: 'Dr. Koushik Guha',
    org: 'National Institute of Technology Silchar',
    email: 'koushik@ece.nits.ac.in',
  },
  {
    name: 'Dr. Trupti Ranjan Lenka',
    org: 'National Institute of Technology Silchar',
    email: 'trlenka@ece.nits.ac.in',
  },
];

export default function References() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="references" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">Network</h2>
          <h3 className="text-4xl font-display font-bold">Academic References</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {references.map((ref_item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-teal/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal/10 rounded-2xl text-teal group-hover:bg-teal group-hover:text-navy transition-all">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-teal transition-colors">
                    {ref_item.name}
                  </h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-mono">
                    {ref_item.org}
                  </p>
                </div>
              </div>
              
              <a
                href={`mailto:${ref_item.email}`}
                className="flex items-center gap-2 text-white/60 hover:text-teal transition-colors text-sm font-mono overflow-hidden"
              >
                <Mail size={14} className="flex-shrink-0" />
                <span className="truncate">{ref_item.email}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
