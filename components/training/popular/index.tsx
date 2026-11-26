import TrainingCard from '../card';

export default function TrainingpagePopular({ params }: { params: any }) {
  return (
    <section className="">
      <div className="w-9/12 mx-auto py-14">
        <div data-reveal className="flex justify-between">
          <h3 className="font-bold text-4xl text-blue_itm_primary">
            Nos formations populaires
          </h3>
          <div>
            <button className="w-10 h-10 bg-blue_itm_aqua_marine/40 rounded-full"></button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between pt-8">
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
        </div>
      </div>
    </section>
  );
}
