import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';
import { useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

export const handleTranslationX = (baseX, velocity, changeDirection = true) => {
  const { scrollY } = useScroll();
  const smoothVelocity = useSpring(useVelocity(scrollY), {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + (changeDirection ? moveBy :  - Math.abs(moveBy)));
  });
};
