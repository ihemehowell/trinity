import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronDown, Calendar, Play, Users, Heart, Book, Globe } from "lucide-react";
import { TrinityButton } from "../components/TrinityButton";
import { TrinityCard } from "../components/TrinityCard";
import { SectionTitle } from "../components/SectionTitle";

export function Home() {
  const upcomingEvents = [
    {
      title: "Worship Night",
      date: "June 7, 2026",
      time: "6:00 PM",
      location: "Main Sanctuary",
    },
    {
      title: "Marketplace Leaders Conference",
      date: "June 14, 2026",
      time: "9:00 AM",
      location: "Conference Hall",
    },
    {
      title: "Youth Rally",
      date: "June 21, 2026",
      time: "5:00 PM",
      location: "Youth Centre",
    },
  ];

  const ministries = [
    { icon: Heart, label: "Worship", color: "var(--gold)" },
    { icon: Users, label: "Life Groups", color: "var(--gold)" },
    { icon: Globe, label: "Outreach", color: "var(--gold)" },
    { icon: Book, label: "Bible Study", color: "var(--gold)" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1478147427282-58a87a120781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwY29uY2VydCUyMGNyb3dkJTIwaGFuZHMlMjByYWlzZWQlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc4MDMxMTY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[var(--navy)] opacity-70" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            A House of Prayer
            <br />
            for All Nations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "1.5rem",
              fontStyle: "italic",
            }}
          >
            Experience transformative worship and authentic community in the heart of Lagos
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/visit">
              <TrinityButton variant="primary" size="lg">
                Plan Your Visit
              </TrinityButton>
            </Link>
            <Link to="/media">
              <TrinityButton variant="ghost" size="lg">
                Watch Live
              </TrinityButton>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={40} className="text-white/60" />
        </motion.div>
      </section>

      {/* Service Times Strip */}
      <section className="bg-[var(--navy)] text-white py-6">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p
                className="text-[var(--gold)] mb-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem" }}
              >
                SUNDAY SERVICE
              </p>
              <p style={{ fontFamily: "var(--font-subheading)", fontSize: "1.25rem" }}>9:00 AM</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <p
                className="text-[var(--gold)] mb-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem" }}
              >
                MIDWEEK SERVICE
              </p>
              <p style={{ fontFamily: "var(--font-subheading)", fontSize: "1.25rem" }}>
                Wednesday 6:00 PM
              </p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <p
                className="text-[var(--gold)] mb-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem" }}
              >
                PRAYER NIGHT
              </p>
              <p style={{ fontFamily: "var(--font-subheading)", fontSize: "1.25rem" }}>
                Friday 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 md:py-32 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1637615739656-ca10c4285c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwY29uZ3JlZ2F0aW9uJTIwd29yc2hpcCUyMHNlcnZpY2V8ZW58MXx8fHwxNzgwMzExNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Trinity House Worship"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-0 md:pl-8"
            >
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[var(--gold)]" />
              <SectionTitle subtitle="Welcome Home" title="Discover Your Purpose" />
              <p className="mt-6 text-[var(--charcoal)] leading-relaxed text-lg">
                Trinity House is more than a church—it's a vibrant community of believers committed
                to encountering God's presence, developing authentic relationships, and impacting
                our world with the Gospel.
              </p>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                Whether you're exploring faith for the first time or seeking a place to grow
                deeper in your walk with Christ, you'll find a home here. Join us as we worship,
                learn, and serve together.
              </p>
              <Link to="/about" className="inline-block mt-8">
                <TrinityButton variant="secondary">Learn Our Story</TrinityButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <SectionTitle subtitle="What's Happening" title="Upcoming Events" />
            <Link to="/events" className="mt-6 md:mt-0">
              <TrinityButton variant="ghost">View All Events</TrinityButton>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TrinityCard>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--gold-light)" }}
                      >
                        <Calendar size={24} style={{ color: "var(--navy)" }} />
                      </div>
                      <div>
                        <p className="text-sm text-[var(--muted)]">{event.date}</p>
                        <p className="text-sm font-medium text-[var(--navy)]">{event.time}</p>
                      </div>
                    </div>
                    <h3
                      className="text-xl mb-2 text-[var(--navy)]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm">{event.location}</p>
                    <Link
                      to="/events"
                      className="inline-block mt-4 text-[var(--gold)] font-medium hover:underline"
                    >
                      Register →
                    </Link>
                  </div>
                </TrinityCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      <section className="py-24 md:py-32 bg-[var(--navy)] text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle
            subtitle="Latest Message"
            title="This Week's Sermon"
            dark
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="relative rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1627931552064-36e7c340c02e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBwYXN0b3IlMjBwcmVhY2hpbmclMjBzZXJtb24lMjBzdGFnZXxlbnwxfHx8fDE3ODAzMTE2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Latest Sermon"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[var(--gold)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} fill="var(--navy)" style={{ color: "var(--navy)" }} />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Walking in Divine Purpose
              </h3>
              <p className="text-white/70">Pastor Samuel Adeyemi • May 26, 2026</p>
              <Link to="/media" className="inline-block mt-4">
                <TrinityButton variant="primary">Watch Now</TrinityButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-24 md:py-32 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle
            subtitle="Get Involved"
            title="Our Ministries"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center border-2"
                  style={{ borderColor: ministry.color }}
                >
                  <ministry.icon size={36} style={{ color: ministry.color }} />
                </div>
                <h4
                  className="text-lg text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {ministry.label}
                </h4>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/ministries">
              <TrinityButton variant="secondary">Explore All Ministries</TrinityButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Give Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <h2
            className="text-[var(--navy)] mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Give Generously
          </h2>
          <p
            className="text-[var(--navy)]/80 mb-8 max-w-2xl mx-auto italic"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "1.25rem",
            }}
          >
            "Each of you should give what you have decided in your heart to give, not reluctantly
            or under compulsion, for God loves a cheerful giver."
          </p>
          <Link to="/give">
            <TrinityButton variant="secondary" size="lg">
              Give Now
            </TrinityButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
