import { Hero } from "@/components/Hero";
import { EvidenceGallery } from "@/components/EvidenceGallery";
import { ViolationBreakdown } from "@/components/ViolationBreakdown";
import { DownloadSection } from "@/components/DownloadSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ViolationBreakdown />
      <EvidenceGallery />
      <DownloadSection />
    </div>
  );
}
