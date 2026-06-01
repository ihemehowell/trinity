import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Cross } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* Gold Divider */}
      <div className="h-0.5 bg-[var(--gold)]" />

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + Tagline + Socials */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Cross className="w-6 h-6 text-[var(--gold)]" strokeWidth={2.5} />
              <span
                className="text-xl"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                }}
              >
                Trinity House
              </span>
            </div>
            <p
              className="text-white/70 mb-6 italic"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "1.125rem",
              }}
            >
              A House of Prayer for All Nations
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-200"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-200"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[var(--gold)] mb-6 uppercase tracking-wider"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
              }}
            >
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/about"
                className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/ministries"
                className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                Ministries
              </Link>
              <Link
                to="/events"
                className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                Events
              </Link>
              <Link
                to="/media"
                className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                Media
              </Link>
              <Link
                to="/gallery"
                className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                Gallery
              </Link>
              <Link
                to="/give"
                className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                Give
              </Link>
              <Link
                to="/visit"
                className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                Visit Us
              </Link>
              <Link
                to="/contact"
                className="text-white/70 hover:text-[var(--gold)] transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Service Times + Address */}
          <div>
            <h4
              className="text-[var(--gold)] mb-6 uppercase tracking-wider"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
              }}
            >
              Visit Us
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/90 mb-2" style={{ fontWeight: 600 }}>
                  Service Times
                </p>
                <p className="text-white/70">Sunday: 9:00 AM</p>
                <p className="text-white/70">Wednesday: 6:00 PM</p>
                <p className="text-white/70">Friday: 6:00 PM</p>
              </div>
              <div className="flex gap-3 text-white/70">
                <MapPin size={20} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <p>Zion Centre, Victoria Island</p>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex gap-3 text-white/70">
                <Phone size={20} className="text-[var(--gold)] flex-shrink-0" />
                <p>+234 803 456 7890</p>
              </div>
              <div className="flex gap-3 text-white/70">
                <Mail size={20} className="text-[var(--gold)] flex-shrink-0" />
                <p>info@trinityhouse.ng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Trinity House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
