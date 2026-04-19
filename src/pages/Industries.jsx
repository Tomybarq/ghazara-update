import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Building2, Users, TrendingUp, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Industries() {
  const { t } = useLanguage();

  const ngoFeatures = ['ind_ngo_f1','ind_ngo_f2','ind_ngo_f3','ind_ngo_f4'];
  const tradeFeatures = ['ind_trade_f1','ind_trade_f2','ind_trade_f3','ind_trade_f4'];

  return (
    <div className="bg-mesh pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 heading-underline">{t('ind_page_title')}</h1>
        </motion.div>

        {/* NGOs */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">{t('ind_ngo_title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t('ind_ngo_desc')}</p>
              <ul className="space-y-3 mb-8">
                {ngoFeatures.map((fk) => (
                  <li key={fk} className="flex items-center gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {t(fk)}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm">
                {t('ind_get_started')} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: 'Community Engagement' },
                  { icon: TrendingUp, label: 'Impact Measurement' },
                  { icon: Globe, label: 'Global Reach' },
                  { icon: ShieldCheck, label: 'Trust Building' },
                ].map((item) => (
                  <div key={item.label} className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-purple-500/40 transition-colors">
                    <item.icon className="w-8 h-8 text-purple-400" />
                    <span className="text-sm text-foreground/70 text-center">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trading Companies */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:order-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">{t('ind_trade_title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t('ind_trade_desc')}</p>
              <ul className="space-y-3 mb-8">
                {tradeFeatures.map((fk) => (
                  <li key={fk} className="flex items-center gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {t(fk)}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm">
                {t('ind_get_started')} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" alt="Corporate" className="w-full h-80 object-cover" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}