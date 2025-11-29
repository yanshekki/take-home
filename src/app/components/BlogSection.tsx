"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "25 Travel tips for the United Kingdom",
    excerpt: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    slug: "/blog/uk-travel-tips",
    image: "/api/placeholder/600/600"
  },
  {
    id: 2,
    title: "25 Travel tips for the United Kingdom",
    excerpt: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    slug: "/blog/uk-travel-tips-2",
    image: "/api/placeholder/600/600"
  },
  {
    id: 3,
    title: "25 Travel tips for the United Kingdom",
    excerpt: "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    slug: "/blog/uk-travel-tips-3",
    image: "/api/placeholder/600/600"
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Useful resources from our blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-[#F8F9FC] p-6 rounded-[32px] flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-[#00B2FF]">
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <Link 
                  href={post.slug}
                  className="text-sm font-bold text-gray-900 uppercase tracking-wide hover:text-blue-600 transition-colors inline-flex items-center group"
                >
                  Read More
                  <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
