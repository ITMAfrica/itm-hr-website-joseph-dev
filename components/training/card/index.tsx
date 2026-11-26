import Image from 'next/image';
import image from '@/public/pages/home/news/news.png';

export default function TrainingCard() {
  return (
    <article data-reveal className="lg:w-[31%] md:w-[48%] shadow-xl hover:shadow-2xl rounded-xl pb-3 w-full mb-7 bg-white">
      <div className="mb-5 w-full h-fit">
        <Image
          src={image}
          alt="Image de la news"
          width={350}
          height={350}
          className="rounded-lg w-full"
        />
      </div>
      <div className="w-full p-5 pt-0">
        <h1 className="text-2xl font-bold text-blue_itm_primary py-2">
          Formation excel avancé
        </h1>
        <p className="text-justify text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          blanditiis. Veritatis nihil eaque consectetur cumque quos, illum
          voluptatum minima ea ut
        </p>
      </div>
    </article>
  );
}
