/**
 * Automatic Page Direction Setter
 * Sets page direction based on HTML lang attribute
 * LTR for English, RTL for Hebrew and Arabic
 */

// Define the function globally so it can be called from other scripts
function setPageDirection() {
  'use strict';
  
  // Get the HTML element
  const htmlElement = document.documentElement;
  
  // Get the lang attribute value
  const langAttribute = htmlElement.getAttribute('lang');
  
  if (!langAttribute) {
    console.warn('No lang attribute found on HTML element');
    return;
  }
  
  // Extract the language code (handle formats like "en-US", "en", "he", "ar")
  const langCode = langAttribute.toLowerCase().split('-')[0];
  
  // Determine direction based on language
  let direction;
  if (langCode === 'en') {
    direction = 'ltr';
  } else if (langCode === 'he' || langCode === 'ar') {
    direction = 'rtl';
  } else {
    // Default to LTR for other languages
    direction = 'ltr';
    console.info(`Language "${langCode}" not explicitly handled, defaulting to LTR`);
  }
  
  // Set direction on HTML element
  htmlElement.setAttribute('dir', direction);
  
  // Set direction on main-content div if it exists
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.setAttribute('dir', direction);
  }
  
  console.log(`Page direction set to: ${direction} for language: ${langAttribute}`);
}

// Auto-run on page load
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setPageDirection);
  } else {
    setPageDirection();
  }
})();