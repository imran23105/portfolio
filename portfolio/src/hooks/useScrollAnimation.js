import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, controls };
};

export default useScrollAnimation;
