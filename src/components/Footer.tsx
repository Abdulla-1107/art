import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'Telegram' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Bibisora
            </h3>
            <p className="text-muted-foreground">
              Contemporary artist creating timeless pieces that speak to the soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.home')}</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.home')}
              </Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.gallery')}
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact.social')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth hover-lift"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
          <div className="mt-2 space-x-4">
            <Link to="#" className="hover:text-primary transition-smooth">
              {t('footer.privacy')}
            </Link>
            <Link to="#" className="hover:text-primary transition-smooth">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
