import Image from 'next/image'

export default function ImageText(props) {
    return (
      <div className="bg-white">
        <div className="container pb-[80px] md:pb-[120px]">
            <div className={`flex items-start xl:items-center flex-col xl:flex-row gap-[50px] xl:gap-[160px] ${props.class}`}>
                <div className='w-full xl:w-[50%]'>
                  <Image
                    src={props.image}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className='w-full xl:w-[50%] max-w-[520px]'>
                  <h2 className='t-heading-1-md text-[#181819] mb-[20px]'>{props.title}</h2>
                  <div className='text-[16px] md:text-[18px] text-[#2B2A2A] flex flex-col gap-[20px]'>{props.text}</div>
                </div>
            </div>  
        </div>
      </div>
    )
  }