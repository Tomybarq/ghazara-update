import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-white text-lg">Ghazara</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Innovative digital solutions tailored for Yemeni Companies. Revolutionizing your brand with AI Services.
            </p>
            <a
              href="https://wa.me/967783334002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: +967783334002
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {['/', '/about', '/services', '/industries', '/portfolio', '/blog', '/contact'].map((path, i) => (
                <li key={path}>
                  <Link to={path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {['Home','About Us','Services','Industries','Portfolio','Blog','Contact'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Contact</h4>
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