// All translatable content for the site, keyed by language.
// `en` is the default; `he` mirrors the same structure with RTL direction.

export const translations = {
  en: {
    dir: 'ltr',
    locale: 'en',

    nav: {
      about: 'About',
      work: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      resume: 'Résumé',
    },

    hero: {
      eyebrow: 'Marketing Operations · Ramat Gan, Israel',
      name: 'Linor Mor',
      // Rotating role words (typed/animated)
      roles: ['Marketing Operations', 'GTM Execution', 'Revenue Operations', 'Growth'],
      tagline:
        'I build the systems that make marketing scale — 20x growth, GTM from scratch, and the data to prove it.',
      openTo: 'Open to',
      openRoles: ['Marketing Operations', 'Project Management', 'Sales & Marketing'],
      ctaContact: "Let's talk",
      ctaResume: 'Download résumé',
      scroll: 'Scroll',
    },

    about: {
      label: 'Who I am',
      title: "I didn't stumble into marketing operations. I planned for it.",
      body: [
        'I chose Industrial Engineering & Management at Shenkar because the best PMMs in SaaS speak two languages — the engineer’s and the customer’s. That degree gave me the technical literacy to earn a seat at the table.',
        'What followed: 20x user growth as PM at Buyverse, GTM infrastructure built from scratch for 8+ businesses at Talia Chriqui Consulting, and consumer-insight rigor at Kantar — the world’s leading market research firm.',
        'I’m looking for a role in project management, marketing operations, or sales & marketing inside Israeli tech. If you’re building a product that deserves a better story — let’s talk.',
      ],
    },

    stats: {
      label: 'Impact in numbers',
      items: [
        { value: 20, prefix: '', suffix: 'x', label: 'User growth at Buyverse' },
        { value: 32, prefix: '+', suffix: '%', label: 'Activation rate uplift' },
        { value: 35, prefix: '+', suffix: '%', label: 'Lead-to-customer conversion' },
        { value: 8, prefix: '', suffix: '+', label: 'Businesses GTM-enabled' },
        { value: 7, prefix: '', suffix: 'h', label: 'Saved per client / week' },
      ],
    },

    work: {
      label: 'The journey',
      title: 'A timeline of building, scaling & shipping',
      present: 'Present',
      items: [
        {
          id: 'buyverse',
          period: '2025 — 2026',
          company: 'Buyverse',
          acquired: 'Acquired by Keyz',
          role: 'Product Manager',
          summary:
            'AI-powered marketplace reinventing how Israel buys and sells. Joined as the company’s first PM — owning product strategy, growth and acquisition through to exit.',
          bullets: [
            'Scaled platform traffic from 100 to 2,000 monthly users (20x) via funnel optimisation, UX iteration and targeted campaigns (Google Analytics, LogRocket).',
            'Built the acquisition-ready KPI framework & executive dashboard — growth, activation, retention, listing conversion — in Looker Studio and HubSpot.',
            'Mapped the full funnel; fixed 3 critical drop-off points and lifted activation rate by 32%.',
            'Prepared the data-driven insights deck that supported the company’s due-diligence and acquisition.',
            'Ran product roadmap & sprints in Jira, aligning dev, design and marketing around growth milestones.',
          ],
          tags: ['Product Strategy', 'Growth', 'Looker Studio', 'HubSpot', 'Jira'],
        },
        {
          id: 'talia',
          period: '2024 — 2025',
          company: 'Talia Chriqui Consulting',
          acquired: '',
          role: 'Marketing & Operations Program Manager',
          summary:
            'Boutique consulting firm delivering marketing & operational transformation for small businesses. Built go-to-market infrastructure from scratch.',
          bullets: [
            'Rebuilt marketing & sales funnels for 8+ SMB clients; improved average lead-to-customer conversion by 35% (HubSpot, Google Analytics).',
            'Designed real-time KPI dashboards in Looker Studio — moving clients from gut-based to data-driven decisions.',
            'Automated operational workflows with Monday.com & Zapier, saving an average of 7 hours/week per client.',
            'Built ICP profiles and customer journeys, translating findings into GTM positioning.',
            'Led change management & stakeholder alignment — full team adoption within 3–4 weeks, without direct authority.',
          ],
          tags: ['Marketing Ops', 'GTM', 'Automation', 'Monday.com', 'Zapier'],
        },
        {
          id: 'hitech',
          period: '2023 — 2024',
          company: 'Hitech Insurance',
          acquired: '',
          role: 'Marketing & Business Development',
          summary:
            'Insurance agency serving Israel’s tech community with tailored insurance & savings solutions.',
          bullets: [
            'Built and executed a multi-channel marketing strategy across email, social and professional events.',
            'Managed a CRM prospect pipeline — tracking outreach sequences and conversion at every funnel stage.',
            'Hit monthly lead-generation targets through personalised outreach campaigns.',
            'Translated complex insurance products into clear value propositions for a tech-savvy audience.',
          ],
          tags: ['Business Development', 'CRM', 'Lead Generation'],
        },
        {
          id: 'kantar',
          period: '2021 — 2022',
          company: 'Kantar',
          acquired: '',
          role: 'Research Executive',
          summary:
            'The world’s leading market research firm — understanding how people think, shop and decide.',
          bullets: [
            'Planned, coordinated and administered market-research projects end to end.',
            'Supervised staff, monitored progress and set project goals.',
            'Analysed data and translated findings into actionable insight.',
          ],
          tags: ['Market Research', 'Consumer Insights', 'Data Analysis'],
        },
        {
          id: 'idf',
          period: '2017 — 2019',
          company: 'Israel Defense Forces',
          acquired: '',
          role: 'HR Manager · Reserve Duty Program',
          summary:
            'Led HR and operations for the reserve-duty program, reporting insights to senior command.',
          bullets: [
            'Led the HR training program for new recruits and the reserve-duty program for Home Front Command units.',
            'Analysed reports in Excel and the IDF CRM to drive final placement decisions.',
            'Built a VBA program to streamline the HR recruitment process.',
            'Presented monthly progress reports to C-level command.',
          ],
          tags: ['Operations', 'People Management', 'Excel / VBA'],
        },
      ],
    },

    skills: {
      label: 'Toolkit',
      title: 'Tools & disciplines I work in',
      groups: [
        {
          name: 'Product & Growth',
          items: ['Go-to-Market Strategy', 'Product Strategy', 'Funnel Optimisation', 'A/B Iteration', 'Roadmapping'],
        },
        {
          name: 'Marketing Operations',
          items: ['HubSpot', 'Marketing Automation', 'Lifecycle & CRM', 'ICP & Positioning'],
        },
        {
          name: 'Analytics & Data',
          items: ['Google Analytics', 'Mixpanel', 'Looker Studio', 'LogRocket', 'Excel / VBA'],
        },
        {
          name: 'Workflow & Delivery',
          items: ['Jira', 'Monday.com', 'Zapier', 'Sprint Management'],
        },
      ],
    },

    education: {
      label: 'Foundations',
      title: 'Education',
      items: [
        {
          school: 'Shenkar — Engineering. Design. Art.',
          degree: 'B.Sc. Industrial & Management Engineering',
          year: '2022',
        },
        {
          school: 'Sapir College',
          degree: 'Management & Industrial Engineering',
          year: '2020 — 2021',
        },
        {
          school: 'Mekif Vav High School',
          degree: 'High School Diploma · Computer Science major',
          year: '',
        },
      ],
    },

    contact: {
      label: 'Let’s build something',
      title: 'Looking for a sharp PM / Marketing Ops mind?',
      body:
        'I’m open to roles in project management, marketing operations and sales & marketing across Israeli tech. The fastest way to reach me is below.',
      emailCta: 'Email me',
      linkedinCta: 'LinkedIn',
      resumeCta: 'Download résumé',
      footer: 'Designed & built with care.',
    },

    resume: {
      menuLabel: 'Download résumé',
      en: 'English (PDF)',
      he: 'Hebrew (PDF)',
    },

    a11y: {
      toggleLanguage: 'Switch to Hebrew',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
  },

  he: {
    dir: 'rtl',
    locale: 'he',

    nav: {
      about: 'עליי',
      work: 'ניסיון',
      skills: 'כישורים',
      education: 'השכלה',
      contact: 'צרו קשר',
      resume: 'קורות חיים',
    },

    hero: {
      eyebrow: 'Marketing Operations · רמת גן, ישראל',
      name: 'לינור מור',
      roles: ['תפעול שיווק', 'GTM', 'תפעול הכנסה', 'צמיחה'],
      tagline:
        'אני בונה את המערכות שמאפשרות לשיווק לגדול — צמיחה פי 20, GTM שנבנה מאפס, והדאטה שמוכיחה את זה.',
      openTo: 'פתוחה ל',
      openRoles: ['תפעול שיווק', 'ניהול פרויקטים', 'מכירות ושיווק'],
      ctaContact: 'בואו נדבר',
      ctaResume: 'הורדת קורות חיים',
      scroll: 'גלילה',
    },

    about: {
      label: 'מי אני',
      title: 'לא נקלעתי לתפעול השיווק. תכננתי אותו.',
      body: [
        'בחרתי בהנדסת תעשייה וניהול בשנקר כי ה‑PMMs הטובים ביותר ב‑SaaS דוברים שתי שפות — של המהנדס ושל הלקוח. התואר נתן לי את האוריינות הטכנית לקבל מקום סביב השולחן.',
        'מה שבא אחר כך: צמיחה פי 20 כ‑PM ב‑Buyverse, תשתית GTM שנבנתה מאפס ל‑8+ עסקים ב‑Talia Chriqui, וניסיון מחקר צרכני מעמיק ב‑Kantar — חברת מחקר השוק המובילה בעולם.',
        'אני מחפשת תפקיד בניהול פרויקטים, תפעול שיווק או מכירות ושיווק בהייטק הישראלי. אם אתם בונים מוצר שמגיע לו סיפור טוב יותר — בואו נדבר.',
      ],
    },

    stats: {
      label: 'ההשפעה במספרים',
      items: [
        { value: 20, prefix: '', suffix: 'x', label: 'צמיחת משתמשים ב‑Buyverse' },
        { value: 32, prefix: '+', suffix: '%', label: 'שיפור ב‑Activation' },
        { value: 35, prefix: '+', suffix: '%', label: 'המרת ליד ללקוח' },
        { value: 8, prefix: '', suffix: '+', label: 'עסקים עם GTM' },
        { value: 7, prefix: '', suffix: ' ש׳', label: 'חיסכון ללקוח / שבוע' },
      ],
    },

    work: {
      label: 'המסע',
      title: 'ציר זמן של בנייה, צמיחה ו‑Shipping',
      present: 'היום',
      items: [
        {
          id: 'buyverse',
          period: '2025 — 2026',
          company: 'Buyverse',
          acquired: 'נרכשה ע״י Keyz',
          role: 'Product Manager',
          summary:
            'מרקטפלייס מבוסס‑AI שמשנה את הדרך שבה ישראל קונה ומוכרת. הצטרפתי כ‑PM הראשונה בחברה — אחראית על אסטרטגיית מוצר, צמיחה ואקוויזישן עד לאקזיט.',
          bullets: [
            'הגדלתי את תנועת הפלטפורמה מ‑100 ל‑2,000 משתמשים חודשיים (פי 20) דרך אופטימיזציית פאנל, איטרציות UX וקמפיינים ממוקדים (Google Analytics, LogRocket).',
            'בניתי מסגרת KPI ודאשבורד הנהלה מוכן‑לאקזיט — צמיחה, Activation, Retention, המרת מודעות — ב‑Looker Studio וב‑HubSpot.',
            'מיפיתי את כל הפאנל; תיקנתי 3 נקודות נשירה קריטיות ושיפרתי את ה‑Activation ב‑32%.',
            'הכנתי את מצגת התובנות מבוססת‑הדאטה שתמכה ב‑Due Diligence וברכישה.',
            'ניהלתי Roadmap וספרינטים ב‑Jira, ויישרתי קו בין פיתוח, עיצוב ושיווק.',
          ],
          tags: ['אסטרטגיית מוצר', 'צמיחה', 'Looker Studio', 'HubSpot', 'Jira'],
        },
        {
          id: 'talia',
          period: '2024 — 2025',
          company: 'Talia Chriqui Consulting',
          acquired: '',
          role: 'Marketing & Operations Program Manager',
          summary:
            'חברת ייעוץ בוטיק לטרנספורמציה שיווקית ותפעולית לעסקים קטנים. בניתי תשתית Go‑to‑Market מאפס.',
          bullets: [
            'בניתי מחדש פאנלים שיווקיים ומכירתיים ל‑8+ עסקים; שיפרתי את המרת ליד‑ללקוח ב‑35% בממוצע (HubSpot, Google Analytics).',
            'עיצבתי דאשבורדים בזמן אמת ב‑Looker Studio — והעברתי לקוחות מקבלת החלטות אינטואיטיבית לקבלת החלטות מבוססת‑דאטה.',
            'אוטומציה של תהליכים תפעוליים ב‑Monday.com ו‑Zapier — חיסכון של 7 שעות בשבוע בממוצע ללקוח.',
            'בניתי פרופילי ICP ומסעות לקוח, ותרגמתי תובנות למיצוב GTM.',
            'הובלתי ניהול שינוי ויישור מחזיקי עניין — אימוץ מלא תוך 3–4 שבועות, ללא סמכות ישירה.',
          ],
          tags: ['תפעול שיווק', 'GTM', 'אוטומציה', 'Monday.com', 'Zapier'],
        },
        {
          id: 'hitech',
          period: '2023 — 2024',
          company: 'Hitech Insurance',
          acquired: '',
          role: 'Marketing & Business Development',
          summary: 'סוכנות ביטוח לקהילת ההייטק בישראל — פתרונות ביטוח וחיסכון מותאמים אישית.',
          bullets: [
            'בניתי והרצתי אסטרטגיית שיווק רב‑ערוצית — אימייל, סושיאל ואירועים מקצועיים.',
            'ניהלתי Pipeline של לקוחות פוטנציאליים ב‑CRM — מעקב אחר רצפי פנייה והמרה בכל שלב.',
            'עמדתי ביעדי ליד חודשיים דרך קמפיינים מותאמים אישית.',
            'תרגמתי מוצרי ביטוח מורכבים להצעות ערך ברורות לקהל טכנולוגי.',
          ],
          tags: ['פיתוח עסקי', 'CRM', 'יצירת לידים'],
        },
        {
          id: 'kantar',
          period: '2021 — 2022',
          company: 'Kantar',
          acquired: '',
          role: 'Research Executive',
          summary: 'חברת מחקר השוק המובילה בעולם — הבנה של איך אנשים חושבים, קונים ומחליטים.',
          bullets: [
            'תכנון, תיאום וניהול פרויקטי מחקר שוק מקצה לקצה.',
            'ניהול צוות, מעקב אחר התקדמות והגדרת יעדים.',
            'ניתוח דאטה ותרגום ממצאים לתובנות מעשיות.',
          ],
          tags: ['מחקר שוק', 'תובנות צרכן', 'ניתוח נתונים'],
        },
        {
          id: 'idf',
          period: '2017 — 2019',
          company: 'צה״ל',
          acquired: '',
          role: 'מנהלת משאבי אנוש · תוכנית מילואים',
          summary: 'הובלת משאבי אנוש ותפעול לתוכנית המילואים, עם דיווח תובנות לפיקוד הבכיר.',
          bullets: [
            'הובלתי את תוכנית הכשרת מש״א לגיוס וצוערים ואת תוכנית המילואים ליחידות פיקוד העורף.',
            'ניתחתי דוחות ב‑Excel וב‑CRM הצבאי לקבלת החלטות שיבוץ סופיות.',
            'בניתי תוכנת VBA לייעול תהליך גיוס משאבי האנוש.',
            'הצגתי דוחות התקדמות חודשיים לפיקוד בכיר.',
          ],
          tags: ['תפעול', 'ניהול אנשים', 'Excel / VBA'],
        },
      ],
    },

    skills: {
      label: 'ארגז הכלים',
      title: 'כלים ותחומים שאני עובדת בהם',
      groups: [
        {
          name: 'מוצר וצמיחה',
          items: ['אסטרטגיית GTM', 'אסטרטגיית מוצר', 'אופטימיזציית פאנל', 'איטרציית A/B', 'Roadmapping'],
        },
        {
          name: 'תפעול שיווק',
          items: ['HubSpot', 'אוטומציית שיווק', 'Lifecycle ו‑CRM', 'ICP ומיצוב'],
        },
        {
          name: 'אנליטיקה ודאטה',
          items: ['Google Analytics', 'Mixpanel', 'Looker Studio', 'LogRocket', 'Excel / VBA'],
        },
        {
          name: 'תהליך ו‑Delivery',
          items: ['Jira', 'Monday.com', 'Zapier', 'ניהול ספרינטים'],
        },
      ],
    },

    education: {
      label: 'הבסיס',
      title: 'השכלה',
      items: [
        {
          school: 'שנקר — הנדסה. עיצוב. אמנות.',
          degree: 'B.Sc. הנדסת תעשייה וניהול',
          year: '2022',
        },
        {
          school: 'המכללה האקדמית ספיר',
          degree: 'ניהול והנדסת תעשייה',
          year: '2020 — 2021',
        },
        {
          school: 'תיכון מקיף ו׳',
          degree: 'תעודת בגרות · מגמת מדעי המחשב',
          year: '',
        },
      ],
    },

    contact: {
      label: 'בואו נבנה משהו',
      title: 'מחפשים ראש חד ל‑PM / תפעול שיווק?',
      body:
        'אני פתוחה לתפקידים בניהול פרויקטים, תפעול שיווק ומכירות ושיווק בהייטק הישראלי. הדרך המהירה ביותר להגיע אליי — למטה.',
      emailCta: 'שלחו מייל',
      linkedinCta: 'LinkedIn',
      resumeCta: 'הורדת קורות חיים',
      footer: 'עוצב ונבנה בקפידה.',
    },

    resume: {
      menuLabel: 'הורדת קורות חיים',
      en: 'אנגלית (PDF)',
      he: 'עברית (PDF)',
    },

    a11y: {
      toggleLanguage: 'מעבר לאנגלית',
      openMenu: 'פתיחת תפריט',
      closeMenu: 'סגירת תפריט',
    },
  },
}

// Static (non-translated) contact + asset info
export const profile = {
  email: 'molinor123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/linormor',
  linkedinHandle: 'linkedin.com/in/linormor',
  location: 'Ramat Gan, Israel',
  // Hero uses the background-removed cutout (floats on the dark bg).
  photoCutout: '/linor-cutout.webp',
  // Original framed photo kept as a fallback / for other uses.
  photo: '/linor.jpg',
  photoFallback: '/portrait.svg',
  resumeEn: '/cv-en.pdf',
  resumeHe: '/cv-he.pdf',
}
