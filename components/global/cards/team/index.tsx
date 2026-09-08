import avatar from '@/public/assets/teams/avatar.png';
import Image from 'next/image';
export default function CardTeam({
  name,
  position,
  image,
  text,
}: {
  name: string;
  position: string;
  image: any;
  text: string;
}) {
  return (
    <article className="w-[80vw] sm:w-[41vw] md:w-[340px] lg:w-[280px] mx-[5px] h-[475px] relative overflow-hidden rounded-xl">
      <Image
        src={image}
        fill
        alt="team"
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
      <div className="absolute p-5 h-[290px] left-0 bottom-0 right-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent flex flex-col justify-end">
        <h2 className="font-bold um text-white">{name}</h2>
        <h1 className="font-bold text-xl text-blue_itm_secondary py-1">
          {position}
        </h1>
        <p className="text-xs text-white">{text}</p>
      </div>
    </article>
  );
}
