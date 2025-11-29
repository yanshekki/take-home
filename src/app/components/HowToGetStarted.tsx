"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ShoppingBag, ArrowDownToLine, LayoutGrid, Check } from "lucide-react";

export default function HowToGetStarted({
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
  const [howToGetStartedInformation, setHowToGetStartedInformation] = useState(
    {} as {
      title: string;
      steps: Array<{
        icon: string;
        title: string;
        paragraph: string;
        image: string;
      }>;
    }
  );

  React.useEffect(() => {
    axios
      .get(
        `${apiUrl}${apiKey}/content/HowToGetStarted/${countryOrRegionCode}/${locale}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        setHowToGetStartedInformation(response.data);
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
    howToGetStartedInformation &&
    howToGetStartedInformation.steps &&
    howToGetStartedInformation.steps.length === 3 && (
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {howToGetStartedInformation.title}
            </h2>
            <p className="text-gray-600 text-lg">Get started in 3 easy steps</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#F8F9FC] rounded-[32px] p-8 flex flex-col h-full">
              <div className="mb-6">
                {howToGetStartedInformation.steps[0].icon &&
                howToGetStartedInformation.steps[0].icon !== "" ? (
                  <Image
                    src={howToGetStartedInformation.steps[0].icon}
                    alt={howToGetStartedInformation.steps[0].title}
                    width={32}
                    height={32}
                    className="w-8 h-8 text-slate-700"
                  />
                ) : (
                  <ShoppingBag
                    className="w-8 h-8 text-slate-700"
                    strokeWidth={1.5}
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                {howToGetStartedInformation.steps[0].title || ""}
              </h3>

              <div className="flex-1 flex justify-center items-end mb-8">
                {howToGetStartedInformation.steps[0].image &&
                  howToGetStartedInformation.steps[0].image !== "" && (
                    <Image
                      src={howToGetStartedInformation.steps[0].image}
                      alt={howToGetStartedInformation.steps[0].title}
                      width={239}
                      height={330}
                    />
                  )}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {howToGetStartedInformation.steps[0].paragraph || ""}
              </p>
            </div>

            <div className="bg-[#F8F9FC] rounded-[32px] p-8 flex flex-col h-full">
              <div className="mb-6">
                {howToGetStartedInformation.steps[1].icon &&
                howToGetStartedInformation.steps[1].icon !== "" ? (
                  <Image
                    src={howToGetStartedInformation.steps[1].icon}
                    alt={howToGetStartedInformation.steps[1].title}
                    width={32}
                    height={32}
                    className="w-8 h-8 text-slate-700"
                  />
                ) : (
                  <ArrowDownToLine
                    className="w-8 h-8 text-slate-700"
                    strokeWidth={1.5}
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                {howToGetStartedInformation.steps[1].title || ""}
              </h3>

              <div className="flex-1 flex justify-center items-end mb-8">
                {howToGetStartedInformation.steps[1].image &&
                  howToGetStartedInformation.steps[1].image !== "" && (
                    <Image
                      src={howToGetStartedInformation.steps[1].image}
                      alt={howToGetStartedInformation.steps[1].title}
                      width={239}
                      height={330}
                    />
                  )}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {howToGetStartedInformation.steps[1].paragraph || ""}
              </p>
            </div>

            <div className="bg-[#F8F9FC] rounded-[32px] p-8 flex flex-col h-full">
              <div className="mb-6">
                {howToGetStartedInformation.steps[2].icon &&
                howToGetStartedInformation.steps[2].icon !== "" ? (
                  <Image
                    src={howToGetStartedInformation.steps[2].icon}
                    alt={howToGetStartedInformation.steps[2].title}
                    width={32}
                    height={32}
                    className="w-8 h-8 text-slate-700"
                  />
                ) : (
                  <LayoutGrid
                    className="w-8 h-8 text-slate-700"
                    strokeWidth={1.5}
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                {howToGetStartedInformation.steps[2].title || ""}
              </h3>

              <div className="flex-1 flex justify-center items-end mb-8">
                {howToGetStartedInformation.steps[2].image &&
                  howToGetStartedInformation.steps[2].image !== "" && (
                    <Image
                      src={howToGetStartedInformation.steps[2].image}
                      alt={howToGetStartedInformation.steps[2].title}
                      width={239}
                      height={330}
                    />
                  )}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {howToGetStartedInformation.steps[2].paragraph || ""}
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
