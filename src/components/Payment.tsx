import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard, Lock, ShieldCheck, CheckCircle,
  DollarSign, Hash, User, Calendar
} from 'lucide-react';

export default function Payment() {
  const { lang, dir } = useLanguage();
  const p = translations.payment;
  const [paid, setPaid] = useState(false);
  const [amount, setAmount] = useState('');

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setPaid(true);
    setTimeout(() => setPaid(false), 4000);
  };

  return (
    <section id="payment" dir={dir} className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-6">
            <Lock size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">
              {lang === 'fa' ? 'پرداخت امن' : lang === 'ar' ? 'دفع آمن' : 'Secure Payment'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {p.title[lang]}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {p.subtitle[lang]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Security Info */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Security Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <ShieldCheck size={32} className="text-emerald-400 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">
                {lang === 'fa' ? 'پرداخت کاملاً امن' : lang === 'ar' ? 'دفع آمن تماماً' : 'Fully Secure Payment'}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {p.secure[lang]}
              </p>
            </div>

            {/* Payment Methods */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">{p.methods[lang]}</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Visa', 'MasterCard', 'PayPal', 'Apple Pay'].map((method) => (
                  <div key={method} className="bg-gray-700/50 rounded-xl p-3 text-center border border-gray-600/30 hover:border-emerald-500/30 transition-colors">
                    <span className="text-gray-300 text-sm font-medium">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Currencies */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">{p.currency[lang]}</h3>
              <div className="flex flex-wrap gap-2">
                {['USD $', 'EUR €', 'GBP £', 'AED د.إ', 'IRR ﷼'].map((curr) => (
                  <span key={curr} className="bg-gray-700/50 rounded-lg px-3 py-2 text-gray-300 text-sm border border-gray-600/30">
                    {curr}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <AnimatePresence mode="wait">
                {paid ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{p.success[lang]}</h3>
                    <p className="text-gray-400">
                      {lang === 'fa' ? 'رسید پرداخت به ایمیل شما ارسال شد.' : lang === 'ar' ? 'تم إرسال إيصال الدفع إلى بريدك الإلكتروني.' : 'Payment receipt has been sent to your email.'}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handlePay}
                    className="space-y-6"
                  >
                    {/* Card Visual */}
                    <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-6 mb-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                      <div className="flex justify-between items-start mb-8 relative z-10">
                        <CreditCard size={32} className="text-white/80" />
                        <span className="text-white/60 text-sm font-medium">PLATINUM</span>
                      </div>
                      <p className="text-white text-lg tracking-[0.25em] font-mono mb-6 relative z-10">
                        •••• •••• •••• ••••
                      </p>
                      <div className="flex justify-between items-end relative z-10">
                        <div>
                          <p className="text-white/60 text-xs mb-1">CARD HOLDER</p>
                          <p className="text-white text-sm font-medium">YOUR NAME</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-xs mb-1">EXPIRES</p>
                          <p className="text-white text-sm font-medium">MM/YY</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Reservation ID */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          <Hash size={14} className="inline me-1.5 text-emerald-400" />
                          {p.reservationId[lang]}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                          placeholder="RES-XXXXX"
                        />
                      </div>

                      {/* Amount */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          <DollarSign size={14} className="inline me-1.5 text-emerald-400" />
                          {p.amount[lang]}
                        </label>
                        <input
                          type="number"
                          required
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                          placeholder="0.00 USD"
                        />
                      </div>
                    </div>

                    {/* Card Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        <CreditCard size={14} className="inline me-1.5 text-emerald-400" />
                        {p.cardNumber[lang]}
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={19}
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm tracking-widest"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Card Holder */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          <User size={14} className="inline me-1.5 text-emerald-400" />
                          {p.cardHolder[lang]}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                        />
                      </div>

                      {/* Expiry */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          <Calendar size={14} className="inline me-1.5 text-emerald-400" />
                          {p.expiry[lang]}
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          className="w-full px-4 py-3.5 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                          placeholder="MM/YY"
                        />
                      </div>

                      {/* CVV */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          <Lock size={14} className="inline me-1.5 text-emerald-400" />
                          {p.cvv[lang]}
                        </label>
                        <input
                          type="password"
                          required
                          maxLength={4}
                          className="w-full px-4 py-3.5 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none text-sm"
                          placeholder="•••"
                        />
                      </div>
                    </div>

                    {/* Total */}
                    {amount && (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex justify-between items-center">
                        <span className="text-emerald-300 font-medium">{p.total[lang]}</span>
                        <span className="text-white text-xl font-bold">${Number(amount).toLocaleString()}</span>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                    >
                      <Lock size={20} />
                      {p.pay[lang]}
                    </button>

                    <p className="text-center text-gray-500 text-xs flex items-center justify-center gap-2">
                      <Lock size={12} />
                      {p.secure[lang]}
                    </p>
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
