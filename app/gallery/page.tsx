import GalleryAndVideoSection from "@/components/GalleryAndVideoSection";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Poovar Boating Gallery | Photos & Videos",
  description: "Browse photographs and videos of boats, mangrove channels and shoreline views along Poovar’s backwaters.",
  path: "/gallery",
  image: "/gallery/1000142582.webp",
  imageAlt: "Boat trip through Poovar’s backwaters",
})

export default function Gallery() {
  return (
    <>
      <section aria-label="Poovar boating gallery">
        <h1 className="sr-only">Poovar Boating Gallery</h1>
        <GalleryAndVideoSection />
      </section>
    </>
  );
}
