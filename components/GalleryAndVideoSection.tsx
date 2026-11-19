import GallerySection from "./GallerySection";
import BoatingVideos from "./BoatingVideos";
import ScrollReveal from "@/components/ScrollReveal";

export default function GalleryAndVideoSection() {
  return (
    <div className="bg-[#790b13]">
      <GallerySection />
      <ScrollReveal variant="fade-right"><BoatingVideos /></ScrollReveal>
    </div>
  );
}
