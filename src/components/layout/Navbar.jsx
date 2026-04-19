import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, toggleLang } = useLanguage();

  const navLinks = [
    { labelKey: 'nav_home', path: '/' },
    { labelKey: 'nav_about', path: '/about' },
    { labelKey: 'nav_services', path: '/services' },
    { labelKey: 'nav_industries', path: '/industries' },
    { labelKey: 'nav_portfolio', path: '/portfolio' },
    { labelKey: 'nav_blog', path: '/blog' },
    { labelKey: 'nav_contact', path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://media.base44.com/images/public/69e42c1d4afb4366bdd3f9ea/faadde957_IMG-20260220-WA0006.jpg"
              alt="Ghazara Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          {/* Language + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm text-foreground/70 hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t('lang_switch')}</span>
            </button>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-sm text-foreground/70 py-2 hover:text-primary transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{t('lang_switch')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}