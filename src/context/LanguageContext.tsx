import { createContext, useContext, useState, type ReactNode } from 'react';
import { type Language, isRtl, getFontFamily } from '../i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
  fontFamily: string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fa',
  setLang: () => {},
  dir: 'rtl',
  fontFamily: "'Vazirmatn', sans-serif",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fa');
  const dir = isRtl(lang) ? 'rtl' : 'ltr';
  const fontFamily = getFontFamily(lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, fontFamily }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
