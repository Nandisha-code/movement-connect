/**
 * Home Page Component
 * Main landing page with hero, highlights, and call-to-action sections
 */

import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Megaphone, Heart } from "lucide-react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { HighlightCard, FeatureCard } from "../components/Card";

const Home = ({ organization }) => {
  const basePath = `/${organization.id}`;

  // 🔥 Dynamic gradient (AISF = Red, AIYF = Blue)
  const sectionGradient =
    organization.id === "aisf"
      ? "bg-gradient-to-br from-red-800 via-red-700 to-red-600"
      : "bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600";

  const features = [
    {
      icon: BookOpen,
      title:
        organization.id === "aisf"
          ? "Education Rights"
          : "Employment Rights",
      description:
        organization.id === "aisf"
          ? "Fighting for quality education accessible to all students regardless of their economic background."
          : "Advocating for dignified employment opportunities and fair wages for all youth.",
    },
    {
      icon: Users,
      title: "Unity in Diversity",
      description:
        "Bringing together young people from all backgrounds under the banner of progress and social justice.",
    },
    {
      icon: Megaphone,
      title: "Grassroots Organizing",
      description:
        "Building strong local networks to amplify the voice of the people at every level.",
    },
    {
      icon: Heart,
      title: "Social Justice",
      description:
        "Committed to creating an equitable society free from discrimination and exploitation.",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <Hero organization={organization} />
        {/* ================= ABOUT PREVIEW ================= */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT CONTENT */}
              <div className="animate-fade-up">
                {/* Subtitle */}
                <span
                  className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3
                    ${
                      organization.id === "aisf"
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}
                >
                  Who We Are
                </span>

                {/* Title */}
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-6">
                  Building a Progressive Movement Since {organization.founded}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {organization.about.history.substring(0, 200)}...
                </p>

                <p className="text-muted-foreground mb-8">
                  {organization.about.ideology.substring(0, 150)}...
                </p>

                {/* CTA */}
                <Link
                  to={`${basePath}/about`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
                    ${
                      organization.id === "aisf"
                        ? "bg-red-600 text-white hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                        : "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    }`}
                >
                  Learn Our Story
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* RIGHT STATS GRID */}
              <div
                className="grid grid-cols-2 gap-4 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                {organization.highlights.map((highlight, index) => (
                  <HighlightCard
                    key={index}
                    highlight={highlight}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE STAND FOR ================= */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle
              subtitle="Our Pillars"
              title="What We Stand For"
              organization={organization}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </section>


      {/* RECENT CAMPAIGNS */}
      <section className={`section-padding ${sectionGradient}`}>
        <div className="container-custom">
          <SectionTitle
            subtitle="Recent Action"
            title="Our Campaigns"
            light
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {organization.campaigns.slice(0, 3).map((campaign, index) => (
              <article
                key={campaign.id}
                className="bg-background/10 backdrop-blur-sm
                           border border-background/20
                           rounded-xl p-6
                           hover:bg-background/20
                           transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-background/60 text-sm">
                    {campaign.year}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      campaign.status === "Victory"
                        ? "bg-green-500/20 text-green-200"
                        : "bg-background/20 text-background"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </div>

                <h3 className="font-display text-xl text-background mb-3">
                  {campaign.title}
                </h3>

                <p className="text-background/70 text-sm">
                  {campaign.description}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={`${basePath}/campaigns`}
              className="inline-flex items-center gap-2
                         bg-background text-primary
                         font-semibold px-8 py-4
                         rounded-lg hover:bg-background/90
                         transition-all group"
            >
              View All Campaigns
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-5xl text-background mb-6 animate-fade-up">
            Ready to Make a Difference?
          </h2>

          <p
            className="text-background/70 text-lg mb-8 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Join thousands of{" "}
            {organization.id === "aisf" ? "students" : "youth"} across India
            who are working together to build a more just and equitable society.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to={`${basePath}/join`}
              className="inline-flex items-center gap-2
                         bg-primary text-primary-foreground
                         font-semibold px-8 py-4
                         rounded-lg hover:bg-primary/90
                         transition-all"
            >
              <Users size={20} />
              Join {organization.shortName}
            </Link>

            <Link
              to={`${basePath}/contact`}
              className="inline-flex items-center gap-2
                         bg-transparent text-background
                         font-semibold px-8 py-4
                         rounded-lg border-2 border-background/30
                         hover:border-background hover:bg-background/10
                         transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
