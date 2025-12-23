/**
 * Landing Page Component
 * Initial page for selecting organization (AISF or AIYF)
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap } from 'lucide-react';

const LandingPage = () => {
  const organizations = [
    {
      id: 'aisf',
      name: 'All India Students\' Federation',
      shortName: 'AISF',
      icon: GraduationCap,
      tagline: 'Students of India, Unite!',
      description: 'India\'s oldest and largest student organization, fighting for education rights since 1936.',
      founded: '1936',
    },
    {
      id: 'aiyf',
      name: 'All India Youth Federation',
      shortName: 'AIYF',
      icon: Users,
      tagline: 'Youth Power, Nation\'s Future!',
      description: 'Empowering India\'s youth for employment, rights, and nation-building since 1959.',
      founded: '1959',
    },
  ];

  return (
    <main className="min-h-screen bg-foreground flex flex-col">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="font-display text-2xl md:text-3xl text-background">
              Progressive Movement Portal
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="flex-grow flex items-center py-12 px-4">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-light text-sm font-semibold mb-6">
              Choose Your Organization
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-background mb-6">
              Unite for Progress
            </h2>
            <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto">
              Join India's premier student and youth movements. Together, we build a 
              progressive, secular, and just society.
            </p>
          </div>

          {/* Organization Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizations.map((org, index) => (
              <Link
                key={org.id}
                to={`/${org.id}`}
                className="group relative bg-background rounded-2xl p-8 md:p-10 text-center hover:scale-[1.02] transition-all duration-300 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
              >
                {/* Decorative gradient */}
                <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full hero-gradient group-hover:bg-background/20 flex items-center justify-center mx-auto mb-6 transition-all">
                    <org.icon size={36} className="text-primary-foreground group-hover:text-background transition-colors" />
                  </div>

                  {/* Content */}
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary group-hover:bg-background/20 group-hover:text-background text-xs font-semibold mb-4 transition-colors">
                    Est. {org.founded}
                  </span>
                  
                  <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-background mb-2 transition-colors">
                    {org.shortName}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-background/80 text-sm mb-4 transition-colors">
                    {org.name}
                  </p>
                  
                  <p className="text-foreground/70 group-hover:text-background/70 mb-6 transition-colors">
                    {org.description}
                  </p>
                  
                  <p className="font-display text-primary group-hover:text-background/90 text-lg mb-6 transition-colors">
                    "{org.tagline}"
                  </p>

                  <div className="inline-flex items-center gap-2 font-semibold text-primary group-hover:text-background transition-colors">
                    Enter Portal
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-background/10">
        <div className="container-custom text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} AISF & AIYF. Building a Progressive India.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
