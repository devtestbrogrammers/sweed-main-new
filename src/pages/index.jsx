import BannerSection from '@/components/banner-section';
import AllYouNeedSection from '@/components/all-you-need-section';
import ImageTextSection from '@/components/image-text-section';
import TitleBlockSection from '@/components/title-block-section';

export default function Home() {
  return (
    <main className="overflow-hidden">

      <BannerSection />

      <AllYouNeedSection />

      <ImageTextSection />

      <TitleBlockSection /> 

    </main>
  )
}
