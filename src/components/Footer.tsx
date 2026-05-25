import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send,
  MessageCircle, Globe, Heart, Share2
} from 'lucide-react';

export default function Footer() {
  const { lang, dir } = useLanguage();
  const f = translations.footer;
  const nav = translations.nav;

  const contactItems = [
    {
      icon: MapPin,
      text: lang === 'fa' ? 'تهران، خیابان ولیعصر، مرکز درمانی مدویاج' : lang === 'ar' ? 'طهران، شارع وليعصر، مركز ميد فوياج الطبي' : 'Tehran, Valiasr St., MedVoyage Medical Center',
    },
    {
      icon: Phone,
      text: '+98 21 1234 5678',
    },
    {
      icon: Mail,
      text: 'info@medvoyage.com',
    },
    {
      icon: Clock,
      text: lang === 'fa' ? 'شنبه تا پنجشنبه: ۸ صبح - ۸ شب' : lang === 'ar' ? 'السبت إلى الخميس: ٨ ص - ٨ م' : 'Sat-Thu: 8 AM - 8 PM',
    },
  ];

  const quickLinks = [
    { label: nav.home[lang], href: '#home' },
    { label: nav.services[lang], href: '#services' },
    { label: nav.doctors[lang], href: '#doctors' },
    { label: nav.reservation[lang], href: '#reservation' },
    { label: nav.accommodation[lang], href: '#accommodation' },
    { label: nav.payment[lang], href: '#payment' },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer dir={dir} className="bg-gray-950 text-gray-300 relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">MedVoyage</h3>
                <p className="text-emerald-400 text-xs -mt-0.5">
                  {lang === 'fa' ? 'گردشگری سلامت' : lang === 'ar' ? 'السياحة الصحية' : 'Health Tourism'}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {f.about.desc[lang]}
            </p>
            <div className="flex gap-3">
              {[Heart, MessageCircle, Share2, Globe].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">{f.quickLinks[lang]}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">{f.contactInfo[lang]}</h3>
            <ul className="space-y-4">
              {contactItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={16} className="text-emerald-400" />
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">{f.newsletter.title[lang]}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{f.newsletter.desc[lang]}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={f.newsletter.placeholder[lang]}
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700/50 text-white placeholder-gray-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
              />
              <button className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">{f.rights[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
