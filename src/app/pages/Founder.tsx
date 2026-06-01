import { motion } from "motion/react";
import { TrinityButton } from "../components/TrinityButton";
import { Link } from "react-router";

export function Founder() {
  const stats = [
    { number: "16+", label: "Years in Ministry" },
    { number: "10K+", label: "Lives Transformed" },
    { number: "50+", label: "Churches Planted" },
  ];

  return (
    <div className="min-h-screen">
      {/* Split Hero */}
      <section className="min-h-[80vh] flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[50vh] md:h-auto"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHBhc3RvciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwZm9ybWFsfGVufDF8fHx8MTc4MDMxMTY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 bg-[var(--navy)] flex items-center justify-center p-12 md:p-20"
        >
          <div className="max-w-xl">
            <p
              className="text-[var(--gold)] mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600 }}
            >
              Lead Pastor & Founder
            </p>
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Pastor Samuel Adeyemi
            </h1>
            <p
              className="text-white/80 mb-8 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              A visionary leader with a passion for raising a generation of believers who walk in
              purpose and power.
            </p>
            <Link to="/contact">
              <TrinityButton variant="primary" size="lg">
                Connect with Pastor
              </TrinityButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Biography */}
      <section className="py-24 md:py-32 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="mb-8 p-8 border-l-4 border-[var(--gold)] bg-white rounded-r-lg">
                <p
                  className="text-2xl text-[var(--navy)] italic"
                  style={{ fontFamily: "var(--font-subheading)" }}
                >
                  "My calling is to see every believer discover their God-given purpose and walk in
                  the fullness of what Christ has made available."
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3
                  className="text-2xl mb-4 text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Early Years
                </h3>
                <p className="text-[var(--charcoal)] leading-relaxed mb-4">
                  Born and raised in Lagos, Nigeria, Pastor Samuel answered the call to ministry at
                  the age of 19. After graduating with honors in Theology from the University of
                  Lagos, he spent several years serving in various capacities before founding
                  Trinity House in 2010.
                </p>
                <p className="text-[var(--charcoal)] leading-relaxed">
                  His unique blend of theological depth and practical wisdom has made him a
                  sought-after speaker at conferences and leadership gatherings across Africa and
                  beyond.
                </p>
              </div>
              <div>
                <h3
                  className="text-2xl mb-4 text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Ministry & Impact
                </h3>
                <p className="text-[var(--charcoal)] leading-relaxed mb-4">
                  Under his leadership, Trinity House has grown into a vibrant multi-generational
                  church known for its contemporary approach to worship and community engagement.
                  Pastor Samuel is also the author of three bestselling books on faith and
                  leadership.
                </p>
                <p className="text-[var(--charcoal)] leading-relaxed">
                  He is married to Pastor Grace Adeyemi, and together they have three children.
                  Beyond the pulpit, he's passionate about mentoring young leaders and championing
                  marketplace ministry.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 p-8 bg-white rounded-lg"
            >
              <p
                className="text-xl text-[var(--navy)] italic mb-4"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                "The church is not just a building—it's a movement of people committed to
                transforming their world with the love and power of Christ."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[var(--navy)] text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 rounded-lg border border-white/10"
              >
                <div
                  className="text-6xl md:text-7xl mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--gold)",
                    fontWeight: 700,
                  }}
                >
                  {stat.number}
                </div>
                <p
                  className="text-white/90 text-lg"
                  style={{ fontFamily: "var(--font-subheading)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-24 md:py-32 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-center mb-12 text-[var(--navy)]"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
              }}
            >
              A Message from Pastor Samuel
            </h2>
            <div className="relative rounded-lg overflow-hidden border-4 border-[var(--gold)]">
              <div className="aspect-video bg-[var(--navy)] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--gold)] flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[var(--navy)] border-b-8 border-b-transparent ml-1" />
                  </div>
                  <p className="text-white/70">Video Placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
