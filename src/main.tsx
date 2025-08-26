import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// Ensure default document direction matches detected locale
if (typeof document !== 'undefined') {
  const lang = localStorage.getItem('i18next') || navigator.language.split('-')[0] || 'en'
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
}

createRoot(document.getElementById("root")!).render(<App />);
