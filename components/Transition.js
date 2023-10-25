// framer motion
import { motion } from 'framer-motion'

// variants
const transitionVariants = {
  inital: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  },
};

const Transition = () => {
  return (
    <>
      <motion.div className='tw-fixed tw-top-0 tw-bottom-0 tw-right-full tw-h-screen tw-z-30 tw-bg-[#2e2257]'
        variants={transitionVariants}
        inital='inital'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div className='tw-fixed tw-top-0 tw-bottom-0 tw-right-full tw-h-screen tw-z-20 tw-bg-[#3d2b71]'
        variants={transitionVariants}
        inital='inital'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div className='tw-fixed tw-top-0 tw-bottom-0 tw-right-full tw-h-screen tw-z-10 tw-bg-[#4b3792]'
        variants={transitionVariants}
        inital='inital'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
    </>
  )
}

export default Transition