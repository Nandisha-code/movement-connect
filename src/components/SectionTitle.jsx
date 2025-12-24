/**
 * SectionTitle Component
 * Reusable section heading with optional subtitle and decoration
 * Supports AISF (red) and AIYF (blue) themes
 */

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  light = false,
  organization,
  className = "",
}) => {
  const isAISF = organization?.id === "aisf";

  // 🎨 Dynamic colors
  const accentText = isAISF ? "text-red-600" : "text-blue-600";
  const accentBg = isAISF ? "bg-red-600" : "bg-blue-600";
  const glow = isAISF
    ? "shadow-[0_0_20px_rgba(220,38,38,0.5)]"
    : "shadow-[0_0_20px_rgba(37,99,235,0.5)]";

  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""} ${className} animate-fade-up`}
    >
      {/* Subtitle */}
      {subtitle && (
        <span
          className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3
            ${light ? "text-background/70" : accentText}
            transition-colors`}
        >
          {subtitle}
        </span>
      )}

      {/* Title */}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl
          ${light ? "text-background" : "text-foreground"}
          leading-tight`}
      >
        {title}
      </h2>

      {/* Decorative Line */}
      {centered && (
        <div className="relative mt-4 flex justify-center">
          <span
            className={`h-1 w-20 rounded-full ${light ? "bg-background/40" : accentBg}
              transition-all duration-500 ${glow}`}
          />
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
