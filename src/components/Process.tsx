import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, Plane, Stethoscope, SmilePlus } from 'lucide-react';

export default function Process() {
  const { lang, dir } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      number: lang === 'fa' ? '۰۱' : lang === 'ar' ? '٠١' : '01',
      title: {
        fa: 'مشاوره اولیه',
        en: 'Initial Consultation',
        ar: 'الاستشارة الأولية',
      },
      desc: {
        fa: 'مشاوره آنلاین رایگان با تیم پزشکی و ارسال مدارک پزشکی',
        en: 'Free online consultation with medical team and sending medical documents',
        ar: 'استشارة مجانية عبر الإنترنت مع الفريق الطبي وإرسال المستندات الطبية',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileSearch,
      number: lang === 'fa' ? '۰۲' : lang === 'ar' ? '٠٢' : '02',
      title: {
        fa: 'برنامه‌ریزی درمان',
        en: 'Treatment Planning',
        ar: 'تخطيط العلاج',
      },
      desc: {
        fa: 'تعیین برنامه درمان، هزینه‌ها و زمان‌بندی توسط پزشک متخصص',
        en: 'Treatment plan, costs and scheduling by specialist doctor',
        ar: 'تحديد خطة العلاج والتكاليف والجدول الزمني من قبل الطبيب المختص',
      },
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Plane,
      number: lang === 'fa' ? '۰۳' : lang === 'ar' ? '٠٣' : '03',
      title: {
        fa: 'هماهنگی سفر',
        en: 'Travel Coordination',
        ar: 'تنسيق السفر',
      },
      desc: {
        fa: 'رزرو اقامتگاه، ترانسفر فرودگاهی و هماهنگی ویزای پزشکی',
        en: 'Accommodation booking, airport transfer and medical visa coordination',
        ar: 'حجز الإقامة ونقل المطار وتنسيق التأشيرة الطبية',
      },
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Stethoscope,
      number: lang === 'fa' ? '۰۴' : lang === 'ar' ? '٠٤' : '04',
      title: {
        fa: 'درمان و مراقبت',
        en: 'Treatment & Care',
        ar: 'العلاج والرعاية',
      },
      desc: {
        fa: 'انجام درمان در مرکز مجهز با نظارت مستمر تیم پزشکی',
        en: 'Treatment at equipped center with continuous medical team supervision',
        ar: 'العلاج في مركز مجهز مع إشراف مستمر من الفريق الطبي',
      },
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: SmilePlus,
      number: lang === 'fa' ? '۰۵' : lang === 'ar' ? '٠٥' : '05',
      title: {
        fa: 'پیگیری و بازگشت',
        en: 'Follow-up & Return',
        ar: 'المتابعة والعودة',
      },
      desc: {
        fa: 'پیگیری پس از درمان و ارتباط مستمر با تیم پزشکی',
        en: 'Post-treatment follow-up and continuous communication with medical team',
        ar: 'متابعة ما بعد العلاج والتواصل المستمر مع الفريق الطبي',
      },
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section dir={dir} className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-5 py-2 mb-6">
            <Plane size={16} className="text-violet-500" />
            <span className="text-violet-600 text-sm font-medium">
              {lang === 'fa' ? 'مراحل سفر درمانی' : lang === 'ar' ? 'مراحل الرحلة الطبية' : 'Medical Journey Steps'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {lang === 'fa' ? 'مراحل سفر درمانی شما' : lang === 'ar' ? 'مراحل رحلتك الطبية' : 'Your Medical Journey'}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {lang === 'fa'
              ? 'ما در هر مرحله از سفر درمانی شما در کنارتان هستیم'
              : lang === 'ar'
              ? 'نحن معك في كل مرحلة من رحلتك الطبية'
              : 'We are with you at every step of your medical journey'}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 via-violet-200 via-rose-200 to-amber-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center group"
              >
                {/* Number Badge */}
                <div className="relative mx-auto mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl relative z-10`}
                  >
                    <step.icon size={32} className="text-white" />
                  </motion.div>
                  <div className={`absolute -top-2 ${dir === 'rtl' ? '-left-2' : '-right-2'} w-8 h-8 rounded-lg bg-white shadow-md border border-gray-100 flex items-center justify-center z-20`}>
                    <span className="text-xs font-bold text-gray-600">{step.number}</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                  {step.title[lang]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
