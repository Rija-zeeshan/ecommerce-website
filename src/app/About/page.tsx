import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row sm:flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center
          ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Story
            </h1>
            <p className="mb-8 leading-relaxed">
              Launced in 2015, Exclusive is South Asia&apos;s premier online
              shopping makterplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sallers and 300 brands and serves
              3 millioons customers across the region. <br /> <br />
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer..
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/africangirls.png"
              height={720}
              width={600}
            />
          </div>
        </div>
      </section>

      <div className=" flex md:flex-row sm:flex-col justify-between mt-7">
        <div>
          <div className="w-[300px] h-[400px] ml-28 bg-gray-200 flex justify-center items-center transition-transform hover:scale-105">
            <Image
              src={"/images/men.png"}
              alt={"game"}
              width={200}
              height={150}
            ></Image>
          </div>
          {/*title */}
          <div className="flex flex-col">
            <h1 className="text-2xl text-gray-900 font-bold ml-28">
              Tom Cruise
            </h1>
            <span className="text-lg font-bold ml-28">Founder & Chairman</span>
          </div>
        </div>
        
        <div>
          <div className="w-[300px] h-[400px] ml-28 bg-gray-200 flex justify-center items-center transition-transform hover:scale-105">
            <Image
              src={"/images/w.png"}
              alt={"game"}
              width={200}
              height={150}
            ></Image>
          </div>
          {/*title */}
          <div className="flex flex-col">
            <h1 className="text-2xl text-gray-900 font-bold ml-28">
            Emma Watson
            </h1>
            <span className="text-lg font-bold ml-28">Managing Director</span>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-[400px] ml-28 bg-gray-200 flex justify-center items-center transition-transform hover:scale-105">
            <Image
              src={"/images/o.png"}
              alt={"game"}
              width={200}
              height={150}
            ></Image>
          </div>
          {/*title */}
          <div className="flex flex-col">
            <h1 className="text-2xl text-gray-900 font-bold ml-28">
            Will Smith
            </h1>
            <span className="text-lg font-bold ml-28">Product Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
