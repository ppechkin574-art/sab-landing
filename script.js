(function () {
    "use strict";

    // -----------------------------------------------------------------------
    // Translations (EN default, RU, KZ)
    // -----------------------------------------------------------------------
    const translations = {
        en: {
            "nav.about": "About",
            "nav.services": "Services",
            "nav.company": "Company",
            "nav.contacts": "Contacts",

            "hero.badge": "Republic of Kazakhstan · Est. 2023",
            "hero.title1": "Building mobile products.",
            "hero.title2": "Trading at scale.",
            "hero.subtitle": "SARY ARQA BELT, TOO is a Kazakhstan-based technology company combining mobile application development with wholesale trade operations across Central Asia.",
            "hero.cta_primary": "Explore our work",
            "hero.cta_secondary": "Get in touch",
            "hero.stat_founded": "Founded",
            "hero.stat_directions": "Core directions",
            "hero.stat_region": "Region",
            "hero.stat_model": "Business model",

            "services.eyebrow": "What we do",
            "services.title": "Two directions, one company",
            "services.lead": "We operate at the intersection of technology and trade, leveraging each to strengthen the other.",
            "services.mobile_title": "Mobile Application Development",
            "services.mobile_desc": "We design and build native mobile applications for iOS and Android, from concept and UX to App Store and Google Play publication. Our focus is on business tools, commerce platforms, and consumer products tailored for the Central Asian market.",
            "services.mobile_item1": "iOS applications (Swift, SwiftUI)",
            "services.mobile_item2": "Android applications (Kotlin, Jetpack Compose)",
            "services.mobile_item3": "Cross-platform solutions (React Native, Flutter)",
            "services.mobile_item4": "App Store & Google Play publication",
            "services.mobile_item5": "Product design and technical support",
            "services.trade_title": "Wholesale Trade",
            "services.trade_desc": "Wholesale trade across a broad product mix (OKED 46909) throughout the Republic of Kazakhstan. We build long-term partnerships with suppliers and clients through transparent terms and reliable delivery.",
            "services.trade_item1": "Diversified product portfolio",
            "services.trade_item2": "B2B partnerships and supply contracts",
            "services.trade_item3": "Logistics within Kazakhstan",
            "services.trade_item4": "Transparent pricing and documentation",
            "services.trade_item5": "Full compliance with KZ regulations",

            "about.eyebrow": "About",
            "about.title": "A new-generation company from Kazakhstan",
            "about.p1": "SARY ARQA BELT, TOO was incorporated on 5 January 2023 in the Republic of Kazakhstan. Our registered office is located in the Pavlodar Region, and our operations span the entire country.",
            "about.p2": "We combine two complementary directions: software engineering — in particular mobile application development — and wholesale trade. This duality allows us to both build digital tools and put them to use inside real operating businesses.",
            "about.p3": "Our approach is built on reliability, transparent terms of cooperation, and strict adherence to the laws of the Republic of Kazakhstan. We are open to new partnerships, development projects, and supplier relationships.",
            "about.mission_title": "Our mission",
            "about.mission_body": "To bring modern technology into everyday business across Central Asia — through software and trade alike.",
            "about.values_title": "Our values",
            "about.values_body": "Integrity, long-term thinking, engineering quality, and respect for legal and cultural context.",

            "company.eyebrow": "Company details",
            "company.title": "Verified legal information",
            "company.lead": "All details below correspond to the official business registration in the Republic of Kazakhstan.",
            "company.fact_name_label": "Legal entity name",
            "company.fact_bin_label": "Business Identification Number (BIN)",
            "company.fact_date_label": "Date of incorporation",
            "company.fact_form_label": "Legal form",
            "company.fact_form_value": "Limited Liability Partnership (TOO)",
            "company.fact_country_label": "Country of registration",
            "company.fact_country_value": "Republic of Kazakhstan",
            "company.fact_oked_label": "Main activity code (OKED)",
            "company.fact_oked_value": "46909 — Non-specialized wholesale trade",
            "company.fact_secondary_label": "Additional activities",
            "company.fact_secondary_value": "62010 — Computer programming and mobile application development",
            "company.fact_director_label": "Director / authorized representative",

            "contacts.eyebrow": "Get in touch",
            "contacts.title": "Contact information",
            "contacts.lead": "For partnership inquiries, development projects, or supplier relationships — reach us directly.",
            "contacts.address_title": "Registered office",
            "contacts.address_value": "140308, Republic of Kazakhstan,<br>Pavlodar Region, Bayanaul District,<br>Maikain village, 31 Manshuk Mametova Street",
            "contacts.phone_title": "Phone",
            "contacts.email_title": "Email",
            "contacts.web_title": "Website",
            "contacts.note": "For any questions regarding our mobile applications published on the App Store or Google Play, please use the support email <a href=\"mailto:info@sab.com.kz\">info@sab.com.kz</a>.",

            "footer.tagline": "Mobile development & wholesale trade from Kazakhstan.",
            "footer.legal_title": "Legal",
            "footer.contact_title": "Contact",
            "footer.bin_label": "BIN",
            "footer.registered_label": "Registered",
            "footer.privacy": "Privacy Policy",
            "footer.terms": "Terms of Use",
            "footer.copy": "© 2026 SARY ARQA BELT, TOO. All rights reserved."
        },

        ru: {
            "nav.about": "О компании",
            "nav.services": "Услуги",
            "nav.company": "Реквизиты",
            "nav.contacts": "Контакты",

            "hero.badge": "Республика Казахстан · с 2023 года",
            "hero.title1": "Разрабатываем мобильные продукты.",
            "hero.title2": "Торгуем оптом.",
            "hero.subtitle": "SARY ARQA BELT, TOO — технологическая компания из Казахстана, объединяющая разработку мобильных приложений и оптовую торговлю на территории Центральной Азии.",
            "hero.cta_primary": "Наши направления",
            "hero.cta_secondary": "Связаться с нами",
            "hero.stat_founded": "Год основания",
            "hero.stat_directions": "Направления",
            "hero.stat_region": "Регион",
            "hero.stat_model": "Модель",

            "services.eyebrow": "Чем мы занимаемся",
            "services.title": "Два направления — одна компания",
            "services.lead": "Мы работаем на стыке технологий и торговли, усиливая одно другим.",
            "services.mobile_title": "Разработка мобильных приложений",
            "services.mobile_desc": "Проектируем и разрабатываем нативные мобильные приложения для iOS и Android — от концепции и UX до публикации в App Store и Google Play. Фокусируемся на бизнес-инструментах, коммерческих платформах и потребительских продуктах для рынка Центральной Азии.",
            "services.mobile_item1": "iOS-приложения (Swift, SwiftUI)",
            "services.mobile_item2": "Android-приложения (Kotlin, Jetpack Compose)",
            "services.mobile_item3": "Кросс-платформенные решения (React Native, Flutter)",
            "services.mobile_item4": "Публикация в App Store и Google Play",
            "services.mobile_item5": "Продуктовый дизайн и техническая поддержка",
            "services.trade_title": "Оптовая торговля",
            "services.trade_desc": "Оптовая торговля широким ассортиментом товаров (ОКЭД 46909) на территории Республики Казахстан. Строим долгосрочные партнёрства с поставщиками и клиентами на прозрачных условиях.",
            "services.trade_item1": "Широкий товарный ассортимент",
            "services.trade_item2": "B2B-партнёрства и контракты на поставку",
            "services.trade_item3": "Логистика на территории Казахстана",
            "services.trade_item4": "Прозрачное ценообразование и документация",
            "services.trade_item5": "Полное соответствие законодательству РК",

            "about.eyebrow": "О компании",
            "about.title": "Компания нового поколения из Казахстана",
            "about.p1": "SARY ARQA BELT, TOO зарегистрирована 5 января 2023 года в Республике Казахстан. Юридический адрес — Павлодарская область; деятельность ведётся на всей территории страны.",
            "about.p2": "Мы объединяем два взаимодополняющих направления: разработку программного обеспечения — в первую очередь мобильных приложений — и оптовую торговлю. Такая модель позволяет нам создавать цифровые инструменты и одновременно применять их в реальном операционном бизнесе.",
            "about.p3": "Наш подход основан на надёжности, прозрачных условиях сотрудничества и строгом соблюдении законодательства Республики Казахстан. Мы открыты к новым партнёрствам, проектам разработки и предложениям о поставках.",
            "about.mission_title": "Наша миссия",
            "about.mission_body": "Внедрять современные технологии в повседневный бизнес Центральной Азии — через разработку и торговлю.",
            "about.values_title": "Наши ценности",
            "about.values_body": "Честность, долгосрочное мышление, инженерное качество, уважение к правовому и культурному контексту.",

            "company.eyebrow": "Реквизиты компании",
            "company.title": "Официальная юридическая информация",
            "company.lead": "Все данные ниже соответствуют государственной регистрации в Республике Казахстан.",
            "company.fact_name_label": "Юридическое наименование",
            "company.fact_bin_label": "БИН",
            "company.fact_date_label": "Дата регистрации",
            "company.fact_form_label": "Организационно-правовая форма",
            "company.fact_form_value": "Товарищество с ограниченной ответственностью (ТОО)",
            "company.fact_country_label": "Страна регистрации",
            "company.fact_country_value": "Республика Казахстан",
            "company.fact_oked_label": "Основной ОКЭД",
            "company.fact_oked_value": "46909 — Неспециализированная оптовая торговля",
            "company.fact_secondary_label": "Дополнительная деятельность",
            "company.fact_secondary_value": "62010 — Разработка ПО и мобильных приложений",
            "company.fact_director_label": "Руководитель / уполномоченное лицо",

            "contacts.eyebrow": "Связаться",
            "contacts.title": "Контактная информация",
            "contacts.lead": "По вопросам партнёрства, проектам разработки или поставок — пишите и звоните напрямую.",
            "contacts.address_title": "Юридический адрес",
            "contacts.address_value": "140308, Республика Казахстан,<br>Павлодарская область, Баянаульский район,<br>п. Майкаин, ул. Маншук Маметовой, д. 31",
            "contacts.phone_title": "Телефон",
            "contacts.email_title": "Email",
            "contacts.web_title": "Веб-сайт",
            "contacts.note": "По вопросам, связанным с нашими мобильными приложениями в App Store и Google Play, пишите на <a href=\"mailto:info@sab.com.kz\">info@sab.com.kz</a>.",

            "footer.tagline": "Мобильная разработка и оптовая торговля из Казахстана.",
            "footer.legal_title": "Правовая информация",
            "footer.contact_title": "Контакты",
            "footer.bin_label": "БИН",
            "footer.registered_label": "Зарегистрировано",
            "footer.privacy": "Политика конфиденциальности",
            "footer.terms": "Условия использования",
            "footer.copy": "© 2026 SARY ARQA BELT, TOO. Все права защищены."
        },

        kz: {
            "nav.about": "Компания туралы",
            "nav.services": "Қызметтер",
            "nav.company": "Деректемелер",
            "nav.contacts": "Байланыс",

            "hero.badge": "Қазақстан Республикасы · 2023 жылдан",
            "hero.title1": "Мобильді өнімдерді жасаймыз.",
            "hero.title2": "Көтерме сауда жүргіземіз.",
            "hero.subtitle": "SARY ARQA BELT, TOO — Қазақстандағы технологиялық компания. Біз мобильді қосымшалар әзірлеуді және Орталық Азиядағы көтерме сауданы біріктіреміз.",
            "hero.cta_primary": "Бағыттарымыз",
            "hero.cta_secondary": "Бізбен байланысу",
            "hero.stat_founded": "Құрылған жылы",
            "hero.stat_directions": "Негізгі бағыттар",
            "hero.stat_region": "Аймақ",
            "hero.stat_model": "Бизнес-модель",

            "services.eyebrow": "Біздің қызмет",
            "services.title": "Екі бағыт — бір компания",
            "services.lead": "Біз технология мен сауданың түйіскен жерінде жұмыс істейміз, әрқайсысын бірін-бірі күшейту үшін пайдаланамыз.",
            "services.mobile_title": "Мобильді қосымшаларды әзірлеу",
            "services.mobile_desc": "Біз iOS және Android үшін нативті мобильді қосымшалар жобалаймыз және жасаймыз — идеядан және UX-тен App Store мен Google Play-де жариялауға дейін. Орталық Азия нарығына бейімделген бизнес-құралдарға, коммерциялық платформаларға және тұтынушылық өнімдерге назар аударамыз.",
            "services.mobile_item1": "iOS қосымшалары (Swift, SwiftUI)",
            "services.mobile_item2": "Android қосымшалары (Kotlin, Jetpack Compose)",
            "services.mobile_item3": "Кросс-платформалық шешімдер (React Native, Flutter)",
            "services.mobile_item4": "App Store және Google Play-де жариялау",
            "services.mobile_item5": "Өнім дизайны және техникалық қолдау",
            "services.trade_title": "Көтерме сауда",
            "services.trade_desc": "Қазақстан Республикасы аумағында кең тауар ассортиментімен көтерме сауда (ОКЭД 46909). Жеткізушілер мен клиенттермен ашық шарттар негізінде ұзақ мерзімді серіктестік құрамыз.",
            "services.trade_item1": "Кең тауар портфолиосы",
            "services.trade_item2": "B2B серіктестік және жеткізу шарттары",
            "services.trade_item3": "Қазақстан аумағындағы логистика",
            "services.trade_item4": "Ашық баға белгілеу және құжаттама",
            "services.trade_item5": "ҚР заңнамасына толық сәйкестік",

            "about.eyebrow": "Компания туралы",
            "about.title": "Қазақстаннан шыққан жаңа буын компаниясы",
            "about.p1": "SARY ARQA BELT, TOO 2023 жылдың 5 қаңтарында Қазақстан Республикасында тіркелген. Заңды мекенжайы — Павлодар облысы; қызмет ел аумағында жүргізіледі.",
            "about.p2": "Біз екі өзара толықтырушы бағытты біріктіреміз: бағдарламалық қамтамасыз ету — ең алдымен мобильді қосымшалар — және көтерме сауда. Бұл модель сандық құралдар жасауға және оларды нақты жұмыс істеп тұрған бизнесте қолдануға мүмкіндік береді.",
            "about.p3": "Біздің көзқарас сенімділікке, ынтымақтастықтың ашық шарттарына және Қазақстан Республикасы заңнамасын қатаң сақтауға негізделген. Жаңа серіктестіктерге, әзірлеу жобаларына және жеткізу ұсыныстарына ашықпыз.",
            "about.mission_title": "Біздің миссиямыз",
            "about.mission_body": "Орталық Азияның күнделікті бизнесіне заманауи технологияларды енгізу — әзірлеу мен сауда арқылы.",
            "about.values_title": "Біздің құндылықтарымыз",
            "about.values_body": "Адалдық, ұзақ мерзімді ойлау, инженерлік сапа, құқықтық және мәдени контекстке құрмет.",

            "company.eyebrow": "Компания деректемелері",
            "company.title": "Ресми заңды ақпарат",
            "company.lead": "Төмендегі барлық мәліметтер Қазақстан Республикасындағы мемлекеттік тіркеуге сәйкес келеді.",
            "company.fact_name_label": "Заңды атауы",
            "company.fact_bin_label": "БСН",
            "company.fact_date_label": "Тіркелген күні",
            "company.fact_form_label": "Ұйымдық-құқықтық нысан",
            "company.fact_form_value": "Жауапкершілігі шектеулі серіктестік (ЖШС / TOO)",
            "company.fact_country_label": "Тіркелген елі",
            "company.fact_country_value": "Қазақстан Республикасы",
            "company.fact_oked_label": "Негізгі ОКЭД",
            "company.fact_oked_value": "46909 — Маманданбаған көтерме сауда",
            "company.fact_secondary_label": "Қосымша қызмет",
            "company.fact_secondary_value": "62010 — БҚ және мобильді қосымшаларды әзірлеу",
            "company.fact_director_label": "Басшы / уәкілетті тұлға",

            "contacts.eyebrow": "Бізбен байланыс",
            "contacts.title": "Байланыс ақпараты",
            "contacts.lead": "Серіктестік, әзірлеу жобалары немесе жеткізу мәселелері бойынша — тікелей жазыңыз немесе қоңырау шалыңыз.",
            "contacts.address_title": "Заңды мекенжайы",
            "contacts.address_value": "140308, Қазақстан Республикасы,<br>Павлодар облысы, Баянауыл ауданы,<br>Майқайың кенті, Мәншүк Мәметова көшесі, 31",
            "contacts.phone_title": "Телефон",
            "contacts.email_title": "Email",
            "contacts.web_title": "Веб-сайт",
            "contacts.note": "App Store және Google Play-дегі мобильді қосымшаларымызға қатысты сұрақтар бойынша <a href=\"mailto:info@sab.com.kz\">info@sab.com.kz</a> мекенжайына жазыңыз.",

            "footer.tagline": "Қазақстаннан мобильді әзірлеу және көтерме сауда.",
            "footer.legal_title": "Құқықтық",
            "footer.contact_title": "Байланыс",
            "footer.bin_label": "БСН",
            "footer.registered_label": "Тіркелген",
            "footer.privacy": "Құпиялылық саясаты",
            "footer.terms": "Пайдалану шарттары",
            "footer.copy": "© 2026 SARY ARQA BELT, TOO. Барлық құқықтары қорғалған."
        }
    };

    const LANG_KEY = "sab:lang";
    const DEFAULT_LANG = "en";
    const LANG_HTML = { en: "en", ru: "ru", kz: "kk" };

    function getSavedLang() {
        try {
            const saved = localStorage.getItem(LANG_KEY);
            if (saved && translations[saved]) return saved;
        } catch (_) { /* ignore */ }
        return DEFAULT_LANG;
    }

    function applyLang(lang) {
        const dict = translations[lang] || translations[DEFAULT_LANG];

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.documentElement.setAttribute("lang", LANG_HTML[lang] || "en");

        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            const active = btn.dataset.lang === lang;
            btn.classList.toggle("is-active", active);
            btn.setAttribute("aria-pressed", String(active));
        });

        try { localStorage.setItem(LANG_KEY, lang); } catch (_) { /* ignore */ }
    }

    // -----------------------------------------------------------------------
    // Init
    // -----------------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
        // 1. Language switcher
        applyLang(getSavedLang());

        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                applyLang(btn.dataset.lang);
            });
        });

        // 2. Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener("click", function (e) {
                const href = this.getAttribute("href");
                if (href === "#" || href.length < 2) return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        });

        // 3. Scroll reveal via IntersectionObserver
        const reveals = document.querySelectorAll(".reveal");
        if ("IntersectionObserver" in window && reveals.length > 0) {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

            reveals.forEach(function (el) { observer.observe(el); });
        } else {
            reveals.forEach(function (el) { el.classList.add("is-visible"); });
        }
    });
})();
