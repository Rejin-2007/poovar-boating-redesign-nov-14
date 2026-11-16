import GallerySection from "./GallerySection";
import BoatingVideos from "./BoatingVideos";
import ScrollReveal from "@/components/ScrollReveal";

export default function GalleryAndVideoSection() {
  return (
    <div className="bg-[#F3EEE8]">
      <GallerySection />
      <ScrollReveal variant="fade-right"><BoatingVideos /></ScrollReveal>
    </div>
  );
}
