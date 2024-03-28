import ImageTextSmBlock from '@/components/image-text-sm-block';

import homeImageSm1_2x from "/public/images/homepage/home_image_sm_1_2x.png"
import homeImageSm1_3x from "/public/images/homepage/home_image_sm_1_3x.png"
import homeImageSm2_2x from "/public/images/homepage/home_image_sm_2_2x.png"
import homeImageSm2_3x from "/public/images/homepage/home_image_sm_2_3x.png"
import homeImageSm3_2x from "/public/images/homepage/home_image_sm_3_2x.png"
import homeImageSm3_3x from "/public/images/homepage/home_image_sm_3_3x.png"
import homeImageSm4_2x from "/public/images/homepage/home_image_sm_4_2x.png"
import homeImageSm4_3x from "/public/images/homepage/home_image_sm_4_3x.png"
import homeImageSm5_2x from "/public/images/homepage/home_image_sm_5_2x.png"
import homeImageSm5_3x from "/public/images/homepage/home_image_sm_5_3x.png"
import homeImageSm6_2x from "/public/images/homepage/home_image_sm_6_2x.png"
import homeImageSm6_3x from "/public/images/homepage/home_image_sm_6_3x.png"
import homeImageSm7_2x from "/public/images/homepage/home_image_sm_7_2x.png"
import homeImageSm7_3x from "/public/images/homepage/home_image_sm_7_3x.png"

const blockSmall = [
  {
    title: 'Inventory Management',
    text: 'Elevate inventory control & store management with cutting-edge tools, auto inventory movement.',
    image: homeImageSm1_2x,
    imageMB: homeImageSm1_3x,
  },
  {
    title: 'Flexible Payment',
    text: 'Offer seamless payment choices for every customer`s convenience.',
    image: homeImageSm2_2x,
    imageMB: homeImageSm2_3x,
  },
  {
    title: 'Only the Necessary Integrations',
    text: 'Sync effortlessly with essential platforms & tools, streamlining operations.',
    image: homeImageSm3_2x,
    imageMB: homeImageSm3_3x,
  },
  {
    title: 'Easy to Use Point of Sale',
    text: 'Effortless management of hardware-agnostic point-of-sale devices.',
    image: homeImageSm4_2x,
    imageMB: homeImageSm4_3x,
  },
  {
    title: 'Connected In-Store Screens',
    text: 'Centralized management of multiple in-store screens - menu boards, video boards, and digital kiosks.',
    image: homeImageSm5_2x,
    imageMB: homeImageSm5_3x,
  },
  {
    title: 'Delivered Right to Your Customer',
    text: 'Efficient dispatching, & delivering products directly to your shoppers.',
    image: homeImageSm6_2x,
    imageMB: homeImageSm6_3x,
  },
  {
    title: 'Multi-Location Management',
    text: 'Skillfully handle logistics & distribution across multiple locations using integrated tools.',
    image: homeImageSm7_2x,
    imageMB: homeImageSm7_3x,
  },
]

export default function Banner() {
    return (
      <div className="bg-white title-block-section">
        <div className="container pt-[0px] xl:pt-[50px] pb-[120px] xl:pb-[120px]">
            <hr className='md:hidden border-1 border-[#d0d0cf] mb-[60px] bg-white' />
            <div className='flex items-start flex-col lg:flex-row gap-[50px] lg:gap-[160px]'>
                <div className='w-full lg:w-[50%]'>
                  <div className='header'>
                    <h2 className='t-heading-1-md text-[#181819] mb-[10px]'>Empower <br/>Your Business</h2>
                  </div>
                </div>
                <div className='content w-full md:w-[680px] lg:w-[50%] flex gap-[50px] flex-wrap flex-col sm:flex-row'>
                  {blockSmall.map((block, i) => {
                    const Title = block.title;
                    const Text = block.text;
                    const Image = block.image;
                    const ImageMB = block.imageMB;
                    return (
                      <ImageTextSmBlock 
                        title={Title}
                        text={Text}
                        image={Image} 
                        imageMB={ImageMB} 
                        key={i}
                      />
                    )
                  })}
                </div>
            </div>  
        </div>
      </div>
    )
  }