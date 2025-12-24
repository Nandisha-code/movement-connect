/**
 * Navbar Component
 * Responsive navigation with organization switcher and mobile menu
 */

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = ({ organization }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const basePath = `/${organization.id}`;

  // 🎨 Dynamic theme
  const accentText =
    organization.id === "aisf" ? "text-red-600" : "text-blue-600";

  const accentHover =
    organization.id === "aisf"
      ? "hover:text-red-600"
      : "hover:text-blue-600";

  const glowShadow =
    organization.id === "aisf"
      ? "group-hover:drop-shadow-[0_0_16px_rgba(220,38,38,0.7)]"
      : "group-hover:drop-shadow-[0_0_16px_rgba(37,99,235,0.7)]";

  const borderAccent =
    organization.id === "aisf"
      ? "hover:border-red-500"
      : "hover:border-blue-500";

  const bgAccent =
    organization.id === "aisf"
      ? "hover:bg-red-500/10"
      : "hover:bg-blue-500/10";

  const navLinks = [
    { name: "Home", path: "" },
    { name: "About", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    const fullPath = basePath + path;
    return (
      location.pathname === fullPath ||
      (path === "" && location.pathname === basePath)
    );
  };

  const switchOrganization = (orgId) => {
    const currentPath = location.pathname.replace(/^\/(aisf|aiyf)/, "");
    navigate(`/${orgId}${currentPath}`);
    setIsOrgDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to={basePath} className="flex items-center gap-3 group">
            <img
              src={organization.logo}
              alt={`${organization.shortName} logo`}
              className={`w-12 h-12 md:w-14 md:h-14 object-contain
                          transition-all duration-300
                          group-hover:scale-110 ${glowShadow}`}
            />
            <div className="hidden sm:block">
              <h1
                className={`font-display text-lg md:text-xl transition-colors ${accentText}`}
              >
                {organization.shortName}
              </h1>
              <p className="text-xs text-muted-foreground hidden md:block">
                {organization.name}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={basePath + link.path}
                className={`relative font-medium transition-colors
                  ${
                    isActive(link.path)
                      ? accentText
                      : `text-foreground ${accentHover}`
                  }
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-current
                  after:transition-all hover:after:w-full`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-4">

            {/* ORG SWITCHER */}
            <div className="relative">
              <button
                onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg
                            border border-border transition-all
                            ${borderAccent} ${bgAccent}`}
              >
                <span className="font-semibold text-sm">
                  {organization.shortName}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isOrgDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOrgDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden animate-scale-in">
                  {["aisf", "aiyf"].map((id) => (
                    <button
                      key={id}
                      onClick={() => switchOrganization(id)}
                      className={`w-full px-4 py-3 text-left transition-colors
                        ${
                          organization.id === id
                            ? accentText + " bg-accent"
                            : "hover:bg-accent"
                        }`}
                    >
                      <div className="font-semibold uppercase">{id}</div>
                      <div className="text-xs text-muted-foreground">
                        {id === "aisf"
                          ? "Students' Federation"
                          : "Youth Federation"}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${bgAccent}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={basePath + link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors
                    ${
                      isActive(link.path)
                        ? `${accentText} bg-accent`
                        : "hover:bg-accent"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
