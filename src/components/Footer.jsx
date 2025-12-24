/**
 * Footer Component
 * Site footer with organization info, links, and social media
 */

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = ({ organization }) => {
  const basePath = `/${organization.id}`;
  const currentYear = new Date().getFullYear();

  // 🔁 Dynamic logo
  const logo =
    organization.id === "aisf"
      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/AISF_Flag.svg/2560px-AISF_Flag.svg.png"
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Aiyf.svg/1280px-Aiyf.svg.png";

  // ✨ Glow effect
  const glow =
    organization.id === "aisf"
      ? "drop-shadow-[0_0_25px_rgba(220,38,38,0.45)]"
      : "drop-shadow-[0_0_25px_rgba(37,99,235,0.45)]";

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Twitter, url: organization.contact.social.twitter, label: "Twitter" },
    { icon: Facebook, url: organization.contact.social.facebook, label: "Facebook" },
    { icon: Instagram, url: organization.contact.social.instagram, label: "Instagram" },
    { icon: Youtube, url: organization.contact.social.youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* MAIN FOOTER */}
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ORGANIZATION INFO */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={logo}
                alt={`${organization.shortName} Logo`}
                className={`h-14 md:h-16 w-auto
                              transition-transform duration-500
                              hover:scale-105 ${glow}`}
              />
              <div>
                <h3 className="font-display text-xl">
                  {organization.shortName}
                </h3>
                <p className="text-sm opacity-70">
                  {organization.name}
                </p>
              </div>
            </div>

            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              {organization.description}
            </p>

            <p className="font-display text-lg text-primary-light">
              “{organization.tagline}”
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={basePath + link.path}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact Us</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  {organization.contact.address}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${organization.contact.email}`}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {organization.contact.email}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href={`tel:${organization.contact.phone}`}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {organization.contact.phone}
                </a>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full
                              bg-background/10 flex items-center justify-center
                              hover:bg-primary hover:text-primary-foreground
                              transition-all duration-300
                              hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      {/* BOTTOM BAR */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">

            <p>
              © {currentYear} {organization.name}. All rights reserved.
            </p>

            <p>
              Founded in {organization.founded} · Building a Progressive India
            </p>
          </div>

          {/* 👇 DEVELOPER CREDIT */}
          <div className="mt-4 text-center text-xs text-background/50">
            Developed &amp; Maintained by{" "}
            <a
              href="https://ai-engineer-portfolio-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:text-primary-light transition-colors underline underline-offset-4"
            >
              Nandisha
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;