import Image from 'next/image';
import image from '@/public/pages/home/news/news.png';

export default function TrainingEventCard() {
  return (
    <article data-reveal className="lg:w-[31%] md:w-[48%] shadow-xl hover:shadow-2xl rounded-xl w-full bg-white">
      <div className="w-full h-fit">
        <Image
          src={image}
          alt="Image de la news"
          width={350}
          height={350}
          className="rounded-lg w-full"
        />
      </div>
    </article>
  );
}
