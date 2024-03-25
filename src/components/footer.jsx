import { useHubspotForm } from 'next-hubspot';
import Image from "next/image"
import Link from "next/link"

import ImageTextSmBlock from '@/components/image-text-sm-block';

import logo from "/public/images/sweed-white.png"
import iconTick from "/public/images/homepage/icon_tick_white_round.png"
import iconInsta from "/public/images/icon_insta_white.png"
import iconLinkedin from "/public/images/icon_linkedin_white.png"

const blockSmall = [
    {
      title: (<>Holistic Experience</>),
      text: (<><p>Manage your entire cannabis retail seamlessly on one platform, no third-party systems necessary.</p></>),
      image: iconTick,
      imageMB: iconTick,
      imageSize: '36px',
      color: 'text-white',
    },
    {
      title: (<>True Partnership</>),
      text: (<><p>Tailored solutions, seamlessly integrated with your team.</p></>),
      image: iconTick,
      imageMB: iconTick,
      imageSize: '36px',
      color: 'text-white',
    },
  ]

export default function Footer() {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '7260254',
        formId: 'e341b340-bdbd-41a1-8056-8b78da68cfff',
        target: '#hs-form'
    });

    return (
        <div className="bg-color-tile bg-[url('/images/homepage/home_banner_bg.jpg')] bg-cover px-[8px]">
            <div className=" py-12 md:py-28">
                <div className="container">
                    <div className='flex items-center flex-col xl:flex-row gap-10'>
                        <div className='w-full xl:w-[50%]'>
                            <h2 className='t-heading-1-md text-white mb-[15px]'>Schedule <br/>a Demo</h2>
                            <p className="t-body-sm text-white max-w-[385px] !leading-[28px]">Empower Revenue Growth and Boost Cost Efficiency With Our Expert Assistance</p>
                            <div className="hidden md:flex w-full md:w-[520px] gap-[30px] md:gap-[60px] mt-[60px] flex-wrap flex-col md:flex-row">
                                {blockSmall.map((block, i) => {
                                    const Title = block.title;
                                    const Text = block.text;
                                    const Image = block.image;
                                    const ImageMB = block.imageMB;
                                    const ImageSize = block.imageSize;
                                    const Color = block.color;
                                    return (
                                        <ImageTextSmBlock 
                                            title={Title}
                                            text={Text}
                                            image={Image} 
                                            imageMB={ImageMB} 
                                            imageSize={ImageSize} 
                                            color={Color} 
                                            key={i}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className='w-full xl:w-[50%]'>
                            <div id="schedule-form" className='bg-white p-[20px] md:p-[40px]'>
                                <div id="hs-form"></div>
                            </div>.
                            <div className="flex md:hidden w-full md:w-[520px] gap-[30px] md:gap-[60px] mt-[30px] flex-wrap flex-col md:flex-row">
                                {blockSmall.map((block, i) => {
                                    const Title = block.title;
                                    const Text = block.text;
                                    const Image = block.image;
                                    const ImageMB = block.imageMB;
                                    const ImageSize = block.imageSize;
                                    const Color = block.color;
                                    return (
                                        <ImageTextSmBlock 
                                            title={Title}
                                            text={Text}
                                            image={Image} 
                                            imageMB={ImageMB} 
                                            imageSize={ImageSize} 
                                            color={Color} 
                                            key={i}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-8">
                <div className="container">
                    <hr className='border-1 border-[rgba(255,255,255,.30)] mb-[15px]' />
                    <div className="flex justify-between items-center flex-col md:flex-row gap-[20px]">
                        <div className="flex items-center gap-[30px] max-w-full md:max-w-[400px] w-full">
                            <Image
                                width={125}
                                src={logo}
                                alt=""
                            />
                            <p className='t-body-xs text-white !leading-[24px] max-w-[190px] border-l-[1px] border-[rgba(255,255,255,.24)] pl-[15px]'>One platform to manage all cannabis retail operations</p>
                        </div>
                        <div className="flex items-center justify-start md:justify-end gap-[50px] md:gap-[30px] max-w-full md:max-w-[400px] w-full">
                            <Link href="mailto:hello@sweed.com" className='hover:opacity-70 transition-all'>
                                <p className='t-heading-6 text-white'>hello@sweed.com</p>             
                            </Link>
                            <div className="flex items-center justify-end gap-[30px]">
                                <Link href="#" target="_blank" className='hover:opacity-70 transition-all'>
                                    <Image
                                        width={28}
                                        src={iconInsta}
                                        alt=""
                                    />       
                                </Link>
                                <Link href="https://www.linkedin.com/company/sweed-pos/" target="_blank" className='hover:opacity-70 transition-all'>
                                    <Image
                                        width={28}
                                        src={iconLinkedin}
                                        alt=""
                                    />       
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-start md:items-center mt-[30px] flex-col md:flex-row-reverse gap-[20px]">
                        <div className='flex items-center gap-[20px]'>    
                            <Link href="/privacy-policy" className='t-body-xs text-white underline hover:opacity-70 transition-all'>Privacy Policy</Link>        
                            <Link href="/terms-and-conditions" className='t-body-xs text-white underline hover:opacity-70 transition-all'>Terms of Service</Link>
                        </div>
                        <div className='t-body-xs text-[rgba(255,255,255,.72)]'>© 2023 Sweed. All right reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}