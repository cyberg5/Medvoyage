import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Shield, Award, Users, Heart } from 'lucide-react';

export default function Hero() {
  const { lang, dir } = useLanguage();
  const hero = translations.hero;

  const stats = [
    { icon: Users, label: hero.stats.patients[lang], color: 'from-blue-500 to-cyan-500' },
    { icon: Award, label: hero.stats.doctors[lang], color: 'from-emerald-500 to-teal-500' },
    { icon: Shield, label: hero.stats.countries[lang], color: 'from-purple-500 to-pink-500' },
    { icon: Heart, label: hero.stats.satisfaction[lang], color: 'from-rose-500 to-orange-500' },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" dir={dir} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37195559/pexels-photo-37195559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
          alt="Medical Center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-emerald-900/70 to-teal-900/80" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Geometric Patterns */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-emerald-500/10 rounded-full" />
      <div className="absolute top-32 right-22 w-48 h-48 border border-teal-500/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-96 h-96 border border-emerald-500/5 rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">
              {lang === 'fa' ? 'پذیرش بیماران بین‌المللی' : lang === 'ar' ? 'استقبال المرضى الدوليين' : 'Accepting International Patients'}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            {hero.title[lang]}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
          >
            {hero.subtitle[lang]}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={() => scrollTo('#reservation')}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">{hero.cta[lang]}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <Play size={18} className="fill-current" />
              {hero.ctaSecondary[lang]}
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                  <stat.icon size={18} className="text-white" />
                </div>
                <p className="text-white font-bold text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollTo('#services')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ArrowDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  );
}
