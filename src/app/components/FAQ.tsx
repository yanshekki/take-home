"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How do I install or activate my eSIM?",
    answer: "You can install your eSIM by scanning the QR code sent to your email. Alternatively, you can enter the activation details manually in your phone settings. Activation typically happens automatically once you connect to a supported network."
  },
  {
    question: "What devices support eSIMs?",
    answer: "Most modern smartphones support eSIM, including iPhone XR and newer, Samsung Galaxy S20 and newer, and Google Pixel 3 and newer. Please check our compatibility list for specific models."
  },
  {
    question: "How long does it take to activate an eSIM?",
    answer: "Activation is usually instant once you scan the QR code and connect to a network. In some rare cases, it might take up to 10 minutes."
  },
  {
    question: "Can I schedule my eSIM activation for later?",
    answer: "Yes! You can install the eSIM now and it will only activate when you arrive at your destination and connect to the local network."
  },
  {
    question: "Do I need to delete the eSIM after using my data?",
    answer: "It is recommended to keep the eSIM until your trip is fully over. Once your plan expires and you no longer need it, you can delete it from your phone settings."
  },
  {
    question: "Can I reuse my eSIM after deleting it?",
    answer: "No. Once an eSIM is deleted from your device, it cannot be restored or reused. You would need to purchase a new one."
  },
  {
    question: "Can I reuse the same eSIM for another trip?",
    answer: "Some of our eSIMs are top-up enabled, meaning you can add a new data plan to the existing eSIM. Check the specific plan details to see if top-up is supported."
  },
  {
    question: "Do I need Wi-Fi to activate the eSIM?",
    answer: "Yes, you need a stable internet connection (Wi-Fi or mobile data) to install and activate the eSIM profile on your device."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center text-black mb-12">
        </h2>

        <div className="bg-[#FFFBF5] rounded-[32px] p-6 md:p-10">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-[#E5E0D8] last:border-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
              >
                <span className="text-base md:text-lg font-bold text-gray-900 pr-8">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-gray-800 transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </span>
              </button>

              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'grid-rows-[1fr] opacity-100 mb-5' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
