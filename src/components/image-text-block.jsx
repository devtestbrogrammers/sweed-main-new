import Image from 'next/image'

export default function ImageTextBlock(props) {
  return (
    <div className="image-text-block">
      <div className="container pb-[80px] lg:pb-[160px] xl:pb-[180px]">
        <div className="px-[15px] sm:px-0">
          <div className={`flex items-start lg:items-center flex-col lg:flex-row gap-[30px] sm:gap-[50px] lg:gap-[72px] xl:gap-[96px] ${props.class}`}>
            <div className='w-full lg:w-[50%] max-w-full'>
              <Image
                src={props.image}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className='hidden md:block'
              />
              <Image
                src={props.imageMB}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className='block md:hidden'
              />
            </div>
            <div className='w-full lg:w-[50%]'>
              <div className='lg:max-w-[520px]'>
                <h2 className='t-heading-1-md text-[#181819] mb-[20px]'>{props.title}</h2>
                <div className='text-[16px] md:text-[18px] text-[#2B2A2A] flex flex-col gap-[20px]'>{props.text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}