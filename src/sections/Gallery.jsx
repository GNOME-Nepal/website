import SectionObserver from "@/components/Observer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "GNOME NEPAL" },
  { id: "meetup", label: "CHIYA GHAR MEETUP" },
  { id: "conference", label: "UBUCON 2025" },
  { id: "hackathon", label: "HACKATHON 2025" },
];

const galleryItems = [
  {
    id: 1,
    title: "CHIYA GHAR MEETUP 2024",
    description:
      "Our monthly community meetup at Chiya Ghar, sharing ideas over tea and snacks.",
    card: "https://placehold.co/600x400/667/fff?text=Meetup+1",
    category: "meetup",
    images: [
      "https://placehold.co/600x400/667/fff?text=Meetup+1",
      "https://placehold.co/600x400/667/fff?text=Meetup+2",
      "https://placehold.co/600x400/667/fff?text=Meetup+3",
      "https://placehold.co/600x400/667/fff?text=Meetup+4",
      "https://placehold.co/600x400/667/fff?text=Meetup+5",
    ],
  },
  {
    id: 2,
    title: "UBUCON ASIA 2025",
    description: "Preparing for the upcoming Ubuntu Conference in Kathmandu.",
    card: "https://placehold.co/600x400/446/fff?text=Conference",
    category: "conference",
    images: [
      "https://placehold.co/600x400/446/fff?text=Conference+1",
      "https://placehold.co/600x400/446/fff?text=Conference+2",
      "https://placehold.co/600x400/446/fff?text=Conference+3",
      "https://placehold.co/600x400/446/fff?text=Conference+4",
      "https://placehold.co/600x400/446/fff?text=Conference+5",
    ],
  },
  {
    id: 3,
    title: "OPEN SOURCE HACKATHON",
    description:
      "Students and professionals collaborating on open source projects.",
    card: "https://placehold.co/600x400/664/fff?text=Hackathon",
    category: "hackathon",
    images: [
      "https://placehold.co/600x400/664/fff?text=Hackathon+1",
      "https://placehold.co/600x400/664/fff?text=Hackathon+2",
      "https://placehold.co/600x400/664/fff?text=Hackathon+3",
      "https://placehold.co/600x400/664/fff?text=Hackathon+4",
      "https://placehold.co/600x400/664/fff?text=Hackathon+5",
    ],
  },
  {
    id: 4,
    title: "GNOME CONTRIBUTION WORKSHOP",
    description:
      "Learning how to contribute to GNOME projects and meet maintainers.",
    card: "https://placehold.co/600x400/466/fff?text=Workshop",
    category: "all",
    images: [
      "https://placehold.co/600x400/466/fff?text=Workshop+1",
      "https://placehold.co/600x400/466/fff?text=Workshop+2",
      "https://placehold.co/600x400/466/fff?text=Workshop+3",
      "https://placehold.co/600x400/466/fff?text=Workshop+4",
      "https://placehold.co/600x400/466/fff?text=Workshop+5",
    ],
  },
  {
    id: 5,
    title: "WEEKEND CHIYA MEETUP",
    description: "Casual weekend meetup discussing latest in open source.",
    card: "https://placehold.co/600x400/646/fff?text=Meetup+2",
    category: "meetup",
    images: [
      "https://placehold.co/600x400/646/fff?text=Meetup+2",
      "https://placehold.co/600x400/646/fff?text=Meetup+3",
      "https://placehold.co/600x400/646/fff?text=Meetup+4",
      "https://placehold.co/600x400/646/fff?text=Meetup+5",
      "https://placehold.co/600x400/646/fff?text=Meetup+6",
    ],
  },
];

const GalleryDialog = ({
  openDialog,
  setOpenDialog,
  selectedItem,
  selectedImageIndex,
  setSelectedImageIndex,
}) => {
  if (!selectedItem) return null;

  const navigateImage = (direction) => {
    if (direction === "left") {
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1,
      );
    } else {
      setSelectedImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="max-w-4xl outline-none">
        <DialogHeader>
          <DialogTitle>{selectedItem.title}</DialogTitle>
        </DialogHeader>
        <div className="relative">
          {/* Active Image */}
          <div className="relative aspect-video mb-4 overflow-hidden">
            <img
              key={selectedImageIndex}
              src={selectedItem.images[selectedImageIndex]}
              alt={`${selectedItem.title} - Image ${selectedImageIndex + 1}`}
              className="object-cover w-full h-full rounded-lg animate-fade-in"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 focus:ring-offset-0"
              onClick={() => navigateImage("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 focus:ring-offset-0"
              onClick={() => navigateImage("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Thumbnail Carousel */}
          <div className="flex gap-2 overflow-x-auto p-1 scrollbar-hide">
            {selectedItem.images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative cursor-pointer flex-shrink-0 rounded-lg w-20 h-20 transition-all",
                  index === selectedImageIndex
                    ? "ring-2 ring-primary ring-offset-2"
                    : "opacity-60 hover:opacity-100",
                )}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${selectedItem.title} - Thumbnail ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleScroll = (direction) => {
    const container = document.querySelector(".gallery-scroll");
    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const filteredItems = galleryItems.filter((item) =>
    activeFilter === "all" ? true : item.category === activeFilter,
  );

  const handleOpenGallery = (item) => {
    setSelectedItem(item);
    setSelectedImageIndex(0);
    setOpenDialog(true);
  };

  return (
    <SectionObserver id="gallery">
      <section id="gallery" className="justify-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Gallery</h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="rounded-full capitalize"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Scrollable Gallery Container */}
        <div className="gallery-scroll flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              onClick={() => handleOpenGallery(item)}
              className="min-w-[300px] group cursor-pointer snap-center transition-all duration-500 hover:min-w-[600px] rounded-xl overflow-hidden"
            >
              <div className="flex h-[400px] relative">
                <div className="w-[300px] shrink-0 relative z-10">
                  <img
                    src={item.card}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute left-0 w-[300px] h-full bg-card transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] translate-x-0 group-hover:translate-x-[300px]">
                  <div className="h-full p-6 flex flex-col">
                    <CardTitle className="mb-4">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground flex-grow">
                      {item.description}
                    </p>
                    <Button variant="link" className="mt-4 self-start">
                      View Gallery ({item.images.length} images) →
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleScroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleScroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Gallery Dialog */}
        <GalleryDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          selectedItem={selectedItem}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
        />
      </section>
    </SectionObserver>
  );
};

export default Gallery;
