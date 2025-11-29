"use client";

import React from 'react';
import Image from 'next/image';

export default function RegionalPackagePromo() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-r from-[#D0F8F8] via-[#F2F6F8] to-[#FFE8CC]">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          <div className="w-full md:w-1/2 aspect-[4/3] bg-[#00B2FF] rounded-3xl shadow-sm relative overflow-hidden">
             {/* 
             <Image 
               src="/path-to-europe-image.jpg" 
               alt="Europe Regional Package"
               fill
               className="object-cover"
             /> 
             */}
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            
            <span className="text-xs md:text-sm font-bold tracking-widest text-gray-600 uppercase mb-3">
              You may also like
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Europe Regional Package
            </h2>

            <p className="text-gray-700 text-lg mb-8">
              From $15,99
            </p>

            <button className="bg-[#B02B3A] hover:bg-[#96232F] text-white font-medium py-3 px-10 rounded-lg transition-colors duration-300 shadow-sm">
              Get Package
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
