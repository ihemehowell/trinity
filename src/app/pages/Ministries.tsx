import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { TrinityButton } from "../components/TrinityButton";

interface Ministry {
  title: string;
  image: string;
  description: string;
  leader: string;
  schedule: string;
}

export function Ministries() {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

  const ministries: Ministry[] = [
    {
      title: "Worship",
      image:
        "https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwYmFuZCUyMG11c2ljaWFucyUyMGNodXJjaCUyMHN0YWdlfGVufDF8fHx8MTc4MDMxMTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Join our vibrant worship team and lead our congregation into God's presence through music, song, and creative expression. We're always looking for passionate musicians and vocalists.",
      leader: "Pastor Michael Obi",
      schedule: "Rehearsals: Wednesdays & Saturdays, 5:00 PM",
    },
    {
      title: "Life Groups",
      image:
        "https://images.unsplash.com/photo-1594100513700-659fa01ce822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGdyb3VwJTIwYmlibGUlMjBzdHVkeSUyMGhvbWV8ZW58MXx8fHwxNzgwMzExNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Experience authentic Christian community in our small groups. Build meaningful relationships, study God's Word together, and support one another in your faith journey.",
      leader: "Pastor Funmi Lawal",
      schedule: "Various locations, Tuesdays 7:00 PM",
    },
    {
      title: "Marketplace",
      image:
        "https://images.unsplash.com/photo-1609234656388-0ff363383899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBncm91cCUyMGRpdmVyc2UlMjBwZW9wbGV8ZW58MXx8fHwxNzgwMzExNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Empowering Christian professionals and entrepreneurs to integrate faith with business. Monthly masterclasses, networking events, and mentorship opportunities.",
      leader: "Pastor Tunde Bakare",
      schedule: "Monthly Meetings: First Saturday, 9:00 AM",
    },
    {
      title: "Kids Ministry",
      image:
        "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1pbmlzdHJ5JTIwa2lkcyUyMGNodXJjaCUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzgwMzExNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "A fun, safe, and engaging environment where children ages 3-12 learn about Jesus through Bible stories, worship, games, and activities designed just for them.",
      leader: "Pastor Joy Nwankwo",
      schedule: "Sundays: 9:00 AM (during main service)",
    },
    {
      title: "Youth Ministry",
      image:
        "https://images.unsplash.com/photo-1550633600-4cfc6929e592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIweW91bmclMjBhZHVsdHMlMjBjaHVyY2h8ZW58MXx8fHwxNzgwMzExNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Connecting teens and young adults (13-25) through dynamic worship, relevant teaching, and community. We create a space where young people can be authentic and grow in faith.",
      leader: "Pastor David Okonkwo",
      schedule: "Fridays: 6:00 PM (Youth Service)",
    },
    {
      title: "Outreach",
      image:
        "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBvdXRyZWFjaCUyMGNvbW11bml0eSUyMHNlcnZpY2UlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc4MDMxMTY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Making a tangible difference in our community through feeding programs, medical outreaches, prison ministry, and evangelism. Join us in sharing God's love through practical service.",
      leader: "Pastor Blessing Uche",
      schedule: "Community Projects: Last Saturday of each month",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609234656388-0ff363383899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBncm91cCUyMGRpdmVyc2UlMjBwZW9wbGV8ZW58MXx8fHwxNzgwMzExNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[var(--navy)] opacity-70" />
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
            Ministries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 mt-4 text-xl"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            Find your place to serve and grow
          </motion.p>
        </div>
      </section>

      {/* Ministry Grid */}
      <section className="py-24 md:py-32 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-80 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedMinistry(ministry)}
              >
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/50 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3
                    className="text-white text-3xl"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                  >
                    {ministry.title}
                  </h3>
                </div>
                <div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--gold)] transition-colors duration-300 pointer-events-none"
                  style={{ borderRadius: "0.5rem" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMinistry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMinistry(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedMinistry.image}
                    alt={selectedMinistry.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedMinistry(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <X size={24} style={{ color: "var(--navy)" }} />
                  </button>
                </div>
                <div className="p-8">
                  <h2
                    className="text-3xl mb-4 text-[var(--navy)]"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                  >
                    {selectedMinistry.title}
                  </h2>
                  <p className="text-[var(--charcoal)] leading-relaxed mb-6">
                    {selectedMinistry.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--gold)] font-medium">Leader:</span>
                      <span className="text-[var(--charcoal)]">{selectedMinistry.leader}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--gold)] font-medium">Schedule:</span>
                      <span className="text-[var(--charcoal)]">{selectedMinistry.schedule}</span>
                    </div>
                  </div>
                  <TrinityButton variant="primary" className="w-full">
                    Join This Ministry
                  </TrinityButton>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
