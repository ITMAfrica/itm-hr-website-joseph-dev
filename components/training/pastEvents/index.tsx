import TrainingEventCard from './card';

export default function TrainingPagePastEventsSection({
  params,
}: {
  params: any;
}) {
  return (
    <section className="py-16">
      <div className="w-10/12 mx-auto">
        <div data-reveal className="w-1/3">
          <h5 className="font-bold text-blue_itm_primary text-4xl mb-2">
            Nos événements passés
          </h5>
          <p className="w-3/4">
            Chaque séance est conçue pour améliorer des compétences spécifiques
            telles que la communication, la résolution de problèmes et la
            gestion du temps
          </p>
        </div>
        <div className="flex flex-wrap justify-between pt-8">
          <TrainingEventCard />
          <TrainingEventCard />
          <TrainingEventCard />
        </div>
      </div>
    </section>
  );
}
