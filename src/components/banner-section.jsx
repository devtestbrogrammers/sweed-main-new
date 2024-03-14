import Image from 'next/image'
import Link from "next/link"

export default function Banner() {
    return (
      <div className="bg-color-tile lg:py-20 bg-[url('/images/homepage/home_banner_bg.png')] bg-cover">
        <div className="container pt-[120px] xl:pt-[50px] pb-[50px] xl:pb-0">
            <div className='flex items-end flex-col xl:flex-row gap-10'>
                <div className='w-full xl:w-[50%]'>
                    <h2 className='t-heading-1-md text-white max-w-[640px] mb-[30px]'>One Platform <br/>for All Cannabis <br/>Retail Operations</h2>
                    <Link href="/" className="btn btn-green-solid">Schedule a Demo</Link>
                </div>
                <div className='w-full xl:w-[50%]'>
                    <Image
                      src="/images/homepage/home_banner_image.png"
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