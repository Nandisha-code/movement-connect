/**
 * Card Component
 * Reusable card component with multiple variants for different use cases
 */

import { ArrowRight } from 'lucide-react';

/**
 * Leader Card - Displays leader information with photo
 */
export const LeaderCard = ({ leader }) => {
  return (
    <article className="bg-card rounded-xl overflow-hidden card-hover group">
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-muted overflow-hidden">
        <img
          src={leader.image}
          alt={`${leader.name} - ${leader.role}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-foreground mb-1">{leader.name}</h3>
        <p className="text-primary font-semibold text-sm mb-2">{leader.role}</p>
        <p className="text-muted-foreground text-sm">{leader.description}</p>
      </div>
    </article>
  );
};

/**
 * Campaign Card - Displays campaign/movement information
 */
export const CampaignCard = ({ campaign }) => {
  const statusColors = {
    Ongoing: 'bg-primary/10 text-primary border-primary/20',
    Victory: 'bg-green-100 text-green-700 border-green-200',
    Completed: 'bg-muted text-muted-foreground border-border',
  };

  return (
    <article className="bg-card rounded-xl p-6 card-hover group border border-border hover:border-primary/30">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm text-muted-foreground font-medium">{campaign.year}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[campaign.status]}`}>
          {campaign.status}
        </span>
      </div>
      
      <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
        {campaign.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {campaign.description}
      </p>
      
      <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </article>
  );
};

/**
 * Highlight Card - Displays stats or key highlights
 */
export const HighlightCard = ({ highlight, index }) => {
  return (
    <div 
      className="text-center p-8 rounded-xl bg-card border border-border card-hover"
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

/**
 * Feature Card - Generic feature display card
 */
export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-card rounded-xl p-6 card-hover border border-border group">
      <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
        <Icon size={24} className="text-primary-foreground" />
      </div>
      <h3 className="font-display text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};
