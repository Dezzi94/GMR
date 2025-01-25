import { useEffect, RefObject } from 'react';
import { useInView } from 'framer-motion';

interface UseAnimationOnViewProps {
  ref: RefObject<HTMLElement>;
  onView?: () => void;
}

export const useAnimationOnView = ({
  ref,
  onView,
}: UseAnimationOnViewProps) => {
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && onView) {
      onView();
    }
  }, [isInView, onView]);

  return isInView;
}; 