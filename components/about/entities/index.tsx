'use client';
import CardEntity from '@/components/global/cards/entity';
import { organisations } from '@/lib/data';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
export default function AboutPageEntities({ params }: { params: any }) {
  const lang = params.lang;
  const [activeSlide, setActiveSlide] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.35 });
  return (
    <section ref={ref} className={seen ? 'w-full' : 'w-full entity-waiting'}>
      <div className="w-full h-fit mx-auto relative" id="company">
        {organisations[lang].map((item: any, index: number) => {
          return (
            <CardEntity
              {...item}
              setActiveSlide={setActiveSlide}
              index={index}
              total={organisations[lang].length}
              activeSlide={activeSlide}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
