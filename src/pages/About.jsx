/**
 * About Page Component
 * Organization history, ideology, mission, and vision
 */

import { Target, Eye, BookOpen, Heart } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const About = ({ organization }) => {
  // 🎨 Dynamic gradients
  const gradient =
    organization.id === "aisf"
      ? "bg-gradient-to-br from-red-800 via-red-700 to-red-600"
      : "bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600";

  const softGradient =
    organization.id === "aisf"
      ? "from-red-500/30 to-red-300/10"
      : "from-blue-500/30 to-blue-300/10";

  const glow =
    organization.id === "aisf"
      ? "drop-shadow-[0_0_24px_rgba(220,38,38,0.45)]"
      : "drop-shadow-[0_0_24px_rgba(37,99,235,0.45)]";

  // 📸 Sections with images
  const sections = [
    {
      icon: BookOpen,
      title: "Our History",
      highlight: `Founded in ${organization.founded}`,
      content: organization.about.history,
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
    },
    {
      icon: Heart,
      title: "Our Ideology",
      highlight: "Progressive Values",
      content: organization.about.ideology,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      icon: Target,
      title: "Our Mission",
      highlight: "What We Do",
      content: organization.about.mission,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      icon: Eye,
      title: "Our Vision",
      highlight: "Where We’re Headed",
      content: organization.about.vision,
      image:
        "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
    },
  ];

  return (
    <main className="pt-20">
      {/* ================= PAGE HEADER ================= */}
      <section className={`relative py-20 md:py-32 overflow-hidden ${gradient}`}>
        <div className="absolute -top-24 right-10 w-96 h-96 bg-background/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-background/10 rounded-full blur-3xl" />

        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            About {organization.shortName}
          </h1>
          <p
            className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {organization.description}
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="grid lg:grid-cols-2 gap-12 items-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* TEXT */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${gradient} ${glow}`}
                  >
                    <section.icon size={24} className="text-background" />
                  </div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    {section.highlight}
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  {section.title}
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>

              {/* IMAGE CARD */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative group">
                  <div
                    className={`aspect-[4/3] rounded-2xl border border-border
                                bg-gradient-to-br ${softGradient}
                                overflow-hidden transition-transform
                                group-hover:scale-[1.03]`}
                  >
                    {/* IMAGE */}
                    <img
                      src={section.image}
                      alt={section.title}
                      className="absolute inset-0 w-full h-full object-cover
                                 group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-foreground/30" />

                    {/* TAGLINE */}
                    <div className="absolute bottom-0 left-0 right-0 p-6
                                    bg-gradient-to-t from-foreground/90 to-transparent">
                      <p className="text-background font-display text-xl">
                        “{organization.tagline}”
                      </p>
                    </div>
                  </div>

                  {/* DECORATION */}
                  <div
                    className={`absolute -top-4 -right-4 w-24 h-24 rounded-xl ${gradient} opacity-20 -z-10`}
                  />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-foreground rounded-lg -z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Journey"
            title="Key Milestones"
            organization={organization}
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {[
              {
                year: organization.founded,
                title: "Foundation",
                description: `${organization.name} was established.`,
              },
              {
                year: "1947",
                title: "Independence Era",
                description: "Played a vital role in India's freedom movement.",
              },
              {
                year: "1970s",
                title: "National Expansion",
                description: "Strengthened presence across India.",
              },
              {
                year: "2000s",
                title: "Digital Organizing",
                description: "Adopted modern tools for mass mobilization.",
              },
              {
                year: "Present",
                title: "Continuing the Legacy",
                description: "Stronger than ever with millions of members.",
              },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-8 mb-14 animate-fade-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full
                              ${gradient} border-4 border-background
                              -translate-x-1/2 z-10`}
                />

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12"
                  }`}
                >
                  <span className="text-primary font-bold">{item.year}</span>
                  <h3 className="font-display text-xl text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
