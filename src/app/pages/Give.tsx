import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, Lock } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { TrinityButton } from "../components/TrinityButton";
import { TrinityCard } from "../components/TrinityCard";

export function Give() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [5000, 10000, 25000, 50000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-24 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
        }}
      >
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[var(--navy)] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
            }}
          >
            Give Generously
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[var(--navy)]/80 max-w-2xl mx-auto italic text-xl"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            "Each of you should give what you have decided in your heart to give, not reluctantly
            or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </motion.p>
        </div>
      </section>

      {/* Giving Form */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-[560px] mx-auto">
            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <TrinityCard hover={false}>
                  <form onSubmit={handleSubmit} className="p-8">
                    {/* Frequency Toggle */}
                    <div className="mb-8">
                      <label className="block text-[var(--navy)] mb-3 font-medium">
                        Frequency
                      </label>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setFrequency("once")}
                          className="flex-1 py-3 px-6 rounded-lg border-2 transition-all duration-200"
                          style={{
                            borderColor:
                              frequency === "once" ? "var(--gold)" : "var(--divider)",
                            backgroundColor:
                              frequency === "once" ? "var(--gold-light)" : "transparent",
                            color: frequency === "once" ? "var(--navy)" : "var(--muted)",
                            fontWeight: frequency === "once" ? 600 : 400,
                          }}
                        >
                          One-Time
                        </button>
                        <button
                          type="button"
                          onClick={() => setFrequency("monthly")}
                          className="flex-1 py-3 px-6 rounded-lg border-2 transition-all duration-200"
                          style={{
                            borderColor:
                              frequency === "monthly" ? "var(--gold)" : "var(--divider)",
                            backgroundColor:
                              frequency === "monthly" ? "var(--gold-light)" : "transparent",
                            color: frequency === "monthly" ? "var(--navy)" : "var(--muted)",
                            fontWeight: frequency === "monthly" ? 600 : 400,
                          }}
                        >
                          Monthly
                        </button>
                      </div>
                    </div>

                    {/* Amount Presets */}
                    <div className="mb-8">
                      <label className="block text-[var(--navy)] mb-3 font-medium">
                        Amount (NGN)
                      </label>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {presetAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amount);
                              setCustomAmount("");
                            }}
                            className="py-4 px-6 rounded-lg border-2 transition-all duration-200"
                            style={{
                              borderColor:
                                selectedAmount === amount ? "var(--gold)" : "var(--divider)",
                              backgroundColor:
                                selectedAmount === amount ? "var(--gold)" : "transparent",
                              color: selectedAmount === amount ? "var(--navy)" : "var(--muted)",
                              fontWeight: selectedAmount === amount ? 700 : 500,
                              transform: selectedAmount === amount ? "scale(1.04)" : "scale(1)",
                            }}
                          >
                            ₦{amount.toLocaleString()}
                          </button>
                        ))}
                      </div>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors"
                      />
                    </div>

                    {/* Purpose */}
                    <div className="mb-8">
                      <label className="block text-[var(--navy)] mb-3 font-medium">
                        Purpose
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors">
                        <option>General Offering</option>
                        <option>Tithes</option>
                        <option>Building Fund</option>
                        <option>Missions</option>
                        <option>Outreach</option>
                      </select>
                    </div>

                    {/* Details */}
                    <div className="mb-8 space-y-4">
                      <div>
                        <label className="block text-[var(--navy)] mb-2 font-medium">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-[var(--navy)] mb-2 font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-[var(--divider)] focus:border-[var(--gold)] outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <TrinityButton type="submit" variant="primary" className="w-full">
                      Proceed to Payment
                    </TrinityButton>

                    {/* Security Badge */}
                    <div className="mt-6 flex items-center justify-center gap-4 text-sm text-[var(--muted)]">
                      <div className="flex items-center gap-1">
                        <Lock size={16} />
                        <span>SSL Secured</span>
                      </div>
                      <span>•</span>
                      <span>Powered by Paystack</span>
                    </div>
                  </form>
                </TrinityCard>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <TrinityCard hover={false}>
                  <div className="p-12 text-center">
                    <CheckCircle size={64} className="text-[var(--gold)] mx-auto mb-6" />
                    <h2
                      className="text-3xl mb-4 text-[var(--navy)]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                    >
                      Thank You!
                    </h2>
                    <p className="text-[var(--muted)] mb-8">
                      Your generosity makes a difference. A confirmation email has been sent to
                      your inbox.
                    </p>
                    <TrinityButton
                      variant="ghost"
                      onClick={() => setSubmitted(false)}
                    >
                      Give Again
                    </TrinityButton>
                  </div>
                </TrinityCard>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Other Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle subtitle="More Options" title="Other Ways to Give" centered />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <TrinityCard>
              <div className="p-8 text-center">
                <h3
                  className="text-xl mb-4 text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Bank Transfer
                </h3>
                <div className="space-y-2 text-sm text-[var(--charcoal)]">
                  <p>
                    <strong>Bank:</strong> Access Bank
                  </p>
                  <p>
                    <strong>Account:</strong> Trinity House Church
                  </p>
                  <p>
                    <strong>Number:</strong> 0123456789
                  </p>
                </div>
              </div>
            </TrinityCard>
            <TrinityCard>
              <div className="p-8 text-center">
                <h3
                  className="text-xl mb-4 text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  USD Donations
                </h3>
                <p className="text-[var(--muted)] mb-4">
                  For international givers, we accept USD through:
                </p>
                <p className="text-[var(--charcoal)] font-medium">PayPal & Stripe</p>
              </div>
            </TrinityCard>
            <TrinityCard>
              <div className="p-8 text-center">
                <h3
                  className="text-xl mb-4 text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  In-Person
                </h3>
                <p className="text-[var(--muted)]">
                  You can give during any of our services or visit our office during business
                  hours.
                </p>
              </div>
            </TrinityCard>
          </div>
        </div>
      </section>

      {/* Stewardship Stats */}
      <section className="py-20 bg-[var(--navy)] text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div
                className="text-5xl mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                85%
              </div>
              <p className="text-white/80">Ministry & Programs</p>
            </div>
            <div>
              <div
                className="text-5xl mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                10%
              </div>
              <p className="text-white/80">Operations</p>
            </div>
            <div>
              <div
                className="text-5xl mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                5%
              </div>
              <p className="text-white/80">Administrative</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
