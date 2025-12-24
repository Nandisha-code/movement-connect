/**
 * Card Component
 * Reusable card component with multiple variants for different use cases
 */

import { ArrowRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                LEADER CARD                                 */
/* -------------------------------------------------------------------------- */
export const LeaderCard = ({ leader }) => {
  return (
    <article
      className="bg-card rounded-xl overflow-hidden border border-border
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl
                 group"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={leader.image}
          alt={`${leader.name} - ${leader.role}`}
          className="w-full h-full object-cover
                     transition-transform duration-500
                     group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t
                     from-foreground/80 via-transparent to-transparent
                     opacity-0 group-hover:opacity-100
                     transition-opacity"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="font-display text-xl text-foreground mb-1">
          {leader.name}
        </h3>

        <p className="text-primary font-semibold text-sm mb-2">
          {leader.role}
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {leader.description}
        </p>
      </div>
    </article>
  );
};

/* -------------------------------------------------------------------------- */
/*                               CAMPAIGN CARD                                */
/* -------------------------------------------------------------------------- */
export const CampaignCard = ({ campaign }) => {
  const statusStyles = {
    Ongoing: "bg-primary/10 text-primary border-primary/20",
    Victory: "bg-green-500/15 text-green-700 border-green-300",
    Completed: "bg-muted text-muted-foreground border-border",
  };

  return (
    <article
      className="bg-card rounded-xl p-6 border border-border
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl
                 group"
    >
      {/* TOP */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground font-medium">
          {campaign.year}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border
                      ${statusStyles[campaign.status]}`}
        >
          {campaign.status}
        </span>
      </div>

      {/* TITLE */}
      <h3
        className="font-display text-xl text-foreground mb-3
                   group-hover:text-primary transition-colors"
      >
        {campaign.title}
      </h3>

      {/* DESC */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {campaign.description}
      </p>

      {/* CTA */}
      <div
        className="flex items-center text-primary font-semibold text-sm
                   opacity-0 group-hover:opacity-100
                   transition-opacity"
      >
        Learn More
        <ArrowRight
          size={16}
          className="ml-2 transition-transform
                     group-hover:translate-x-1"
        />
      </div>
    </article>
  );
};

/* -------------------------------------------------------------------------- */
/*                               HIGHLIGHT CARD                               */
/* -------------------------------------------------------------------------- */
export const HighlightCard = ({ highlight, index }) => {
  return (
    <div
      className="text-center p-8 rounded-xl bg-card border border-border
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-lg
                 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="font-display text-4xl md:text-5xl text-primary mb-2">
        {highlight.title}
      </div>
      <div className="text-muted-foreground font-medium">
        {highlight.subtitle}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                FEATURE CARD                                */
/* -------------------------------------------------------------------------- */
export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="bg-card rounded-xl p-6 border border-border
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl
                 group"
    >
      {/* ICON */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
                   bg-primary/15 text-primary
                   group-hover:scale-110 transition-transform"
      >
        <Icon size={24} />
      </div>

      {/* TEXT */}
      <h3 className="font-display text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
