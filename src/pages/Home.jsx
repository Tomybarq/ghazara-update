import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BarChart3, Bot, Share2, Palette, Layers, Heart, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: '50+', label: t('hero_stat1') },
    { value: '30+', label: t('hero_stat2') },
    { value: '3+',  label: t('hero_stat3') },
  ];

  const services = [
    { icon: BarChart3, titleKey: 'svc1_title', descKey: 'svc1_desc' },
    { icon: Bot,      titleKey: 'svc2_title', descKey: 'svc2_desc' },
    { icon: Share2,   titleKey: 'svc3_title', descKey: 'svc3_desc' },
    { icon: Palette,  titleKey: 'svc4_title', descKey: 'svc4_desc' },
    { icon: Layers,   titleKey: 'svc5_title', descKey: 'svc5_desc' },
  ];

  const aboutStats = [
    { value: '50+', label: t('about_projects') },
    { value: '30+', label: t('about_clients') },
    { value: '98%', label: t('about_satisfaction') },
    { value: '24/7', label: t('about_support') },
  ];

  return (
    <div className="bg-mesh">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            {t('hero_badge')}
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            {t('hero_title')}
          </h1>

          <p className="text-xl md:text-2xl gradient-text-cyan font-semibold mb-4">
            {t('hero_subtitle')}
          </p>
          <p className="text-muted-foreground text-lg mb-10">
            {t('hero_desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity glow-cyan text-sm"
            >
              {t('hero_cta1')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-accent transition-colors text-sm"
            >
              {t('hero_cta2')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-12 mt-24"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-black gradient-text-cyan">{s.value}</div>
              <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-3 py-1 rounded-full border border-border text-muted-foreground text-xs mb-6">{t('about_label')}</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                {t('about_title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{t('about_desc')}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Innovation', 'Strategy', 'Trust'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity">
                {t('about_learn')} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                {aboutStats.map((s) => (
                  <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black gradient-text-cyan">{s.value}</div>
                    <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 heading-underline">
              {t('services_title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('services_desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.titleKey}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(s.descKey)}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:opacity-80 transition-opacity">
                  {t('services_learn')} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 heading-underline">
              {t('industries_title')}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('ind_ngo_title')}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t('ind_ngo_desc')}</p>
              <Link to="/industries" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:opacity-80">
                {t('about_learn')} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-card border border-border rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('ind_trade_title')}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t('ind_trade_desc')}</p>
              <Link to="/industries" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:opacity-80">
                {t('about_learn')} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp} className="bg-card border border-border rounded-3xl p-12">
            <h2 className="text-4xl font-black text-white mb-4">{t('cta_title')}</h2>
            <p className="text-muted-foreground mb-8">{t('cta_desc')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm">
                {t('cta_btn1')}
              </Link>
              <a
                href="https://wa.me/967783334002"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-green-500 hover:bg-green-400 text-white font-semibold transition-colors text-sm"
              >
                {t('cta_btn2')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}