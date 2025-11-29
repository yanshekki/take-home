"use client";

import React from 'react';
import Link from 'next/link';

const AppleLogo = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
  </svg>
);

const GooglePlayLogo = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

export default function TryApp() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          <div className="relative flex-shrink-0">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#00B2FF] rounded-[40px] flex items-center justify-center relative overflow-hidden">
              
              <div className="w-[160px] h-[320px] md:w-[180px] md:h-[340px] border-4 border-black rounded-[30px] bg-transparent z-10 translate-y-8 shadow-2xl">
                <div className="w-full h-full bg-white opacity-10 rounded-[26px]"></div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Wanna try it first? <br />
              Get the App
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Download our app and get 500MB free data to try in your hometown.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              
              <Link href="#" className="flex items-center justify-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 min-w-[180px]">
                <AppleLogo />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium">Download on the</span>
                  <span className="text-lg font-bold">App Store</span>
                </div>
              </Link>

              <Link href="#" className="flex items-center justify-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 min-w-[180px]">
                <GooglePlayLogo />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium">GET IT ON</span>
                  <span className="text-lg font-bold">Google Play</span>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
