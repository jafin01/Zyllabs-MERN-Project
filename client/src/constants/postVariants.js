const postVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'linear',
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      type: 'linear',
    },
  },
};

export default postVariants;
