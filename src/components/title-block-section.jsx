import ImageTextSmBlock from '@/components/image-text-sm-block';

import homeImageSm1 from "/public/images/homepage/home_image_sm_1.png"
import homeImageSm2 from "/public/images/homepage/home_image_sm_2.png"
import homeImageSm3 from "/public/images/homepage/home_image_sm_3.png"
import homeImageSm4 from "/public/images/homepage/home_image_sm_4.png"
import homeImageSm5 from "/public/images/homepage/home_image_sm_5.png"
import homeImageSm6 from "/public/images/homepage/home_image_sm_6.png"
import homeImageSm7 from "/public/images/homepage/home_image_sm_7.png"

const blockSmall = [
  {
    title: 'Inventory Management',
    text: 'Elevate inventory control & store management with cutting-edge tools, auto inventory movement.',
    image: homeImageSm1,
  },
  {
    title: 'Flexible Payment',
    text: 'Offer seamless payment choices for every customer`s convenience.',
    image: homeImageSm2,
  },
  {
    title: 'Only the Necessary Integrations',
    text: 'Sync effortlessly with essential platforms & tools, streamlining operations.',
    image: homeImageSm3,
  },
  {
    title: 'Easy to Use Point of Sale',
    text: 'Effortless management of hardware-agnostic point-of-sale devices.',
    image: homeImageSm4,
  },
  {
    title: 'Connected In-Store Screens',
    text: 'Centralized management of multiple in-store screens - menu boards, video boards, and digital kiosks.',
    image: homeImageSm5,
  },
  {
    title: 'Delivered Right to Your Customer',
    text: 'Efficient dispatching, & delivering products directly to your shoppers.',
    image: homeImageSm6,
  },
  {
    title: 'Multi-Location Management',
    text: 'Skillfully handle logistics & distribution across multiple locations using integrated tools.',
    image: homeImageSm7,
  },
]

export default function Banner() {
    return (
      <div className="bg-white">
        <div className="container pt-[0px] xl:pt-[50px] pb-[120px] xl:pb-[120px]">
            <hr className='md:hidden border-1 border-[#d0d0cf] mb-[60px] bg-white' />
            <div className='flex items-start flex-col xl:flex-row gap-12 md:gap-10'>
                <div className='w-full xl:w-[60%]'>
                    <h2 className='t-heading-1-md text-[#181819] mb-[10px]'>Empower <br/>Your Business</h2>
                    <p className='t-body-md'>To accomplish more with less tech</p>
                </div>
                <div className='w-full md:w-[540px] xl:w-[40%] flex gap-[60px] md:gap-[75px] flex-wrap flex-col md:flex-row'>
                  {blockSmall.map((block, i) => {
                    const Title = block.title;
                    const Text = block.text;
                    const Image = block.image;
                    return (
                      <ImageTextSmBlock 
                        title={Title}
                        text={Text}
                        image={Image} 
                      />
                    )
                  })}
                </div>
            </div>  
        </div>
      </div>
    )
  }