import { motion } from 'framer-motion';
import egyptianStreetsLogo from '@/assets/logos/egyptian-streets.png';
import cairo360Logo from '@/assets/logos/cairo-360.png';
import cairoSceneLogo from '@/assets/logos/cairo-scene.png';

const logos = [
  { src: egyptianStreetsLogo, alt: 'Egyptian Streets' },
  { src: cairo360Logo, alt: 'Cairo 360' },
  { src: cairoSceneLogo, alt: 'Cairo Scene' },
];

export const LogoMarquee = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex items-center gap-16 md:gap-24"
        animate={{
          x: ['0%', '-33.33%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-8 md:h-12 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-auto object-contain max-w-[120px] md:max-w-[160px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
