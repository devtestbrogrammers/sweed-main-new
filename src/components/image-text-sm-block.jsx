import Image from 'next/image'

export default function ImageText(props) {
  return (
    <div className={`${props.classWidth ? props.classWidth : 'max-w-full'}`}>
      <div className={`flex items-start flex-col gap-[20px] sm:gap-[30px]`}>
        <div className='w-full'>
          <Image
            src={props.image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={props.imageSize ? { width: props.imageSize, height: props.imageSize } : { width: '100%', height: 'auto' }}
            className='hidden lg:block'
          />
          <Image
            src={props.imageMB}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={props.imageSize ? { width: props.imageSize, height: props.imageSize } : { width: '100%', height: 'auto' }}
            className='block lg:hidden'
          />
        </div>
        <div className='w-full'>
          <h2 className={`t-heading-6 text-[#181819] mb-[10px] !font-semibold1 !leading-[28px] !font-semibold ${props.color}`}>{props.title}</h2>
          <div className={`text-[16px] text-[#2B2A2A] flex flex-col gap-[20px] ${props.color}`}>{props.text}</div>
        </div>
      </div>
    </div>
  )
}