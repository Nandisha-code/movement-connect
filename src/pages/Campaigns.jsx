/**
 * Campaigns Page Component
 * Displays organization campaigns and movements with animated cards
 */

import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { CampaignCard } from "../components/Card";

const Campaigns = ({ organization }) => {
  const [filter, setFilter] = useState("All");

  // 🔥 Dynamic gradient (AISF = Red, AIYF = Blue)
  const gradient =
    organization.id === "aisf"
      ? "bg-gradient-to-br from-red-800 via-red-700 to-red-600"
      : "bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600";

  const softGradient =
    organization.id === "aisf"
      ? "from-red-500/20 to-red-300/10"
      : "from-blue-500/20 to-blue-300/10";

  const statuses = ["All", "Ongoing", "Victory", "Completed"];

  const filteredCampaigns =
    filter === "All"
      ? organization.campaigns
      : organization.campaigns.filter((c) => c.status === filter);

  return (
    <main className="pt-20">
      {/* PAGE HEADER */}
      <section className={`relative py-20 md:py-32 overflow-hidden ${gradient}`}>
        {/* Blur Orbs */}
        <div className="absolute -top-20 right-10 w-96 h-96 bg-background/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-background/10 rounded-full blur-3xl" />

        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            Our Campaigns
          </h1>
          <p
            className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            From grassroots organizing to nationwide movements, see how we’re
            fighting for change.
          </p>
        </div>
      </section>

      {/* CAMPAIGNS LIST */}
      <section className="section-padding">
        <div className="container-custom">
          {/* FILTER TABS */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded-full font-semibold text-sm
                            transition-all duration-300
                            ${
                              filter === status
                                ? `text-background ${gradient} shadow-lg`
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* CAMPAIGNS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className="animate-fade-up transition-transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CampaignCard campaign={campaign} />
              </div>
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No campaigns found with this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="section-padding bg-foreground">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Impact"
            title="Campaigns That Changed Lives"
            light
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Campaigns Launched" },
              { number: "100+", label: "Policy Changes Won" },
              { number: "5M+", label: "People Mobilized" },
              { number: "28", label: "States Covered" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-4xl md:text-5xl text-primary-light mb-2">
                  {stat.number}
                </div>
                <div className="text-background/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className={`rounded-2xl p-8 md:p-12 text-center border
                        bg-gradient-to-br ${softGradient}
                        border-primary/20
                        hover:shadow-xl transition-all`}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Join Our Next Campaign
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Change doesn’t happen by watching from the sidelines. Get involved
              in our ongoing campaigns and be part of the movement shaping
              India’s future.
            </p>

            <a
              href={`/${organization.id}/join`}
              className="inline-block bg-primary text-primary-foreground
                         font-semibold px-10 py-4 rounded-lg
                         hover:bg-primary/90 transition-all"
            >
              Get Involved Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Campaigns;
