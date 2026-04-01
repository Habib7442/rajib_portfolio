import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const images = [
  { src: '/WhatsApp Image 2026-03-30 at 10.57.22 PM.jpeg', alt: 'Achievement 1' },
  { src: '/WhatsApp Image 2026-03-30 at 10.57.32 PM.jpeg', alt: 'Achievement 2' },
  { src: '/WhatsApp Image 2026-03-30 at 10.57.58 PM.jpeg', alt: 'Achievement 3' },
  { src: '/WhatsApp Image 2026-03-30 at 10.58.04 PM.jpeg', alt: 'Achievement 4' },
  { src: '/WhatsApp Image 2026-03-30 at 10.58.07 PM.jpeg', alt: 'Achievement 5' },
  { src: '/WhatsApp Image 2026-03-30 at 10.58.10 PM (1).jpeg', alt: 'Achievement 6' },
  { src: '/WhatsApp Image 2026-03-30 at 10.58.10 PM.jpeg', alt: 'Achievement 7' },
];

export default function Gallery() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-teal font-mono text-sm mb-4 uppercase tracking-widest">Gallery</h2>
          <h3 className="text-4xl font-display font-bold">Wall of Achievements</h3>
        </div>

        <div 
          ref={ref}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <div className="bg-teal/20 backdrop-blur-md border border-teal/30 p-4 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-display font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
