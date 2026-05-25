import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowUp } from 'lucide-react';

export default function WhatsAppButton() {
  const { lang, dir } = useLanguage();
  const [showChat, setShowChat] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const whatsappText = lang === 'fa'
    ? 'سلام! می‌خواهم اطلاعات بیشتری درباره خدمات درمانی شما بدانم.'
    : lang === 'ar'
    ? 'مرحباً! أريد معرفة المزيد عن خدماتكم الطبية.'
    : 'Hello! I would like to know more about your medical services.';

  return (
    <>
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-24 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-40 w-12 h-12 bg-gray-800/80 backdrop-blur-sm text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center`}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Chat Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-24 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100`}
            dir={dir}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">MedVoyage</p>
                  <p className="text-green-100 text-xs">
                    {lang === 'fa' ? 'آنلاین' : lang === 'ar' ? 'متصل' : 'Online'}
                  </p>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-xl p-3 shadow-sm max-w-[85%]">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {lang === 'fa'
                    ? 'سلام! 👋 چطور می‌توانیم کمکتان کنیم؟ برای مشاوره رایگان پیام دهید.'
                    : lang === 'ar'
                    ? 'مرحباً! 👋 كيف يمكننا مساعدتك؟ أرسل رسالة للاستشارة المجانية.'
                    : 'Hello! 👋 How can we help you? Send us a message for a free consultation.'}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {lang === 'fa' ? 'پاسخ در کمتر از ۲ دقیقه' : lang === 'ar' ? 'الرد في أقل من ٢ دقيقة' : 'Reply within 2 min'}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="p-4">
              <a
                href={`https://wa.me/989121234567?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle size={18} />
                {lang === 'fa' ? 'شروع گفتگو' : lang === 'ar' ? 'ابدأ المحادثة' : 'Start Chat'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp FAB */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center animate-pulse-glow`}
      >
        {showChat ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
