import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  { title: 'Samsung ISWDP Fellowship', org: 'IISc', year: '2024' },
  { title: 'ISWDP Level I, II, Advanced', org: 'IISc + Synopsys', year: '2024' },
  { title: 'Nanoelectronics Fabrication Training', org: 'IIT Guwahati', year: '2024' },
  { title: 'Nano & Bio-electronics Workshop', org: 'IIT Guwahati', year: '2024' },
  { title: 'Nano Sensors & Optoelectronics', org: 'IIT Guwahati', year: '2024' },
  { title: 'IWPOD Workshop', org: 'IIIT Ranchi', year: '2024' },
];

export default function Certifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">Credentials</h2>
          <h3 className="text-4xl font-display font-bold">Certifications</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" ref={ref}>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors border-teal/5"
            >
              <div className="p-3 bg-teal/10 rounded-xl text-teal">
                <FaCertificate size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white/90">{cert.title}</h4>
                <p className="text-xs text-white/40 font-mono uppercase tracking-tighter">
                  {cert.org} • {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
