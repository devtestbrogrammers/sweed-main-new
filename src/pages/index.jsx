import BannerSection from '@/components/banner-section';
import AllYouNeedSection from '@/components/all-you-need-section';
import ImageTextSection from '@/components/image-text-section';
import TitleBlockSection from '@/components/title-block-section';

import homeBannerImage from "/public/images/homepage/home_banner_image.png"

export default function Home() {
  return (
    <main className="overflow-hidden">

      <BannerSection
        title={<>One Platform <br/>for All Cannabis <br/>Retail Operations</>}
        image={homeBannerImage}
      />

      <AllYouNeedSection />

      <ImageTextSection />

      <TitleBlockSection /> 

    </main>
  )
}
