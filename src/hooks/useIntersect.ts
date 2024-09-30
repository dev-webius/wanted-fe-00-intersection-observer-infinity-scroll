import { useEffect, useRef } from "react";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.dispatchEvent(new CustomEvent('onIntersect'));
    }
  });
}, { threshold: 1 });

export function useIntersect<T extends HTMLElement = HTMLElement>(callback: EventListenerOrEventListenerObject) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const refCurrent = ref.current;
    if (!refCurrent) {
      return;
    }

    observer.observe(refCurrent);
    refCurrent.addEventListener('onIntersect', callback);

    return () => {
      observer.unobserve(refCurrent);
      refCurrent.removeEventListener('onIntersect', callback);
    };
  }, [callback]);

  return ref;
}