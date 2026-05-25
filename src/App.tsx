import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Accommodation from './components/Accommodation';
import Payment from './components/Payment';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function AppContent() {
  const { lang, dir, fontFamily } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.body.style.fontFamily = fontFamily;
  }, [lang, dir, fontFamily]);

  return (
    <div className="min-h-screen bg-white" dir={dir} style={{ fontFamily }}>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Doctors />
      <Testimonials />
      <Reservation />
      <Accommodation />
      <Payment />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
