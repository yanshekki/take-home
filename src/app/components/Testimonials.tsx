"use client";

import React from 'react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    text: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    author: "Jane Foster",
    isFeatured: false,
  },
  {
    id: 2,
    text: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    author: "Jane Foster",
    isFeatured: true,
  },
  {
    id: 3,
    text: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    author: "Jane Foster",
    isFeatured: false,
  },
  {
    id: 4,
    text: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    author: "Jane Foster",
    isFeatured: false,
  },
  {
    id: 5,
    text: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    author: "Jane Foster",
    isFeatured: false,
  },
  {
    id: 6,
    text: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    author: "Jane Foster",
    isFeatured: false,
  },
  {
    id: 7,
    text: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    author: "Jane Foster",
    isFeatured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hear what travellers say about us
          </h2>
          <p className="text-gray-600 text-lg">
            Your United States of America eSIM features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
          
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`
                bg-[#F8F9FC] rounded-[32px] p-8 flex flex-col justify-between
                transition-transform duration-300 hover:-translate-y-1
                ${review.isFeatured ? 'lg:row-span-2 bg-[#F8F9FC]' : 'lg:row-span-1'}
              `}
            >
              <div className="mb-6">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border border-gray-200">
                  <Image 
                    src="/api/placeholder/100/100" 
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <p className={`text-gray-800 font-medium leading-relaxed mb-6 ${
                  review.isFeatured ? 'text-2xl md:text-3xl tracking-tight' : 'text-sm'
                }`}>
                  {review.text}
                </p>
              </div>

              <div>
                <p className="text-gray-900 font-bold text-base">
                  {review.author}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
