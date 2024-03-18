import Image from 'next/image'
import Link from "next/link"

export default function Banner(props) {
    return (
      <div className="bg-color-tile lg:py-20 bg-[url('/images/homepage/home_banner_bg.jpg')] bg-cover">
        <div className="container pt-[120px] xl:pt-[50px] pb-[50px] xl:pb-0">
            <div className='flex items-end flex-col xl:flex-row gap-10'>
                <div className='w-full xl:w-[60%]'>
                    <h2 className='t-heading-1-md text-white max-w-[640px] mb-[30px]'>{props.title}</h2>
                    <Link href="#schedule-form" className="btn btn-green-solid">Schedule a Demo</Link>
                </div>
                <div className='w-full xl:w-[40%]'>
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