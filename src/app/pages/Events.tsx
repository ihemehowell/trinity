import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { TrinityCard } from "../components/TrinityCard";
import { TrinityButton } from "../components/TrinityButton";

type FilterType = "all" | "week" | "month" | "worship" | "training" | "outreach";

export function Events() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "Worship", value: "worship" },
    { label: "Training", value: "training" },
    { label: "Outreach", value: "outreach" },
  ];

  const events = [
    {
      title: "Worship Night",
      date: "June 7, 2026",
      day: "7",
      month: "JUN",
      time: "6:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      category: "worship",
      description: "An evening of powerful worship and prayer",
    },
    {
      title: "Marketplace Leaders Conference",
      date: "June 14, 2026",
      day: "14",
      month: "JUN",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Hall",
      category: "training",
      description: "Equipping Christian professionals for kingdom impact",
    },
    {
      title: "Youth Rally",
      date: "June 21, 2026",
      day: "21",
      month: "JUN",
      time: "5:00 PM - 8:00 PM",
      location: "Youth Centre",
      category: "worship",
      description: "High-energy worship and relevant teaching for young people",
    },
    {
      title: "Community Outreach",
      date: "June 28, 2026",
      day: "28",
      month: "JUN",
      time: "10:00 AM - 2:00 PM",
      location: "Various Locations",
      category: "outreach",
      description: "Serving our community with food, medical care, and the Gospel",
    },
    {
      title: "Leadership Training",
      date: "July 5, 2026",
      day: "5",
      month: "JUL",
      time: "2:00 PM - 5:00 PM",
      location: "Training Room",
      category: "training",
      description: "Developing leaders who will impact their spheres of influence",
    },
  ];

  const calendarDates = Array.from({ length: 30 }, (_, i) => i + 1);
  const eventDates = [7, 14, 21, 28];

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
            Events
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

      {/* Events List + Calendar */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            {/* Event List */}
            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <TrinityCard>
                    <div className="p-6 flex flex-col md:flex-row gap-6">
                      {/* Date Block */}
                      <div
                        className="flex-shrink-0 w-20 h-20 rounded-lg flex flex-col items-center justify-center text-center"
                        style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
                      >
                        <div
                          className="text-2xl"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                        >
                          {event.day}
                        </div>
                        <div
                          className="text-xs uppercase tracking-wider"
                          style={{ fontWeight: 600 }}
                        >
                          {event.month}
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <h3
                          className="text-2xl mb-2 text-[var(--navy)]"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                        >
                          {event.title}
                        </h3>
                        <p className="text-[var(--muted)] mb-4">{event.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-[var(--charcoal)]">
                            <Clock size={16} className="text-[var(--gold)]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[var(--charcoal)]">
                            <MapPin size={16} className="text-[var(--gold)]" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Register Button */}
                      <div className="flex items-center">
                        <TrinityButton variant="ghost" size="sm">
                          Register
                        </TrinityButton>
                      </div>
                    </div>
                  </TrinityCard>
                </motion.div>
              ))}
            </div>

            {/* Calendar */}
            <div className="lg:sticky lg:top-24 h-fit">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <TrinityCard hover={false}>
                  <div className="p-6 bg-[var(--navy)] text-white rounded-t-lg">
                    <h3
                      className="text-center text-xl"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      June 2026
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-7 gap-2 mb-2">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                        <div
                          key={i}
                          className="text-center text-xs font-medium text-[var(--muted)]"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDates.map((date) => (
                        <div
                          key={date}
                          className={`aspect-square rounded-lg flex items-center justify-center text-sm cursor-pointer transition-colors ${
                            eventDates.includes(date)
                              ? "bg-[var(--gold)] text-[var(--navy)] font-bold"
                              : "hover:bg-[var(--cream)]"
                          }`}
                          style={{
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>
                </TrinityCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event Banner */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1478147427282-58a87a120781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY29uY2VydCUyMGNyb3dkJTIwaGFuZHMlMjByYWlzZWQlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc4MDMxMTY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[var(--navy)] opacity-80" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <p
            className="text-[var(--gold)] mb-4 uppercase tracking-wider"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Featured Event
          </p>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Annual Conference 2026
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            Join us for three days of transformative teaching, powerful worship, and life-changing encounters
          </p>
          <TrinityButton variant="primary" size="lg">
            Learn More
          </TrinityButton>
        </div>
      </section>
    </div>
  );
}
