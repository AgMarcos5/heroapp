
export const variantsHeader = {
    hidden: { 
      y: -50,
      opacity: 0 ,
    },
    visible: { 
      y: 0,
      opacity: 1 , 
      transition: {
        ease: "backOut",
        duration: 1,
        delay: .2
      }
    },
  }
  
  
export const variantsForm = {
    hidden: { 
      x: -50,
      opacity: 0 ,
    },
    visible: { 
      x: 0,
      opacity: 1 , 
      transition: {
        ease: "backInOut",
        duration: 0.8,
        delay: .8
      }
    },
  }

    
  
export const variantsBg1 = {
    opacity: 1,
    y: [400, 0],
    rotate: [-15,0],
    scale: [.8, 1],
    transition: {
          duration: 1, 
          ease: "easeInOut",
          type: 'spring'
    }
}

export const variantsBg2 = {
      y: [0, 20, 0],
      transition: {
            repeat: Infinity,
            duration: 3.5, 
            repeatDelay: .5,
            ease: "easeInOut",
            type: 'spring'
      }
  }

  