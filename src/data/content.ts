export const site = {
  name: "KERNFELD",
  description:
    "Technische Energieberatung für den Mittelstand im Rhein-Neckar-Raum.",
  region: "Rhein-Neckar · Baden-Württemberg",
};
export const services = [
  {
    slug: "energieanalyse",
    number: "01",
    title: "Energieanalyse",
    short: "Erst verstehen. Dann investieren.",
    description:
      "Wir machen Lastgänge, Betriebszeiten und Energieflüsse verständlich. Damit Sie wissen, wo sich genaueres Hinsehen lohnt.",
    scope: [
      "Datenaufnahme und Plausibilitätsprüfung",
      "Lastgang- und Grundlastanalyse",
      "Begehung der relevanten Anlagen",
      "Priorisierte Maßnahmenübersicht",
    ],
    result:
      "Eine belastbare Ausgangsbasis: dokumentierte Verbräuche, erkennbare Lastspitzen und konkrete Ansatzpunkte. Keine Investitionsentscheidung ohne nachvollziehbare Annahmen.",
    time: "3–5 Wochen",
    audience:
      "Produktionsbetriebe, Logistikstandorte und größere Gewerbeimmobilien",
    question: "Welche Daten benötigen Sie zum Start?",
    answer:
      "Hilfreich sind zwölf Monate Verbrauchsdaten, Lastgänge, Betriebszeiten und eine Übersicht der wesentlichen Verbraucher. Fehlende Daten besprechen wir im Erstgespräch.",
  },
  {
    slug: "waermekonzepte",
    number: "02",
    title: "Wärmekonzepte",
    short: "Die passende Wärme. Für Ihren Betrieb.",
    description:
      "Abwärme, Wärmepumpe oder bestehende Versorgung: Wir vergleichen Varianten entlang Ihrer Prozesse und Standortbedingungen.",
    scope: [
      "Aufnahme von Temperatur- und Lastprofilen",
      "Untersuchung nutzbarer Abwärme",
      "Technischer Vergleich von Versorgungsvarianten",
      "Szenarien für Investition und Betrieb",
    ],
    result:
      "Ein nachvollziehbarer Variantenvergleich mit Annahmen, Grenzen und nächsten Planungsschritten. Der Betrieb und seine erforderlichen Temperaturniveaus stehen im Mittelpunkt.",
    time: "4–8 Wochen",
    audience:
      "Unternehmen mit Prozesswärme, Kälteanlagen oder hohem Heizbedarf",
    question: "Ist eine Wärmepumpe immer die beste Wahl?",
    answer:
      "Nein. Entscheidend sind unter anderem Temperaturniveau, zeitliche Verfügbarkeit, Platz, Netzanschluss und Betriebsweise. Wir vergleichen geeignete Varianten ohne Produktbindung.",
  },
  {
    slug: "transformationsplanung",
    number: "03",
    title: "Transformationsplanung",
    short: "Aus Einzelmaßnahmen wird ein Plan.",
    description:
      "Wir ordnen technische Maßnahmen nach Wirkung, Abhängigkeiten und betrieblichen Zeitfenstern. So wird aus einer Liste ein umsetzbarer Fahrplan.",
    scope: [
      "Zusammenführung vorhandener Analysen",
      "Bewertung technischer Abhängigkeiten",
      "Abstimmung mit Wartungs- und Investitionszyklen",
      "Etappenplan mit Verantwortlichkeiten",
    ],
    result:
      "Ein abgestimmter Fahrplan, der Prioritäten erklärt und Entscheidungen vorbereitet. Mit transparenten Annahmen und Raum für veränderte Rahmenbedingungen.",
    time: "6–10 Wochen",
    audience:
      "Technische Leitungen und Geschäftsführungen mit mehreren Handlungsfeldern",
    question: "Begleiten Sie auch die Umsetzung?",
    answer:
      "Im Konzept ist eine phasenweise Begleitung vorgesehen: Leistungsbeschreibungen, fachliche Angebotsprüfung und Fortschrittsabgleich. Der konkrete Umfang wird separat vereinbart.",
  },
];
export const articles = [
  {
    slug: "grundlast-verstehen",
    category: "ENERGIEANALYSE",
    title: "Was Ihr Betrieb verbraucht, wenn niemand arbeitet.",
    teaser:
      "Die Grundlast ist oft der beste Einstieg in die Energieanalyse. Drei Fragen helfen, den richtigen Messpunkt zu finden.",
    date: "2026-09-18",
    read: "5 Min.",
    sections: [
      [
        "Die ruhigen Stunden erzählen viel",
        "Betrachten Sie einen Lastgang außerhalb der regulären Produktion. Welche Leistung bleibt nachts und am Wochenende bestehen? Diese Grundlast umfasst notwendige Dauerverbraucher – und möglicherweise Anlagen, deren Betriebszeit nicht mehr zum Bedarf passt.",
      ],
      [
        "Nicht jeder Dauerverbrauch ist vermeidbar",
        "Sicherheitsfunktionen, Kühlung oder IT benötigen auch außerhalb der Schicht Energie. Eine pauschale Abschaltung ist deshalb kein sinnvoller Ansatz. Ordnen Sie zuerst Verbraucher und Anforderungen zu.",
      ],
      [
        "Drei Fragen für die erste Prüfung",
        "Welche Anlagen laufen außerhalb der Schicht? Welche Prozesse benötigen diese Versorgung tatsächlich? Wer kann die Abschaltbedingungen fachlich beurteilen? Dokumentieren Sie die Antworten zusammen mit den Messwerten.",
      ],
      [
        "Vom Messwert zur Maßnahme",
        "Legen Sie einen kurzen, betrieblich abgestimmten Testzeitraum fest. Vergleichen Sie ähnliche Produktionsbedingungen und halten Sie Ausnahmen fest. Erst danach lässt sich beurteilen, ob eine Änderung dauerhaft sinnvoll ist.",
      ],
    ],
  },
  {
    slug: "abwaerme-pruefen",
    category: "WÄRMEPLANUNG",
    title: "Abwärme ist wertvoll. Wenn sie zum Bedarf passt.",
    teaser:
      "Temperatur, Zeit und Entfernung entscheiden darüber, ob eine Wärmequelle praktisch nutzbar ist.",
    date: "2026-08-27",
    read: "4 Min.",
    sections: [
      [
        "Mit dem Bedarf beginnen",
        "Eine verfügbare Wärmequelle allein macht noch kein Wärmekonzept. Prüfen Sie zuerst, wo Wärme gebraucht wird, zu welchen Zeiten und auf welchem Temperaturniveau.",
      ],
      [
        "Die zeitliche Überlagerung prüfen",
        "Eine Quelle kann nur dann direkt helfen, wenn Quelle und Bedarf gleichzeitig verfügbar sind. Speicher können zeitliche Unterschiede ausgleichen, benötigen aber Platz und zusätzliche Investitionen.",
      ],
      [
        "Die Strecke mitdenken",
        "Zwischen Quelle und Verbraucher liegen Leitungen, Wärmeverluste und bauliche Randbedingungen. Ein früher Lageplan zeigt, ob die Verbindung plausibel ist.",
      ],
      [
        "Varianten statt Einzelversprechen",
        "Vergleichen Sie die Wärmerückgewinnung mit anderen technisch geeigneten Wegen. Annahmen zu Betriebsstunden und Energiepreisen gehören ausdrücklich in den Vergleich.",
      ],
    ],
  },
  {
    slug: "massnahmen-priorisieren",
    category: "STRATEGIE",
    title: "Welche Maßnahme kommt zuerst?",
    teaser:
      "Eine gute Reihenfolge berücksichtigt mehr als die rechnerische Amortisationszeit.",
    date: "2026-07-09",
    read: "6 Min.",
    sections: [
      [
        "Abhängigkeiten sichtbar machen",
        "Eine neue Wärmeerzeugung sollte nicht losgelöst von späteren Effizienzmaßnahmen dimensioniert werden. Zeichnen Sie auf, welche Entscheidung andere Maßnahmen beeinflusst.",
      ],
      [
        "Betriebliche Fenster nutzen",
        "Stillstände und Wartungsphasen sind wertvolle Zeitfenster. Eine fachlich sinnvolle Maßnahme kann weniger wirtschaftlich werden, wenn ihre Umsetzung zusätzliche Unterbrechungen erfordert.",
      ],
      [
        "Unsicherheit dokumentieren",
        "Die Genauigkeit einer frühen Schätzung ist begrenzt. Arbeiten Sie mit Bandbreiten und kennzeichnen Sie, welche Annahmen durch weitere Messungen abgesichert werden müssen.",
      ],
      [
        "Verantwortung benennen",
        "Ein Fahrplan braucht für jede Etappe eine verantwortliche Person, die benötigten Informationen und einen klaren Entscheidungspunkt. So bleibt er im Alltag nutzbar.",
      ],
    ],
  },
];
export const cases = [
  {
    title: "Ein klarer Blick auf die Grundlast.",
    sector: "METALLVERARBEITUNG",
    location: "Rhein-Neckar",
    text: "Fiktiver Produktionsstandort mit zwei Schichten. Die Konzeptstudie verbindet Lastgangdaten mit Anlagenlaufzeiten und entwickelt einen Messplan für die Nachtstunden.",
    scope: "Datenanalyse · Begehung · Messkonzept",
    metric: "2 Schichten",
    detail: "Eine gemeinsame Datengrundlage für Technik und Geschäftsführung.",
  },
  {
    title: "Prozesswärme im Zusammenhang denken.",
    sector: "LEBENSMITTELPRODUKTION",
    location: "Nordbaden",
    text: "Fiktives Werk mit gleichzeitigem Kälte- und Wärmebedarf. Untersucht werden Temperaturniveaus und die zeitliche Überschneidung von Quelle und Bedarf.",
    scope: "Wärmebilanz · Variantenvergleich · Etappenplan",
    metric: "3 Varianten",
    detail:
      "Technische Alternativen transparent und vergleichbar dokumentiert.",
  },
];
