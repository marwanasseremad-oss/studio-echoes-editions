import egyptianStreetsLogo from '@/assets/logos/egyptian-streets.png';
import cairo360Logo from '@/assets/logos/cairo-360.png';
import cairoSceneLogo from '@/assets/logos/cairo-scene.png';

const logos = [
  { src: egyptianStreetsLogo, alt: 'Egyptian Streets', className: 'h-[4.5rem] md:h-[6.5rem]' },
  { src: cairo360Logo, alt: 'Cairo 360', className: 'h-10 md:h-16' },
  { src: cairoSceneLogo, alt: 'Cairo Scene', className: 'h-[4.5rem] md:h-[6.5rem]' },
];

export const LogoMarquee = () => {
  // Use a longer base sequence so the banner is always filled edge-to-edge.
  // Then duplicate that sequence once, and animate exactly -50% to loop seamlessly.
  const base = Array.from({ length: 6 }, () => logos).flat();
  const items = [...base, ...base];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-max items-center gap-16 md:gap-24 animate-marquee motion-reduce:animate-none will-change-transform">
        {items.map((logo, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center">
            <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.className}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
