/**
 * SectionTitle Component
 * Reusable section heading with optional subtitle and decoration
 */

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
          light ? 'text-background/60' : 'text-primary'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl ${
        light ? 'text-background' : 'text-foreground'
      }`}>
        {title}
      </h2>
      {centered && (
        <div className={`w-20 h-1 mx-auto mt-4 rounded-full ${
          light ? 'bg-background/40' : 'bg-primary'
        }`} />
      )}
    </div>
  );
};

export default SectionTitle;
