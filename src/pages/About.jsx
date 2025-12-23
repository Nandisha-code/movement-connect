/**
 * About Page Component
 * Organization history, ideology, mission, and vision
 */

import { Target, Eye, BookOpen, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = ({ organization }) => {
  const sections = [
    {
      icon: BookOpen,
      title: 'Our History',
      content: organization.about.history,
      highlight: `Founded in ${organization.founded}`,
    },
    {
      icon: Heart,
      title: 'Our Ideology',
      content: organization.about.ideology,
      highlight: 'Progressive Values',
    },
    {
      icon: Target,
      title: 'Our Mission',
      content: organization.about.mission,
      highlight: 'What We Do',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: organization.about.vision,
      highlight: 'Where We\'re Headed',
    },
  ];

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            About {organization.shortName}
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {organization.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {sections.map((section, index) => (
              <div 
                key={section.title}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                      <section.icon size={24} className="text-primary-foreground" />
                    </div>
                    <span className="text-primary font-semibold text-sm tracking-wider uppercase">
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

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <section.icon size={120} className="text-primary/20" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                        <p className="text-background font-display text-xl">
                          "{organization.tagline}"
                        </p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 hero-gradient rounded-xl opacity-20 -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-foreground rounded-lg -z-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Journey"
            title="Key Milestones"
          />
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            
            {/* Timeline Items */}
            {[
              { year: organization.founded, title: 'Foundation', description: `${organization.name} was established.` },
              { year: '1947', title: 'Independence Era', description: 'Played a key role in India\'s freedom movement.' },
              { year: '1970s', title: 'Expansion', description: 'Spread across all states of India.' },
              { year: '2000s', title: 'Digital Age', description: 'Embraced new technologies for organizing.' },
              { year: 'Present', title: 'Continuing the Legacy', description: 'Stronger than ever with millions of members.' },
            ].map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full hero-gradient border-4 border-background -translate-x-1/2 z-10" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-primary font-bold">{item.year}</span>
                  <h3 className="font-display text-xl text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
