"use client";

import React from 'react';

export default function PromoBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#FFE8E8] via-[#F4EAF7] to-[#E0E6FF] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        
        <span className="text-sm font-semibold tracking-widest text-gray-800 uppercase mb-3">
          Best Value for the USA
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          20GB for 30 days for $24,99
        </h2>

        <button className="bg-[#A92634] hover:bg-[#8E1F2C] text-white text-base font-medium py-3 px-10 rounded-lg shadow-sm transition-colors duration-300">
          Get Package
        </button>

      </div>
    </section>
  );
}
