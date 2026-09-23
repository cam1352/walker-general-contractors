import React, { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
    // Prevent adding the script multiple times
    if (!document.getElementById('google-translate-script')) {
      const addScript = document.createElement('script');
      addScript.id = 'google-translate-script';
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,fr,es,pa,zh-CN,zh-TW',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element_global');
      };
    }
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[100] bg-white p-2 rounded-xl shadow-2xl border border-slate-200 flex items-center space-x-2">
      <div id="google_translate_element_global"></div>
    </div>
  );
}