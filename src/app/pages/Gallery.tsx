import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry from "react-responsive-masonry";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type FilterType = "all" | "worship" | "events" | "community" | "youth";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Worship", value: "worship" },
    { label: "Events", value: "events" },
    { label: "Community", value: "community" },
    { label: "Youth", value: "youth" },
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1478147427282-58a87a120781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY29uY2VydCUyMGNyb3dkJTIwaGFuZHMlMjByYWlzZWQlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc4MDMxMTY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "worship",
      span: 2,
    },
    {
      url: "https://images.unsplash.com/photo-1637615739656-ca10c4285c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwY29uZ3JlZ2F0aW9uJTIwd29yc2hpcCUyMHNlcnZpY2V8ZW58MXx8fHwxNzgwMzExNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "worship",
      span: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1609234656388-0ff363383899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBncm91cCUyMGRpdmVyc2UlMjBwZW9wbGV8ZW58MXx8fHwxNzgwMzExNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "community",
      span: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1550633600-4cfc6929e592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIweW91bmclMjBhZHVsdHMlMjBjaHVyY2h8ZW58MXx8fHwxNzgwMzExNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "youth",
      span: 1,
    },
    {
      url: "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1pbmlzdHJ5JTIwa2lkcyUyMGNodXJjaCUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzgwMzExNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "community",
      span: 2,
    },
    {
      url: "https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwYmFuZCUyMG11c2ljaWFucyUyMGNodXJjaCUyMHN0YWdlfGVufDF8fHx8MTc4MDMxMTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "worship",
      span: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBvdXRyZWFjaCUyMGNvbW11bml0eSUyMHNlcnZpY2UlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc4MDMxMTY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "events",
      span: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1594100513700-659fa01ce822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGdyb3VwJTIwYmlibGUlMjBzdHVkeSUyMGhvbWV8ZW58MXx8fHwxNzgwMzExNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "community",
      span: 1,
    },
    {
      url: "https://images.unsplash.com/photo-1627931552064-36e7c340c02e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBwYXN0b3IlMjBwcmVhY2hpbmclMjBzZXJtb24lMjBzdGFnZXxlbnwxfHx8fDE3ODAzMTE2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "events",
      span: 2,
    },
  ];

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[var(--navy)]">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
            }}
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-[var(--divider)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className="px-6 py-2 rounded-full border transition-all duration-200"
                style={{
                  backgroundColor:
                    activeFilter === filter.value ? "var(--gold)" : "transparent",
                  borderColor: activeFilter === filter.value ? "var(--gold)" : "var(--divider)",
                  color: activeFilter === filter.value ? "var(--navy)" : "var(--muted)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <Masonry columnsCount={3} gutter="1.5rem">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group cursor-pointer rounded-lg overflow-hidden"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ color: "var(--navy)" }}
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X size={28} className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight size={28} className="text-white" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={images[selectedImage].url}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
