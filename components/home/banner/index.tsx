import HomeBannerCarousel from '@/components/home/banner/carousel';

export default function HomePageBanner({ params }: { params: any }) {
  return (
    <section className="h-[85vh] w-full lg:h-auto">
      <HomeBannerCarousel params={params} toShow={1} />
    </section>
  );
}
