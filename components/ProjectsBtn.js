// next image
import Image from 'next/iamge'

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='tw-mx-auto xl:tw-mx-0'>
      <Link
        href={'/work'}
        className='tw-relative tw-w-[185px] tw-h-[185px] tw-flex tw-justify-center tw-items-center tw-bg-circleStar tw-bg-cover tw-bg-center tw-bg-no-repeat tw-group'
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=''
          className='tw-animate-spin-slow tw-w-full tw-h-full tw-max-w-[141px] tw-max-h-[148px]'
        />
        <HiArrowRight className='tw-absolute tw-text-4xl group-hover:tw-translate-x-2 tw-transition-all tw-duration-300' />
      </Link>
    </div>
  )
}

export default ProjectsBtn