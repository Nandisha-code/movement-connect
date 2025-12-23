/**
 * Leadership Page Component
 * Displays organization leaders in a responsive grid layout
 */

import SectionTitle from '../components/SectionTitle';
import { LeaderCard } from '../components/Card';

const Leadership = ({ organization }) => {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            Our Leadership
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Meet the dedicated individuals leading {organization.shortName} towards a progressive future.
          </p>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="National Committee"
            title="National Leadership Team"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {organization.leaders.map((leader, index) => (
              <div 
                key={leader.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <LeaderCard leader={leader} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Leadership CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Become a Leader
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Leadership is not about titles or positions. It's about action, dedication, and 
              commitment to the cause. If you're ready to take responsibility and lead from 
              the front, we want you in our ranks.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Local Leaders', count: '10,000+', desc: 'At village & ward level' },
                { title: 'State Leaders', count: '500+', desc: 'Coordinating state activities' },
                { title: 'National Team', count: '50+', desc: 'Guiding national policy' },
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="bg-card p-6 rounded-xl border border-border text-center"
                >
                  <div className="font-display text-3xl text-primary mb-2">{item.count}</div>
                  <div className="font-semibold text-foreground mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
