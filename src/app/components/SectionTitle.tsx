interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false, dark = false }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {subtitle && (
        <p
          className={`mb-3 uppercase tracking-wider ${dark ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
          }}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={dark ? "text-white" : "text-[var(--navy)]"}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
