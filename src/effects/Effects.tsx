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

// Effects.ts
// Effects.ts
export const fadeUp = {
  hidden:   { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 40,         // softer spring
      damping: 14,           // gentle settle
      mass: 0.6,             // a touch of weight
      ease: [0.42, 0, 0.58, 1], // smooth fallback
    }
  }
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