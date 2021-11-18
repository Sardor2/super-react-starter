import { useEffect, useRef } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  enabled: boolean;
  onScreen: () => void;
}

function useElementOnScreen({
  threshold = 0.1,
  root = null,
  rootMargin = '50%',
  enabled = false,
  onScreen = () => null,
}: Args) {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = targetRef?.current; // DOM Ref
    if (!enabled || !node) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onScreen();
          }
        }),
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(node);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(node);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef?.current, enabled]);

  return targetRef;
}

export default useElementOnScreen;
