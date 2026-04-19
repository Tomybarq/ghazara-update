import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', company: '', industry: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const industries = [t('ind_opt1'), t('ind_opt2'), t('ind_opt3'), t('ind_opt4')];
  const serviceOptions = [t('svc_opt1'), t('svc_opt2'), t('svc_opt3'), t('svc_opt4'), t('svc_opt5'), t('svc_opt6')];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ fullName: '', email: '', phone: '', company: '', industry: '', service: '', message: '' });
  };

  return (
    <div className="bg-mesh pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 heading-underline">
            {t('contact_title')}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">{t('contact_desc')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('contact_sent_title')}</h3>
                  <p className="text-muted-foreground text-sm">{t('contact_sent_desc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">{t('contact_name')}</label>
                      <input type="text" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">{t('contact_email')}</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">{t('contact_phone')}</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">{t('contact_company')}</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">{t('contact_industry')}</label>
                      <select value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 transition-colors">
                        <option value="">{t('select_placeholder')}</option>
                        {industries.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">{t('contact_service')}</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 transition-colors">
                        <option value="">{t('select_placeholder')}</option>
                        {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">{t('contact_message')}</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5} className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity">
                    <Send className="w-4 h-4" />
                    {t('contact_send')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-white mb-5">{t('contact_office')}</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, labelKey: 'contact_location', value: 'Yemen' },
                  { icon: Phone, labelKey: 'contact_phone', value: '+967783334002' },
                  { icon: Mail, labelKey: 'contact_email', value: 'info@ghazara.net' },
                ].map((item) => (
                  <div key={item.labelKey} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t(item.labelKey)}</div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{t('contact_whatsapp_title')}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t('contact_whatsapp_desc')}</p>
              <a href="https://wa.me/967783334002" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />
                {t('contact_start_chat')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}