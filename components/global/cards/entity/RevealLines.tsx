'use client';
import { Fragment, useLayoutEffect, useRef } from 'react';

const START_DELAY = 300;
const LINE_DELAY = 140;

export default function RevealLines({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  // Les mots situés sur une même ligne partagent le même délai
  useLayoutEffect(() => {
    let line = -1;
    let lineTop = -1;
    ref.current?.querySelectorAll('span').forEach((word) => {
      if (word.offsetTop !== lineTop) {
        lineTop = word.offsetTop;
        line += 1;
      }
      word.style.animationDelay = `${START_DELAY + line * LINE_DELAY}ms`;
    });
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {text.trim().split(/\s+/).map((word, i) => (
        <Fragment key={i}>
          <span className="revealLineWord">{word}</span>{' '}
        </Fragment>
      ))}
    </p>
  );
}
