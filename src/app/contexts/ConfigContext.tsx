"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type ConfigContextType = {
  countryOrRegionCode: string;
  setCountryOrRegionCode: (countryOrRegionCode: string) => void;
  locale: string;
  setLocale: (locale: string) => void;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  let browserLocale = "en-US";
  let regionPart = "US";

  if (typeof window !== "undefined" && navigator.language) {
    browserLocale = navigator.language;

    if (browserLocale.split("-")[1]) {
      regionPart = browserLocale.split("-")[1];
    }
  }

  const [countryOrRegionCode, setCountryOrRegionCode] = useState(regionPart.toUpperCase());
  const [locale, setLocale] = useState(browserLocale);

  return (
    <ConfigContext.Provider
      value={{ countryOrRegionCode, setCountryOrRegionCode, locale, setLocale }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};
