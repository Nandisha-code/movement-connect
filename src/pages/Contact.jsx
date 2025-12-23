/**
 * Contact Page Component
 * Contact information, address, and social media links
 */

import { Mail, Phone, MapPin, Clock, Twitter, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Contact = ({ organization }) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: organization.contact.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(organization.contact.address)}`,
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: organization.contact.email,
      link: `mailto:${organization.contact.email}`,
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: organization.contact.phone,
      link: `tel:${organization.contact.phone}`,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Saturday: 10:00 AM - 6:00 PM',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Twitter, url: organization.contact.social.twitter, label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Facebook, url: organization.contact.social.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, url: organization.contact.social.instagram, label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Youtube, url: organization.contact.social.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-6 animate-fade-up">
            Contact Us
          </h1>
          <p className="text-xl text-background/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Have questions? Want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="bg-card p-6 rounded-xl border border-border card-hover text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Message Form */}
            <div className="animate-fade-up">
              <SectionTitle
                subtitle="Send a Message"
                title="Get in Touch"
                centered={false}
              />
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block font-semibold text-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-subject" className="block font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Write your message here..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Map & Social */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {/* Map Placeholder */}
              <div className="aspect-[4/3] rounded-xl bg-muted overflow-hidden mb-8">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {organization.contact.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(organization.contact.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-2 inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-secondary rounded-xl p-8">
                <h3 className="font-display text-xl text-foreground mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-6">
                  Stay connected with {organization.shortName} on social media for the latest 
                  updates, news, and campaign information.
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:text-background transition-all ${social.color}`}
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <social.icon size={18} />
                      <span className="font-medium text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl text-background mb-4">
            Visit Your Nearest Unit
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            {organization.shortName} has units across all states of India. Contact us to find 
            your nearest local unit and get involved in activities in your area.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
