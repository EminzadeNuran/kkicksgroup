
function setLanguage(lang) {
 
  localStorage.setItem('selectedLang', lang);

  const currentLangEl = document.getElementById('current-lang');
  if (currentLangEl) {
    currentLangEl.textContent = lang.toUpperCase();
  }

  fetch(`Json/${lang}.json`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Fayl tapılmadı");
      }
      return res.json();
    })
    .then(translations => {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[key] || key;
      });
    })
    .catch(error => {
      console.error(error);
    });
}

document.querySelectorAll('[data-lang]').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const lang = this.getAttribute('data-lang');
    setLanguage(lang);
  });
});

const savedLang = localStorage.getItem('selectedLang') || 'az';
setLanguage(savedLang);
