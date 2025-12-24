/**
 * Leadership Page Component
 * Displays organization leaders in a responsive grid layout
 */

import SectionTitle from "../components/SectionTitle";
import { LeaderCard } from "../components/Card";

const Leadership = ({ organization }) => {
  // 🔥 Dynamic gradient (AISF = Red, AIYF = Blue)
  const gradient =
    organization.id === "aisf"
      ? "bg-gradient-to-br from-red-800 via-red-700 to-red-600"
      : "bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600";

  const softGradient =
    organization.id === "aisf"
      ? "from-red-500/20 to-red-300/10"
      : "from-blue-500/20 to-blue-300/10";

  const glow =
    organization.id === "aisf"
      ? "drop-shadow-[0_0_18px_rgba(220,38,38,0.45)]"
      : "drop-shadow-[0_0_18px_rgba(37,99,235,0.45)]";

  return (
    <main className="pt-20">
      {/* PAGE HEADER */}
      <section className={`relative py-20 md:py-32 overflow-hidden ${gradient}`}>
        {/* Decorative blur orbs */}
        <div className="absolute -top-20 right-10 w-96 h-96 bg-background/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-background/10 rounded-full blur-3xl" />

        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            Our Leadership
          </h1>
          <p
            className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Meet the dedicated individuals leading{" "}
            {organization.shortName} towards a progressive future in Karnataka.
          </p>
        </div>
      </section>

      {/* LEADERS GRID */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Karnataka State Committee"
            title="State Leadership Team"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {organization.leaders.map((leader, index) => (
              <div
                key={leader.id}
                className="animate-fade-up transition-transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <LeaderCard leader={leader} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Become a Leader
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Leadership is not about titles or positions. It is about action,
              responsibility, and commitment to the cause. If you are ready to
              lead from the front, we welcome you.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Local Leaders",
                  count: "10,000+",
                  desc: "Village & ward level",
                },
                {
                  title: "State Leaders",
                  count: "500+",
                  desc: "Coordinating state activities",
                },
                {
                  title: "National Team",
                  count: "50+",
                  desc: "Guiding national policy",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-card p-6 rounded-xl border border-border
                              text-center transition-all
                              hover:-translate-y-1 hover:shadow-xl
                              animate-fade-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`font-display text-3xl mb-2 text-primary ${glow}`}
                  >
                    {item.count}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Highlight */}
            <div
              className={`mt-14 rounded-2xl p-8 border
                          bg-gradient-to-br ${softGradient}
                          border-primary/20`}
            >
              <p className="text-lg text-foreground font-medium">
                Leadership grows from service, discipline, and collective
                struggle.
              </p>
              <p className="mt-2 text-primary font-display text-xl">
                “{organization.tagline}”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
