import React from 'react';

export default function GoogleMapsSEO({ lang = 'en' }) {
  // Uses dynamic window.location.origin if in browser, otherwise uses a placeholder
  const getBaseUrl = () => typeof window !== 'undefined' ? window.location.origin : 'https://YOUR_FUTURE_DOMAIN.com';
  
  const getLocalizedSchema = () => {
    let mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=en";
    
    switch(lang) {
      case 'zh': mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=zh-CN"; break;
      case 'fr': mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=fr"; break;
      case 'hi': mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=hi"; break;
      case 'ru': mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=ru"; break;
      case 'fa': mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=fa"; break; // Iranian/Persian
    }

    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Global Digital Services",
      "url": getBaseUrl(),
      "hasMap": mapUrl
    });
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getLocalizedSchema() }}
    />
  );
}