import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav_home'), path: '/' },
    { label: t('nav_about'), path: '/about' },
    { label: t('nav_services'), path: '/services' },
    { label: t('nav_industries'), path: '/industries' },
    { label: t('nav_portfolio'), path: '/portfolio' },
    { label: t('nav_blog'), path: '/blog' },
    { label: t('nav_contact'), path: '/contact' },
  ];

  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="https://media.base44.com/images/public/69e42c1d4afb4366bdd3f9ea/faadde957_IMG-20260220-WA0006.jpg"
                alt="Ghazara Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t('footer_desc')}
            </p>
            <a
              href="https://wa.me/967783334002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              +967783334002
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">{t('footer_nav')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">{t('footer_contact')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Yemen</li>
              <li>+967783334002</li>
              <li>info@ghazara.net</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ghazara for Trading & Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}