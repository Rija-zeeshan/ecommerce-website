import React from 'react';
import Image from 'next/image';

export default function Signup() {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <Image alt="Signup Feature" className="object-cover object-center w-full h-full" src="/images/m.png" height={300} width={200} />
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic Portland shabby chic echo park, banjo fashion axe.</p>

        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>

        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
        </p>
      </div>
    </div>
  );
}
