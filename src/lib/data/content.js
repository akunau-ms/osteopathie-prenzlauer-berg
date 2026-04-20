/** @type {typeof import('./types').siteContent} */
export const siteContent = {
  praxis: {
    name: 'Osteopathie Prenzlauer Berg',
    therapeut: 'Marco Mathavan',
    berufsbezeichnung: 'Osteopath',
    adresse: 'Hagenauer Str. 14',
    plz: '10435',
    stadt: 'Berlin',
    stadtteil: 'Prenzlauer Berg',
    telefon: '0163/8715198',
    email: 'info@osteopathie-prenzlauer-berg.de',
    oeffnungszeiten: 'Termine nach telefonischer Vereinbarung',
    anfahrt: {
      strassenbahn: 'Straßenbahn M10 – Haltestelle Husemannstraße',
      ubahn: 'U-Bahn U2 – Haltestelle Eberswalder Straße (3 Minuten Fußweg)'
    },
    koordinaten: { lat: 52.5397, lng: 13.4148 }
  },

  nav: [
    { label: 'Startseite', href: '/' },
    { label: 'Osteopathie', href: '/osteopathie' },
    { label: 'Kinderosteopathie', href: '/kinderosteopathie' },
    { label: 'Frauen & Schwangere', href: '/frauen-und-schwangere' },
    { label: 'Kontakt', href: '/kontakt' }
  ],

  home: {
    hero: {
      headline: 'Ganzheitliche Heilung durch\nOsteopathie',
      subline: 'Ihre Praxis für Osteopathie in Berlin Prenzlauer Berg. Sanfte manuelle Therapie für Körper, Geist und Seele.',
      cta: 'Termin vereinbaren',
      ctaHref: '/kontakt'
    },
    intro: {
      heading: 'Herzlich willkommen in meiner Praxis',
      text: 'Die Osteopathie hat sich in den letzten 20 Jahren in Deutschland zu einer der differenziertesten manualtherapeutischen Richtungen entwickelt und trifft bei Patienten und Medizinern zunehmend auf großes Interesse. Als erfahrener Osteopath behandle ich Sie mit einem ganzheitlichen Ansatz, der Körper, Geist und Seele berücksichtigt.'
    },
    leistungen: [
      {
        title: 'Osteopathie',
        description: 'Ganzheitliche manualtherapeutische Behandlung von Bewegungsapparat, inneren Organen und Nervensystem.',
        href: '/osteopathie',
        icon: 'body'
      },
      {
        title: 'Kinderosteopathie',
        description: 'Sanfte Behandlung für Säuglinge und Kinder – von Geburtsfolgen bis zu Entwicklungsstörungen.',
        href: '/kinderosteopathie',
        icon: 'baby'
      },
      {
        title: 'Frauen & Schwangere',
        description: 'Spezialisierte osteopathische Begleitung für Frauen in allen Lebensphasen und während der Schwangerschaft.',
        href: '/frauen-und-schwangere',
        icon: 'heart'
      }
    ]
  },

  osteopathie: {
    meta: {
      title: 'Osteopathie Berlin Prenzlauer Berg | Marco Mathavan Osteopath',
      description: 'Professionelle Osteopathie-Behandlung in Berlin Prenzlauer Berg. Rückenschmerzen, Kopfschmerzen, Verspannungen – ganzheitliche Therapie durch Marco Mathavan.'
    },
    heading: 'Osteopathie',
    intro: 'Die Osteopathie ist ein ganzheitlicher manualtherapeutischer Behandlungsansatz. Am Ende des 19. Jahrhunderts entwickelte der amerikanische Arzt Andrew Taylor Still die grundlegenden Prinzipien:',
    prinzipien: [
      'Der Mensch ist eine Einheit, bestehend aus Körper, Geist und Seele',
      'Der Körper besitzt selbstregulierende und selbstheilende Mechanismen',
      'Struktur und Funktion beeinflussen sich wechselseitig'
    ],
    bereiche: [
      {
        title: 'Parietale Osteopathie',
        description: 'Sie umfasst den Bewegungsapparat – dazu gehören Gelenke, Muskeln und Knochen.',
        icon: 'bone'
      },
      {
        title: 'Viscerale Osteopathie',
        description: 'Sie umfasst die inneren Organe, deren Blutgefäße und Nerven sowie das lymphatische System.',
        icon: 'organ'
      },
      {
        title: 'Kraniosakrale Osteopathie',
        description: 'Sie umfasst die Behandlung von Schädel, Gehirn und Rückenmark sowie der Wirbelsäule und des Beckens. Die zentrale Rolle spielt dabei die Gehirn- und Rückenmarksflüssigkeit.',
        icon: 'brain'
      }
    ],
    indikationen: [
      'Rückenschmerzen',
      'Kopfschmerzen',
      'Muskuläre Verspannungen',
      'Blockaden der Wirbelsäule',
      'Beckenschiefstand',
      'Bandscheibenprobleme',
      'Gelenkschmerzen (Schulter, Knie)',
      'Schmerzen oder Taubheit in den Extremitäten',
      'Kiefergelenksprobleme (CMD)',
      'Verstauchungen',
      'Verdauungsbeschwerden'
    ]
  },

  kinder: {
    meta: {
      title: 'Kinderosteopathie Berlin | Osteopathie Baby & Kind Prenzlauer Berg',
      description: 'Kinderosteopathie in Berlin Prenzlauer Berg. Sanfte Behandlung für Säuglinge und Kinder – KISS-Syndrom, Schreibabys, Schlafstörungen, Schädelasymmetrien.'
    },
    heading: 'Kinderosteopathie',
    intro: 'Die Osteopathie bekommt immer mehr Bedeutung in der Kinderheilkunde. Selbst bei einer „normalen", unkomplizierten Geburt wirken starke mechanische Kräfte auf den Körper des Kindes ein. Da die einzelnen Schädelknochen noch sehr elastisch und nicht fest miteinander verbunden sind, kann es zu Verschiebungen einzelner Schädelknochen kommen.',
    text: 'Außerdem können Blockaden in der gesamten Wirbelsäule bis hin zum Becken entstehen. Diese sogenannten Dysfunktionen haben Einfluss auf das gesamte Nervensystem und dadurch auch auf das Wohlbefinden des Kindes. Die osteopathische Diagnose stützt sich auf eine ausführliche Anamnese und eine genaue Untersuchung des Kindes. Die Behandlung besteht aus sanften Griffen, die Störungen und Blockaden lösen. Oft sind wenige Behandlungen ausreichend, um mögliche Einschränkungen zu beheben.',
    indikationen: [
      'Schwere und traumatische Geburten sowie Kaiserschnittgeburten',
      'Schädel- und Körperasymmetrien',
      'Blockade der Kopfgelenke / Einschränkung der Beweglichkeit (KISS-Syndrom)',
      'Schlafstörungen, Stillprobleme',
      'Starke Unruhe (Schreibabys, ADS, ADHS)',
      'Schluckprobleme',
      'Blähungen / Verstopfungen',
      'Lernschwierigkeiten und Konzentrationsschwäche im Schulalter',
      'Motorische Entwicklungsverzögerungen',
      'Beckenschiefstand und Skoliose bei älteren Kindern'
    ]
  },

  frauen: {
    meta: {
      title: 'Osteopathie Frauen & Schwangerschaft Berlin | Prenzlauer Berg',
      description: 'Osteopathische Behandlung für Frauen und Schwangere in Berlin Prenzlauer Berg. PMS, Unterleibsschmerzen, Schwangerschaftsbeschwerden – ganzheitliche Hilfe.'
    },
    heading: 'Frauen & Schwangere',
    frauenheilkunde: {
      heading: 'Frauenheilkunde',
      text: 'In der Frauenheilkunde aus osteopathischer Sicht spielt das Becken eine zentrale Rolle. Es beherbergt die weiblichen Geschlechts- und Fortpflanzungsorgane sowie die Blase mit den ableitenden Harnwegen und den Dickdarm. Durch den Monatszyklus, der von Hormonen reguliert wird, verändern sich Position, Größe und Gewicht der Gebärmutter erheblich. Weitere Ursachen können Narben und Verwachsungen darstellen, die durch Operationen, Infektionen oder Erkrankungen wie der Endometriose entstehen.',
      symptome: [
        'Unterleibsschmerzen',
        'Schmerzen in der Lendenwirbelsäule',
        'PMS (Prämenstruelles Syndrom)',
        'Wiederkehrende Harnwegsinfektionen',
        'Verdauungsprobleme',
        'Unregelmäßiger Zyklus',
        'Zwischenblutungen',
        'Unerfüllter Kinderwunsch',
        'Migräne',
        'Stimmungsschwankungen'
      ],
      behandlung: [
        'Haltestrukturen der Organe von Einschränkungen befreien',
        'Organe entstauen und deren Durchblutung verbessern',
        'Schmerzen lindern, Verspannungen lösen',
        'Beckenboden- und Bauchmuskulatur stabilisieren',
        'Druckverteilung im Bauch- und Beckenraum verbessern',
        'Neurologische Funktionen sichern, Nerven-Kompressionen beseitigen',
        'Mobilität der Gelenke erleichtern'
      ]
    },
    schwangerschaft: {
      heading: 'Schwangerschaft',
      text: 'Um den Körper auf eine unproblematische Schwangerschaft vorzubereiten, beginnt eine osteopathische Behandlung im Idealfall vor einer Schwangerschaft. Der Verlauf der Schwangerschaft hat einen entscheidenden Einfluss auf die Entwicklung des Kindes, auf den Geburtsverlauf sowie auf die Gesundheit der werdenden Mutter.',
      symptome: [
        'Rückenschmerzen, Ischialgie',
        'Verspannungen der Muskulatur',
        'Übelkeit',
        'Atemprobleme',
        'Müdigkeit',
        'Kreislaufprobleme',
        'Kopfschmerzen',
        'Restless Legs Syndrom (RLS)'
      ],
      ziele: [
        'Anpassung an Veränderungen ermöglichen, Beschwerden lindern',
        'Muskeltonus des Beckenbodens ausgleichen und elastisch halten',
        'Bewegungseinschränkungen des Beckengürtels beheben',
        'Den Psoasmuskel („Geburtsrutsche") entspannen',
        'Kreislauf von Mutter und Kind verbessern',
        'Wassereinlagerungen in den Beinen entstaufen',
        'Das Drehen des Kindes in die richtige Geburtslage unterstützen'
      ],
      nachgeburt: 'Eine osteopathische Behandlung nach der Geburt kann dazu dienen, die körperlichen Veränderungen der Mutter zu begleiten, Beckenbodenstabilität und Rückbildung des Gewebes zu fördern sowie die Erholung von den Belastungen durch Schwangerschaft und Geburt zu unterstützen.'
    }
  },

  kontakt: {
    meta: {
      title: 'Kontakt & Anfahrt | Osteopathie Prenzlauer Berg Berlin',
      description: 'Kontakt und Anfahrt zur Osteopathie-Praxis von Marco Mathavan in Berlin Prenzlauer Berg. Hagenauer Str. 14, 10435 Berlin. Tel. 0163/8715198.'
    }
  }
};
