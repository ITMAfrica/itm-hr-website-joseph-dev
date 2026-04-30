'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { PartnerLogo } from '@/lib/partners-logos';

function LogoImage({ logo }: { logo: PartnerLogo }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={logo.src}
        alt={logo.alt ?? 'Partner'}
        width={logo.width}
        height={logo.height}
        className="select-none"
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>
  );
}

function AnimatedLogoItem({
  logo,
  index,
  className = 'mb-4 md:mb-0',
}: {
  logo: PartnerLogo;
  index: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <li className={className}>
        <LogoImage logo={logo} />
      </li>
    );
  }

  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -12% 0px' }}
      transition={{
        delay: index * 0.065,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
        transition: { type: 'spring', stiffness: 400, damping: 22 },
      }}
    >
      <LogoImage logo={logo} />
    </motion.li>
  );
}

export default function PartnerLogosGrid({ logos }: { logos: PartnerLogo[] }) {
  if (logos.length === 12) {
    return (
      <>
        <ul className="flex md:justify-between justify-around items-center flex-wrap">
          {logos.slice(0, 5).map((logo, index) => (
            <AnimatedLogoItem key={index} logo={logo} index={index} />
          ))}
        </ul>
        <ul className="flex justify-evenly flex-wrap md:mt-14 mt-5 lg:px-20">
          {logos.slice(5, 8).map((logo, i) => (
            <AnimatedLogoItem key={i + 5} logo={logo} index={i + 5} />
          ))}
        </ul>
        <ul className="flex justify-evenly flex-wrap md:mt-14 mt-5 md:px-20">
          {logos.slice(8, 12).map((logo, i) => (
            <AnimatedLogoItem key={i + 8} logo={logo} index={i + 8} />
          ))}
        </ul>
      </>
    );
  }

  return (
    <ul className="flex justify-evenly items-center flex-wrap gap-y-5 md:gap-y-14 lg:px-20">
      {logos.map((logo, index) => (
        <AnimatedLogoItem
          key={index}
          logo={logo}
          index={index}
          className="mb-4 md:mb-0 flex items-center justify-center"
        />
      ))}
    </ul>
  );
}
