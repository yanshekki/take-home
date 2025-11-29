"use client";
import React, { useState } from "react";
import { useConfig } from "../contexts/ConfigContext";
import {
  Search,
  Star,
  ShieldCheck,
  CreditCard,
  Headphones,
} from "lucide-react";
import Image from "next/image";
import axios from "axios";
import homeImage from ".././images/home.png";
import currencyDollarCircle from ".././images/currency-dollar-circle.png";
import translate from ".././images/translate-01.png";
import line from ".././images/line-1.png";
import calendar from ".././images/calendar.png";
import icon from ".././images/icon.png";

const LANGUAGE_OPTIONS = [
  { label: "English (US)", locale: "en-US", region: "US" },
  { label: "French", locale: "fr-FR", region: "FR" },
  { label: "繁體中文", locale: "zh-TW", region: "TW" },
  { label: "日本語", locale: "ja-JP", region: "JP" },
];

const packages = [
  { id: 1, data: "5 GB", duration: "14 Days", price: 29.99, bestValue: false },
  { id: 2, data: "10 GB", duration: "21 Days", price: 29.99, bestValue: true },
  { id: 3, data: "15 GB", duration: "21 Days", price: 29.99, bestValue: false },
  { id: 4, data: "25 GB", duration: "30 Days", price: 29.99, bestValue: false },
  { id: 5, data: "30 GB", duration: "30 Days", price: 29.99, bestValue: false },
  { id: 6, data: "30 GB", duration: "30 Days", price: 29.99, bestValue: false },
];

export default function Navbar({
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(2);
  const [packageInformation, setPackageInformation] = useState({});
  const { setCountryOrRegionCode, setLocale } = useConfig();

  const handleSelect = (option: (typeof LANGUAGE_OPTIONS)[0]) => {
    setLocale(option.locale);
    setCountryOrRegionCode(option.region);
    setIsOpen(false);
  };

  React.useEffect(() => {
    axios
      .get(
        `${apiUrl}${apiKey}/content/ProductPageHeroSection/${countryOrRegionCode}/${locale}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        setPackageInformation(response.data);
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
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
            style={{ width: 204 }}
          >
            <Image
              src={homeImage}
              alt="BeachSIM"
              width={204}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Where to next?"
              className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-[#475467]"
            />
            <Search className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-black">
                Explore
              </a>
              <a href="#" className="hover:text-black">
                Help
              </a>
            </nav>

            <div className="flex items-center gap-4 text-gray-600">
              <div className="relative inline-block text-left">
                <button
                  className="flex items-center justify-center hover:text-black focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Image src={translate} alt="translate" className="w-5 h-5" />
                </button>

                {isOpen && (
                  <div
                    className="fixed inset-0 z-10 cursor-default"
                    onClick={() => setIsOpen(false)}
                  />
                )}

                {isOpen && (
                  <div className="absolute right-0 z-20 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in zoom-in-95 duration-100">
                    <div className="py-1">
                      {LANGUAGE_OPTIONS.map((option) => (
                        <button
                          key={option.locale}
                          onClick={() => handleSelect(option)}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Image src={line} alt="line" className="" />
              <button className="hover:text-black">
                <Image
                  src={currencyDollarCircle}
                  alt="currency-dollar-circle"
                  className="w-5 h-5"
                />
              </button>
            </div>

            <button className="bg-[#C8102E] hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-sm">
              Sign in | Sign up
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-sm bg-gray-100">
              <Image
                src="/api/placeholder/600/750"
                alt="Traveler with USA Flag"
                width={600}
                height={750}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src="/api/placeholder/100/100"
                  alt="USA Flag"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-black cursor-pointer">
                <Image
                  src="/api/placeholder/150/150"
                  alt="Thumb 1"
                  width={150}
                  height={150}
                  className="object-cover h-full w-full"
                />
              </div>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden bg-blue-400 cursor-pointer hover:opacity-90 transition-opacity"
                ></div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              eSIM for the Saint Vincent & Grenadines
            </h1>
            <div className="flex items-center gap-2 mb-8">
              <span className="font-bold text-sm">Excellent</span>
              <div className="flex bg-green-500 p-1 rounded-sm gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-white fill-white" />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                Based on <strong>1,764 Reviews</strong> on{" "}
                <span className="text-green-600 font-bold">Trustpilot</span>
              </span>
            </div>
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4">
                Choose your USA eSIM package
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all
                      ${
                        selectedPackage === pkg.id
                          ? "border-blue-500 bg-blue-50/30"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                  >
                    {pkg.bestValue && (
                      <div className="absolute -top-3 right-0 bg-[#00AEEF] text-white text-xs font-bold px-2 py-1 rounded-l-md rounded-tr-md shadow-sm">
                        Best value
                      </div>
                    )}

                    <div className="flex flex-col h-full justify-between">
                      <div className="flex items-center gap-2 mb-2 text-gray-700">
                        <span className="text-sm font-medium">
                          <Image
                            src={icon}
                            alt="icon"
                            style={{
                              width: 20,
                            }}
                          />
                        </span>
                        <span className="font-bold text-lg">{pkg.data}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <span>
                          <Image
                            src={calendar}
                            alt="calendar"
                            style={{
                              width: 20,
                            }}
                          />
                        </span>
                        <span>{pkg.duration}</span>

                        <div className="text-right font-bold text-gray-900">
                          $ {pkg.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-lg">
                <ShieldCheck className="w-8 h-8 p-1 text-gray-600 bg-white border rounded" />
                <span className="text-sm font-medium text-gray-600">
                  Safe & Secure Checkout
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg">
                <CreditCard className="w-8 h-8 p-1 text-gray-600 bg-white border rounded" />
                <span className="text-sm font-medium text-gray-600">
                  Quick & Easy Recharge
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg">
                <Headphones className="w-8 h-8 p-1 text-gray-600 bg-white border rounded" />
                <span className="text-sm font-medium text-gray-600">
                  24/7 Customer Support
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg">
                <button className="flex items-center gap-2 border border-gray-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Check Device Compatibility
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-900 font-semibold border border-gray-300 whitespace-nowrap">
                  Description
                </button>
                <button className="px-6 py-2 rounded-full bg-white text-gray-500 font-medium border border-gray-200 hover:bg-gray-50 whitespace-nowrap">
                  Networks
                </button>
                <button className="px-6 py-2 rounded-full bg-white text-gray-500 font-medium border border-gray-200 hover:bg-gray-50 whitespace-nowrap">
                  Returns & money back guarantee
                </button>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Uses [Network1] and [Network2] in [country]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Reliable nationwide coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>4G/5G data speeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Hotspot / tethering allowed</span>
                </li>
              </ul>

              <button className="mt-4 text-[#C8102E] font-bold hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
