"use client";

import React, { useState } from "react";
import axios from "axios";
import { Check, X } from 'lucide-react';

const StatusIcon = ({ status }: { status: boolean | string }) => {
  if (typeof status === 'string') {
    return <span className="text-xs font-bold text-gray-800">{status}</span>;
  }
  return status ? (
    <Check className="w-5 h-5 text-black mx-auto" strokeWidth={2.5} />
  ) : (
    <X className="w-5 h-5 text-slate-400 mx-auto" strokeWidth={2} />
  );
};

export default function HowWeCompare({
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
  const [howWeCompareInformation, setHowWeCompareInformation] = useState(
    {} as {
      title: string;
      headers: string[];
      features: Array<{
        title: string;
        our: string;
        other: string;
        wifi: string;
        roaming: string;
      }>;
    }
  );

  React.useEffect(() => {
    axios
      .get(
        `${apiUrl}${apiKey}/content/HowWeCompare/${countryOrRegionCode}/${locale}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        setHowWeCompareInformation(response.data);
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
    howWeCompareInformation?.features && <section className="py-16 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          {howWeCompareInformation.title || "How we compare with other eSIM providers"}
        </h2>

        <div className="overflow-x-auto pb-4">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left w-1/4"></th>
                
                <th className="p-6 bg-[#FFF0F0] rounded-t-3xl w-1/5 align-bottom pb-8">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-bold text-gray-900">{howWeCompareInformation.headers[0]}</span>
                  </div>
                </th>

                <th className="p-4 text-sm font-bold text-gray-900 w-1/5 align-middle">{howWeCompareInformation.headers[1]}</th>
                <th className="p-4 text-sm font-bold text-gray-900 w-1/5 align-middle">{howWeCompareInformation.headers[2]}</th>
                <th className="p-4 text-sm font-bold text-gray-900 w-1/5 align-middle">{howWeCompareInformation.headers[3]}</th>
              </tr>
            </thead>
            
            <tbody>
              {howWeCompareInformation.features.map((row, index) => {
                const isLastRow = index === howWeCompareInformation.features.length - 1;
                
                return (
                  <tr key={index} className="">
                    <td className="p-4 text-sm font-bold text-gray-900 border-b border-gray-200">
                      {row.title}
                    </td>

                    <td className={`p-4 text-center bg-[#FFF0F0] border-b border-red-100 ${isLastRow ? 'rounded-b-3xl' : ''}`}>
                      <StatusIcon status={row.our} />
                    </td>

                    <td className="p-4 text-center border-b border-gray-200">
                      <StatusIcon status={row.other} />
                    </td>

                    <td className="p-4 text-center border-b border-gray-200">
                      <StatusIcon status={row.wifi} />
                    </td>

                    <td className="p-4 text-center border-b border-gray-200">
                      <StatusIcon status={row.roaming} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
