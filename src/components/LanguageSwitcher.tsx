import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-lg text-dark-700 hover:bg-dark-100 dark:text-dark-300 dark:hover:bg-dark-800 transition-colors">
        <Globe size={20} />
        <span className="sr-only">Change language</span>
      </button>

      <div className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-dark-200 dark:border-dark-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors ${
              i18n.language === lang.code ? 'bg-accent/10 text-accent' : 'text-dark-700 dark:text-dark-300'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
