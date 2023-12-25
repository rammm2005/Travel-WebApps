import { FEATURES } from "@/constants";
import Image from "next/image";

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const Features = () => {
  return (
    <section className="flexCenter max-container padding-container flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 lg:mb-10">
      <div className="relative w-full flex justify-end">
        <div className="flex flex-1  lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return <li className="flex w-full flex-1 flex-col items-start">
    <div className={`rounded-full p-4 lg:p-5 bg-green-50`}>
      <Image src={icon} alt='map' width={30} height={30}/>
    </div>
    <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
    <p className="mt-5 regular-16 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{description}</p>
  </li>
};

export default Features;
