import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Star, MapPin, Globe } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace cutting-edge technology and creative ideas' },
  { icon: Handshake, title: 'Partnership', desc: 'We work side by side with our clients to achieve their goals' },
  { icon: Star, title: 'Excellence', desc: 'We always strive to deliver the highest quality' },
  { icon: MapPin, title: 'Local Impact', desc: "We're proud to empower businesses in Yemen" },
  { icon: Globe, title: 'Regional Presence', desc: 'Offices in Yemen to provide localized support.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="bg-mesh pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-3 py-1 rounded-full border border-border text-muted-foreground text-xs mb-6">Get to Know Us</span>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Empowering Brands Across the Middle East
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ghazara envisions a future where technology and marketing work hand-in-hand to drive business success.
              </p>
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

        {/* Leadership */}
        <section className="py-16">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-black text-white heading-underline">Leadership</h2>
          </motion.div>
          <motion.div {...fadeUp} className="max-w-sm mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-black">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Adnan Alhanashi</h3>
              <p className="text-primary text-sm">CEO & Founder</p>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="py-16">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-black text-white heading-underline">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}