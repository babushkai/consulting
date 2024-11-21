import { Globe } from 'lucide-react';
import { Language } from '../types';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function LanguageSwitch({ language, setLanguage }: Props) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{language === 'en' ? '日本語' : 'English'}</span>
      </button>
    </div>
  );
}