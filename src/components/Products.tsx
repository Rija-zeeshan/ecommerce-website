import React from 'react'
import Image from 'next/image'
export default function Products() {
  return (
    
    
    <main>
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
      <div className="w-[80%] h-full">
        {/*top sale */}
        <div>
          <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">`This Month</span>
<div className='flex justify-between'>
<h2 className="text-4xl font-bold mt-5">Best Selling Products</h2>
<button className="py-4 px-8 bg-red-600 mt-24 rounded-lg font-semibold text-white">View all</button>
</div>

        </div>
        {/*products contasiner box */}
        <div className=" flex sm:flex-col md:flex-row justify-between mt-7">
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center transition-transform hover:scale-105">
                <Image src={"/images/jacket.png"} alt={"game"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">
                The north coat
                </span>
                <span className="font-bold">$260</span>
            </div>
            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/bag.png"} alt={"keyboard"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">Gucci duffle bag</span>
                <span className="font-bold">$960</span>
            </div>
            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/cpu.png"} alt={"led"} width={150} height={100}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">RGB liquid CPU Cooler</span>
                <span className="font-bold">$160</span>
            </div>

            </div>
            <div>
            <div className="w-[250px] h-[200px] bg-gray-200 flex items-center justify-center">
                <Image src={"/images/bookshelf.png"} alt={"chair"} width={100} height={50}></Image>
            </div>
            {/*title */}
            <div className="flex flex-col">
                <span className="text-lg font-bold"> Small BookSelf</span>
                <span className="font-bold"> $360</span>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  
    </main>
  );
}

