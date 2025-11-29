"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import frame860 from ".././images/frame-860.png";

const FeatureCard = ({
  title,
  paragraph,
  icon,
}: {
  title: string;
  paragraph: string;
  icon: string | null;
}) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
    <div className="mb-4">
      {icon && (
        <Image
          src={icon}
          alt="title"
          className="object-contain drop-shadow-2xl"
          width={48}
          height={48}
        />
      )}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{paragraph}</p>
  </div>
);

export default function FeaturesSection({
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
  const [featuresInformation, setFeaturesInformation] = useState(
    {} as {
      title: string;
      image: string;
      features: Array<{ paragraph: string; title: string; icon: string }>;
    }
  );
  const [mainImageError, setMainImageError] = useState(false);
  const [leftFeatures, setLeftFeatures] = useState(
    [] as Array<{ paragraph: string; title: string; icon: string }>
  );
  const [rightFeatures, setRightFeatures] = useState(
    [] as Array<{ paragraph: string; title: string; icon: string }>
  );

  React.useEffect(() => {
    axios
      .get(
        `${apiUrl}${apiKey}/content/FeaturesSection/${countryOrRegionCode}/${locale}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        leftFeatures.length = 0;
        rightFeatures.length = 0;
        setFeaturesInformation(response.data);
        for (let i = 0; i < 3; i++) {
          leftFeatures.push(response.data.features[i]);
        }
        setLeftFeatures(leftFeatures);
        for (let i = 3; i < 6; i++) {
          rightFeatures.push(response.data.features[i]);
        }
        setRightFeatures(rightFeatures);
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {featuresInformation.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="relative flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-50 rounded-full blur-3xl -z-10"></div>

            <div className="relative w-full max-w-[350px] aspect-[9/16]">
              <Image
                src={mainImageError ? frame860 : featuresInformation.image}
                alt="App Interface with Panda"
                width={400}
                height={700}
                className="object-contain drop-shadow-2xl"
                priority
                onError={() => setMainImageError(true)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 order-3 lg:order-3">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
