// const newsData = {
//   1: {
//     title: "KKG FRANKFURTDA – IMEX 2025 SƏRGİSİNDƏ!",
//     image: "/Media/News-img/News-1.jpg",
//     text: "2025-ci ilin may ayında KKG komandası Frankfurt şəhərində keçiriləcək IMEX sərgisində iştirak edəcək. Bu beynəlxalq tədbir sahəsindəki yeniliklərlə tanış olmaq, tərəfdaşlıq imkanları yaratmaq və xidmətlərimizi dünyaya tanıtmaq üçün əla fürsətdir.KKG – innovativ yanaşmalar və qlobal hədəflərlə irəliləyir!",
//   },
//   2: {
//     title: "Dubay sərgisi uğurla baş tutdu",
//     image: "/Media/News-img/News-2.jpg",
//     text: "2025-ci ilin 28 aprel – 1 may tarixlərində KKG komandası Dubay şəhərində keçiriləcək Arabian Travel Market (ATM) 2025 sərgisində iştirak edəcək. Bu sərgi Yaxın Şərqdə turizm və tədbir sahəsində ən nüfuzlu beynəlxalq platformalardan biridir.Komandamız bu tədbirdə iştirak edərək yeni əməkdaşlıq imkanlarını araşdıracaq, sənaye üzrə yenilikləri izləyəcək və beynəlxalq mühitdə təmsil olunacaq.KKG olaraq qlobal hədəflərlə yolumuza davam edirik!",
//   },
// };

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

// if (newsData[id]) {
//   document.getElementById("news-title").innerText = newsData[id].title;
//   document.getElementById("news-image").src = newsData[id].image;
//   document.getElementById("news-text").innerText = newsData[id].text;
// } else {
//   document.querySelector(".news-page-content").innerHTML =
//     "<p>Xəbər tapılmadı.</p>";
// }

const newsData = {
  az: {
    1: {
      title: "KKG FRANKFURTDA – IMEX 2025 SƏRGİSİNDƏ!",
      image: "/Media/News-img/News-1.jpg",
      text: "2025-ci ilin may ayında KKG komandası Frankfurt şəhərində keçiriləcək IMEX sərgisində iştirak edəcək. Bu beynəlxalq tədbir sahəsindəki yeniliklərlə tanış olmaq, tərəfdaşlıq imkanları yaratmaq və xidmətlərimizi dünyaya tanıtmaq üçün əla fürsətdir. KKG – innovativ yanaşmalar və qlobal hədəflərlə irəliləyir!",
    },
    2: {
      title: "Dubay sərgisi uğurla baş tutdu",
      image: "/Media/News-img/News-2.jpg",
      text: "2025-ci ilin 28 aprel – 1 may tarixlərində KKG komandası Dubay şəhərində keçiriləcək Arabian Travel Market (ATM) 2025 sərgisində iştirak edəcək. Bu sərgi Yaxın Şərqdə turizm və tədbir sahəsində ən nüfuzlu beynəlxalq platformalardan biridir. Komandamız bu tədbirdə iştirak edərək yeni əməkdaşlıq imkanlarını araşdıracaq, sənaye üzrə yenilikləri izləyəcək və beynəlxalq mühitdə təmsil olunacaq. KKG olaraq qlobal hədəflərlə yolumuza davam edirik!",
    },
  },
  en: {
    1: {
      title: "KKG IN FRANKFURT – AT THE IMEX 2025 EXHIBITION!",
      image: "/Media/News-img/News-1.jpg",
      text: "In May 2025, the KKG team will participate in the IMEX exhibition to be held in Frankfurt. This international event is a great opportunity to explore innovations in the field, create partnership opportunities, and promote our services globally. KKG moves forward with innovative approaches and global goals!",
    },
    2: {
      title: "The Dubai exhibition was successfully held",
      image: "/Media/News-img/News-2.jpg",
      text: "From April 28 to May 1, 2025, the KKG team will participate in the Arabian Travel Market (ATM) 2025 exhibition to be held in Dubai. This exhibition is one of the most prestigious international platforms in tourism and events in the Middle East. Our team will explore new cooperation opportunities, follow industry innovations, and represent KKG in the international arena. As KKG, we continue our journey with global goals!",
    },
  },
  ru: {
    1: {
      title: "KKG ВО ФРАНКФУРТЕ – НА ВЫСТАВКЕ IMEX 2025!",
      image: "/Media/News-img/News-1.jpg",
      text: "В мае 2025 года команда KKG примет участие в выставке IMEX, которая пройдет во Франкфурте. Это международное мероприятие — отличная возможность ознакомиться с новинками отрасли, наладить партнерские связи и представить наши услуги на глобальном уровне. KKG движется вперед с инновационным подходом и глобальными целями!",
    },
    2: {
      title: "Выставка в Дубае прошла успешно",
      image: "/Media/News-img/News-2.jpg",
      text: "С 28 апреля по 1 мая 2025 года команда KKG примет участие в выставке Arabian Travel Market (ATM) 2025 в Дубае. Это одна из самых престижных международных площадок в сфере туризма и мероприятий на Ближнем Востоке. Наша команда изучит новые возможности сотрудничества, проследит за новинками отрасли и представит KKG на международном уровне. Мы продолжаем путь с глобальными целями!",
    },
  },
};

const translations = {
  az: {
    services: "Fəaliyyətlərimiz",
    about: "Haqqımızda",
    events: "Tədbirlər",
    partners: "Partnyorlarımız",
    news: "Xəbərlər",
    gallery: "Qalereya",
    contact: "Əlaqə",
    back: "← Geri qayıt",
  },
  en: {
    services: "Our Services",
    about: "About Us",
    events: "Events",
    partners: "Our Partners",
    news: "News",
    gallery: "Gallery",
    contact: "Contact",
    back: "← Back",
  },
  ru: {
    services: "Наши услуги",
    about: "О нас",
    events: "Мероприятия",
    partners: "Партнеры",
    news: "Новости",
    gallery: "Галерея",
    contact: "Контакты",
    back: "← Назад",
  },
};

const selectedLang = localStorage.getItem("lang") || "az";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

function renderNews(lang, id) {
  const data = newsData[lang][id];
  if (data) {
    document.getElementById("news-title").innerText = data.title;
    document.getElementById("news-image").src = data.image;
    document.getElementById("news-text").innerText = data.text;
  } else {
    document.querySelector(".news-page-content").innerHTML = "<p>Xəbər tapılmadı.</p>";
  }
}

function switchLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.getElementById("current-lang").innerText = lang.toUpperCase();
  applyTranslations(lang);
  renderNews(lang, id);
}

document.querySelectorAll('[data-lang]').forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const lang = this.getAttribute("data-lang");
    switchLanguage(lang);
  });
});

// İlk açılışda yüklə
document.getElementById("current-lang").innerText = selectedLang.toUpperCase();
applyTranslations(selectedLang);
renderNews(selectedLang, id);
