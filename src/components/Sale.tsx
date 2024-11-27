
import Image from "next/image";
import React from "react";

function Sale() {
  return (
    <main>
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
      <div className="w-[80%] h-full">
        {/*top sale */}
        <div>
          <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">Today&apos;s</span>
          <h2 className="text-4xl font-bold mt-5">Flash Sales</h2>
        </div>
        {/*products contasiner box */}
        <div className=" flex sm:flex-col md:flex-row justify-between mt-7">
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center transition-transform hover:scale-105">
                <Image src={"/images/g.png"} alt={"game"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">
                    HAVIT MV-692 Gamepad
                </span>
                <span className="font-bold">$120</span>
            </div>
            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/keyboard.png"} alt={"keyboard"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">AK-900 Wired Keyboard</span>
                <span className="font-bold">$120</span>
            </div>
            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/tv.png"} alt={"led"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">PS LCD Gaming Monitor</span>
                <span className="font-bold">$120</span>
            </div>

            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex items-center justify-center">
                <Image src={"/images/chair.png"} alt={"chair"} width={100} height={50}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold"> S-Series Comfort Chair</span>
                <span className="font-bold"> $180</span>
            </div>
            </div>
            
        </div>
      </div>
    </div>
    <button className="py-4 px-8 bg-red-600 sm:ml-10 md:ml-[710px] mt-24 rounded-lg font-semibold">View all Products</button>
    </main>
  );
}

export default Sale;
