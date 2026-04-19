import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, Share2, Palette, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: BarChart3,
      titleKey: 'svc1_title', descKey: 'svc1_desc',
      featureKeys: ['svc1_f1','svc1_f2','svc1_f3','svc1_f4','svc1_f5'],
      image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/2193b417c_IMG-20260405-WA0011.jpg',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Bot,
      titleKey: 'svc2_title', descKey: 'svc2_desc',
      featureKeys: ['svc2_f1','svc2_f2','svc2_f3','svc2_f4','svc2_f5'],
      image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/a659c61c1_00a20f218_generated_image.png',
      gradient: 'from-purple-500 to-indigo-600',
      reverse: true,
    },
    {
      icon: Share2,
      titleKey: 'svc3_title', descKey: 'svc3_desc',
      featureKeys: ['svc3_f1','svc3_f2','svc3_f3','svc3_f4','svc3_f5'],
      image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/717ace1db_786800e08_generated_image.png',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Palette,
      titleKey: 'svc4_title', descKey: 'svc4_desc',
      featureKeys: ['svc4_f1','svc4_f2','svc4_f3','svc4_f4','svc4_f5'],
      image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/90a5ed12e_059574a85_generated_image.png',
      gradient: 'from-orange-500 to-yellow-500',
      reverse: true,
    },
    {
      icon: Layers,
      titleKey: 'svc5_title', descKey: 'svc5_desc',
      featureKeys: ['svc5_f1','svc5_f2','svc5_f3','svc5_f4','svc5_f5'],
      image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/975236873_1775417060139.png',
      gradient: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <div className="bg-mesh pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 heading-underline">{t('svc_page_title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('svc_page_desc')}</p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={service.reverse ? 'lg:order-2' : ''}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white mb-4">{t(service.titleKey)}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{t(service.descKey)}</p>
                <ul className="space-y-3 mb-8">
                  {service.featureKeys.map((fk) => (
                    <li key={fk} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {t(fk)}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
                >
                  {t('svc_get_started')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={service.reverse ? 'lg:order-1' : ''}>
                <div className="rounded-2xl overflow-hidden border border-border">
                  <img src={service.image} alt={t(service.titleKey)} className="w-full h-80 object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}