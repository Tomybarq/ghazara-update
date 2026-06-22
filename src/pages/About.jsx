import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Star, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Lightbulb, titleKey: 'val1_title', descKey: 'val1_desc' },
    { icon: Handshake, titleKey: 'val2_title', descKey: 'val2_desc' },
    { icon: Star,      titleKey: 'val3_title', descKey: 'val3_desc' },
    { icon: MapPin,    titleKey: 'val4_title', descKey: 'val4_desc' },
    { icon: Globe,     titleKey: 'val5_title', descKey: 'val5_desc' },
  ];

  return (
    <div className="bg-mesh pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-3 py-1 rounded-full border border-border text-muted-foreground text-xs mb-6">{t('about_page_badge')}</span>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                {t('about_page_title')}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg">{t('about_page_desc')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-black text-white heading-underline">{t('about_leadership')}</h2>
          </motion.div>
          <motion.div {...fadeUp} className="max-w-sm mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7039B5] to-[#5B2A8A] flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-black">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Adnan Alhanashi</h3>
              <p className="text-primary text-sm">{t('about_ceo')}</p>
            </div>
          </motion.div>
        </section>

        <section className="py-16">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-black text-white heading-underline">{t('about_values')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.titleKey}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7039B5] to-[#5B2A8A] flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t(v.titleKey)}</h3>
                <p className="text-muted-foreground text-sm">{t(v.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}