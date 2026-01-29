import egyptianStreetsLogo from '@/assets/logos/egyptian-streets.png';
import cairo360Logo from '@/assets/logos/cairo-360.png';
import cairoSceneLogo from '@/assets/logos/cairo-scene.png';

const logos = [
  { src: egyptianStreetsLogo, alt: 'Egyptian Streets', className: 'h-[4.5rem] md:h-[6.5rem]' },
  { src: cairo360Logo, alt: 'Cairo 360', className: 'h-10 md:h-16' },
  { src: cairoSceneLogo, alt: 'Cairo Scene', className: 'h-[4.5rem] md:h-[6.5rem]' },
];

export const LogoMarquee = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-marquee">
        {/* First set */}
        <div className="flex items-center gap-16 md:gap-24 shrink-0">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center px-8 md:px-12">
              <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.className}`} />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-16 md:gap-24 shrink-0">
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0 flex items-center justify-center px-8 md:px-12">
              <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.className}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
