"use client";

import React from 'react';
import { Signal, Zap, Wifi, LayoutGrid, CircleArrowDown, FileText } from 'lucide-react';

const features = [
  {
    title: "Reliable Coverage",
    description: "Our USA eSIM uses the leading mobile networks to provide reliable internet in major towns and cities.",
    icon: <Signal className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
  },
  {
    title: "Fast data speeds",
    description: "Enjoy 4G LTE or 5G speeds where available, perfect for streaming, browsing, or working remotely.",
    icon: <Zap className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
  },
  {
    title: "Hotspots & Tethering",
    description: "Use your mobile data on other devices via hotspot or tethering—including laptops and tablets.",
    icon: <Wifi className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
  },
  {
    title: "Data Only",
    description: "No voice calls or SMS included. You can still make calls and send messages using VoIP apps like WhatsApp, Skype, FaceTime etc.",
    icon: <LayoutGrid className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
  },
  {
    title: "Instant Delivery",
    description: "No physical SIM, no store visits. Your USA eSIM is delivered instantly via email. Just download the app and install it to use.",
    icon: <CircleArrowDown className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
  },
  {
    title: "Activation instructions",
    description: "Simple, step-by-step activation guide is included in your email for a quick setup—no tech skills needed.",
    icon: <FileText className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
  }
];

export default function ESimFeaturesSection() {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          eSIM for United States features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#F8F9FC] p-8 rounded-3xl hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="mb-6 p-2 -ml-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
