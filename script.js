const translations = {
  ar: {
    title: "أكاديمية أساس التعليمية",
    heroTitle: "دروس دعم حضورية وأونلاين",
    heroDesc: "تعليم احترافي لجميع المستويات",
    formTitle: "التسجيل",
    btn: "إرسال"
  },
  fr: {
    title: "Académie Asas Éducative",
    heroTitle: "Cours de soutien présentiel et en ligne",
    heroDesc: "Enseignement professionnel pour tous les niveaux",
    formTitle: "Inscription",
    btn: "Envoyer"
  },
  en: {
    title: "Asas Educational Academy",
    heroTitle: "In-person and online tutoring",
    heroDesc: "Professional education for all levels",
    formTitle: "Registration",
    btn: "Submit"
  }
};

function setLang(lang){
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("heroTitle").innerText = translations[lang].heroTitle;
    document.getElementById("heroDesc").innerText = translations[lang].heroDesc;
    document.getElementById("formTitle").innerText = translations[lang].formTitle;
    document.getElementById("btn").innerText = translations[lang].btn;

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
}