import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, peopleJoined, subtitle }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[350px] sm:min-w-[690px] md:min-w-[750px] lg:min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat sm:rounded-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 sm:px-20 sm:py-10">
        <div className="flexCenter gap-4">
          <div className="p-4 bg-green-50 rounded-full">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex overflow-hidden -space-x-4">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt="person"
                width={53}
                height={53}
                key={url}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="max-container padding-container relative flex flex-col py-10 lg:py-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto md:h-[400px] lg:h-[600px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen arsuan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somehwre in the wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 md:-mt-60 md:mr-6 lg:mr-6 lg:-mt-80 xl:-mt-72">
        <div className="bg-green-50 p-8 md:py-4 md:px-6 lg:p-8 md:max-w-[275px] lg:max-w-[400px] xl:max-w-[500px] xl:rounded-5xl xl:px-12 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 lg:regular-32 2xl:regular-46 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 lg:regular-20 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
