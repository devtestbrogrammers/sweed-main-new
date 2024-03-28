import Image from 'next/image'
import Link from "next/link"

export default function Banner(props) {
    return (
      <div className={`bg-color-tile relative w-full flex items-center xl:pt-[80px] ${props.class}`}>
        <div className='absolute top-0 left-0 bottom-0 right-0 object-cover w-full h-full z-10'>
          <spline-viewer url="/videos/sweed_gradient_v_2.spline"></spline-viewer>
        </div>
        <div className="container pt-[120px] xl:pt-[50px] pb-[50px] relative z-40">
            <div className='flex items-end flex-col lg:flex-row gap-10'>
                <div className='w-full lg:w-[60%]'>
                    <h2 className={`t-heading-1-md text-white mb-[30px] max-w-[${props.titleWidth}]`}>{props.title}</h2>
                    <Link href="#schedule-form" className="btn btn-green-solid hover:bg-[#12130f]">Schedule a Demo</Link>
                </div>
                <div className='w-full lg:w-[40%]'>
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