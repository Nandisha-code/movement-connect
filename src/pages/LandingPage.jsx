/**
 * Landing Page Component
 * Initial page for selecting organization (AISF or AIYF)
 */

import { Link } from "react-router-dom";
import { ArrowRight, Users, GraduationCap } from "lucide-react";

const LandingPage = () => {
  const organizations = [
    {
      id: "aisf",
      name: "All India Students' Federation",
      shortName: "AISF",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/AISF_Flag.svg/250px-AISF_Flag.svg.png",
      tagline: "Study And Struggle",
      description:
        "India's oldest and largest student organization, fighting for education rights since 1936.",
      founded: "1936",
      theme: "red",
    },
    {
      id: "aiyf",
      name: "All India Youth Federation",
      shortName: "AIYF",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Aiyf.svg/1280px-Aiyf.svg.png",
      tagline: "Peace Progress and Scientific Socialism",
      description:
        "Empowering India's youth for employment, rights, and nation-building since 1959.",
      founded: "1959",
      theme: "blue",
    },
  ];

  return (
    <main className="min-h-screen bg-foreground flex flex-col">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container-custom text-center">
          <h1 className="font-display text-2xl md:text-3xl text-background">
            Progressive Movement Portal
          </h1>
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
              Join India's premier student and youth movements. Together, we build
              a progressive, secular, and just society.
            </p>
          </div>

          {/* Organization Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizations.map((org, index) => {
              const gradient =
                org.theme === "red"
                  ? "bg-gradient-to-br from-red-700 via-red-600 to-red-500"
                  : "bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500";

              return (
                <Link
                  key={org.id}
                  to={`/${org.id}`}
                  onClick={() => {
                    document.title =
                      org.id === "aisf"
                        ? "AISF – All India Students' Federation"
                        : "AIYF – All India Youth Federation";
                  }}
                  className="group relative bg-background rounded-2xl p-8 md:p-10"
                >

                  {/* Decorative gradient */}
                  <div
                    className={`absolute inset-0 opacity-0
                                group-hover:opacity-100
                                transition-opacity duration-500 ${gradient}`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                  <div className="mx-auto mb-6 transition-all">
                    <img
                      src={org.logo}
                      alt={`${org.shortName} logo`}
                      className="w-24 h-24 md:w-28 md:h-28
                                object-contain
                                mx-auto
                                transition-transform duration-300
                                group-hover:scale-110
                                group-hover:drop-shadow-xl"
                      />
                  </div>

                    {/* Founded */} 
                    <span
                      className="inline-block px-3 py-1 rounded-full
                                 bg-primary/10 text-primary
                                 group-hover:bg-background/20
                                 group-hover:text-background
                                 text-xs font-semibold mb-4
                                 transition-colors"
                    >
                      Est. {org.founded}
                    </span>

                    {/* Short Name */}
                    <h3
                      className="font-display text-2xl md:text-3xl
                                 text-foreground
                                 group-hover:text-background
                                 mb-2 transition-colors"
                    >
                      {org.shortName}
                    </h3>

                    {/* Full Name */}
                    <p
                      className="text-muted-foreground
                                 group-hover:text-background/80
                                 text-sm mb-4 transition-colors"
                    >
                      {org.name}
                    </p>

                    {/* Description */}
                    <p
                      className="text-foreground/70
                                 group-hover:text-background/70
                                 mb-6 transition-colors"
                    >
                      {org.description}
                    </p>

                    {/* Tagline */}
                    <p
                      className="font-display text-primary
                                 group-hover:text-background/90
                                 text-lg mb-6 transition-colors"
                    >
                      "{org.tagline}"
                    </p>

                    {/* CTA */}
                    <div
                      className="inline-flex items-center gap-2
                                 font-semibold text-primary
                                 group-hover:text-background
                                 transition-colors"
                    >
                      Enter Portal
                      <ArrowRight
                        size={18}
                        className="transition-transform
                                   group-hover:translate-x-2"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
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
