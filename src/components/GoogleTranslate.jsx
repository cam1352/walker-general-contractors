import React, { useEffect } from 'react';

export default function GoogleTranslate({ id = "google_translate_element", className = "" }) {
  useEffect(() => {
    // Define a unique callback for this specific instance
    const initFuncName = `googleTranslateElementInit_${id}`;
    
    window[initFuncName] = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,fr,es,pa,zh-CN,zh-TW,ru,uk,iw,he',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, id);
    };

    // Load the script uniquely for this instance if it hasn't been loaded
    if (!document.getElementById(`google-translate-script-${id}`)) {
      const addScript = document.createElement('script');
      addScript.id = `google-translate-script-${id}`;
      addScript.setAttribute('src', `//translate.google.com/translate_a/element.js?cb=${initFuncName}`);
      document.body.appendChild(addScript);
    }
  }, [id]);

  return (
    <div className={className}>
      <div id={id}></div>
    </div>
  );
}
