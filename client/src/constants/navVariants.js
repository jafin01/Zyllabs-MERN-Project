export const paperVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 12,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 120,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const iconVariants = {
  hidden: {
    opacity: 0,
    y: '-100px',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
