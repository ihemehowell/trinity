import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { TrinityCard } from "../components/TrinityCard";
import { TrinityButton } from "../components/TrinityButton";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    {
      title: "General Inquiries",
      email: "info@trinityhouse.ng",
      description: "For general questions about our church and services",
    },
    {
      title: "Pastor's Office",
      email: "pastor@trinityhouse.ng",
      description: "For prayer requests and pastoral care",
    },
    {
      title: "Media & Communications",
      email: "media@trinityhouse.ng",
      description: "For media inquiries and press releases",
    },
    {
      title: "Giving & Finance",
      email: "finance@trinityhouse.ng",
      description: "For questions about donations and financial matters",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 mt-4 text-xl"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {!submitted ? (
                <TrinityCard hover={false}>
                  <form onSubmit={handleSubmit} className="p-8">
                    <h2
                      className="text-2xl mb-6 text-[var(--navy)]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                    >
                      Send Us a Message
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[var(--navy)] mb-2 font-medium">Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-[var(--navy)] mb-2 font-medium">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[var(--navy)] mb-2 font-medium">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                      <div>
                        <label className="block text-[var(--navy)] mb-2 font-medium">
                          Department
                        </label>
                        <select className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors">
                          <option>General Inquiries</option>
                          <option>Pastor's Office</option>
                          <option>Media & Communications</option>
                          <option>Giving & Finance</option>
                          <option>Ministries</option>
                          <option>Events</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[var(--navy)] mb-2 font-medium">
                          Subject
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div>
                        <label className="block text-[var(--navy)] mb-2 font-medium">
                          Message
                        </label>
                        <textarea
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors resize-none"
                          placeholder="Your message..."
                        />
                      </div>
                      <TrinityButton type="submit" variant="primary" className="w-full">
                        Send Message
                      </TrinityButton>
                    </div>
                  </form>
                </TrinityCard>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <TrinityCard hover={false}>
                    <div className="p-12 text-center">
                      <CheckCircle size={64} className="text-[var(--gold)] mx-auto mb-6" />
                      <h3
                        className="text-2xl mb-3 text-[var(--navy)]"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                      >
                        Message Sent!
                      </h3>
                      <p className="text-[var(--muted)]">
                        Thank you for reaching out. We'll get back to you within 24-48 hours.
                      </p>
                    </div>
                  </TrinityCard>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-2xl mb-6 text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--gold-light)" }}
                    >
                      <MapPin size={20} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--navy)] mb-1">Address</h4>
                      <p className="text-[var(--muted)]">
                        Zion Centre, Plot 4B Adeola Odeku Street
                        <br />
                        Victoria Island, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--gold-light)" }}
                    >
                      <Phone size={20} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--navy)] mb-1">Phone</h4>
                      <p className="text-[var(--muted)]">+234 803 456 7890</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--gold-light)" }}
                    >
                      <Mail size={20} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--navy)] mb-1">Email</h4>
                      <p className="text-[var(--muted)]">info@trinityhouse.ng</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--gold-light)" }}
                    >
                      <Clock size={20} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--navy)] mb-1">Office Hours</h4>
                      <p className="text-[var(--muted)]">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed (Join us for service!)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--divider)]">
                <h4 className="font-medium text-[var(--navy)] mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {["Facebook", "Instagram", "Twitter", "YouTube"].map((platform) => (
                    <a
                      key={platform}
                      href={`https://${platform.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border-2 border-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-white transition-all duration-200"
                      style={{ color: "var(--gold)" }}
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle subtitle="Specific Needs" title="Contact Departments" centered />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TrinityCard>
                  <div className="p-6">
                    <h3
                      className="text-xl mb-2 text-[var(--navy)]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {dept.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm mb-3">{dept.description}</p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-[var(--gold)] hover:underline font-medium inline-flex items-center gap-2"
                    >
                      <Mail size={16} />
                      {dept.email}
                    </a>
                  </div>
                </TrinityCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
