import asikPicture from "/public/images/asik_project.png";
import openDarknessPicture from "/public/images/opendarkness.png";
import dummyPicture from "/public/images/dummy_600x400.png";
import meditatePicture from "/public/images/meditate_app.png";

export const projects = {
  title: {
    de: "Eingie Projekte",
    en: "Some Projects",
  },
  projects: [
    {
      title: "Simple Meditation",
      year: "2024",
      link: "https://github.com/ktauchert/meditation-app",
      image: meditatePicture,
      description: {
        de: "Zum Meditieren oder um motivierende Sprüche für bestimmte Situationen zu lesen. Mit der App können Sie die Dauer der Meditation per Timer einstellen und auswählen, ob Musik abgespielt werden soll. Untermalt mit schönen und ruhigen Bildern können Sie entspannt in den Tag starten.",
        en: "For meditating or reading motivating quotes for specific situations. The app lets you set a timer for the duration of your meditation and choose whether to play music. Accompanied by beautiful and calming images, it helps you start your day peacefully",
      },
      stack: ["Expo", "React Native", "Typescript"],
    },
    {
      title: "ASIK-Tool",
      year: "2020",
      link: "https://lswi.de/forschung/forschungsprojekte/asik-adaptive-spielifizierung-im-kvp",
      image: asikPicture,
      description: {
        de: "Das Forschungsprojekt ASiK hat eine innovative Gamifizierungsplattform entwickelt, die das Ideenpotenzial der Mitarbeiter effizient nutzt. Mit adaptiven Gamifizierungstechniken, die auf individuelle Bedürfnisse zugeschnitten sind, steigert die Plattform das Engagement im Ideenprozess erheblich. Durch durchdachtes Design fördert die Plattform erfolgreich die Teilnahme und schafft eine dynamische Umgebung für die Ideengenerierung.",
        en: "The ASiK research project developed an innovative gamification platform to efficiently harness employees' creative potential. Using adaptive gamification techniques tailored to individual needs, the platform significantly boosts engagement in the ideation process. Thoughtful design successfully fosters participation, creating a dynamic environment for idea generation.",
      },
      stack: ["React.js", "LAMP", "MaterialUI"],
    },
    {
      title: "OpenDarkness",
      year: "2017",
      link: "https://lswi.de/forschung/forschungsprojekte/open-darkness-dark-side-of-open-innovation",
      image: openDarknessPicture,
      description: {
        de: "Das Forschungsprojekt Open-Darkness hat ein softwarebasiertes Selbstbewertungstool entwickelt, das speziell KMU ermöglicht, die Chancen und Risiken von Open Innovation-Projekten abzuwägen und ihre Innovationsfähigkeit zu steigern. Das Tool berücksichtigt organisationale, rechtliche, prozessbezogene und Wissensmanagement-Aspekte, um eine umfassende Bewertung zu ermöglichen.",
        en: "The Open-Darkness research project has developed a software-based self-assessment tool that enables SMEs to weigh the opportunities and risks of open innovation projects and enhance their innovation capabilities. The tool takes into account organizational, legal, process-related, and knowledge management aspects to provide a comprehensive evaluation.",
      },
      stack: ["Python", "MySQL", "TKinter"],
    },
    {
      title: "Manuthetics",
      year: "2018/19",
      link: "https://lswi.de/forschung/forschungsprojekte/intentional-forgetting-in-organisationen-manuthetics",
      image: dummyPicture,
      description: {
        de: "Im Rahmen des Forschungsprojekts Manuthetics wurde eine simulierte Produktionsstrecke entwickelt, um zu untersuchen, wie Menschen mit Veränderungen im Produktionsprozess umgehen und wie sie dabei unterstützt werden können. Der Fokus lag auf der Erforschung des intentionalen Vergessens von überlernten Routinetätigkeiten und der Gestaltung von Hinweisreizen zur Unterstützung von Lernprozessen.",
        en: "As part of the Manuthetics research project, a simulated production line was developed to study how people cope with changes in the production process and how they can be supported. The focus was on exploring intentional forgetting of overlearned routine tasks and designing cues to support learning processes.",
      },
      stack: ["Web", "LAMP", "JQueryUI"],
    },
    {
      title: "iOS-Werkstatt-App",
      year: "2018/19",
      link: null,
      image: dummyPicture,
      description: {
        de: "Entwicklung einer App zur Durchführung und Analyse eines Montageprozesses. Scannen eines Barcodes für Motageteile und zetiliche Überwachung der einzelnen Schritte erfolgten mit der App.",
        en: "Development of an app for conducting and analyzing an assembly process. Scanning a barcode for assembly parts and temporal monitoring of each step were performed using the app.",
      },
      stack: ["React Native", "LAMP", "Element"],
    },
  ],
};
