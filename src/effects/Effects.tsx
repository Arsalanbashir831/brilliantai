import { Variants } from 'framer-motion';
export const   arrowVariants = {
    hover: {
      x: [0, 6, 0],            // move +6px then back
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }   // faster than 0.6
    },
  };
  
  export const zoomVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 20,
      },
    },
  };
  // Animation variants for card transitions
export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };