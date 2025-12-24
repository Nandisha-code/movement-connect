/**
 * Hero Component
 * Large hero section with slogan, description, and call-to-action buttons
 */

import { Link } from "react-router-dom";
import { ArrowRight, Users, Megaphone } from "lucide-react";

const Hero = ({ organization }) => {
  const basePath = `/${organization.id}`;

  // 🔥 Dynamic theme based on organization
  const heroGradient =
    organization.id === "aisf"
      ? "bg-gradient-to-br from-red-900 via-red-800 to-red-700"
      : "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700";

  const glowOrb =
    organization.id === "aisf"
      ? "bg-red-500/20"
      : "bg-blue-500/20";

  const accentRing =
    organization.id === "aisf"
      ? "ring-red-400/40"
      : "ring-blue-400/40";

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden ${heroGradient}`}
    >
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Glow Orbs */}
      <div
        className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl ${glowOrb}`}
      />
      <div
        className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl ${glowOrb}`}
      />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm
                        border border-background/20 rounded-full px-4 py-2 mb-8
                        animate-fade-up ring-1 ${accentRing}`}
          >
            <span className="w-2 h-2 bg-background rounded-full animate-pulse" />
            <span className="text-background/90 text-sm font-medium">
              Est. {organization.founded}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl
                       text-background leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {organization.slogan}
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-background/80
                       mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {organization.heroSubtitle}
          </p>

          {/* Description */}
          <p
            className="text-background/70 text-lg
                       mb-12 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {organization.description}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to={`${basePath}/join`}
              className={`inline-flex items-center gap-2
                          bg-background text-primary font-semibold
                          px-8 py-4 rounded-lg
                          transition-all duration-300
                          hover:gap-4 hover:shadow-xl`}
            >
              <Users size={20} />
              Join the Movement
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to={`${basePath}/campaigns`}
              className="inline-flex items-center gap-2
                         bg-transparent text-background font-semibold
                         px-8 py-4 rounded-lg
                         border-2 border-background/50
                         hover:border-background
                         hover:bg-background/10 transition-all"
            >
              <Megaphone size={20} />
              Our Campaigns
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6
                     mt-20 pt-12 border-t border-background/20
                     animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {organization.highlights.map((item, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl text-background mb-1">
                {item.title}
              </div>
              <div className="text-background/60 text-sm">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className={`w-6 h-10 border-2 border-background/50
                      rounded-full flex justify-center`}
        >
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
