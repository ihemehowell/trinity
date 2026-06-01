import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Cross } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "MINISTRIES", path: "/ministries" },
    { label: "EVENTS", path: "/events" },
    { label: "MEDIA", path: "/media" },
    { label: "GALLERY", path: "/gallery" },
    { label: "GIVE", path: "/give" },
    { label: "VISIT", path: "/visit" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: "transparent" }}
        animate={{
          backgroundColor: isScrolled ? "var(--navy)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <Cross
                className="w-6 h-6"
                style={{ color: "var(--gold)" }}
                strokeWidth={2.5}
              />
              <span
                className="text-xl tracking-wide"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  color: isScrolled ? "white" : "white",
                }}
              >
                Trinity House
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative py-2 transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    letterSpacing: "0.12em",
                    fontWeight: 500,
                    color: isScrolled ? "white" : "white",
                  }}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Watch Live Button - Desktop */}
            <Link
              to="/media"
              className="hidden lg:block px-6 py-2.5 rounded-md transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--navy)",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              WATCH LIVE
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              style={{ color: "white" }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 lg:hidden flex flex-col"
              style={{ backgroundColor: "var(--navy)" }}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span
                  className="text-xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  Menu
                </span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={28} style={{ color: "white" }} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8">
                <div className="flex flex-col gap-1 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="py-4 border-b border-white/10 transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        letterSpacing: "0.12em",
                        fontWeight: 500,
                        color:
                          location.pathname === link.path
                            ? "var(--gold)"
                            : "white",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-white/10 space-y-3">
                <Link
                  to="/media"
                  className="block w-full px-6 py-3 rounded-md text-center transition-all duration-200"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--navy)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  WATCH LIVE
                </Link>
                <Link
                  to="/give"
                  className="block w-full px-6 py-3 rounded-md text-center border transition-all duration-200"
                  style={{
                    borderColor: "var(--gold)",
                    color: "var(--gold)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  GIVE
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
