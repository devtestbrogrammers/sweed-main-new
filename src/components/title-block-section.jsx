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

const blockSmallOne = [
  {
    title: 'Inventory Management',
    text: 'Elevate inventory control & store management with cutting-edge tools, auto inventory movement.',
    image: homeImageSm1_2x,
    imageMB: homeImageSm1_3x,
  },
  {
    title: 'Only the Necessary Integrations',
    text: 'Sync effortlessly with essential platforms & tools, streamlining operations.',
    image: homeImageSm3_2x,
    imageMB: homeImageSm3_3x,
  },
  {
    title: 'Connected In-Store Screens',
    text: 'Centralized management of multiple in-store screens - menu boards, video boards, and digital kiosks.',
    image: homeImageSm5_2x,
    imageMB: homeImageSm5_3x,
  },
  {
    title: 'Multi-Location Management',
    text: 'Skillfully handle logistics & distribution across multiple locations using integrated tools.',
    image: homeImageSm7_2x,
    imageMB: homeImageSm7_3x,
  },
]
const blockSmallTwo = [
  {
    title: 'Flexible Payment',
    text: 'Offer seamless payment choices for every customer`s convenience.',
    image: homeImageSm2_2x,
    imageMB: homeImageSm2_3x,
  },
  {
    title: 'Easy to Use Point of Sale',
    text: 'Effortless management of hardware-agnostic point-of-sale devices.',
    image: homeImageSm4_2x,
    imageMB: homeImageSm4_3x,
  },
  {
    title: 'Delivered Right to Your Customer',
    text: 'Efficient dispatching, & delivering products directly to your shoppers.',
    image: homeImageSm6_2x,
    imageMB: homeImageSm6_3x,
  },
]

export default function Banner() {
  return (
    <div className="bg-white title-block-section">
      <div className="container pt-[0px] xl:pt-[50px] pb-[120px] xl:pb-[120px]">
        <hr className='md:hidden border-1 border-[#d0d0cf] mb-[60px] bg-white' />
        <div className='grid lg:grid-cols-2 items-start gap-[4.5rem] xl:gap-24'>
          <div className='lg:sticky lg:top-32'>
            <div className='header'>
              <h2 className='t-heading-1-md text-[#181819] mb-[10px]'>Empower <br />Your Business</h2>
              <p className='t-body-md'>To accomplish more with less tech</p>
            </div>
          </div>
          <div className='content grid md:grid-cols-2 md:gap-[72px] lg:gap-[60px]'>
            <div className='flex gap-[70px] sm:gap-[50px] flex-col'>
              {blockSmallOne.map((block, i) => {
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
            <div className='flex gap-[50px] flex-col md:mt-[150px]'>
              {blockSmallTwo.map((block, i) => {
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
    </div>
  )
}