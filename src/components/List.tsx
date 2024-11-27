import React from 'react'
import Image from 'next/image'

export default function List() {
  return (
    <main>
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
      <div className="w-[80%] h-full">
        {/*top sale */}
        <div>
          <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">Our Products</span>
          <h2 className="text-4xl font-bold mt-5">Explore Our Products</h2>
        </div>
        {/*products contasiner box */}
        <div className=" flex sm:flex-col md:flex-row justify-between mt-7">
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center transition-transform hover:scale-105">
                <Image src={"/images/choclate.png"} alt={"choclate"} width={100} height={50}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">
                Breed Dry Dog Food
                </span>
                <span className="font-bold">$120</span>
            </div>
            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/camera.png"} alt={"keyboard"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">CANON EOS DSLR Camera</span>
                <span className="font-bold">$120</span>
            </div>
            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/laptop.png"} alt={"led"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">ASUS FHD Gaming Laptop</span>
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
        <div className=" flex sm:flex-col md:flex-row justify-between mt-7">
            <div>
            <div className="w-[250px] sm:h-full md:h-[200px] bg-gray-200 flex justify-center items-center transition-transform hover:scale-105">
                <Image src={"/images/jeep.png"} alt={"jeep"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">
                Kids Electric Car
                </span>
                <span className="font-bold">$120</span>
            </div>
            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/shoes.png"} alt={"keyboard"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">Jr. Zoom Soccer Cleats</span>
                <span className="font-bold">$120</span>
            </div>
            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/12.png"} alt={"led"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">GP11 Shooter USB Gamepad</span>
                <span className="font-bold">$120</span>
            </div>

            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex items-center justify-center">
                <Image src={"/images/shirt.png"} alt={"chair"} width={100} height={50}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">Quilted Satin Jacket</span>
                <span className="font-bold"> $180</span>
                
            </div>
            </div>
            
        </div>
      </div>
    </div>
    <button className="py-4 px-8 bg-red-600 sm:ml-10 md:ml-[710px] rounded-lg font-semibold md:mt-96">View all Products</button>

    </main>

  )
}
