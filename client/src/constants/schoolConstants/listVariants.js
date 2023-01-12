const ListItemContainer = {
  hidden: {
    // x: -100,
    opacity: 0,
  },
  visible: {
    // x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delayChildren: 1,
      staggerChildren: 0.4,
    },
  },
};

export default ListItemContainer;
