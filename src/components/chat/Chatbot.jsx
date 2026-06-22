import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/context/LanguageContext';

const SYSTEM_PROMPT = `You are a helpful customer service assistant for Ghazara for Trading & Marketing — a company based in Yemen that provides innovative digital solutions. Here is everything about the company:

**Services:**
- Digital Marketing: SEO, SEM campaigns, AI-powered analytics, content creation, pay-per-click advertising, email marketing automation
- AI Services: Business process automation, chatbot development, predictive analytics, workflow optimization, custom AI solutions
- Social Media Campaign Strategy: Platform strategy, content calendar, community management, influencer partnerships, performance reporting
- Graphic Design Solutions: Visual content creation, UI/UX design, print & digital media, motion graphics, infographics
- Brand & Visual Identity: Brand strategy, visual identity systems, trademark registration, brand guidelines, rebranding

**Industries served:** NGOs, Trading Companies & Agencies

**Stats:** 50+ projects delivered, 30+ happy clients, 3+ years experience, 98% client satisfaction

**Contact:**
- Location: Yemen
- Phone: +967783334002
- Email: info@ghazara.net
- WhatsApp: https://wa.me/967783334002

**Leadership:** Adnan Alhanashi — CEO & Founder

**Values:** Innovation, Partnership, Excellence, Local Impact, Regional Presence

Answer customer questions clearly and professionally. If they want to get in touch, direct them to the contact page or WhatsApp. Keep answers concise and helpful. You can respond in Arabic or English based on the language used by the customer.`;

export default function Chatbot() {
  const { t, isRTL } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t('chat_welcome') }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const conversationHistory = newMessages
      .map(m => `${m.role === 'user' ? 'Customer' : 'Assistant'}: ${m.content}`)
      .join('\n');

    const reply = await base44.integrations.Core.InvokeLLM({
      prompt: `${SYSTEM_PROMPT}\n\nConversation so far:\n${conversationHistory}\n\nPlease reply to the customer's last message as the Ghazara assistant.`,
    });

    setMessages(prev => [...prev, { role: 'assistant', content: typeof reply === 'string' ? reply : reply?.response || "I'm here to help! Please contact us at info@ghazara.net or WhatsApp +967783334002." }]);
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#7039B5] to-[#5B2A8A] text-white shadow-lg flex items-center justify-center glow-brand"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Bot className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: '520px' }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#7039B5]/20 to-[#5B2A8A]/20 border-b border-border">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7039B5] to-[#5B2A8A] flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{t('chat_title')}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  {t('chat_subtitle')}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: '300px' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === 'user' ? (isRTL ? 'flex-row' : 'flex-row-reverse') : 'flex-row'}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    msg.role === 'assistant' ? 'bg-gradient-to-br from-[#7039B5] to-[#5B2A8A]' : 'bg-secondary'
                  }`}>
                    {msg.role === 'assistant' ? <Bot className="w-3.5 h-3.5 text-white" /> : <User className="w-3.5 h-3.5 text-muted-foreground" />}
                  </div>
                  <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-[#7039B5] to-[#5B2A8A] text-white rounded-tr-sm'
                      : 'bg-secondary text-foreground rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2 flex-row">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7039B5] to-[#5B2A8A] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-secondary px-4 py-3 rounded-2xl rounded-tl-sm">
                    <Loader2 className="w-4 h-4 text-muted-foreground animate-spin" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={t('chat_placeholder')}
                disabled={loading}
                className="flex-1 bg-secondary border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7039B5] to-[#5B2A8A] flex items-center justify-center text-white disabled:opacity-40 hover:opacity-90 transition-opacity flex-shrink-0"
              >
                <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}