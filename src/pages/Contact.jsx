/**
 * Contact Page Component
 * Contact information, address, and social media links
 */

import { Mail, Phone, MapPin, Clock, Twitter, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Contact = ({ organization }) => {
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
      ? "drop-shadow-[0_0_14px_rgba(220,38,38,0.5)]"
      : "drop-shadow-[0_0_14px_rgba(37,99,235,0.5)]";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: organization.contact.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(
        organization.contact.address
      )}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      content: organization.contact.email,
      link: `mailto:${organization.contact.email}`,
    },
    {
      icon: Phone,
      title: "Call Us",
      content: organization.contact.phone,
      link: `tel:${organization.contact.phone}`,
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday – Saturday: 10:00 AM – 6:00 PM",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      url: organization.contact.social.twitter,
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: Facebook,
      url: organization.contact.social.facebook,
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      url: organization.contact.social.instagram,
      label: "Instagram",
      color: "hover:bg-pink-500",
    },
    {
      icon: Youtube,
      url: organization.contact.social.youtube,
      label: "YouTube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <main className="pt-20">
      {/* PAGE HEADER */}
      <section className={`relative py-20 md:py-32 overflow-hidden ${gradient}`}>
        {/* Blur Orbs */}
        <div className="absolute -top-20 right-10 w-96 h-96 bg-background/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-background/10 rounded-full blur-3xl" />

        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            Contact Us
          </h1>
          <p
            className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Have questions? Want to get involved? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-card p-6 rounded-xl border border-border
                           text-center transition-all
                           hover:-translate-y-1 hover:shadow-xl
                           animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center
                              justify-center mx-auto mb-4
                              ${gradient} ${glow}`}
                >
                  <info.icon size={24} className="text-background" />
                </div>

                <h3 className="font-display text-lg text-foreground mb-2">
                  {info.title}
                </h3>

                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    {info.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* CONTACT FORM */}
            <div className="animate-fade-up">
              <SectionTitle
                subtitle="Send a Message"
                title="Get in Touch"
                centered={false}
              />

              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-border
                                 bg-background text-foreground
                                 focus:outline-none focus:ring-2
                                 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border border-border
                                 bg-background text-foreground
                                 focus:outline-none focus:ring-2
                                 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 rounded-lg border border-border
                               bg-background text-foreground
                               focus:outline-none focus:ring-2
                               focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-border
                               bg-background text-foreground resize-none
                               focus:outline-none focus:ring-2
                               focus:ring-primary transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2
                             bg-primary text-primary-foreground
                             font-semibold px-8 py-4 rounded-lg
                             hover:bg-primary/90 transition-all"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* MAP & SOCIAL */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* MAP */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-8">
                <div
                  className={`w-full h-full flex items-center justify-center
                              bg-gradient-to-br ${softGradient}`}
                >
                  <div className="text-center px-6">
                    <MapPin
                      size={48}
                      className="text-primary/40 mx-auto mb-4"
                    />
                    <p className="text-muted-foreground">
                      {organization.contact.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        organization.contact.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-2 inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="bg-secondary rounded-xl p-8">
                <h3 className="font-display text-xl text-foreground mb-4">
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay connected with {organization.shortName} for updates,
                  news, and campaigns.
                </p>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2
                                  rounded-lg bg-card border border-border
                                  hover:text-background transition-all
                                  ${social.color}`}
                    >
                      <social.icon size={18} />
                      <span className="font-medium text-sm">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl text-background mb-4">
            Visit Your Nearest Unit
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            {organization.shortName} has units across all states of India.
            Contact us to find your nearest local unit and get involved.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;