import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col padding-container max-container">
      <div className=" w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="relative flexCenter w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1400}
          height={100}
          className="sm:rounded-xl xl:rounded-5xl object-cover object-center w-full"
        />
        <div className=" absolute flex px-7 gap-3 py-8 rounded-3xl shadow-md bg-white md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={160}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col gap-10">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full">
                <span className="regular-16 text-gray-20">Destination</span>
                <span className="text-green-300 bold-16">48 min</span>
              </div>
              <p className="mt-2 bold-20">Aguas Collection</p>
            </div>
            <div className="flex flex-col w-full">
              <span className="regular-16 text-gray-20">Start Track</span>
              <span className="mt-2 bold-20 whitespace-nowrap">
                Wonorejo Pasuruan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
