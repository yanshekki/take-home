'use client'
import { useConfig } from "./contexts/ConfigContext";
import Navbar from "./components/navbar";
import BenefitsSection from "./components/BenefitsSection";
import ESimFeaturesSection from "./components/ESimFeaturesSection";
import PromoBanner from "./components/PromoBanner";
import HowWeCompare from "./components/HowWeCompare";
import FeaturesSection from "./components/FeaturesSection";
import HowToGetStarted from "./components/HowToGetStarted";
import RegionalPackagePromo from "./components/RegionalPackagePromo";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import TryApp from "./components/TryApp";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";
  const { countryOrRegionCode, locale } = useConfig();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="min-h-screen w-full">
        <div>
          <Navbar
            apiUrl={apiUrl}
            apiKey={apiKey}
            countryOrRegionCode={countryOrRegionCode}
            locale={locale}
          />
        </div>
        <div>
          <BenefitsSection
            apiUrl={apiUrl}
            apiKey={apiKey}
            countryOrRegionCode={countryOrRegionCode}
            locale={locale}
          />
        </div>
        <div>
          <ESimFeaturesSection />
        </div>
        <div>
          <PromoBanner />
        </div>
        <div>
          <HowWeCompare
            apiUrl={apiUrl}
            apiKey={apiKey}
            countryOrRegionCode={countryOrRegionCode}
            locale={locale}
          />
        </div>
        <div>
          <FeaturesSection
            apiUrl={apiUrl}
            apiKey={apiKey}
            countryOrRegionCode={countryOrRegionCode}
            locale={locale}
          />
        </div>
        <div>
          <HowToGetStarted
            apiUrl={apiUrl}
            apiKey={apiKey}
            countryOrRegionCode={countryOrRegionCode}
            locale={locale}
          />
        </div>
        <div>
          <RegionalPackagePromo />
        </div>
        <div>
          <FAQ />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <BlogSection />
        </div>
        <div>
          <TryApp />
        </div>
      </main>
    </div>
  );
}
