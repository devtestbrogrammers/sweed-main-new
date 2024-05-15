import { useHubspotForm } from 'next-hubspot';
import Image from "next/image"
import Link from "next/link"

import ImageTextSmBlock from '@/components/image-text-sm-block';
import CurrentYear from '@/components/current-year';

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
        classWidth: '',
    },
    {
        title: (<>True Partnership</>),
        text: (<><p>Tailored solutions, seamlessly integrated with your team.</p></>),
        image: iconTick,
        imageMB: iconTick,
        imageSize: '36px',
        color: 'text-white',
        classWidth: '',
    },
]

export default function Footer() {
    const { loaded, error, formCreated } = useHubspotForm({
        region: "na1",
        portalId: '7260254',
        formId: '7387d131-39c8-4b2d-98c7-80e47c803365',
        target: '#hs-form'
    });

    return (
        <div id="schedule-form" className="bg-color-tile bg-[url('/images/homepage/home_banner_bg.jpg')] bg-cover px-[8px]">
            <div className=" py-12 md:py-28">
                <div className="container">
                    <div className='grid lg:grid-cols-2 lg:grid-rows-2 gap-[50px] lg:gap-[50px] xl:gap-[100px]'>
                        <div className='lg:[grid-area:1_/_1_/_2_/_2] self-end'>
                            <h2 className='t-heading-1-md text-white mb-[15px] lg:max-w-[390px]'>Schedule a Demo</h2>
                            <p className="t-body-sm text-white lg:max-w-[385px] !leading-[28px]">Empower Revenue Growth and Boost Cost Efficiency With Our Expert Assistance</p>
                        </div>
                        <div className='lg:[grid-area:1_/_2_/_3_/_3]'>
                            <div className='bg-white p-[20px] md:p-[32px]'>
                                <div id="hs-form"></div>
                            </div>
                        </div>
                        <div className="lg:[grid-area:2_/_1_/_3_/_2] grid sm:grid-cols-2 w-full xl:w-[520px] gap-[25px] xl:gap-[60px] flex-wrap">
                            {blockSmall.map((block, i) => {
                                return (
                                    <div className={`flex items-start flex-col gap-[20px] sm:gap-[30px]`} key={i}>
                                        <div>
                                            <Image
                                                src={block.image}
                                                alt=""
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={block.imageSize ? { width: block.imageSize, height: block.imageSize } : { width: '100%', height: 'auto' }}
                                                className='block'
                                            />
                                        </div>
                                        <div>
                                            <h2 className={`t-heading-6 text-[#181819] mb-[10px] !font-semibold1 !leading-[28px] !font-semibold ${block.color}`}>{block.title}</h2>
                                            <div className={`text-[16px] text-[#2B2A2A] flex flex-col gap-[20px] ${block.color}`}>{block.text}</div>
                                        </div>
                                    </div>
                                )
                            })}
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
                        <div className="flex items-start sm:items-center justify-between md:justify-end gap-[30px] sm:gap-[50px] md:gap-[30px] max-w-full md:max-w-[400px] w-full">
                            <Link href="mailto:sales@sweedpos.com" className='hover:opacity-70 transition-all'>
                                <p className='text-[16px] lg:text-[20px] font-semibold text-white'>sales@sweedpos.com</p>
                            </Link>
                            <div className="flex items-center justify-end gap-[16px]">
                                <Link href="https://www.instagram.com/getsweed/" target="_blank" className='hover:opacity-70 transition-all'>
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
                    <div className="flex justify-between items-start md:items-center mt-[40px] sm:mt-[30px] flex-col md:flex-row-reverse gap-[20px]">
                        <div className='flex items-center gap-[20px]'>
                            <Link href="/privacy-policy" className='t-body-xs text-white underline hover:no-underline hover:opacity-70 transition-all underline-offset-[6px]'>Privacy Policy</Link>
                            <Link href="/terms-and-conditions" className='t-body-xs text-white underline hover:no-underline hover:opacity-70 transition-all underline-offset-[6px]'>Terms of Service</Link>
                        </div>
                        <div className='t-body-xs text-[rgba(255,255,255,.72)]'>© <CurrentYear /> Sweed. All right reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}