import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 1 }
    }
  }
};


export const fadeInDown : Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 1 }
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 1 }
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 1 }
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const defaultViewport = {
  once: true,
  margin: "-100px"
}; 