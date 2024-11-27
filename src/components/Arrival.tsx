import React from "react";
import Image from "next/image";

export default function A() {
  return (
    <div className="md:ml-40 sm:ml-12 w-[100%] ">
      <section className="bg gradient-to-r from-black to-gray-700 ">
        <div className="py-4 px-2 mx-auto mx-w-screen-xl sm:py4 lg:px-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/images/playstation.png"
                  alt="burger 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={400} width={300} />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {" "}
                  Gaming {""}
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradiant-to-r from-black to-gray-700 h-auto md:h-full flex flex-col ">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  src="/images/women.png"
                  alt="burger 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
               height={400} width={300} />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {" "}
                  Women&apos;s Collections {""}
                </h3>
              </a>

              <div className="">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/images/perfume.png"
                    alt="burger 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition transform duration-500 ease-in-out"
                  height={400} width={300}/>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 "></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    {" "}
                    GUCCI INTENSE {""}
                  </h3>
                </a>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
