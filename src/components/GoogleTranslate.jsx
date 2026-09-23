import React, { useEffect, useRef } from 'react';

let isScriptInjected = false;

export default function GoogleTranslate({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // We only want ONE google translate instance on the entire page.
    if (document.getElementById('google_translate_element')) {
       return; 
    }

    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';
    if (containerRef.current) {
        containerRef.current.appendChild(translateDiv);
    }

    if (!isScriptInjected) {
      isScriptInjected = true;
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      };

      const addScript = document.createElement('script');
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(addScript);
    }
  }, []);

  return (
    <div className={className} ref={containerRef}>
    </div>
  );
}
