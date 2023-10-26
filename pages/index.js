// next Image
import Image from 'next/image'

// components
import ParticlesContainer from '~/components/ParticlesContainer';
import ProjectsBtn from '~/components/ProjectsBtn';
import Avatar from '~/components/Avatar';

// famer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="tw-primary/60 tw-h-full">
      {/* Text */}
      <div className="tw-w-full tw-h-full tw-bg-gradient-to-r tw-from-primary/10 tw-via-black/30 tw-to-black/10">
        <div className='tw-text-center tw-flex tw-flex-col tw-justify-center xl:tw-pt-40 xl:tw-text-left tw-h-full tw-container tw-mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            inital='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Transforming Ideas <br /> Into <span className="tw-text-accent">Digital Reality</span>
          </motion.h1>
          {/* description */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            inital='hidden'
            animate='show'
            exit='hidden'
            className='tw-max-w-sm xl:tw-max-w-xl tw-mx-auto xl:tw-mx-0 tw-mb-10 xl:tw-mb-16'
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil rerum adipisci repellendus quis quo earum dolore provident illum sed. Accusamus quod laudantium libero rem, voluptatibus ipsum maxime nobis odio? Dolorem!
          </motion.p>
          {/* btn */}
          <div className="tw-flex tw-justify-center xl:tw-hidden tw-relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            inital='hidden'
            animate='show'
            exit='hidden'
            className='tw-hidden xl:tw-flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='tw-w-[1200px] tw-h-full tw-absolute tw-right-0 tw-bottom-0'>
        {/* bg img */}
        <div className='tw-bg-none xl:tw-bg-explosion xl:tw-bg-cover xl:tw-bg-right xl:tw-bg-no-repeat tw-w-full tw-h-full tw-absolute tw-mix-blend-color-dodge tw-translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img*/}
        <motion.div
          variants={fadeIn('up', 0.5)}
          inital='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='tw-w-full tw-h-full tw-max-w-[737px] tw-max-h-[678px] tw-absolute tw-bottom-32 lg:tw-bottom-0 lg:tw-right-[8%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home