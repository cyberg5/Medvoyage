export type Language = 'fa' | 'en' | 'ar';

export const translations = {
  // Navigation
  nav: {
    home: { fa: 'خانه', en: 'Home', ar: 'الرئيسية' },
    services: { fa: 'خدمات درمانی', en: 'Medical Services', ar: 'الخدمات الطبية' },
    doctors: { fa: 'پزشکان', en: 'Doctors', ar: 'الأطباء' },
    reservation: { fa: 'رزرواسیون', en: 'Reservation', ar: 'الحجز' },
    accommodation: { fa: 'خدمات اقامتی', en: 'Accommodation', ar: 'الإقامة' },
    payment: { fa: 'پرداخت', en: 'Payment', ar: 'الدفع' },
    contact: { fa: 'تماس با ما', en: 'Contact Us', ar: 'اتصل بنا' },
  },

  // Hero Section
  hero: {
    title: {
      fa: 'سفر درمانی لوکس شما از اینجا آغاز می‌شود',
      en: 'Your Luxury Medical Journey Starts Here',
      ar: 'رحلتك الطبية الفاخرة تبدأ من هنا',
    },
    subtitle: {
      fa: 'بهترین خدمات درمانی و اقامتی با کیفیت جهانی در یک مقصد',
      en: 'World-class medical and hospitality services in one destination',
      ar: 'خدمات طبية وضيافة عالمية المستوى في وجهة واحدة',
    },
    cta: {
      fa: 'رزرو نوبت',
      en: 'Book Appointment',
      ar: 'احجز موعداً',
    },
    ctaSecondary: {
      fa: 'مشاهده خدمات',
      en: 'View Services',
      ar: 'عرض الخدمات',
    },
    stats: {
      patients: { fa: '+۵۰۰۰ بیمار', en: '5000+ Patients', ar: '+٥٠٠٠ مريض' },
      doctors: { fa: '+۱۰۰ پزشک', en: '100+ Doctors', ar: '+١٠٠ طبيب' },
      countries: { fa: '+۳۰ کشور', en: '30+ Countries', ar: '+٣٠ دولة' },
      satisfaction: { fa: '۹۸٪ رضایت', en: '98% Satisfaction', ar: '٩٨٪ رضا' },
    },
  },

  // Services Section
  services: {
    title: { fa: 'خدمات درمانی ما', en: 'Our Medical Services', ar: 'خدماتنا الطبية' },
    subtitle: {
      fa: 'مجموعه‌ای کامل از خدمات درمانی با بالاترین کیفیت و تجهیزات پیشرفته',
      en: 'A comprehensive range of medical services with the highest quality and advanced equipment',
      ar: 'مجموعة شاملة من الخدمات الطبية بأعلى جودة وأحدث المعدات',
    },
    inpatient: {
      title: { fa: 'خدمات بستری', en: 'Inpatient Services', ar: 'خدمات المرضى الداخليين' },
      desc: {
        fa: 'اتاق‌های مجهز و مراقبت ۲۴ ساعته توسط تیم پزشکی متخصص',
        en: 'Equipped rooms and 24/7 care by specialized medical team',
        ar: 'غرف مجهزة ورعاية على مدار الساعة من قبل فريق طبي متخصص',
      },
    },
    cosmetic: {
      title: { fa: 'جراحی زیبایی', en: 'Cosmetic Surgery', ar: 'جراحة التجميل' },
      desc: {
        fa: 'جراحی‌های زیبایی صورت و بدن با جدیدترین تکنیک‌ها و تجهیزات',
        en: 'Facial and body cosmetic surgeries with the latest techniques',
        ar: 'جراحات تجميلية للوجه والجسم بأحدث التقنيات والمعدات',
      },
    },
    eye: {
      title: { fa: 'چشم پزشکی', en: 'Ophthalmology', ar: 'طب العيون' },
      desc: {
        fa: 'لیزیک، عمل آب مروارید و خدمات کامل چشم‌پزشکی',
        en: 'LASIK, cataract surgery and complete ophthalmology services',
        ar: 'عمليات الليزك والمياه البيضاء وخدمات طب العيون الشاملة',
      },
    },
    dental: {
      title: { fa: 'دندانپزشکی', en: 'Dental Care', ar: 'طب الأسنان' },
      desc: {
        fa: 'ایمپلنت، لمینیت و تمامی خدمات دندانپزشکی تخصصی',
        en: 'Implants, laminates and all specialized dental services',
        ar: 'زراعة الأسنان والقشرات وجميع خدمات طب الأسنان التخصصية',
      },
    },
    cardiology: {
      title: { fa: 'قلب و عروق', en: 'Cardiology', ar: 'أمراض القلب' },
      desc: {
        fa: 'تشخیص و درمان بیماری‌های قلبی عروقی با تجهیزات مدرن',
        en: 'Diagnosis and treatment of cardiovascular diseases with modern equipment',
        ar: 'تشخيص وعلاج أمراض القلب والأوعية الدموية بمعدات حديثة',
      },
    },
    orthopedic: {
      title: { fa: 'ارتوپدی', en: 'Orthopedics', ar: 'جراحة العظام' },
      desc: {
        fa: 'جراحی‌های ارتوپدی، تعویض مفصل و درمان آسیب‌های ورزشی',
        en: 'Orthopedic surgeries, joint replacement and sports injury treatment',
        ar: 'جراحات العظام واستبدال المفاصل وعلاج الإصابات الرياضية',
      },
    },
    hairTransplant: {
      title: { fa: 'کاشت مو', en: 'Hair Transplant', ar: 'زراعة الشعر' },
      desc: {
        fa: 'کاشت مو به روش‌های FUE و FUT با نتایج طبیعی و ماندگار',
        en: 'FUE and FUT hair transplant methods with natural and lasting results',
        ar: 'زراعة الشعر بتقنيات FUE و FUT بنتائج طبيعية ودائمة',
      },
    },
    weightLoss: {
      title: { fa: 'جراحی چاقی', en: 'Bariatric Surgery', ar: 'جراحة السمنة' },
      desc: {
        fa: 'اسلیو معده، بای‌پس و سایر روش‌های کاهش وزن',
        en: 'Gastric sleeve, bypass and other weight loss procedures',
        ar: 'تكميم المعدة وتحويل المسار وإجراءات إنقاص الوزن الأخرى',
      },
    },
  },

  // Doctors Section
  doctors: {
    title: { fa: 'تیم پزشکان ما', en: 'Our Medical Team', ar: 'فريقنا الطبي' },
    subtitle: {
      fa: 'پزشکان برجسته و متخصص با سال‌ها تجربه بین‌المللی',
      en: 'Distinguished specialists with years of international experience',
      ar: 'أطباء متميزون ومتخصصون بسنوات من الخبرة الدولية',
    },
    experience: { fa: 'سال تجربه', en: 'Years Exp.', ar: 'سنوات خبرة' },
    operations: { fa: 'عمل موفق', en: 'Surgeries', ar: 'عملية ناجحة' },
    viewProfile: { fa: 'مشاهده پروفایل', en: 'View Profile', ar: 'عرض الملف' },
    bookNow: { fa: 'رزرو نوبت', en: 'Book Now', ar: 'احجز الآن' },
  },

  // Reservation Section
  reservation: {
    title: { fa: 'رزرو نوبت', en: 'Book Your Appointment', ar: 'احجز موعدك' },
    subtitle: {
      fa: 'فرم زیر را تکمیل کنید تا در اسرع وقت با شما تماس بگیریم',
      en: 'Fill in the form below and we will contact you as soon as possible',
      ar: 'املأ النموذج أدناه وسنتصل بك في أقرب وقت ممكن',
    },
    fullName: { fa: 'نام و نام خانوادگی', en: 'Full Name', ar: 'الاسم الكامل' },
    email: { fa: 'ایمیل', en: 'Email', ar: 'البريد الإلكتروني' },
    phone: { fa: 'شماره تماس', en: 'Phone Number', ar: 'رقم الهاتف' },
    country: { fa: 'کشور', en: 'Country', ar: 'الدولة' },
    service: { fa: 'نوع خدمت', en: 'Service Type', ar: 'نوع الخدمة' },
    date: { fa: 'تاریخ مراجعه', en: 'Preferred Date', ar: 'التاريخ المفضل' },
    message: { fa: 'توضیحات اضافی', en: 'Additional Notes', ar: 'ملاحظات إضافية' },
    submit: { fa: 'ارسال درخواست', en: 'Submit Request', ar: 'إرسال الطلب' },
    success: {
      fa: 'درخواست شما با موفقیت ثبت شد!',
      en: 'Your request has been submitted successfully!',
      ar: 'تم إرسال طلبك بنجاح!',
    },
    selectService: { fa: 'انتخاب خدمت', en: 'Select Service', ar: 'اختر الخدمة' },
    selectCountry: { fa: 'انتخاب کشور', en: 'Select Country', ar: 'اختر الدولة' },
  },

  // Accommodation Section
  accommodation: {
    title: { fa: 'خدمات اقامتی', en: 'Accommodation Services', ar: 'خدمات الإقامة' },
    subtitle: {
      fa: 'اقامت لوکس و راحت برای بیمار و همراهان در نزدیکی مرکز درمانی',
      en: 'Luxury and comfortable accommodation for patients and companions near the medical center',
      ar: 'إقامة فاخرة ومريحة للمرضى والمرافقين بالقرب من المركز الطبي',
    },
    vip: {
      title: { fa: 'سوییت VIP', en: 'VIP Suite', ar: 'جناح VIP' },
      desc: {
        fa: 'سوییت لوکس با تمامی امکانات برای اقامت راحت بیمار و همراه',
        en: 'Luxury suite with all amenities for comfortable patient and companion stay',
        ar: 'جناح فاخر مع جميع المرافق لإقامة مريحة للمريض والمرافق',
      },
      price: { fa: 'از ۲۰۰ دلار / شب', en: 'From $200/night', ar: 'من ٢٠٠ دولار/ليلة' },
    },
    standard: {
      title: { fa: 'اتاق استاندارد', en: 'Standard Room', ar: 'غرفة قياسية' },
      desc: {
        fa: 'اتاق مجهز با سرویس‌های بهداشتی کامل و دسترسی به رستوران',
        en: 'Equipped room with full sanitary services and restaurant access',
        ar: 'غرفة مجهزة بخدمات صحية كاملة ووصول إلى المطعم',
      },
      price: { fa: 'از ۱۰۰ دلار / شب', en: 'From $100/night', ar: 'من ١٠٠ دولار/ليلة' },
    },
    apartment: {
      title: { fa: 'آپارتمان مبله', en: 'Furnished Apartment', ar: 'شقة مفروشة' },
      desc: {
        fa: 'آپارتمان کاملاً مبله برای اقامت‌های بلندمدت بیمار و خانواده',
        en: 'Fully furnished apartment for long-term stays of patients and families',
        ar: 'شقة مفروشة بالكامل للإقامات الطويلة للمرضى والعائلات',
      },
      price: { fa: 'از ۱۵۰ دلار / شب', en: 'From $150/night', ar: 'من ١٥٠ دولار/ليلة' },
    },
    features: {
      wifi: { fa: 'اینترنت پرسرعت', en: 'High-speed WiFi', ar: 'واي فاي عالي السرعة' },
      transfer: { fa: 'ترانسفر فرودگاهی', en: 'Airport Transfer', ar: 'نقل المطار' },
      food: { fa: 'سرویس غذا', en: 'Food Service', ar: 'خدمة الطعام' },
      interpreter: { fa: 'مترجم همراه', en: 'Interpreter', ar: 'مترجم مرافق' },
      support: { fa: 'پشتیبانی ۲۴/۷', en: '24/7 Support', ar: 'دعم ٢٤/٧' },
      tour: { fa: 'تور گردشگری', en: 'City Tours', ar: 'جولات سياحية' },
    },
  },

  // Payment Section
  payment: {
    title: { fa: 'پرداخت آنلاین', en: 'Online Payment', ar: 'الدفع الإلكتروني' },
    subtitle: {
      fa: 'پرداخت امن و سریع هزینه رزرو با درگاه‌های معتبر بین‌المللی',
      en: 'Secure and fast reservation payment through trusted international gateways',
      ar: 'دفع آمن وسريع لرسوم الحجز عبر بوابات دولية موثوقة',
    },
    reservationId: { fa: 'شماره رزرو', en: 'Reservation ID', ar: 'رقم الحجز' },
    amount: { fa: 'مبلغ قابل پرداخت', en: 'Amount Due', ar: 'المبلغ المستحق' },
    cardNumber: { fa: 'شماره کارت', en: 'Card Number', ar: 'رقم البطاقة' },
    expiry: { fa: 'تاریخ انقضا', en: 'Expiry Date', ar: 'تاريخ الانتهاء' },
    cvv: { fa: 'CVV', en: 'CVV', ar: 'CVV' },
    cardHolder: { fa: 'نام صاحب کارت', en: 'Card Holder Name', ar: 'اسم حامل البطاقة' },
    pay: { fa: 'پرداخت', en: 'Pay Now', ar: 'ادفع الآن' },
    methods: { fa: 'روش‌های پرداخت', en: 'Payment Methods', ar: 'طرق الدفع' },
    secure: { fa: 'پرداخت امن با رمزگذاری SSL', en: 'Secure payment with SSL encryption', ar: 'دفع آمن بتشفير SSL' },
    total: { fa: 'مبلغ کل', en: 'Total Amount', ar: 'المبلغ الإجمالي' },
    currency: { fa: 'ارز', en: 'Currency', ar: 'العملة' },
    success: {
      fa: 'پرداخت با موفقیت انجام شد!',
      en: 'Payment completed successfully!',
      ar: 'تم الدفع بنجاح!',
    },
  },

  // Footer
  footer: {
    about: {
      title: { fa: 'درباره ما', en: 'About Us', ar: 'من نحن' },
      desc: {
        fa: 'مدویاج ارائه‌دهنده خدمات گردشگری سلامت با بیش از ۱۰ سال تجربه در ارائه خدمات درمانی و اقامتی لوکس',
        en: 'MedVoyage is a health tourism provider with over 10 years of experience in luxury medical and hospitality services',
        ar: 'ميد فوياج هي شركة سياحة صحية تتمتع بأكثر من ١٠ سنوات من الخبرة في الخدمات الطبية والضيافة الفاخرة',
      },
    },
    quickLinks: { fa: 'دسترسی سریع', en: 'Quick Links', ar: 'روابط سريعة' },
    contactInfo: { fa: 'اطلاعات تماس', en: 'Contact Info', ar: 'معلومات الاتصال' },
    newsletter: {
      title: { fa: 'خبرنامه', en: 'Newsletter', ar: 'النشرة الإخبارية' },
      desc: {
        fa: 'برای دریافت آخرین اخبار و تخفیف‌ها ایمیل خود را وارد کنید',
        en: 'Enter your email to receive latest news and discounts',
        ar: 'أدخل بريدك الإلكتروني لتلقي أحدث الأخبار والخصومات',
      },
      placeholder: { fa: 'ایمیل شما', en: 'Your email', ar: 'بريدك الإلكتروني' },
      subscribe: { fa: 'عضویت', en: 'Subscribe', ar: 'اشترك' },
    },
    rights: {
      fa: '© ۲۰۲۶ مدویاج - تمامی حقوق محفوظ است',
      en: '© 2026 MedVoyage - All rights reserved',
      ar: '© ٢٠٢٦ ميد فوياج - جميع الحقوق محفوظة',
    },
  },

  // Common
  common: {
    learnMore: { fa: 'اطلاعات بیشتر', en: 'Learn More', ar: 'اعرف المزيد' },
    bookNow: { fa: 'رزرو کنید', en: 'Book Now', ar: 'احجز الآن' },
    perNight: { fa: 'هر شب', en: 'per night', ar: 'لكل ليلة' },
    from: { fa: 'از', en: 'From', ar: 'من' },
  },
};

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let value: any = translations;
  for (const k of keys) {
    value = value?.[k];
  }
  return value?.[lang] || key;
}

export function isRtl(lang: Language): boolean {
  return lang === 'fa' || lang === 'ar';
}

export function getFontFamily(lang: Language): string {
  switch (lang) {
    case 'fa':
      return "'Vazirmatn', sans-serif";
    case 'ar':
      return "'Noto Sans Arabic', sans-serif";
    default:
      return "'Inter', sans-serif";
  }
}
