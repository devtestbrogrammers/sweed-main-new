import ImageTextBlock from '@/components/image-text-block';

import homeImage1 from "/public/images/homepage/home_image_1.png"
import homeImage2 from "/public/images/homepage/home_image_2.png"
import homeImage3 from "/public/images/homepage/home_image_3.png"
import homeImage4 from "/public/images/homepage/home_image_4.png"

const blockData = [
  {
    title: (<>Cannabis <br/>eCommerce</>),
    text: (<><p>Puts you in the spotlight. Amplify your brand presence with a custom-branded website and native app.</p><p>Tap into unlimited merchandising capabilities and integrated loyalty & marketing and banner management.</p></>),
    image: homeImage1,
    class: 'xl:flex-row-reverse',
  },
  {
    title: (<>Manage <br/>Customers</>),
    text: (<><p>Your way. Intuitive customer management provides data-driven customer segmentation, robust insights into consumer shopping habits, and integrated opt-in</p><p>Sweed is built to prevent profile duplicates and can combine existing profiles.</p></>),
    image: homeImage2,
    class: '',
  },
  {
    title: (<>Unordinary <br/>Point of Sale</>),
    text: (<><p>It`s feature-packed. Sweed’s intelligent promotion features provide your bud tenders with smart recommendations based on top-selling products and customer data</p><p>Payments, loyalty & marketing, product recommendations, and discounts are all integrated</p></>),
    image: homeImage3,
    class: 'xl:flex-row-reverse',
  },
  {
    title: (<>Loyalty <br/>& Marketing</>),
    text: (<><p>Tailored to you. Advanced customer segmentation for tailored marketing & loyalty success.</p><p>Craft personalized journeys with email, SMS, and push messaging, and create user workflows, loyalty, and referral programs.</p></>),
    image: homeImage4,
    class: '',
  },
]

export default function Banner() {
    return (
      <div className="">
        {blockData.map((block, i) => {
            const Title = block.title;
            const Text = block.text;
            const Image = block.image;
            const Class = block.class;
            return (
              <ImageTextBlock 
                title={Title}
                text={Text}
                image={Image} 
                class={Class} 
              />
            )
          })}
      </div>
    )
  }