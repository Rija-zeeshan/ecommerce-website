import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <main>
    <div>
          <div className="w-full h-[400px] flex justify-center mt-56">
      <div className="bg-black h-full w-[80%] flex justify-between">
        {/*left side */}
        <div className="ml-8 mt-20 text-white">
          <div className="flex justify-center items-center">
            <span>
            
            </span>
            <span>
            Categories
            </span>
          </div>
          <div className="w-[200px] ml-5">
            <h1 className="text-3xl font-bold">Enhance Your Music Experience</h1>
            <button className="py-2 px-4 bg-green-600 mt-5 rounded-lg font-semibold text-white">Buy Now</button>

            
          </div>
        </div>
        {/*right side */}
        <div>
            <Image src="/images/box.png" alt="mobile" width={500} height={500} className='mt-10' />
        </div>
      </div>
    </div>
    </div>
    </main>
  )
}
