import ImageTextBlock from '@/components/image-text-block';

import homeImage1_2x from "/public/images/homepage/home_image_1_2x.png"
import homeImage1_3x from "/public/images/homepage/home_image_1_3x.png"
import homeImage2_2x from "/public/images/homepage/home_image_2_2x.png"
import homeImage2_3x from "/public/images/homepage/home_image_2_3x.png"
import homeImage3_2x from "/public/images/homepage/home_image_3_2x.png"
import homeImage3_3x from "/public/images/homepage/home_image_3_3x.png"
import homeImage4_2x from "/public/images/homepage/home_image_4_2x.png"
import homeImage4_3x from "/public/images/homepage/home_image_4_3x.png"

const blockData = [
  {
    title: (<>Cannabis <br/>eCommerce</>),
    text: (<><p>Puts you in the spotlight. Amplify your brand presence with a custom-branded website and native app.</p><p>Tap into unlimited merchandising capabilities and integrated loyalty & marketing and banner management.</p></>),
    image: homeImage1_2x,
    imageMB: homeImage1_3x,
    class: 'lg:flex-row-reverse',
  },
  {
    title: (<>Manage <br/>Customers</>),
    text: (<><p>Your way. Intuitive customer management provides data-driven customer segmentation, robust insights into consumer shopping habits, and integrated opt-in</p><p>Sweed is built to prevent profile duplicates and can combine existing profiles.</p></>),
    image: homeImage2_2x,
    imageMB: homeImage2_3x,
    class: '',
  },
  {
    title: (<>Extraordinary <br/>Point of Sale</>),
    text: (<><p>It`s feature-packed. Sweed’s intelligent promotion features provide your bud tenders with smart recommendations based on top-selling products and customer data</p><p>Payments, loyalty & marketing, product recommendations, and discounts are all integrated</p></>),
    image: homeImage3_2x,
    imageMB: homeImage3_3x,
    class: 'lg:flex-row-reverse',
  },
  {
    title: (<>Loyalty <br/>& Marketing</>),
    text: (<><p>Tailored to you. Advanced customer segmentation for tailored marketing & loyalty success.</p><p>Craft personalized journeys with email, SMS, and push messaging, and create user workflows, loyalty, and referral programs.</p></>),
    image: homeImage4_2x,
    imageMB: homeImage4_3x,
    class: '',
  },
]

export default function Banner() {
    return (
      <div className="bg-white">
        {blockData.map((block, i) => {
            const Title = block.title;
            const Text = block.text;
            const Image = block.image;
            const ImageMB = block.imageMB;
            const Class = block.class;
            return (
              <ImageTextBlock 
                title={Title}
                text={Text}
                image={Image} 
                imageMB={ImageMB} 
                class={Class} 
                key={i}
              />
            )
          })}
      </div>
    )
  }