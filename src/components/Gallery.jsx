import { FadeInContainer } from "./FadeInContainer";

const media = [
  {
    src: "https://i.pinimg.com/736x/69/21/53/692153373dbfa9ba72d5df49cffce338.jpg",
    alt: "Bridal Makeup",
  },
  {
    src: "https://i.pinimg.com/736x/ca/27/6a/ca276a8984f445731beef2a57a59970c.jpg",
    alt: "Glam Look",
  },
  {
    src: "https://i.pinimg.com/originals/e0/ec/7f/e0ec7fd0dc651e0c4701a619d9827ca8.jpg",
    alt: "Wedding Look",
  },
  {
    src: "https://i.pinimg.com/736x/ca/27/6a/ca276a8984f445731beef2a57a59970c.jpg",
    alt: "Glam Look",
  },
  {
    src: "https://i.pinimg.com/originals/e0/ec/7f/e0ec7fd0dc651e0c4701a619d9827ca8.jpg",
    alt: "Wedding Look",
  },
];

export default function Gallery() {
  return (
    <>
    <FadeInContainer>
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {media.map((item, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-[390px] h-[480px] object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
    </FadeInContainer>
    </>
  );
}
