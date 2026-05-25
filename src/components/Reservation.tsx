import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, User, Mail, Phone, Globe, FileText, Send,
  CheckCircle, MapPin, Clock, Headphones
} from 'lucide-react';

export default function Reservation() {
  const { lang, dir } = useLanguage();
  const r = translations.reservation;
  const s = translations.services;
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    s.inpatient.title[lang],
    s.cosmetic.title[lang],
    s.eye.title[lang],
    s.dental.title[lang],
    s.cardiology.title[lang],
    s.orthopedic.title[lang],
    s.hairTransplant.title[lang],
    s.weightLoss.title[lang],
  ];

  const countries = lang === 'fa'
    ? ['ایران', 'عراق', 'افغانستان', 'ترکیه', 'امارات', 'عمان', 'کویت', 'آلمان', 'انگلیس', 'سایر']
    : lang === 'ar'
    ? ['إيران', 'العراق', 'أفغانستان', 'تركيا', 'الإمارات', 'عمان', 'الكويت', 'ألمانيا', 'بريطانيا', 'أخرى']
    : ['Iran', 'Iraq', 'Afghanistan', 'Turkey', 'UAE', 'Oman', 'Kuwait', 'Germany', 'UK', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const features = [
    {
      icon: Clock,
      title: lang === 'fa' ? 'پاسخ سریع' : lang === 'ar' ? 'استجابة سريعة' : 'Quick Response',
      desc: lang === 'fa' ? 'پاسخ در کمتر از ۲ ساعت' : lang === 'ar' ? 'الرد في أقل من ساعتين' : 'Response within 2 hours',
    },
    {
      icon: Headphones,
      title: lang === 'fa' ? 'مشاوره رایگان' : lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation',
      desc: lang === 'fa' ? 'مشاوره آنلاین با پزشک' : lang === 'ar' ? 'استشارة طبية عبر الإنترنت' : 'Online doctor consultation',
    },
    {
      icon: MapPin,
      title: lang === 'fa' ? 'هماهنگی سفر' : lang === 'ar' ? 'تنسيق السفر' : 'Travel Coordination',
      desc: lang === 'fa' ? 'برنامه‌ریزی کامل سفر' : lang === 'ar' ? 'تخطيط رحلة كامل' : 'Complete trip planning',
    },
  ];

  return (
    <section id="reservation" dir={dir} className="py-24 bg-gradient-to-b from-white to-emerald-50/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 mb-6">
            <Calendar size={16} className="text-emerald-500" />
            <span className="text-emerald-600 text-sm font-medium">
              {lang === 'fa' ? 'رزرو آنلاین' : lang === 'ar' ? 'الحجز عبر الإنترنت' : 'Online Booking'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {r.title[lang]}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {r.subtitle[lang]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                    <f.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle size={24} />
                <h3 className="font-bold text-lg">
                  {lang === 'fa' ? 'تضمین کیفیت' : lang === 'ar' ? 'ضمان الجودة' : 'Quality Guarantee'}
                </h3>
              </div>
              <p className="text-emerald-100 text-sm leading-relaxed">
                {lang === 'fa'
                  ? 'ما بهترین خدمات درمانی و اقامتی را با ضمانت کیفیت به شما ارائه می‌دهیم.'
                  : lang === 'ar'
                  ? 'نقدم لكم أفضل الخدمات الطبية والإقامية مع ضمان الجودة.'
                  : 'We provide you with the best medical and hospitality services with quality guarantee.'}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{r.success[lang]}</h3>
                    <p className="text-gray-500">
                      {lang === 'fa'
                        ? 'کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.'
                        : lang === 'ar'
                        ? 'سيتواصل معك خبراؤنا في أقرب وقت ممكن.'
                        : 'Our experts will contact you as soon as possible.'}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <User size={14} className="inline me-1.5 text-emerald-500" />
                          {r.fullName[lang]}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                          placeholder={r.fullName[lang]}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Mail size={14} className="inline me-1.5 text-emerald-500" />
                          {r.email[lang]}
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                          placeholder={r.email[lang]}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Phone size={14} className="inline me-1.5 text-emerald-500" />
                          {r.phone[lang]}
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                          placeholder={r.phone[lang]}
                        />
                      </div>

                      {/* Country */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Globe size={14} className="inline me-1.5 text-emerald-500" />
                          {r.country[lang]}
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm bg-white appearance-none"
                        >
                          <option value="">{r.selectCountry[lang]}</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <FileText size={14} className="inline me-1.5 text-emerald-500" />
                          {r.service[lang]}
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm bg-white appearance-none"
                        >
                          <option value="">{r.selectService[lang]}</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Calendar size={14} className="inline me-1.5 text-emerald-500" />
                          {r.date[lang]}
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FileText size={14} className="inline me-1.5 text-emerald-500" />
                        {r.message[lang]}
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm resize-none"
                        placeholder={r.message[lang]}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                    >
                      <Send size={20} />
                      {r.submit[lang]}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
