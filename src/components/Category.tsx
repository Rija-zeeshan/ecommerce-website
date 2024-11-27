import React from "react";
import { FaMobileAlt } from "react-icons/fa";

import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import Image from "next/image";






function Category() {
  return (
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center">
      <div className="w-[80%] h-full">
        {/*top sales */}
        <div>
          <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">
            {" "}
            Categories
          </span>
          <h2 className="text-4xl font-bold mt-5">Browse By Category</h2>
        </div>
        {/*icon container box*/}
        <div className="flex sm:flex-col md:flex-row justify-between mt-5">
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200  justify-center items-center flex flex-col"> <FaMobileAlt className="text-6xl " />
            <h2 className="mt-2">Phones</h2>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
            <Image src={"/images/computer.png"} alt={"computer"} height={140} width={90} ></Image>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">
                <Image src={"/images/watch.png"} alt={"computer"} height={100} width={50} ></Image>
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center">  <FaCameraRetro className="text-6xl" />
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center"><FaHeadphones className="text-6xl" />
            </div>
          </div>
          <div>
            <div className="w-[200px] h-[150px] bg-gray-200 flex justify-center items-center"> <FaGamepad className="text-6xl"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Category;
