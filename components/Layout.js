import { Sora } from 'next/font/google'

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

// Components
import Nav from '~/components/Nav';
import Header from '~/components/Header';
import TopLeftImg from '~/components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div className={`page tw-bg-site tw-text-white tw-bg-cover tw-bg-no-repeat ${sora.variable} tw-font-sora tw-relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  )
}

export default Layout