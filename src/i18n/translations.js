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
      eyebrow: 'Project Management · PMO · Ramat Gan, Israel',
      name: 'Linor Mor',
      // Rotating role words (typed/animated)
      roles: ['Project Management', 'PMO', 'Project Control', 'Operations'],
      tagline:
        'I keep complex projects on track — control, KPIs and stakeholder alignment, on an Industrial Engineering backbone.',
      openTo: 'Open to',
      openRoles: ['PMO', 'Project Management', 'Project Control'],
      ctaContact: "Let's talk",
      ctaResume: 'Download résumé',
      scroll: 'Scroll',
    },

    about: {
      label: 'Who I am',
      title: "I didn't stumble into project management. I planned for it.",
      body: [
        'I chose Industrial Engineering & Management at Shenkar because it is the discipline of running things well — process, data, and keeping many moving parts aligned. That degree is the backbone of how I manage and control projects.',
        'As PM at Buyverse I owned the roadmap and sprints in Jira, built the executive KPI dashboards, and mapped the funnel end to end — 20x growth with the reporting to prove it. At Talia Chriqui I ran delivery programs for 8+ businesses: real-time dashboards, process optimisation, and change management with full stakeholder adoption in weeks.',
        'I’m looking for a PMO / project-management role where control, clear reporting and stakeholder alignment actually move delivery forward. I like the hard, hands-on work and the chance to learn fast. If that’s the seat you’re filling — let’s talk.',
      ],
    },

    stats: {
      label: 'Impact in numbers',
      items: [
        { value: 20, prefix: '', suffix: 'x', label: 'Growth delivered at Buyverse' },
        { value: 32, prefix: '+', suffix: '%', label: 'Activation rate uplift' },
        { value: 35, prefix: '+', suffix: '%', label: 'Conversion improvement' },
        { value: 8, prefix: '', suffix: '+', label: 'Businesses’ programs run' },
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
            'AI-powered marketplace reinventing how Israel buys and sells. Joined as the company’s first PM — owning roadmap, delivery and growth through to exit.',
          bullets: [
            'Owned the product roadmap and sprint cycles in Jira, aligning dev, design and marketing around clear delivery milestones.',
            'Built the acquisition-ready KPI framework & executive dashboard — growth, activation, retention, conversion — in Looker Studio for leadership visibility.',
            'Mapped the full funnel end to end; identified 3 critical drop-off points and drove fixes that lifted activation by 32%.',
            'Scaled platform traffic from 100 to 2,000 monthly users (20x) through tracked, data-driven iteration (Google Analytics, LogRocket).',
            'Prepared the data-driven insights deck that supported the company’s due-diligence and acquisition.',
          ],
          tags: ['Roadmap', 'Jira', 'KPIs', 'Looker Studio', 'Reporting'],
        },
        {
          id: 'talia',
          period: '2024 — 2025',
          company: 'Talia Chriqui Consulting',
          acquired: '',
          role: 'Operations & Program Manager',
          summary:
            'Boutique consulting firm delivering operational transformation for small businesses. Ran delivery programs end to end, from scoping to adoption.',
          bullets: [
            'Ran delivery programs for 8+ SMB clients — scoping, milestones and stakeholder alignment from kickoff through to adoption.',
            'Designed real-time KPI dashboards in Looker Studio, moving teams from gut-based to data-driven decisions.',
            'Streamlined operational workflows and processes, saving an average of 7 hours/week per client.',
            'Led change management for every rollout — full team adoption within 3–4 weeks, without direct authority.',
            'Rebuilt and tracked every stage of the funnel, improving lead-to-customer conversion by 35%.',
          ],
          tags: ['Program Management', 'Stakeholders', 'Process', 'Dashboards', 'Change Mgmt'],
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
          tags: ['Pipeline Tracking', 'CRM', 'Coordination'],
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
          tags: ['Project Coordination', 'Data Analysis', 'Reporting'],
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
          tags: ['Operations', 'Excel / VBA', 'Reporting'],
        },
      ],
    },

    skills: {
      label: 'Toolkit',
      title: 'Tools & disciplines I work in',
      groups: [
        {
          name: 'Project Management & Control',
          items: ['Roadmapping', 'Sprint Management', 'Milestone & Risk Tracking', 'Stakeholder Alignment', 'Change Management'],
        },
        {
          name: 'Reporting & Analytics',
          items: ['Excel (advanced)', 'KPI Dashboards', 'Looker Studio', 'Google Analytics', 'Data Analysis'],
        },
        {
          name: 'Tools',
          items: ['Jira', 'Monday.com', 'Microsoft Office', 'LogRocket'],
        },
        {
          name: 'Foundations',
          items: ['Industrial Engineering', 'Process Optimisation', 'Operations', 'VBA'],
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
          year: '2026',
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
      title: 'Looking for a PMO who keeps projects on track?',
      body:
        'I’m open to PMO, project-management and project-control roles across Israeli tech. Industrial-Engineering backbone, data-driven, precise — and I like the hard, hands-on work. The fastest way to reach me is below.',
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
      eyebrow: 'ניהול פרויקטים · PMO · רמת גן, ישראל',
      name: 'לינור מור',
      roles: ['ניהול פרויקטים', 'PMO', 'בקרת פרויקטים', 'תפעול'],
      tagline:
        'אני שומרת על פרויקטים מורכבים במסלול — בקרה, KPIs ויישור מחזיקי עניין, על בסיס תואר בהנדסת תעשייה וניהול.',
      openTo: 'פתוחה ל',
      openRoles: ['PMO', 'ניהול פרויקטים', 'בקרת פרויקטים'],
      ctaContact: 'בואו נדבר',
      ctaResume: 'הורדת קורות חיים',
      scroll: 'גלילה',
    },

    about: {
      label: 'מי אני',
      title: 'לא נקלעתי לניהול פרויקטים. תכננתי אותו.',
      body: [
        'בחרתי בהנדסת תעשייה וניהול בשנקר כי זו התורה של לנהל דברים נכון — תהליך, דאטה, והמשמעת לשמור על הרבה חלקים נעים מיושרים. התואר הוא הבסיס לאיך שאני מנהלת ובוקרת פרויקטים.',
        'כ‑PM ב‑Buyverse ניהלתי את ה‑Roadmap והספרינטים ב‑Jira, בניתי את דאשבורדי ה‑KPI להנהלה ומיפיתי את הפאנל מקצה לקצה — צמיחה פי 20 עם הדיווח שמוכיח אותה. ב‑Talia Chriqui ניהלתי תוכניות לׂ‑8+ עסקים: דאשבורדים בזמן אמת, ייעול תהליכים, וניהול שינוי עם אימוץ מלא תוך שבועות.',
        'אני מחפשת תפקיד PMO / ניהול פרויקטים שבו בקרה, דיווח ברור ויישור מחזיקי עניין באמת מקדמים את ה‑Delivery. אני אוהבת את העבודה הקשה והמעשית ואת ההזדמנות ללמוד מהר. אם זה התפקיד שאתם מאיישים — בואו נדבר.',
      ],
    },

    stats: {
      label: 'ההשפעה במספרים',
      items: [
        { value: 20, prefix: '', suffix: 'x', label: 'צמיחה שהובלתי ב‑Buyverse' },
        { value: 32, prefix: '+', suffix: '%', label: 'שיפור ב‑Activation' },
        { value: 35, prefix: '+', suffix: '%', label: 'שיפור בהמרה' },
        { value: 8, prefix: '', suffix: '+', label: 'תוכניות לעסקים שניהלתי' },
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
            'מרקטפלייס מבוסס‑AI שמשנה את הדרך שבה ישראל קונה ומוכרת. הצטרפתי כ‑PM הראשונה בחברה — אחראית על Roadmap, Delivery וצמיחה עד לאקזיט.',
          bullets: [
            'ניהלתי את ה‑Roadmap והספרינטים ב‑Jira, ויישרתי קו בין פיתוח, עיצוב ושיווק סביב אבני דרך ברורות של Delivery.',
            'בניתי מסגרת KPI ודאשבורד הנהלה — צמיחה, Activation, Retention, המרה — ב‑Looker Studio, לשקיפות מלאה מול ההנהלה.',
            'מיפיתי את כל הפאנל מקצה לקצה; זיהיתי 3 נקודות נשירה קריטיות והובלתי תיקונים ששיפרו את ה‑Activation ב‑32%.',
            'הגדלתי את תנועת הפלטפורמה מ‑100 ל‑2,000 משתמשים חודשיים (פי 20) דרך איטרציה מבוססת‑דאטה (Google Analytics, LogRocket).',
            'הכנתי את מצגת התובנות מבוססת‑הדאטה שתמכה ב‑Due Diligence וברכישה.',
          ],
          tags: ['Roadmap', 'Jira', 'KPIs', 'Looker Studio', 'דיווח'],
        },
        {
          id: 'talia',
          period: '2024 — 2025',
          company: 'Talia Chriqui Consulting',
          acquired: '',
          role: 'מנהלת תפעול ותוכניות',
          summary:
            'חברת ייעוץ בוטיק לטרנספורמציה תפעולית לעסקים קטנים. ניהלתי תוכניות Delivery מקצה לקצה — מ‑Scoping ועד אימוץ.',
          bullets: [
            'ניהלתי תוכניות Delivery ל‑8+ עסקים — Scoping, אבני דרך ויישור מחזיקי עניין מ‑Kickoff ועד אימוץ.',
            'עיצבתי דאשבורדים בזמן אמת ב‑Looker Studio, והעברתי צוותים מקבלת החלטות אינטואיטיבית למבוססת‑דאטה.',
            'ייעלתי תהליכים תפעוליים — חיסכון של 7 שעות בשבוע בממוצע ללקוח.',
            'הובלתי ניהול שינוי בכל הטמעה — אימוץ מלא תוך 3–4 שבועות, ללא סמכות ישירה.',
            'בניתי מחדש ובקרתי כל שלב בפאנל — שיפור המרת ליד‑ללקוח ב‑35% בממוצע.',
          ],
          tags: ['ניהול תוכניות', 'מחזיקי עניין', 'תהליכים', 'דאשבורדים', 'ניהול שינוי'],
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
          tags: ['מעקב Pipeline', 'CRM', 'תיאום'],
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
          tags: ['תיאום פרויקטים', 'ניתוח נתונים', 'דיווח'],
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
          tags: ['תפעול', 'Excel / VBA', 'דיווח'],
        },
      ],
    },

    skills: {
      label: 'ארגז הכלים',
      title: 'כלים ותחומים שאני עובדת בהם',
      groups: [
        {
          name: 'ניהול ובקרת פרויקטים',
          items: ['Roadmapping', 'ניהול ספרינטים', 'מעקב אבני דרך וסיכונים', 'יישור מחזיקי עניין', 'ניהול שינוי'],
        },
        {
          name: 'דיווח ואנליטיקה',
          items: ['Excel (מתקדם)', 'דאשבורדי KPI', 'Looker Studio', 'Google Analytics', 'ניתוח נתונים'],
        },
        {
          name: 'כלים',
          items: ['Jira', 'Monday.com', 'Microsoft Office', 'LogRocket'],
        },
        {
          name: 'בסיס',
          items: ['הנדסת תעשייה וניהול', 'ייעול תהליכים', 'תפעול', 'VBA'],
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
          year: '2026',
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
      title: 'מחפשים PMO שישמור על הפרויקטים במסלול?',
      body:
        'אני פתוחה לתפקידי PMO, ניהול ובקרת פרויקטים בהייטק הישראלי. בסיס של הנדסת תעשייה וניהול, מבוססת‑דאטה, מדויקת — ואוהבת את העבודה הקשה והמעשית. הדרך המהירה ביותר להגיע אליי — למטה.',
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
