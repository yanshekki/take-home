"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const benefitsStyle = [
  {
    bgClass: "bg-[#E0F7FA]",
    stripClass: "bg-[#B2EBF2]",
    appIcons: [
      {
        bg: "bg-green-500",
      },
      {
        bg: "bg-blue-500",
      },
    ],
  },
  {
    bgClass: "bg-[#FFF9C4]",
    stripClass: "bg-[#FFF59D]",
    appIcons: [
      {
        bg: "bg-green-600",
      },
      {
        bg: "bg-gray-800",
      },
    ],
  },
  {
    bgClass: "bg-[#E0F2F1]",
    stripClass: "bg-[#B9F6CA]",
    appIcons: [
      {
        bg: "bg-pink-600",
      },
      {
        bg: "bg-black",
      },
    ],
  },
  {
    bgClass: "bg-[#FFCCBC]",
    stripClass: "bg-[#FFAB91]",
    appIcons: [
      {
        bg: "bg-red-600",
      },
      {
        bg: "bg-green-500",
      },
    ],
  },
  {
    bgClass: "bg-[#F3E5F5]",
    stripClass: "bg-[#E1BEE7]",
    appIcons: [
      {
        bg: "bg-black",
      },
      {
        bg: "bg-pink-500",
      },
    ],
  },
];

export default function BenefitsSection({
  apiUrl,
  apiKey,
  countryOrRegionCode,
  locale,
}: {
  apiUrl: string;
  apiKey: string;
  countryOrRegionCode: string;
  locale: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [benefitsSectionInformation, setBenefitsSectionInformation] = useState(
    {} as {
      title: string;
      icon: string;
      accordions: Array<{
        icon: string;
        title: string;
        paragraph: string;
        image: string;
        apps: Array<{ iconId: string; iconUrl: string; text: string }>;
      }>;
    }
  );

  React.useEffect(() => {
    axios
      .get(
        `${apiUrl}${apiKey}/content/BenefitsSection/${countryOrRegionCode}/${locale}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        setBenefitsSectionInformation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching information:", error);
        if (error.response.status === 400) {
          alert("Handle 400 (unsupported locale)");
        } else if (error.response.status === 401) {
          alert("Handle 401 (invalid API key)");
        } else if (error.response.status === 500) {
          alert("Handle 500 (server error)");
        }
      });
  }, [apiKey, apiUrl, countryOrRegionCode, locale]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-800">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-black">
          {benefitsSectionInformation.title}
        </h2>

        <div className="flex flex-wrap gap-3">
          {benefitsSectionInformation?.accordions &&
            benefitsSectionInformation?.accordions.length > 0 &&
            benefitsSectionInformation.accordions.map((benefit, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  activeIndex === index
                    ? "bg-sky-100 text-sky-700 border-sky-200"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {benefit.title}
              </button>
            ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] gap-2 lg:gap-0 rounded-3xl overflow-hidden">
        {benefitsSectionInformation?.accordions &&
          benefitsSectionInformation?.accordions.length > 0 &&
          benefitsSectionInformation.accordions.map((benefit, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
                ${
                  isActive
                    ? "lg:flex-[10] h-auto"
                    : "lg:flex-[1] h-20 lg:h-auto"
                }
                ${
                  isActive
                    ? benefitsStyle[index].bgClass
                    : benefitsStyle[index].stripClass
                }
                ${
                  isActive
                    ? "rounded-3xl lg:rounded-none"
                    : "rounded-xl lg:rounded-none"
                }
              `}
              >
                <div
                  className={`flex flex-col lg:flex-row h-full w-full p-8 lg:p-12 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  <div className="flex-1 flex flex-col justify-center z-10 min-w-[300px]">
                    <div className="mb-6">
                      {benefit.icon && (
                        <Image
                          src={benefit.icon}
                          alt={benefit.title}
                          width={64}
                          height={64}
                        />
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-8 max-w-md">
                      {benefit.paragraph}
                    </p>

                    <div className="space-y-4">
                      {benefit.apps.map((app, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${benefitsStyle[index].appIcons[i].bg}`}
                          >
                            {app.iconUrl && (
                              <Image
                                src={app.iconUrl}
                                alt={app.text}
                                width={64}
                                height={64}
                              />
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {app.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 relative mt-8 lg:mt-0 min-h-[200px]">
                    {benefit.image && (
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={400}
                        height={400}
                        className="object-contain w-full h-full drop-shadow-xl"
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-end pb-10 gap-4 transition-opacity duration-500 ${
                    isActive ? "opacity-0 hidden" : "opacity-100"
                  }`}
                >
                  {benefitsSectionInformation.accordions[index].apps.map(
                    (app, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${benefitsStyle[index].appIcons[i].bg} scale-75`}
                      >
                        {app.iconUrl && (
                          <Image
                            src={app.iconUrl}
                            alt={app.text}
                            width={52}
                            height={52}
                            className="object-contain w-full h-full drop-shadow-xl"
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
