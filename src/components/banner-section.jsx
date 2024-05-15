import Image from 'next/image'
import Link from "next/link"

export default function Banner(props) {
  return (
    <div className={`bg-color-tile relative w-full flex items-center xl:pt-[80px] ${props.class} overflow-hidden`}>
      <video
        preload="auto"
        playsInline
        autoPlay
        muted
        loop
        className='absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover z-10'
      >
        <source src="/videos/home_banner.mp4" type="video/mp4" />
      </video>
      <div className="container pt-[120px] xl:pt-[50px] pb-[40px] lg:pb-[80px] relative z-40">
        <div className='flex items-end flex-col lg:flex-row gap-0'>
          <div className='w-full lg:w-[55%]'>
            <h2 className={`t-heading-1-md md:!text-[60px] lg:!text-[55px] xl:!text-[70px] text-white mb-[30px] max-w-[${props.titleWidth}]`}>{props.title}</h2>
            <Link href="#schedule-form" className="btn btn-green-solid hover:bg-[#12130f]">Schedule a Demo</Link>
          </div>
          <div className='w-full lg:w-[45%]'>
            <Image
              src={props.image}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}