import asikPicture from "/public/images/asik_project.png";
import openDarknessPicture from "/public/images/opendarkness.png";
import dummyPicture from "/public/images/dummy_600x400.png"

export const projects = {
    title: {
        de: "Eingie Projekte",
        en: "Some Projects",
    },
    projects: [
        {
            title: "ASIK-Tool",
            year: "2020",
            link: "https://lswi.de/forschung/forschungsprojekte/asik-adaptive-spielifizierung-im-kvp",
            image: asikPicture,
            description: {
                de: "Als verantwortlicher Entwickler für das Forschungsprojekt ASiK wurden meine Fähigkeiten optimal eingesetzt, um eine Spielifizierungsplattform zu entwickeln, die das Ideenpotenzial der Mitarbeiter effizient nutzt. Besonders meine Expertise in der Gestaltung und Umsetzung der adaptiven Spielifizierung kam hier zum Tragen, wodurch individuelle Bedürfnisse berücksichtigt und das Engagement der Mitarbeiter im Ideenprozess gesteigert wurde.",
                en: "As the lead developer for the ASiK research project, my skills were optimally utilized to develop a gamification platform that efficiently harnesses the idea potential of employees. My expertise particularly lay in the design and implementation of adaptive gamification, which considered individual needs and enhanced employee engagement in the idea process.",
            },
            stack: ["React.js", "LAMP", "MaterialUI"],
        },
        {
            title: "OpenDarkness",
            year: "2017",
            link: "https://lswi.de/forschung/forschungsprojekte/open-darkness-dark-side-of-open-innovation",
            image: openDarknessPicture,
            description: {
                de: "Als führender Entwickler für das Forschungsprojekt Open-Darkness wurden Kompetenzen eingesetzt, um eine Methode und ein softwarebasiertes Selbstbewertungstool zu entwickeln. Dieses Tool ermöglicht es insbesondere KMU, die Chancen und Risiken von Open Innovation-Projekten abzuwägen und ihre Innovationsfähigkeit zu steigern. Die Expertise lag dabei in der Berücksichtigung organisationaler, rechtlicher, prozessbezogener und Wissensmanagement-Aspekte.",
                en: "In the capacity of lead developer for the Open-Darkness research project, skills were utilized to develop a method and software-based self-assessment tool. This tool enables SMEs, in particular, to assess the opportunities and risks of open innovation projects and enhance their innovation capabilities. Expertise particularly focused on considering organizational, legal, process-related, and knowledge management aspects.",
            },
            stack: ["Python", "MySQL", "TKinter"],
        },
        {
            title: "Manuthetics",
            year: "2018/19",
            link: "https://lswi.de/forschung/forschungsprojekte/intentional-forgetting-in-organisationen-manuthetics",
            image: dummyPicture,
            description: {
                de: "Als Entwickler des Forschungsprojekts Manuthetics habe ich eine simulierte Produktionsstrecke entwickelt und untersucht, wie Menschen mit Veränderungen im Produktionsprozess umgehen und wie sie dabei unterstützt werden können. Der Fokus lag auf der Erforschung des intentionalen Vergessens von überlernten Routinetätigkeiten und der Gestaltung von Hinweisreizen, um Lernprozesse zu unterstützen.",
                en: "As a developer for the Manuthetics research project, I developed a simulated production line and investigated how people cope with changes in the production process and how they can be supported. The focus was on exploring intentional forgetting of overlearned routine tasks and designing cue prompts to support learning processes.",
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