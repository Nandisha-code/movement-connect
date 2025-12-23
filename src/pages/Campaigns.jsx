/**
 * Campaigns Page Component
 * Displays organization campaigns and movements with animated cards
 */

import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { CampaignCard } from '../components/Card';

const Campaigns = ({ organization }) => {
  const [filter, setFilter] = useState('All');
  
  const statuses = ['All', 'Ongoing', 'Victory', 'Completed'];
  
  const filteredCampaigns = filter === 'All' 
    ? organization.campaigns 
    : organization.campaigns.filter(c => c.status === filter);

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            Our Campaigns
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            From grassroots organizing to nationwide movements, see how we're fighting for change.
          </p>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  filter === status
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Campaigns Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign, index) => (
              <div 
                key={campaign.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CampaignCard campaign={campaign} />
              </div>
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No campaigns found with this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-foreground">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Impact"
            title="Campaigns That Changed Lives"
            light
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Campaigns Launched' },
              { number: '100+', label: 'Policy Changes Won' },
              { number: '5M+', label: 'People Mobilized' },
              { number: '28', label: 'States Covered' },
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

      {/* Get Involved CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Join Our Next Campaign
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Change doesn't happen by watching from the sidelines. Get involved in our ongoing 
              campaigns and be part of the movement that shapes India's future.
            </p>
            <a
              href={`/${organization.id}/join`}
              className="btn-primary inline-block"
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
