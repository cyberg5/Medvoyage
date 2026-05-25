import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: { fa: 'احمد العتیبی', en: 'Ahmad Al-Otaibi', ar: 'أحمد العتيبي' },
    country: { fa: 'عربستان سعودی', en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
    flag: '🇸🇦',
    service: { fa: 'جراحی زیبایی', en: 'Cosmetic Surgery', ar: 'جراحة التجميل' },
    text: {
      fa: 'تجربه فوق‌العاده‌ای بود. از لحظه ورود تا زمان خروج، همه چیز عالی بود. پزشکان بسیار حرفه‌ای و مهربان بودند.',
      en: 'It was an amazing experience. From arrival to departure, everything was excellent. The doctors were very professional and kind.',
      ar: 'كانت تجربة رائعة. من لحظة الوصول حتى المغادرة، كان كل شيء ممتازاً. الأطباء كانوا محترفين ولطفاء جداً.',
    },
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: { fa: 'ماریا اشمیت', en: 'Maria Schmidt', ar: 'ماريا شميت' },
    country: { fa: 'آلمان', en: 'Germany', ar: 'ألمانيا' },
    flag: '🇩🇪',
    service: { fa: 'چشم پزشکی', en: 'Ophthalmology', ar: 'طب العيون' },
    text: {
      fa: 'عمل لیزیک من در این مرکز انجام شد و نتیجه بی‌نظیر بود. کیفیت خدمات از بهترین مراکز اروپایی هم بالاتر بود.',
      en: 'My LASIK surgery was done at this center and the result was outstanding. The quality of services was even better than the best European centers.',
      ar: 'تم إجراء عملية الليزك في هذا المركز وكانت النتيجة رائعة. جودة الخدمات كانت أفضل حتى من أفضل المراكز الأوروبية.',
    },
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: { fa: 'علی الهاشمی', en: 'Ali Al-Hashimi', ar: 'علي الهاشمي' },
    country: { fa: 'عراق', en: 'Iraq', ar: 'العراق' },
    flag: '🇮🇶',
    service: { fa: 'قلب و عروق', en: 'Cardiology', ar: 'أمراض القلب' },
    text: {
      fa: 'پدرم برای عمل قلب اینجا بستری شد. از مراقبت‌ها و توجه تیم پزشکی بسیار راضی هستیم. خدمات اقامتی هم عالی بود.',
      en: 'My father was hospitalized here for heart surgery. We are very satisfied with the care and attention of the medical team.',
      ar: 'تم إدخال والدي هنا لعملية القلب. نحن راضون جداً عن الرعاية والاهتمام من الفريق الطبي. خدمات الإقامة كانت ممتازة أيضاً.',
    },
    rating: 5,
    avatar: '👨',
  },
  {
    name: { fa: 'سوفیا جانسون', en: 'Sophia Johnson', ar: 'صوفيا جونسون' },
    country: { fa: 'انگلیس', en: 'United Kingdom', ar: 'المملكة المتحدة' },
    flag: '🇬🇧',
    service: { fa: 'دندانپزشکی', en: 'Dental Care', ar: 'طب الأسنان' },
    text: {
      fa: 'برای ایمپلنت دندان به این مرکز مراجعه کردم. هزینه‌ها بسیار مناسب و نتیجه کار عالی بود. حتماً به دوستانم توصیه می‌کنم.',
      en: 'I visited this center for dental implants. The costs were very reasonable and the results were excellent. I will definitely recommend it to my friends.',
      ar: 'زرت هذا المركز لزراعة الأسنان. كانت التكاليف معقولة جداً والنتائج ممتازة. سأوصي بها بالتأكيد لأصدقائي.',
    },
    rating: 5,
    avatar: '👩',
  },
];

export default function Testimonials() {
  const { lang, dir } = useLanguage();
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section dir={dir} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-6">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-amber-600 text-sm font-medium">
              {lang === 'fa' ? 'نظرات بیماران' : lang === 'ar' ? 'آراء المرضى' : 'Patient Reviews'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {lang === 'fa' ? 'بیماران ما چه می‌گویند؟' : lang === 'ar' ? 'ماذا يقول مرضانا؟' : 'What Our Patients Say?'}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {lang === 'fa'
              ? 'تجربیات واقعی بیماران بین‌المللی ما از سفر درمانی'
              : lang === 'ar'
              ? 'تجارب حقيقية لمرضانا الدوليين من رحلاتهم الطبية'
              : 'Real experiences from our international patients\' medical journeys'}
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12 max-w-3xl mx-auto relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 end-6 opacity-10">
                <Quote size={80} className="text-emerald-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 relative z-10">
                "{testimonials[active].text[lang]}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-3xl">
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[active].name[lang]}</h4>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <span>{testimonials[active].flag}</span>
                      <MapPin size={12} />
                      <span>{testimonials[active].country[lang]}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2">
                  <p className="text-emerald-600 text-sm font-semibold">{testimonials[active].service[lang]}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
            >
              {dir === 'rtl' ? <ChevronRight size={20} className="text-gray-600" /> : <ChevronLeft size={20} className="text-gray-600" />}
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-emerald-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
            >
              {dir === 'rtl' ? <ChevronLeft size={20} className="text-gray-600" /> : <ChevronRight size={20} className="text-gray-600" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
