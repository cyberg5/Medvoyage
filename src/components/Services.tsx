import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { motion } from 'framer-motion';
import {
  BedDouble, Sparkles, Eye, Stethoscope, Heart, Bone,
  Scissors, Scale
} from 'lucide-react';

const serviceImages = [
  'https://images.pexels.com/photos/20186736/pexels-photo-20186736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  'https://images.pexels.com/photos/4586708/pexels-photo-4586708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  'https://images.pexels.com/photos/5996705/pexels-photo-5996705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  'https://images.pexels.com/photos/11781911/pexels-photo-11781911.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  'https://images.pexels.com/photos/33916285/pexels-photo-33916285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  'https://images.pexels.com/photos/31000573/pexels-photo-31000573.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  'https://images.pexels.com/photos/36963686/pexels-photo-36963686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  'https://images.pexels.com/photos/33903858/pexels-photo-33903858.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
];

export default function Services() {
  const { lang, dir } = useLanguage();
  const s = translations.services;

  const services = [
    { ...s.inpatient, icon: BedDouble, color: 'from-blue-500 to-indigo-600', img: serviceImages[0] },
    { ...s.cosmetic, icon: Sparkles, color: 'from-pink-500 to-rose-600', img: serviceImages[1] },
    { ...s.eye, icon: Eye, color: 'from-cyan-500 to-blue-600', img: serviceImages[2] },
    { ...s.dental, icon: Stethoscope, color: 'from-violet-500 to-purple-600', img: serviceImages[3] },
    { ...s.cardiology, icon: Heart, color: 'from-red-500 to-rose-600', img: serviceImages[4] },
    { ...s.orthopedic, icon: Bone, color: 'from-amber-500 to-orange-600', img: serviceImages[5] },
    { ...s.hairTransplant, icon: Scissors, color: 'from-emerald-500 to-teal-600', img: serviceImages[6] },
    { ...s.weightLoss, icon: Scale, color: 'from-teal-500 to-cyan-600', img: serviceImages[7] },
  ];

  return (
    <section id="services" dir={dir} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
      <div className="absolute top-40 -right-32 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 mb-6">
            <Sparkles size={16} className="text-emerald-500" />
            <span className="text-emerald-600 text-sm font-medium">
              {lang === 'fa' ? 'خدمات تخصصی' : lang === 'ar' ? 'خدمات متخصصة' : 'Specialized Services'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {s.title[lang]}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {s.subtitle[lang]}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className={`absolute top-4 ${dir === 'rtl' ? 'right-4' : 'left-4'} w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon size={22} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.title[lang]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc[lang]}
                </p>
                <button
                  onClick={() => document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 text-emerald-600 text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all duration-300"
                >
                  {translations.common.learnMore[lang]}
                  <span className={`${dir === 'rtl' ? 'rotate-180' : ''}`}>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
