//next Image
import Image from "next/image"

const TopLeftImg = () => {
  return (
    <div className='tw-absolute tw-left-0 tw-top-0 tw-mix-blend-color-dodge tw-z-10 tw-w-[200] tw-xl:w-[400px] tw-opacity-50'>
      <Image src='~/public/top-left-img.png' width={400} height={400} alt='' />
    </div>
  )
}

export default TopLeftImg