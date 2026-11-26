'use client';
import { useEffect } from 'react';

const DURATION = 700;
const STAGGER = 90;
const MAX_STAGGERED = 5;

/**
 * Fait apparaître au défilement les éléments marqués `data-reveal`
 * ("fade" : fondu seul). Utilise l'API Web Animations : aucun style ni
 * attribut ne reste sur l'élément une fois l'animation terminée.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const seen = new WeakSet<Element>();
    const pending = new Map<Element, Animation>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach(({ target }, order) => {
            const animation = pending.get(target);
            if (!animation) return;
            observer.unobserve(target);
            pending.delete(target);
            // Les éléments qui entrent ensemble apparaissent en cascade
            animation.effect?.updateTiming({
              delay: Math.min(order, MAX_STAGGERED) * STAGGER,
            });
            animation.onfinish = () => animation.cancel();
            animation.play();
          });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    const prepare = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        // Un élément non affiché sera examiné plus tard
        if (seen.has(el) || el.getClientRects().length === 0) return;
        seen.add(el);
        // Ce qui est déjà visible à l'écran n'est jamais masqué
        if (el.getBoundingClientRect().top < window.innerHeight) return;

        const from: Keyframe = { opacity: 0 };
        const to: Keyframe = { opacity: 1 };
        if (el.dataset.reveal !== 'fade') {
          from.translate = '0 28px';
          to.translate = '0 0';
        }
        const animation = el.animate([from, to], {
          duration: DURATION,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'both',
        });
        animation.pause();
        pending.set(el, animation);
        observer.observe(el);
      });
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(prepare);
    };
    const mutations = new MutationObserver(schedule);
    mutations.observe(document.body, { childList: true, subtree: true });
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
      pending.forEach((animation) => animation.cancel());
    };
  }, []);

  return null;
}
