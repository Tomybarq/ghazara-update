import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className="bg-mesh pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 heading-underline">
            {t('blog_title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('blog_desc')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-24 text-muted-foreground"
        >
          <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-muted-foreground/50" />
          </div>
          <p className="text-lg">{t('blog_empty')}</p>
          <p className="text-sm mt-2 text-muted-foreground/60">{t('blog_empty_sub')}</p>
        </motion.div>
      </div>
    </div>
  );
}