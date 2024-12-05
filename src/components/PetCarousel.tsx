import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PetCarousel = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      alt: "Gato laranja e branco deitado",
    },
    {
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      alt: "Gatinho cinza",
    },
    {
      src: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      alt: "Cachorro sendo examinado",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};