import { FaApple } from "react-icons/fa";

import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full h-[300px] flex justify-center mt-8">
      <div className="bg-black h-full sm:w-full md:w-[80%] flex justify-between">
        {/*left side */}
        <div className="ml-8 md:mt-10 sm:mt-4 text-white">
          <div className="flex justify-center items-center">
            <span>
              <FaApple className="text-6xl" />
            </span>
            <span>
                iPhone 14 Series
            </span>
          </div>
          <div className="w-[200px] ml-5">
            <h1 className="text-3xl font-bold">Up to 10% off Voucher</h1>
            <button className="font-bold underline underline-offset-8 ml-5">Shop Now</button>
          </div>
        </div>
        {/*right side */}
        <div>
            <Image src="/images/mobile.png" alt="mobile" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
