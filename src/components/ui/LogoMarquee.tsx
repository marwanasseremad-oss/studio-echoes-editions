import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import egyptianStreetsLogo from '@/assets/logos/egyptian-streets.png';
import cairo360Logo from '@/assets/logos/cairo-360.png';
import cairoSceneLogo from '@/assets/logos/cairo-scene.png';

const logos = [
  { src: egyptianStreetsLogo, alt: 'Egyptian Streets', className: 'h-[4.5rem] md:h-[6.5rem]' },
  { src: cairo360Logo, alt: 'Cairo 360', className: 'h-10 md:h-16' },
  { src: cairoSceneLogo, alt: 'Cairo Scene', className: 'h-[4.5rem] md:h-[6.5rem]' },
];

export const LogoMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Duplicate logos multiple times for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    if (containerRef.current) {
      // Get width of one set of logos (1/4 of total since we have 4 sets)
      setContentWidth(containerRef.current.scrollWidth / 4);
    }
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        className="flex items-center gap-16 md:gap-24"
        animate={{
          x: contentWidth ? [0, -contentWidth] : 0,
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 12,
            ease: 'linear',
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`w-auto object-contain ${logo.className}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
