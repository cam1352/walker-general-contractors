import React, { useEffect } from 'react';

export default function GoogleTranslate({ id = "google_translate_element", className = "" }) {
  useEffect(() => {
    // Only load the script once
    if (!document.getElementById('google-translate-script')) {
      const addScript = document.createElement('script');
      addScript.id = 'google-translate-script';
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      
      window.googleTranslateElementInit = () => {
        // Find all elements with the translate class/id and initialize them
        const elements = document.querySelectorAll('.g-translate-wrapper');
        elements.forEach(el => {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,fr,es,pa,zh-CN,zh-TW',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          }, el.id);
        });
      };
    } else if (window.google && window.google.translate) {
        // If already loaded but a new component mounts, we could try to initialize it, 
        // but since we aren't unmounting, the initial load is sufficient.
    }
  }, []);

  return (
    <div className={className}>
      <div id={id} className="g-translate-wrapper"></div>
    </div>
  );
}
