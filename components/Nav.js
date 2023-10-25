// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

//next link
import Link from 'next/link';

//next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='tw-flex tw-flex-col tw-items-center xl:tw-justify-center tw-gap-y-4 tw-fixed tw-h-max tw-bottom-0 tw-mt-auto xl:tw-right-[2%] tw-z-50 tw-top-0 tw-w-full xl:tw-w-16 xl:tw-max-w-md xl:tw-h-screen'>
      {/* inner */}
      <div className='tw-flex tw-w-full xl:tw-flex-col tw-items-center tw-justify-between xl:tw-justify-center tw-gap-y-10 tw-px-4 md:tw-px-40 xl:tw-px-0 tw-h-[80] xl:tw-h-max tw-py-8 tw-bg-white/10 tw-backdrop-blur-sm tw-text-3xl xl:tw-text-xl tw-rounded-full'>
        {navData.map((link, index) => {
          return (
            <Link className={`${Link.path === pathname && 'tw-text-accent'} tw-relative tw-flex tw-items-center tw-group hover:tw-text-accent tw-transition-all tw-duration-300`} href={link.path} key={index}>
              {/* tooltip */}
              <div className="tw-absolute tw-pr-14 tw-right-0 tw-hidden xl:tw-group-hover:flex">
                <div className='tw-bg-white tw-realative tw-flex tw-primary tw-items-center tw-p-[6px] tw-rounded-[3px]'>
                  <div className="tw-text-[12px] tw-leading-none tw-font-semibold tw-capitalize">{link.name}</div>
                </div>
                {/* triangle */}
                <div className="tw-border-solid tw-border-l-white tw-border-l-8 tw-border-y-transparent tw-border-y-[6px] tw-border-r-0 tw-absolute tw-right-2">
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav