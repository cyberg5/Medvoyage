import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, type Language } from '../i18n/translations';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const langNames: Record<Language, string> = {
  fa: 'فارسی',
  en: 'English',
  ar: 'العربية',
};

const langFlags: Record<Language, string> = {
  fa: '🇮🇷',
  en: '🇬🇧',
  ar: '🇸🇦',
};

export default function Navbar() {
  const { lang, setLang, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const nav = translations.nav;

  const navItems = [
    { key: 'home', label: nav.home[lang], href: '#home' },
    { key: 'services', label: nav.services[lang], href: '#services' },
    { key: 'doctors', label: nav.doctors[lang], href: '#doctors' },
    { key: 'reservation', label: nav.reservation[lang], href: '#reservation' },
    { key: 'accommodation', label: nav.accommodation[lang], href: '#accommodation' },
    { key: 'payment', label: nav.payment[lang], href: '#payment' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-emerald-900/5'
          : 'bg-transparent'
      }`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('#home')}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'} transition-colors`}>
                MedVoyage
              </h1>
              <p className={`text-[10px] ${scrolled ? 'text-emerald-600' : 'text-emerald-300'} transition-colors -mt-1`}>
                {lang === 'fa' ? 'گردشگری سلامت' : lang === 'ar' ? 'السياحة الصحية' : 'Health Tourism'}
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.href)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-emerald-500/10 ${
                  scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  scrolled
                    ? 'border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50'
                    : 'border-white/20 text-white hover:border-white/40 hover:bg-white/10'
                }`}
              >
                <Globe size={16} />
                <span>{langFlags[lang]}</span>
                <span className="hidden sm:inline">{langNames[lang]}</span>
                <ChevronDown size={14} className={`transition-transform ${langDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 end-0 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[160px]"
                  >
                    {(Object.keys(langNames) as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangDropdown(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-emerald-50 transition-colors ${
                          l === lang ? 'bg-emerald-50 text-emerald-600 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-lg">{langFlags[l]}</span>
                        <span>{langNames[l]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.href)}
                  className="w-full text-start px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
