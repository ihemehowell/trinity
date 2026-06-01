import { motion } from "motion/react";
import { SectionTitle } from "../components/SectionTitle";
import { TrinityCard } from "../components/TrinityCard";

export function About() {
  const values = [
    {
      number: "01",
      title: "Worship",
      description:
        "We cultivate an atmosphere where God's presence is welcomed and His glory is manifest through passionate, spirit-led worship.",
    },
    {
      number: "02",
      title: "Community",
      description:
        "We believe in authentic relationships where believers encourage, support, and grow together in faith and love.",
    },
    {
      number: "03",
      title: "Impact",
      description:
        "We're committed to transforming lives through the Gospel and making a tangible difference in our communities.",
    },
  ];

  const leaders = [
    {
      name: "Pastor Samuel Adeyemi",
      role: "Lead Pastor",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBtYW58ZW58MXx8fHwxNzgwMzExNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Pastor Grace Adeyemi",
      role: "Co-Pastor",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3ODAzMTE2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Pastor David Okonkwo",
      role: "Youth Pastor",
      image:
        "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHBhc3RvciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZm9ybWFsfGVufDF8fHx8MTc4MDMxMTY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Pastor Joy Nwankwo",
      role: "Children's Pastor",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3ODAzMTE2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const timeline = [
    { year: "2010", event: "Trinity House Founded" },
    { year: "2015", event: "New Campus Opened" },
    { year: "2020", event: "Online Ministry Launched" },
    { year: "2026", event: "10,000+ Members Strong" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1702777669080-c98adfc700fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2glMjBpbnRlcmlvciUyMGNvbnRlbXBvcmFyeXxlbnwxfHx8fDE3ODAzMTE2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
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
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 p-8 border-l-4 border-[var(--gold)] bg-white rounded-r-lg">
              <p
                className="text-2xl text-[var(--navy)] italic"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                "From a small gathering of 20 believers to a thriving community of thousands,
                Trinity House has been a testament to God's faithfulness and the power of unified
                vision."
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-[var(--charcoal)] leading-relaxed mb-4">
                  Founded in 2010, Trinity House began with a simple vision: to create a place
                  where people could encounter the living God, experience authentic community, and
                  discover their divine purpose.
                </p>
                <p className="text-[var(--charcoal)] leading-relaxed">
                  What started in a small rented space has grown into a multi-campus ministry
                  reaching thousands across Lagos and beyond through our innovative approach to
                  worship, teaching, and community engagement.
                </p>
              </div>
              <div>
                <p className="text-[var(--charcoal)] leading-relaxed mb-4">
                  Today, Trinity House stands as a beacon of hope and transformation in Victoria
                  Island, known for our contemporary worship, relevant biblical teaching, and
                  commitment to social impact.
                </p>
                <p className="text-[var(--charcoal)] leading-relaxed">
                  We continue to embrace innovation while staying rooted in timeless biblical
                  principles, creating an environment where faith flourishes and lives are
                  transformed.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center flex-1"
                >
                  <div
                    className="text-5xl mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--gold)",
                      fontWeight: 700,
                    }}
                  >
                    {item.year}
                  </div>
                  <div className="h-1 w-16 bg-[var(--gold)] mx-auto mb-3" />
                  <p className="text-[var(--navy)] font-medium">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle subtitle="What Drives Us" title="Our Core Values" centered />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TrinityCard>
                  <div className="p-8">
                    <div
                      className="text-6xl mb-4"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--gold)",
                        fontWeight: 700,
                      }}
                    >
                      {value.number}
                    </div>
                    <h3
                      className="text-2xl mb-3 text-[var(--navy)]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-[var(--muted)] leading-relaxed">{value.description}</p>
                  </div>
                </TrinityCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle subtitle="Meet Our Team" title="Leadership" centered />
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto border-4 border-[var(--gold)]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-xl mb-1 text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {leader.name}
                </h3>
                <p className="text-[var(--gold)] font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <p
            className="text-center text-[var(--muted)] mb-8 uppercase tracking-wider"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600 }}
          >
            Member Of
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-[var(--navy)]">PFN</div>
            <div className="text-2xl font-bold text-[var(--navy)]">CAN</div>
            <div className="text-2xl font-bold text-[var(--navy)]">RCCG</div>
          </div>
        </div>
      </section>
    </div>
  );
}
