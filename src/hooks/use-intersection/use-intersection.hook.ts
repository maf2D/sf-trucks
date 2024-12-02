import { useRef, useEffect, useCallback } from 'react';

export type IntersectionFn = (htmlEl: HTMLElement | null) => void;

// hook that adds an observer to html el
// and executes some logic when intersecting this el
export const useIntersection = (

  // cb that executes when intersecting
  callback: () => void,

  // additional check to execute a cb
  isExecutable: boolean
) => {

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  // cb that executes when intersecting
  const intersectionCb = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries.length > 0 && entries[0].isIntersecting && isExecutable) {
      callback();
    }
  }, [callback, isExecutable]);

  // fn that updates an observer
  const intersectionFn: IntersectionFn = useCallback((htmlEl) => {
    if (htmlEl) {
      observerRef.current?.disconnect();

      observerRef.current = new IntersectionObserver(intersectionCb);
      observerRef.current.observe(htmlEl);
    }
  }, [intersectionCb]);

  return intersectionFn;
};
