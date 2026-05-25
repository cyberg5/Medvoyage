import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { motion } from 'framer-motion';
import {
  Wifi, Car, UtensilsCrossed, Languages, Headphones,
  MapPinned, Star, Check, Crown, Building2, Home
} from 'lucide-react';

const roomImages = [
  'https://images.pexels.com/photos/14750392/pexels-photo-14750392.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
  'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
  'https://images.pexels.com/photos/32334231/pexels-photo-32334231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
];

export default function Accommodation() {
  const { lang, dir } = useLanguage();
  const a = translations.accommodation;

  const featureIcons = [
    { icon: Wifi, ...a.features.wifi },
    { icon: Car, ...a.features.transfer },
    { icon: UtensilsCrossed, ...a.features.food },
    { icon: Languages, ...a.features.interpreter },
    { icon: Headphones, ...a.features.support },
    { icon: MapPinned, ...a.features.tour },
  ];

  const rooms = [
    {
      ...a.vip,
      image: roomImages[0],
      icon: Crown,
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-200',
      bgColor: 'bg-amber-50',
      features: [
        lang === 'fa' ? 'اتاق خواب مجزا' : lang === 'ar' ? 'غرفة نوم منفصلة' : 'Separate bedroom',
        lang === 'fa' ? 'سالن پذیرایی' : lang === 'ar' ? 'صالة استقبال' : 'Living room',
        lang === 'fa' ? 'مینی‌بار' : lang === 'ar' ? 'ميني بار' : 'Mini bar',
        lang === 'fa' ? 'سرویس VIP' : lang === 'ar' ? 'خدمة VIP' : 'VIP service',
      ],
      popular: true,
    },
    {
      ...a.standard,
      image: roomImages[1],
      icon: Building2,
      color: 'from-blue-500 to-indigo-500',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      features: [
        lang === 'fa' ? 'تخت ۲ نفره' : lang === 'ar' ? 'سرير مزدوج' : 'Double bed',
        lang === 'fa' ? 'حمام اختصاصی' : lang === 'ar' ? 'حمام خاص' : 'Private bathroom',
        lang === 'fa' ? 'تلویزیون' : lang === 'ar' ? 'تلفزيون' : 'Television',
        lang === 'fa' ? 'صبحانه رایگان' : lang === 'ar' ? 'إفطار مجاني' : 'Free breakfast',
      ],
      popular: false,
    },
    {
      ...a.apartment,
      image: roomImages[2],
      icon: Home,
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-200',
      bgColor: 'bg-emerald-50',
      features: [
        lang === 'fa' ? 'آشپزخانه مجهز' : lang === 'ar' ? 'مطبخ مجهز' : 'Equipped kitchen',
        lang === 'fa' ? '۲ اتاق خواب' : lang === 'ar' ? 'غرفتا نوم' : '2 bedrooms',
        lang === 'fa' ? 'لباسشویی' : lang === 'ar' ? 'غسالة' : 'Washing machine',
        lang === 'fa' ? 'پارکینگ اختصاصی' : lang === 'ar' ? 'موقف سيارات خاص' : 'Private parking',
      ],
      popular: false,
    },
  ];

  return (
    <section id="accommodation" dir={dir} className="py-24 bg-gradient-to-b from-emerald-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-emerald-500 to-blue-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-6">
            <Crown size={16} className="text-amber-500" />
            <span className="text-amber-600 text-sm font-medium">
              {lang === 'fa' ? 'اقامت لوکس' : lang === 'ar' ? 'إقامة فاخرة' : 'Luxury Stay'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {a.title[lang]}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {a.subtitle[lang]}
          </p>
        </motion.div>

        {/* Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {featureIcons.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-md shadow-gray-100/50 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 mx-auto rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-3 shadow-md shadow-emerald-500/20">
                <f.icon size={20} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-700">{f[lang]}</p>
            </div>
          ))}
        </motion.div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border ${
                room.popular ? 'border-amber-300 ring-2 ring-amber-200' : 'border-gray-100'
              } hover:shadow-2xl transition-all duration-500`}
            >
              {/* Popular Badge */}
              {room.popular && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  {lang === 'fa' ? '⭐ محبوب‌ترین' : lang === 'ar' ? '⭐ الأكثر شعبية' : '⭐ Most Popular'}
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className={`absolute bottom-4 ${dir === 'rtl' ? 'right-4' : 'left-4'} flex items-center gap-1`}>
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${room.color} flex items-center justify-center shadow-md`}>
                    <room.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{room.title[lang]}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{room.desc[lang]}</p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {room.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className={`${room.bgColor} rounded-xl p-4 mb-4`}>
                  <p className="text-lg font-bold text-gray-900">{room.price[lang]}</p>
                </div>

                <button
                  onClick={() => document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3.5 bg-gradient-to-r ${room.color} text-white font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                >
                  {translations.common.bookNow[lang]}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
