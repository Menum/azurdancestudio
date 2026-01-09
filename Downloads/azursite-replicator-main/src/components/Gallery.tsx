import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import dance1 from "@/assets/dance-1.jpg?webp";
import dance2 from "@/assets/dance-2.jpg?webp";
import dance3 from "@/assets/dance-3.jpg?webp";
import dance4 from "@/assets/dance-4.jpg?webp";
import carnival1 from "@/assets/carnival-1.jpg?webp";
import carnival2 from "@/assets/carnival-2.jpg?webp";
import carnival3 from "@/assets/carnival-3.jpg?webp";
import heroBg from "@/assets/hero-bg.jpg?webp";
import gallery1 from "@/assets/gallery-1.jpg?webp";
import gallery2 from "@/assets/gallery-2.jpg?webp";
import gallery3 from "@/assets/gallery-3.jpg?webp";
import gallery4 from "@/assets/gallery-4.jpg?webp";
import gallery5 from "@/assets/gallery-5.jpg?webp";
import gallery6 from "@/assets/gallery-6.jpg?webp";
import gallery7 from "@/assets/gallery-7.jpg?webp";
import gallery8 from "@/assets/gallery-8.jpg?webp";
import gallery9 from "@/assets/gallery-9.jpg?webp";
import gallery10 from "@/assets/gallery-10.jpg?webp";

const galleryItems = [
  { src: dance1, category: "Nunți", title: "Spectacol cu evantaie cu pene albe - duo artistic" },
  { src: dance2, category: "Spectacole", title: "Performance solo cu evantaie luminoase" },
  { src: dance3, category: "Evenimente", title: "Spectacol de grup cu evantaie albe" },
  { src: dance4, category: "Corporate", title: "Performance amplă cu echipă de dansatoare" },
  { src: carnival1, category: "Carnival", title: "Spectacol carnival cu costume colorate" },
  { src: carnival2, category: "Private", title: "Dans exotic cu pene colorate" },
  { src: carnival3, category: "Corporate", title: "Performance de grup cu costume aurii și negre" },
  { src: heroBg, category: "Nunți", title: "Spectacol cu evantaie LED aurii" },
  { src: gallery1, category: "Oriental", title: "Dans cu aripi Isis aurii - formație" },
  { src: gallery2, category: "Spectacole", title: "Ansamblu de balet în ținute albe elegante" },
  { src: gallery3, category: "Carnival", title: "Spectacol cabaret cu costume roșii și negre" },
  { src: gallery4, category: "Tradițional", title: "Dans folcloric românesc la nuntă" },
  { src: gallery5, category: "Oriental", title: "Dans oriental cu aripi Isis - trio" },
  { src: gallery6, category: "Oriental", title: "Performance orientală cu aripi aurii" },
  { src: gallery7, category: "Oriental", title: "Dansatoare orientală solo cu aripi" },
  { src: gallery8, category: "Oriental", title: "Spectacol cu aripi Isis și lumini violet" },
  { src: gallery9, category: "Carnival", title: "Show cabaret cu costume de pene" },
  { src: gallery10, category: "Oriental", title: "Dans oriental de grup la eveniment" },
];

const filters = ["Toate", "Nunți", "Corporate", "Spectacole", "Carnival", "Oriental", "Tradițional"];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Toate");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeFilter === "Toate" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="galerie" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs tracking-widest mb-4">GALERIE FOTO</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Momente Memorabile
          </h2>
          <div className="line-gold mx-auto" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs tracking-widest transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filteredItems.map((item, index) => (
          <motion.div
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-primary text-xs tracking-widest mb-1">{item.category}</span>
                <p className="text-foreground text-sm">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};
