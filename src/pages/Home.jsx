import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BarChart3, Bot, Share2, Palette, Layers, CheckCircle2, Heart, Building2 } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
];

const services = [
  { icon: BarChart3, title: 'Digital Marketing', desc: 'SEO, SEM campaigns, AI-powered analytics, content creation and management, pay-per-click advertising.' },
  { icon: Bot, title: 'AI Services', desc: 'Intelligent automation solutions that streamline your business processes and boost efficiency.' },
  { icon: Share2, title: 'Social Media Campaign Strategy', desc: 'Strategic social media campaigns that engage your audience and amplify your brand presence.' },
  { icon: Palette, title: 'Graphic Design Solutions', desc: 'Stunning visual content that captures attention and communicates your brand message.' },
  { icon: Layers, title: 'Brand & Visual Identity', desc: 'Comprehensive branding solutions including trademark registration, visual identity systems, and brand guidelines.' },
];

const aboutStats = [
  { value: '50+', label: 'Projects' },
  { value: '30+', label: 'Clients' },
  { value: '98%', label: 'Satisfaction' },
  { value: '24/7', label: 'Support' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="bg-mesh">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden">
        {/* Background orbs */}
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
            Innovative AI-Powered Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Ghazara for Trading &<br />Marketing
          </h1>

          <p className="text-xl md:text-2xl gradient-text-cyan font-semibold mb-4">
            Revolutionizing Your Brand with AI Services
          </p>
          <p className="text-muted-foreground text-lg mb-10">
            Innovative digital solutions tailored for Yemeni Companies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity glow-cyan text-sm"
            >
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-accent transition-colors text-sm"
            >
              Explore Our Work
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
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
              <span className="inline-block px-3 py-1 rounded-full border border-border text-muted-foreground text-xs mb-6">About Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Empowering Brands Across the Middle East
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Ghazara, we blend creativity with technology to elevate your marketing strategies and automate your business processes.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Innovation', 'Strategy', 'Trust'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4" />
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
              Trading & Marketing Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive strategies harness data-driven insights and latest AI tools to maximize your ROI and brand reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:opacity-80 transition-opacity">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 heading-underline">Industries We Serve</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">NGOs</h3>
              <p className="text-muted-foreground text-sm mb-4">Driving impactful campaigns that amplify your mission and expand your reach.</p>
              <Link to="/industries" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:opacity-80">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-card border border-border rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Trading Companies & Agencies</h3>
              <p className="text-muted-foreground text-sm mb-4">Scaling business growth with innovative automation and strategic marketing, establishing your brand NOW.</p>
              <Link to="/industries" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:opacity-80">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp} className="bg-card border border-border rounded-3xl p-12">
            <h2 className="text-4xl font-black text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how our innovative solutions can help you achieve your goals.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm">
                Schedule a Consultation
              </Link>
              <a
                href="https://wa.me/967783334002"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-green-500 hover:bg-green-400 text-white font-semibold transition-colors text-sm"
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}