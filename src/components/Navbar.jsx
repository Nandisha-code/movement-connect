/**
 * Navbar Component
 * Responsive navigation with organization switcher and mobile menu
 */

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ organization }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const basePath = `/${organization.id}`;
  
  const navLinks = [
    { name: 'Home', path: '' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'Join Us', path: '/join' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    const fullPath = basePath + path;
    return location.pathname === fullPath || (path === '' && location.pathname === basePath);
  };

  const switchOrganization = (orgId) => {
    const currentPath = location.pathname.replace(/^\/(aisf|aiyf)/, '');
    navigate(`/${orgId}${currentPath}`);
    setIsOrgDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Org Name */}
          <Link to={basePath} className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-display text-lg md:text-xl">
              {organization.shortName.charAt(0)}
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                {organization.shortName}
              </h1>
              <p className="text-xs text-muted-foreground hidden md:block">
                {organization.name}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={basePath + link.path}
                className={`font-medium transition-colors link-underline ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Organization Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Org Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all"
                aria-label="Switch organization"
              >
                <span className="font-semibold text-sm">{organization.shortName}</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${isOrgDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isOrgDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden animate-scale-in">
                  <button
                    onClick={() => switchOrganization('aisf')}
                    className={`w-full px-4 py-3 text-left hover:bg-accent transition-colors ${
                      organization.id === 'aisf' ? 'bg-accent text-primary' : ''
                    }`}
                  >
                    <div className="font-semibold">AISF</div>
                    <div className="text-xs text-muted-foreground">Students' Federation</div>
                  </button>
                  <button
                    onClick={() => switchOrganization('aiyf')}
                    className={`w-full px-4 py-3 text-left hover:bg-accent transition-colors ${
                      organization.id === 'aiyf' ? 'bg-accent text-primary' : ''
                    }`}
                  >
                    <div className="font-semibold">AIYF</div>
                    <div className="text-xs text-muted-foreground">Youth Federation</div>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={basePath + link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-accent text-primary'
                      : 'hover:bg-accent'
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
