import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { motion } from 'framer-motion';
import { Star, Award, Calendar } from 'lucide-react';

const doctorData = [
  {
    name: { fa: 'دکتر محمد احمدی', en: 'Dr. Mohammad Ahmadi', ar: 'د. محمد أحمدي' },
    specialty: { fa: 'جراح زیبایی', en: 'Cosmetic Surgeon', ar: 'جراح تجميل' },
    experience: 18,
    operations: 3500,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/6129573/pexels-photo-6129573.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
  {
    name: { fa: 'دکتر سارا رضایی', en: 'Dr. Sara Rezaei', ar: 'د. سارة رضائي' },
    specialty: { fa: 'چشم پزشک', en: 'Ophthalmologist', ar: 'طبيبة عيون' },
    experience: 15,
    operations: 2800,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6749765/pexels-photo-6749765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
  {
    name: { fa: 'دکتر علی حسینی', en: 'Dr. Ali Hosseini', ar: 'د. علي حسيني' },
    specialty: { fa: 'متخصص قلب', en: 'Cardiologist', ar: 'طبيب قلب' },
    experience: 22,
    operations: 4200,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/15962798/pexels-photo-15962798.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
  {
    name: { fa: 'دکتر مریم کریمی', en: 'Dr. Maryam Karimi', ar: 'د. مريم كريمي' },
    specialty: { fa: 'جراح ارتوپدی', en: 'Orthopedic Surgeon', ar: 'جراحة عظام' },
    experience: 12,
    operations: 1900,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/8460094/pexels-photo-8460094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
  {
    name: { fa: 'دکتر رضا نوری', en: 'Dr. Reza Nouri', ar: 'د. رضا نوري' },
    specialty: { fa: 'دندانپزشک', en: 'Dentist', ar: 'طبيب أسنان' },
    experience: 16,
    operations: 5100,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
  {
    name: { fa: 'دکتر فاطمه موسوی', en: 'Dr. Fatemeh Mousavi', ar: 'د. فاطمة موسوي' },
    specialty: { fa: 'متخصص پوست', en: 'Dermatologist', ar: 'طبيبة جلدية' },
    experience: 14,
    operations: 3200,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/7108250/pexels-photo-7108250.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
];

export default function Doctors() {
  const { lang, dir } = useLanguage();
  const d = translations.doctors;

  return (
    <section id="doctors" dir={dir} className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-6">
            <Award size={16} className="text-blue-500" />
            <span className="text-blue-600 text-sm font-medium">
              {lang === 'fa' ? 'پزشکان مجرب' : lang === 'ar' ? 'أطباء ذوو خبرة' : 'Experienced Doctors'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {d.title[lang]}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {d.subtitle[lang]}
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorData.map((doctor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5`}>
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
                </div>

                {/* Name & Specialty on Image */}
                <div className={`absolute bottom-4 ${dir === 'rtl' ? 'right-4' : 'left-4'}`}>
                  <h3 className="text-white font-bold text-lg">{doctor.name[lang]}</h3>
                  <p className="text-emerald-300 text-sm font-medium">{doctor.specialty[lang]}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} className="text-emerald-500" />
                    <span className="text-sm">
                      <strong className="text-gray-900">{doctor.experience}</strong> {d.experience[lang]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award size={16} className="text-blue-500" />
                    <span className="text-sm">
                      <strong className="text-gray-900">{doctor.operations.toLocaleString()}</strong> {d.operations[lang]}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-sm"
                  >
                    {d.bookNow[lang]}
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300 text-sm">
                    {d.viewProfile[lang]}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
