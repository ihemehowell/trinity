import { useState } from "react";
import { motion } from "motion/react";
import { Play, ChevronRight } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { TrinityCard } from "../components/TrinityCard";
import { TrinityButton } from "../components/TrinityButton";

type TabType = "sermons" | "podcasts" | "devotionals" | "live";

export function Media() {
  const [activeTab, setActiveTab] = useState<TabType>("sermons");

  const tabs: { label: string; value: TabType }[] = [
    { label: "Sermons", value: "sermons" },
    { label: "Podcasts", value: "podcasts" },
    { label: "Devotionals", value: "devotionals" },
    { label: "Live Stream", value: "live" },
  ];

  const sermons = [
    {
      title: "Walking in Divine Purpose",
      speaker: "Pastor Samuel Adeyemi",
      date: "May 26, 2026",
      series: "Purpose Driven",
      image:
        "https://images.unsplash.com/photo-1627931552064-36e7c340c02e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBwYXN0b3IlMjBwcmVhY2hpbmclMjBzZXJtb24lMjBzdGFnZXxlbnwxfHx8fDE3ODAzMTE2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Faith That Moves Mountains",
      speaker: "Pastor Grace Adeyemi",
      date: "May 19, 2026",
      series: "Living Faith",
      image:
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY29uY2VydCUyMGNyb3dkJTIwaGFuZHMlMjByYWlzZWQlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc4MDMxMTY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "The Power of Prayer",
      speaker: "Pastor Samuel Adeyemi",
      date: "May 12, 2026",
      series: "Prayer Warriors",
      image:
        "https://images.unsplash.com/photo-1520187044487-b2efb58f0cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBoYW5kcyUyMHRvZ2V0aGVyJTIwc3Bpcml0dWFsfGVufDF8fHx8MTc4MDMxMTY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Building Strong Relationships",
      speaker: "Pastor David Okonkwo",
      date: "May 5, 2026",
      series: "Connected",
      image:
        "https://images.unsplash.com/photo-1609234656388-0ff363383899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBncm91cCUyMGRpdmVyc2UlMjBwZW9wbGV8ZW58MXx8fHwxNzgwMzExNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Financial Stewardship",
      speaker: "Pastor Tunde Bakare",
      date: "Apr 28, 2026",
      series: "Kingdom Finance",
      image:
        "https://images.unsplash.com/photo-1637615739656-ca10c4285c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwY29uZ3JlZ2F0aW9uJTIwd29yc2hpcCUyMHNlcnZpY2V8ZW58MXx8fHwxNzgwMzExNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Overcoming Fear",
      speaker: "Pastor Grace Adeyemi",
      date: "Apr 21, 2026",
      series: "Fearless",
      image:
        "https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwYmFuZCUyMG11c2ljaWFucyUyMGNodXJjaCUyMHN0YWdlfGVufDF8fHx8MTc4MDMxMTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const podcasts = [
    { title: "Faith & Finance", episode: "EP 24: Building Wealth God's Way" },
    { title: "Youth Talk", episode: "EP 18: Navigating Social Media" },
    { title: "Marriage Matters", episode: "EP 31: Communication Secrets" },
  ];

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
            Media
          </motion.h1>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b border-[var(--divider)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className="relative pb-2 transition-colors duration-200"
                style={{
                  color: activeTab === tab.value ? "var(--navy)" : "var(--muted)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {tab.label}
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === "sermons" && (
        <>
          {/* Featured Sermon */}
          <section className="py-16 bg-[var(--cream)]">
            <div className="max-w-[1280px] mx-auto px-6">
              <SectionTitle subtitle="Latest Message" title="Featured Sermon" centered />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12 max-w-5xl mx-auto"
              >
                <TrinityCard>
                  <div className="grid md:grid-cols-[1.5fr_1fr] gap-0">
                    <div className="relative group cursor-pointer">
                      <img
                        src={sermons[0].image}
                        alt={sermons[0].title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[var(--gold)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play
                            size={32}
                            fill="var(--navy)"
                            style={{ color: "var(--navy)" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs mb-4 self-start"
                        style={{
                          backgroundColor: "var(--gold-light)",
                          color: "var(--navy)",
                          fontWeight: 600,
                        }}
                      >
                        {sermons[0].series}
                      </span>
                      <h3
                        className="text-2xl mb-3 text-[var(--navy)]"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                      >
                        {sermons[0].title}
                      </h3>
                      <p className="text-[var(--muted)] mb-2">{sermons[0].speaker}</p>
                      <p className="text-[var(--muted)] text-sm mb-6">{sermons[0].date}</p>
                      <TrinityButton variant="primary">Watch Now</TrinityButton>
                    </div>
                  </div>
                </TrinityCard>
              </motion.div>
            </div>
          </section>

          {/* Sermon Grid */}
          <section className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {sermons.slice(1).map((sermon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TrinityCard>
                      <div className="relative group cursor-pointer">
                        <img
                          src={sermon.image}
                          alt={sermon.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="w-14 h-14 rounded-full bg-[var(--gold)] flex items-center justify-center">
                            <Play size={24} fill="var(--navy)" style={{ color: "var(--navy)" }} />
                          </div>
                        </div>
                        <span
                          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: "var(--gold)",
                            color: "var(--navy)",
                            fontWeight: 600,
                          }}
                        >
                          {sermon.series}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3
                          className="text-xl mb-2 text-[var(--navy)]"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                        >
                          {sermon.title}
                        </h3>
                        <p className="text-[var(--muted)] text-sm mb-1">{sermon.speaker}</p>
                        <p className="text-[var(--muted)] text-xs">{sermon.date}</p>
                      </div>
                    </TrinityCard>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <TrinityButton variant="ghost">Load More</TrinityButton>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === "podcasts" && (
        <section className="py-24 bg-[var(--cream)]">
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionTitle subtitle="Listen & Learn" title="Podcasts" centered />
            <div className="mt-12 space-y-6 max-w-3xl mx-auto">
              {podcasts.map((podcast, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TrinityCard>
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <h3
                          className="text-xl mb-1 text-[var(--navy)]"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                        >
                          {podcast.title}
                        </h3>
                        <p className="text-[var(--muted)]">{podcast.episode}</p>
                      </div>
                      <button className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center hover:scale-110 transition-transform">
                        <Play size={20} fill="var(--navy)" style={{ color: "var(--navy)" }} />
                      </button>
                    </div>
                  </TrinityCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "live" && (
        <section className="py-24 bg-[var(--cream)]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
                >
                  <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
                  <span className="font-bold uppercase text-sm">Live Stream Available</span>
                </span>
              </div>
              <h2
                className="text-[var(--navy)] mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                Watch Live Services
              </h2>
              <p className="text-[var(--muted)] mb-8 text-lg">
                Join us online every Sunday at 9:00 AM, Wednesday at 6:00 PM, and Friday at 6:00 PM
              </p>
              <div className="aspect-video bg-[var(--navy)] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--gold)] flex items-center justify-center mx-auto mb-4">
                    <Play size={32} fill="var(--navy)" style={{ color: "var(--navy)" }} />
                  </div>
                  <p>Service starts soon</p>
                </div>
              </div>
              <TrinityButton variant="primary" size="lg">
                Join Live Stream
              </TrinityButton>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
