import { HeroSection } from "@/components/home/hero";
import { SocialProofBar } from "@/components/home/social-proof";
import { FeaturesOverview } from "@/components/home/features-overview";
import { HowItWorks } from "@/components/home/how-it-works";
import { DownloadCTA } from "@/components/download-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <FeaturesOverview />
      <HowItWorks />
      <DownloadCTA />
    </>
  );
}
