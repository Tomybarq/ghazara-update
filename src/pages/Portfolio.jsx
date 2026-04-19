import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Heart, Building2, Briefcase } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const { t } = useLanguage();

  const filters = [
    { key: 'all',      labelKey: 'port_all',    icon: LayoutGrid },
    { key: 'ngo',      labelKey: 'port_ngo',    icon: Heart },
    { key: 'corporate',labelKey: 'port_corp',   icon: Building2 },
    { key: 'agency',   labelKey: 'port_agency', icon: Briefcase },
  ];

  return (
    <div className="bg-mesh pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 heading-underline">
            {t('port_title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('port_desc')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f.key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              <f.icon className="w-4 h-4" />
              {t(f.labelKey)}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-24 text-muted-foreground"
        >
          <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-4">
            <LayoutGrid className="w-8 h-8 text-muted-foreground/50" />
          </div>
          <p className="text-lg">{t('port_empty')}</p>
          <p className="text-sm mt-2 text-muted-foreground/60">{t('port_empty_sub')}</p>
        </motion.div>
      </div>
    </div>
  );
}