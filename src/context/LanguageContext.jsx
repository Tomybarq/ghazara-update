import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_industries: 'Industries',
    nav_portfolio: 'Portfolio',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    lang_switch: 'العربية',

    // Hero
    hero_badge: 'Innovative AI-Powered Solutions',
    hero_title: 'Ghazara for Trading & Marketing',
    hero_subtitle: 'Revolutionizing Your Brand with AI Services',
    hero_desc: 'Innovative digital solutions tailored for Yemeni Companies.',
    hero_cta1: 'Schedule a Consultation',
    hero_cta2: 'Explore Our Work',
    hero_stat1: 'Projects Delivered',
    hero_stat2: 'Happy Clients',
    hero_stat3: 'Years Experience',

    // About section (home)
    about_label: 'About Us',
    about_title: 'Empowering Brands Across the Middle East',
    about_desc: 'At Ghazara, we blend creativity with technology to elevate your marketing strategies and automate your business processes.',
    about_learn: 'Learn More',
    about_projects: 'Projects',
    about_clients: 'Clients',
    about_satisfaction: 'Satisfaction',
    about_support: 'Support',

    // Services section (home)
    services_title: 'Trading & Marketing Solutions',
    services_desc: 'Our comprehensive strategies harness data-driven insights and latest AI tools to maximize your ROI and brand reach.',
    services_learn: 'Learn More',

    // Industries (home)
    industries_title: 'Industries We Serve',
    ind_ngo_title: 'NGOs',
    ind_ngo_desc: 'Driving impactful campaigns that amplify your mission and expand your reach.',
    ind_trade_title: 'Trading Companies & Agencies',
    ind_trade_desc: 'Scaling business growth with innovative automation and strategic marketing, establishing your brand NOW.',

    // CTA
    cta_title: 'Ready to Transform Your Business?',
    cta_desc: "Let's discuss how our innovative solutions can help you achieve your goals.",
    cta_btn1: 'Schedule a Consultation',
    cta_btn2: 'Chat with us on WhatsApp',

    // Services page
    svc_page_title: 'Trading & Marketing Solutions',
    svc_page_desc: 'Our comprehensive strategies harness data-driven insights and latest AI tools to maximize your ROI and brand reach.',
    svc_get_started: 'Get Started',
    svc1_title: 'Digital Marketing',
    svc1_desc: 'SEO, SEM campaigns, AI-powered analytics, content creation and management, pay-per-click advertising.',
    svc1_f1: 'SEO & SEM Campaigns', svc1_f2: 'AI-Powered Analytics', svc1_f3: 'Content Creation & Management', svc1_f4: 'Pay-Per-Click Advertising', svc1_f5: 'Email Marketing Automation',
    svc2_title: 'AI Services',
    svc2_desc: 'Intelligent automation solutions that streamline your business processes and boost efficiency.',
    svc2_f1: 'Business Process Automation', svc2_f2: 'Chatbot Development', svc2_f3: 'Predictive Analytics', svc2_f4: 'Workflow Optimization', svc2_f5: 'Custom AI Solutions',
    svc3_title: 'Social Media Campaign Strategy',
    svc3_desc: 'Strategic social media campaigns that engage your audience and amplify your brand presence.',
    svc3_f1: 'Platform Strategy', svc3_f2: 'Content Calendar Planning', svc3_f3: 'Community Management', svc3_f4: 'Influencer Partnerships', svc3_f5: 'Performance Reporting',
    svc4_title: 'Graphic Design Solutions',
    svc4_desc: 'Stunning visual content that captures attention and communicates your brand message.',
    svc4_f1: 'Visual Content Creation', svc4_f2: 'UI/UX Design', svc4_f3: 'Print & Digital Media', svc4_f4: 'Motion Graphics', svc4_f5: 'Infographics & Presentations',
    svc5_title: 'Brand & Visual Identity',
    svc5_desc: 'Comprehensive branding solutions including trademark registration, visual identity systems, and brand guidelines.',
    svc5_f1: 'Brand Strategy', svc5_f2: 'Visual Identity Systems', svc5_f3: 'Trademark Registration', svc5_f4: 'Brand Guidelines', svc5_f5: 'Rebranding Services',

    // About page
    about_page_badge: 'Get to Know Us',
    about_page_title: 'Empowering Brands Across the Middle East',
    about_page_desc: 'Ghazara envisions a future where technology and marketing work hand-in-hand to drive business success.',
    about_leadership: 'Leadership',
    about_ceo: 'CEO & Founder',
    about_values: 'Our Values',
    val1_title: 'Innovation', val1_desc: 'We embrace cutting-edge technology and creative ideas',
    val2_title: 'Partnership', val2_desc: 'We work side by side with our clients to achieve their goals',
    val3_title: 'Excellence', val3_desc: 'We always strive to deliver the highest quality',
    val4_title: 'Local Impact', val4_desc: "We're proud to empower businesses in Yemen",
    val5_title: 'Regional Presence', val5_desc: 'Offices in Yemen to provide localized support.',

    // Industries page
    ind_page_title: 'Industries We Serve',
    ind_ngo_f1: 'Impactful awareness campaigns', ind_ngo_f2: 'Social media management', ind_ngo_f3: 'Visual identity design', ind_ngo_f4: 'Performance reporting & analytics',
    ind_trade_f1: 'Integrated marketing strategies', ind_trade_f2: 'Business process automation', ind_trade_f3: 'Brand building', ind_trade_f4: 'Lead generation',
    ind_get_started: 'Get Started',

    // Portfolio page
    port_title: 'Our Portfolio',
    port_desc: "See how Ghazara's solutions have transformed brands across sectors.",
    port_all: 'All', port_ngo: 'NGOs', port_corp: 'Corporate', port_agency: 'Agency',
    port_empty: 'No case studies available',
    port_empty_sub: 'Check back soon for our latest projects',

    // Blog page
    blog_title: 'Insights & Trends',
    blog_desc: 'Stay updated with expert articles, tips, and industry news.',
    blog_empty: 'No articles available yet',
    blog_empty_sub: 'Stay tuned for our latest insights',

    // Contact page
    contact_title: 'Get in Touch with Ghazara',
    contact_desc: 'Send us a message and start your transformation.',
    contact_name: 'Full Name',
    contact_email: 'Email Address',
    contact_phone: 'Phone Number',
    contact_company: 'Company Name',
    contact_industry: 'Industry',
    contact_service: 'Service Interest',
    contact_message: 'Your Message',
    contact_send: 'Send Message',
    contact_sent_title: 'Message Sent!',
    contact_sent_desc: "We'll get back to you soon.",
    contact_office: 'Our Office',
    contact_location: 'Location',
    contact_whatsapp_title: 'Chat with us on WhatsApp',
    contact_whatsapp_desc: 'Connect with us directly on WhatsApp',
    contact_start_chat: 'Start Chat',
    select_placeholder: 'Select...',
    ind_opt1: 'NGO', ind_opt2: 'Corporate', ind_opt3: 'Agency', ind_opt4: 'Other',
    svc_opt1: 'Digital Marketing', svc_opt2: 'AI Services', svc_opt3: 'Social Media', svc_opt4: 'Graphic Design', svc_opt5: 'Branding', svc_opt6: 'Other',

    // Footer
    footer_desc: 'Innovative digital solutions tailored for Yemeni Companies. Revolutionizing your brand with AI Services.',
    footer_nav: 'Navigation',
    footer_contact: 'Contact',

    // Chatbot
    chat_title: 'Ghazara Assistant',
    chat_subtitle: 'Ask us anything',
    chat_placeholder: 'Type your message...',
    chat_welcome: "Hello! I'm Ghazara's AI assistant. How can I help you today?",
    chat_send: 'Send',
  },
  ar: {
    // Navbar
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_services: 'الخدمات',
    nav_industries: 'القطاعات',
    nav_portfolio: 'أعمالنا',
    nav_blog: 'المدونة',
    nav_contact: 'تواصل معنا',
    lang_switch: 'English',

    // Hero
    hero_badge: 'حلول مبتكرة مدعومة بالذكاء الاصطناعي',
    hero_title: 'غزارة للتجارة والتسويق',
    hero_subtitle: 'ثورة في علامتك التجارية بخدمات الذكاء الاصطناعي',
    hero_desc: 'حلول رقمية مبتكرة مصممة للشركات اليمنية.',
    hero_cta1: 'جدول استشارة',
    hero_cta2: 'استكشف أعمالنا',
    hero_stat1: 'مشروع مُنجز',
    hero_stat2: 'عميل سعيد',
    hero_stat3: 'سنوات خبرة',

    // About section (home)
    about_label: 'من نحن',
    about_title: 'تمكين العلامات التجارية في الشرق الأوسط',
    about_desc: 'في غزارة، نمزج الإبداع بالتكنولوجيا لرفع مستوى استراتيجياتك التسويقية وأتمتة عمليات أعمالك.',
    about_learn: 'اعرف المزيد',
    about_projects: 'مشروع',
    about_clients: 'عميل',
    about_satisfaction: 'رضا',
    about_support: 'دعم',

    // Services section (home)
    services_title: 'حلول التجارة والتسويق',
    services_desc: 'تستخدم استراتيجياتنا الشاملة الرؤى المبنية على البيانات وأحدث أدوات الذكاء الاصطناعي لتعظيم عائد استثمارك ووصول علامتك التجارية.',
    services_learn: 'اعرف المزيد',

    // Industries (home)
    industries_title: 'القطاعات التي نخدمها',
    ind_ngo_title: 'المنظمات غير الحكومية',
    ind_ngo_desc: 'إدارة حملات مؤثرة تضخّم رسالتك وتوسّع نطاق وصولك.',
    ind_trade_title: 'شركات التجارة والوكالات',
    ind_trade_desc: 'تنمية الأعمال بأتمتة مبتكرة وتسويق استراتيجي لبناء علامتك التجارية الآن.',

    // CTA
    cta_title: 'هل أنت مستعد لتحويل أعمالك؟',
    cta_desc: 'دعنا نناقش كيف يمكن لحلولنا المبتكرة مساعدتك في تحقيق أهدافك.',
    cta_btn1: 'جدول استشارة',
    cta_btn2: 'تحدث معنا على واتساب',

    // Services page
    svc_page_title: 'حلول التجارة والتسويق',
    svc_page_desc: 'تستخدم استراتيجياتنا الشاملة الرؤى المبنية على البيانات وأحدث أدوات الذكاء الاصطناعي.',
    svc_get_started: 'ابدأ الآن',
    svc1_title: 'التسويق الرقمي',
    svc1_desc: 'حملات SEO وSEM وتحليلات مدعومة بالذكاء الاصطناعي وإنشاء المحتوى وإعلانات الدفع لكل نقرة.',
    svc1_f1: 'حملات SEO وSEM', svc1_f2: 'تحليلات الذكاء الاصطناعي', svc1_f3: 'إنشاء وإدارة المحتوى', svc1_f4: 'إعلانات الدفع بالنقرة', svc1_f5: 'أتمتة التسويق عبر البريد',
    svc2_title: 'خدمات الذكاء الاصطناعي',
    svc2_desc: 'حلول أتمتة ذكية تبسّط عمليات أعمالك وتعزز الكفاءة.',
    svc2_f1: 'أتمتة العمليات التجارية', svc2_f2: 'تطوير روبوتات المحادثة', svc2_f3: 'التحليلات التنبؤية', svc2_f4: 'تحسين سير العمل', svc2_f5: 'حلول الذكاء الاصطناعي المخصصة',
    svc3_title: 'استراتيجية حملات التواصل الاجتماعي',
    svc3_desc: 'حملات تواصل اجتماعي استراتيجية تشرك جمهورك وتضخّم حضور علامتك التجارية.',
    svc3_f1: 'استراتيجية المنصة', svc3_f2: 'تخطيط تقويم المحتوى', svc3_f3: 'إدارة المجتمع', svc3_f4: 'شراكات المؤثرين', svc3_f5: 'تقارير الأداء',
    svc4_title: 'حلول التصميم الجرافيكي',
    svc4_desc: 'محتوى بصري رائع يلفت الانتباه ويوصل رسالة علامتك التجارية.',
    svc4_f1: 'إنشاء المحتوى البصري', svc4_f2: 'تصميم UI/UX', svc4_f3: 'وسائط الطباعة والرقمية', svc4_f4: 'رسومات متحركة', svc4_f5: 'إنفوجرافيك وعروض تقديمية',
    svc5_title: 'الهوية التجارية والبصرية',
    svc5_desc: 'حلول علامة تجارية شاملة تشمل تسجيل العلامات التجارية وأنظمة الهوية البصرية.',
    svc5_f1: 'استراتيجية العلامة التجارية', svc5_f2: 'أنظمة الهوية البصرية', svc5_f3: 'تسجيل العلامة التجارية', svc5_f4: 'إرشادات العلامة التجارية', svc5_f5: 'إعادة تسمية العلامة التجارية',

    // About page
    about_page_badge: 'تعرف علينا',
    about_page_title: 'تمكين العلامات التجارية في الشرق الأوسط',
    about_page_desc: 'تتصور غزارة مستقبلاً تعمل فيه التكنولوجيا والتسويق يداً بيد لدفع نجاح الأعمال.',
    about_leadership: 'القيادة',
    about_ceo: 'المدير التنفيذي والمؤسس',
    about_values: 'قيمنا',
    val1_title: 'الابتكار', val1_desc: 'نتبنى أحدث التقنيات والأفكار الإبداعية',
    val2_title: 'الشراكة', val2_desc: 'نعمل جنباً إلى جنب مع عملائنا لتحقيق أهدافهم',
    val3_title: 'التميز', val3_desc: 'نسعى دائماً لتقديم أعلى مستويات الجودة',
    val4_title: 'التأثير المحلي', val4_desc: 'نفخر بتمكين الشركات في اليمن',
    val5_title: 'الحضور الإقليمي', val5_desc: 'مكاتب في اليمن لتقديم الدعم المحلي.',

    // Industries page
    ind_page_title: 'القطاعات التي نخدمها',
    ind_ngo_f1: 'حملات توعية مؤثرة', ind_ngo_f2: 'إدارة وسائل التواصل الاجتماعي', ind_ngo_f3: 'تصميم الهوية البصرية', ind_ngo_f4: 'تقارير الأداء والتحليلات',
    ind_trade_f1: 'استراتيجيات تسويقية متكاملة', ind_trade_f2: 'أتمتة العمليات التجارية', ind_trade_f3: 'بناء العلامة التجارية', ind_trade_f4: 'توليد العملاء المحتملين',
    ind_get_started: 'ابدأ الآن',

    // Portfolio page
    port_title: 'أعمالنا',
    port_desc: 'انظر كيف حوّلت حلول غزارة العلامات التجارية عبر القطاعات.',
    port_all: 'الكل', port_ngo: 'المنظمات', port_corp: 'الشركات', port_agency: 'الوكالات',
    port_empty: 'لا توجد دراسات حالة متاحة',
    port_empty_sub: 'تابعنا لمشاهدة أحدث مشاريعنا',

    // Blog page
    blog_title: 'رؤى واتجاهات',
    blog_desc: 'ابق على اطلاع بأحدث المقالات والنصائح وأخبار الصناعة.',
    blog_empty: 'لا توجد مقالات متاحة بعد',
    blog_empty_sub: 'ترقب أحدث رؤانا',

    // Contact page
    contact_title: 'تواصل مع غزارة',
    contact_desc: 'أرسل لنا رسالة وابدأ رحلة التحول.',
    contact_name: 'الاسم الكامل',
    contact_email: 'البريد الإلكتروني',
    contact_phone: 'رقم الهاتف',
    contact_company: 'اسم الشركة',
    contact_industry: 'القطاع',
    contact_service: 'الخدمة المطلوبة',
    contact_message: 'رسالتك',
    contact_send: 'إرسال الرسالة',
    contact_sent_title: 'تم الإرسال!',
    contact_sent_desc: 'سنتواصل معك قريباً.',
    contact_office: 'مكتبنا',
    contact_location: 'الموقع',
    contact_whatsapp_title: 'تحدث معنا على واتساب',
    contact_whatsapp_desc: 'تواصل معنا مباشرة عبر واتساب',
    contact_start_chat: 'ابدأ المحادثة',
    select_placeholder: 'اختر...',
    ind_opt1: 'منظمة غير حكومية', ind_opt2: 'شركة', ind_opt3: 'وكالة', ind_opt4: 'أخرى',
    svc_opt1: 'التسويق الرقمي', svc_opt2: 'خدمات الذكاء الاصطناعي', svc_opt3: 'التواصل الاجتماعي', svc_opt4: 'التصميم الجرافيكي', svc_opt5: 'العلامة التجارية', svc_opt6: 'أخرى',

    // Footer
    footer_desc: 'حلول رقمية مبتكرة مصممة للشركات اليمنية. ثورة في علامتك التجارية بخدمات الذكاء الاصطناعي.',
    footer_nav: 'روابط',
    footer_contact: 'التواصل',

    // Chatbot
    chat_title: 'مساعد غزارة',
    chat_subtitle: 'اسألنا أي شيء',
    chat_placeholder: 'اكتب رسالتك...',
    chat_welcome: 'مرحباً! أنا مساعد غزارة الذكي. كيف يمكنني مساعدتك اليوم؟',
    chat_send: 'إرسال',
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');
  const t = (key) => translations[lang][key] || translations['en'][key] || key;
  const isRTL = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-sans' : 'font-inter'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}