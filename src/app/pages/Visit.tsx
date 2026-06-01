import { useState } from "react";
import { motion } from "motion/react";
import { Clock, MapPin, CheckCircle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { TrinityCard } from "../components/TrinityCard";
import { TrinityButton } from "../components/TrinityButton";

export function Visit() {
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      title: "Sunday Service",
      time: "9:00 AM",
      duration: "90 minutes",
      description:
        "Our main worship service featuring dynamic worship, relevant teaching, and opportunities for prayer and ministry.",
    },
    {
      title: "Midweek Service",
      time: "Wednesday 6:00 PM",
      duration: "60 minutes",
      description:
        "A mid-week refresher with focused teaching, prayer, and intimate worship to strengthen your walk with God.",
    },
    {
      title: "Prayer Night",
      time: "Friday 6:00 PM",
      duration: "120 minutes",
      description:
        "An evening of intercession, worship, and seeking God's face together as we pray for our families, church, and nation.",
    },
  ];

  const steps = [
    {
      title: "Arrive",
      description: "Come 15 minutes early to find parking and get settled",
    },
    {
      title: "Welcome",
      description: "Our greeters will welcome you and help you find your seat",
    },
    {
      title: "Worship",
      description: "Experience powerful worship and relevant biblical teaching",
    },
    {
      title: "Connect",
      description: "Meet our team and learn about next steps in your faith journey",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
            }}
          >
            Plan Your Visit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-xl"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            We can't wait to meet you
          </motion.p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle subtitle="Join Us" title="Service Times" centered />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
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
                      className="h-1 w-16 mb-6"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                    <h3
                      className="text-2xl mb-3 text-[var(--navy)]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2 text-[var(--gold)]">
                      <Clock size={18} />
                      <span className="font-medium">{service.time}</span>
                    </div>
                    <p className="text-sm text-[var(--muted)] mb-4">
                      Duration: {service.duration}
                    </p>
                    <p className="text-[var(--charcoal)] leading-relaxed">{service.description}</p>
                  </div>
                </TrinityCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Address */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden h-[400px] bg-[var(--cream)]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7268939413!2d3.4207!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE0LjUiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Trinity House Location"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl mb-6 text-[var(--navy)]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Find Us
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <MapPin size={24} className="text-[var(--gold)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[var(--charcoal)] font-medium mb-1">Address</p>
                    <p className="text-[var(--muted)]">
                      Zion Centre, Plot 4B
                      <br />
                      Adeola Odeku Street
                      <br />
                      Victoria Island, Lagos
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>
              <TrinityButton variant="primary">Get Directions</TrinityButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle subtitle="First Time?" title="What to Expect" centered />
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div
                className="hidden md:block absolute top-8 left-0 right-0 h-0.5"
                style={{
                  background:
                    "repeating-linear-gradient(to right, var(--gold) 0, var(--gold) 10px, transparent 10px, transparent 20px)",
                }}
              />

              <div className="grid md:grid-cols-4 gap-8 relative">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl relative z-10"
                      style={{
                        backgroundColor: "var(--navy)",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3
                      className="text-xl mb-2 text-[var(--navy)]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First-Timer Form */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="rounded-lg p-10"
                  style={{ backgroundColor: "var(--gold-light)" }}
                >
                  <h2
                    className="text-3xl mb-4 text-[var(--navy)] text-center"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                  >
                    First-Time Visitor?
                  </h2>
                  <p className="text-[var(--navy)]/80 text-center mb-8">
                    Let us know you're coming so we can give you the best welcome possible!
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[var(--navy)] mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-[var(--gold)] outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--navy)] mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-[var(--gold)] outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--navy)] mb-2 font-medium">Phone</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-[var(--gold)] outline-none transition-colors"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <TrinityButton type="submit" variant="secondary" className="w-full">
                      Submit
                    </TrinityButton>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg p-10 text-center"
                style={{ backgroundColor: "var(--gold-light)" }}
              >
                <CheckCircle size={64} className="text-[var(--navy)] mx-auto mb-6" />
                <h2
                  className="text-3xl mb-4 text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  We Can't Wait to Meet You!
                </h2>
                <p className="text-[var(--navy)]/80 mb-8">
                  Look for our welcome team when you arrive. They'll be wearing gold badges and will
                  help you get settled.
                </p>
                <TrinityButton variant="secondary" onClick={() => setSubmitted(false)}>
                  Submit Another
                </TrinityButton>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
