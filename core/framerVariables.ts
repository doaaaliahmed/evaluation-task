export const isMobile =
  typeof window !== `undefined` && window.innerWidth < 768;

export const containerVariants = {
  hidden: {
    opacity: !isMobile ? 0 : 1,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const listVariant = {
  hidden: {
    opacity: !isMobile ? 0 : 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariant = {
  hidden: {
    opacity: !isMobile ? 0 : 1,
    y: !isMobile ? 20 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const speakersVariants = {
  hidden: {
    opacity: !isMobile ? 0 : 1,
  },
  visible: {
    opacity: 1,
  },
};
