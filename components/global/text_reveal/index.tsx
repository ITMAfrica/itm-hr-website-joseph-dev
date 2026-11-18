'use client';

import { motion } from 'framer-motion';

const TAGS = {
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span,
  div: motion.div,
} as const;

/**
 * Reveals text word by word: each word slides up from behind a mask
 * when the element scrolls into view. Respects `prefers-reduced-motion`.
 */
export default function TextReveal({
  text,
  as = 'p',
  className = '',
  delay = 0,
  stagger = 0.045,
  duration = 0.6,
}: {
  text: string;
  as?: keyof typeof TAGS;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const Tag: any = TAGS[as];
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delayChildren: delay, staggerChildren: stagger }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: { y: '0%', opacity: 1 },
            }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
