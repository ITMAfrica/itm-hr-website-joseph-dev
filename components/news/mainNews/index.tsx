import Image from "next/image";
import bgHover from "@/public/assets/bg/bg.hover.png"
import bg from "@/public/assets/bg/bg.news.main.section.png"
import CardNews from "../card";

export default function NewsPageMain() {
    return <section className="w-full bg-white lg:py-20 py-10">
        <div className="w-11/12 lg:w-10/12 mx-auto h-full flex lg:flex-nowrap flex-wrap">
            <main data-reveal className="w-full lg:w-9/12  lg:mr-10 mr-0">
                <header className="h-fit w-full">
                    <h1 className="font-bold text-blue_itm_good w-full pb-3 text-3xl">
                        A la une
                    </h1>
                    <div className="w-1/12  border-blue_itm_good border-b-2 mb-5"></div>
                </header>
                <div className="w-full h-[50vh] relative">
                    <div className="absolute z-20 top-0 left-0 right-0 bottom-0 ">
                        <Image src={bgHover} alt="" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <Image src={bg} alt="" fill style={{ objectFit: 'cover' }} />
                    <div className="absolute rounded-sm overflow-hidden bg-green-500 top-3 left-3 text-sm px-3 py-2 text-white ">
                        entreprise
                    </div>
                </div>
                <div className="w-full pt-5">
                    <h1 className="font-bold pt-3">
                        Il est maintenant temps de penser au succès de votre petite entreprise
                    </h1>
                    <p className="w-full pt-3 text-gray_itm">
                        Le client est très important, le client sera suivi par le client. Les bouchées de la pilule répandaient la sauce de la mécène. Peur de se mettre dans la faim de vivre comme un vulputé.Le client est très important, le client sera suivi par le client. Les bouchées de la pilule répandaient la sauce de la mécène. Peur de se mettre dans la faim de vivre comme un vulputé. Le client est très important, le client sera suivi par le client. Les bouchées de la pilule répandaient la sauce de la mécène. Peur de se mettre dans la faim de vivre comme un vulputé...
                    </p>
                </div>
            </main>
            <aside data-reveal className="h-full w-full lg:w-3/12  lg:pt-0 pt-5 overflow-y-scroll scrollbar-thin">
                <header className="h-fit w-full">
                    <h1 className="font-bold text-blue_itm_good w-full pb-3 text-3xl">
                        les plus consultés
                    </h1>
                    <div className="w-3/12 border-blue_itm_good border-b-2 mb-5"></div>
                </header>
                <CardNews full index={0} />
                <CardNews full index={1} />
                <CardNews full index={2} />
                <CardNews full index={3} />
            </aside>
        </div>
    </section>
}