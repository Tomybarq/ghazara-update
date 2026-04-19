import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, Share2, Palette, Layers, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'SEO, SEM campaigns, AI-powered analytics, content creation and management, pay-per-click advertising.',
    features: ['SEO & SEM Campaigns', 'AI-Powered Analytics', 'Content Creation & Management', 'Pay-Per-Click Advertising', 'Email Marketing Automation'],
    image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/2193b417c_IMG-20260405-WA0011.jpg',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Bot,
    title: 'AI Services',
    desc: 'Intelligent automation solutions that streamline your business processes and boost efficiency.',
    features: ['Business Process Automation', 'Chatbot Development', 'Predictive Analytics', 'Workflow Optimization', 'Custom AI Solutions'],
    image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/a659c61c1_00a20f218_generated_image.png',
    gradient: 'from-purple-500 to-indigo-600',
    reverse: true,
  },
  {
    icon: Share2,
    title: 'Social Media Campaign Strategy',
    desc: 'Strategic social media campaigns that engage your audience and amplify your brand presence.',
    features: ['Platform Strategy', 'Content Calendar Planning', 'Community Management', 'Influencer Partnerships', 'Performance Reporting'],
    image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/717ace1db_786800e08_generated_image.png',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Palette,
    title: 'Graphic Design Solutions',
    desc: 'Stunning visual content that captures attention and communicates your brand message.',
    features: ['Visual Content Creation', 'UI/UX Design', 'Print & Digital Media', 'Motion Graphics', 'Infographics & Presentations'],
    image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/90a5ed12e_059574a85_generated_image.png',
    gradient: 'from-orange-500 to-yellow-500',
    reverse: true,
  },
  {
    icon: Layers,
    title: 'Brand & Visual Identity',
    desc: 'Comprehensive branding solutions including trademark registration, visual identity systems, and brand guidelines.',
    features: ['Brand Strategy', 'Visual Identity Systems', 'Trademark Registration', 'Brand Guidelines', 'Rebranding Services'],
    image: 'https://media.base44.com/images/public/69e424a0f318fadbc38a1597/975236873_1775417060139.png',
    gradient: 'from-teal-500 to-cyan-600',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Services() {
  return (
    <div className="bg-mesh pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 heading-underline">
            Trading & Marketing Solutions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our comprehensive strategies harness data-driven insights and latest AI tools to maximize your ROI and brand reach.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={service.reverse ? 'lg:order-2' : ''}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={service.reverse ? 'lg:order-1' : ''}>
                <div className="rounded-2xl overflow-hidden border border-border">
                  <img src={service.image} alt={service.title} className="w-full h-80 object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}