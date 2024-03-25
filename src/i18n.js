import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        dabug: true,
        fallbackLng: 'de',
        resources: {
            de: {
                translation: {
                    name: 'Hallo, mein Name ist',
                    ich_bin: 'Ich bin',
                    verit: 'Ver-IT Services, zu Ihren Diensten für IT',
                    about: 'Über <1>mich<1/>',
                    media: 'Student B.Sc <0/>Medien <1>Informatik</1>',
                    text_about: "Nach dem Abschluss meiner Ausbildung habe ich über fünf Jahre hinweg vielfältige Erfahrungen in verschiedenen Bereichen gesammelt. Da ich mich leidenschaftlich für digitale Systeme interessiere, habe ich mich für einen zweiten Bildungsweg entschieden und beschlossen, einen Abschluss im IT-Bereich anzustreben. Schon im akademischen Kontext konnte ich Erfahrungen in diesem Feld sammeln und bin nun bereit, diese Fähigkeiten außerhalb der praktischen Ausbildung an der Universität anzuwenden und zu erweitern.",
                    skills: 'Meine <1>Skills<1/>',
                    operating: 'System Architekturen und <1>Betriebssysteme</1>',
                    operating_text: 'Vertraut mit den grundlegenden Strukturen von Betriebssystemen, einschließlich Prozessmanagement und Dateisystemen. Zudem bin ich versiert im Einsatz der Unix-Shell für verschiedene Aufgaben im Betriebssystem.',
                    distributed: 'Verteilte <1>Systeme</1>',
                    distributed_text: 'Grundkenntnisse einfacher verteilter Systeme über verschiedene Architekturen und Kommunikationsstile hinweg, welche ein Verständnis für die Komplexität vernetzter Systeme beinhaltet. Zusätzliche Kenntnisse in Protokollen und Schichtenmodellen, die für das Verständnis und die Entwicklung von Netzwerkkommunikation und Datenübertragung essentiell sind.',
                    graphics: 'Computer-Grafik: <1>Path-Tracer</1>',
                    graphics_text: 'Entwicklung eines Path Tracers von Grund auf in Java, ohne auf externe Bibliotheken zurückzugreifen. Teil des Projektes war es, komplexe Algorithmen zu implementieren, sowie mein Verständnis von Computergrafik.',
                    algo: 'Algorithmen und <1>Datenstrukturen</1>',
                    algo_text: 'Grundlegende Kenntnisse in Algorithmen und Datenstrukturen, einschließlich deren Verifikation und der Analyse ihrer Komplexität. Ich beherrsche Such- und Sortieralgorithmen sowie die damit verbundenen Speicher- und Zugriffstechniken für Listen, Bäume und Hashtabellen. Erfahrung in der Komplexitätsanalyse von Algorithmen, kann diese in realen Anwendungssystemen einsetzen und hinsichtlich ihrer Zeit- und Platzkomplexität bewerten.',
                    full: 'Fullstack <1>Web-Entwicklung</1>',
                    full_text: 'Full-Stack-Entwicklung von Webanwendungen mit TypeScript/JavaScript, die alle Phasen von der Konzeption bis zum Deployment abdeckt. Dies beinhaltet einen Fokus auf Sicherheitsaspekte, Authentifizierungsmechanismen und Datenbankintegration, was einen umfassenden Kompetenzsatz in der modernen Webentwicklung demonstriert.',
                    software: 'Software <1>Architekturen</1>',
                    software_text: 'Erfahrung in der Definition, Planung, Gestaltung und Implementierung interaktiver und komplexer Softwarearchitekturen mit Schwerpunkt auf systematischen, strukturierten und effizienten Entwicklungsprozessen.',
                    cpp: 'Effiziente <1>C++ Programmierung</1>',
                    cpp_text: 'Kompetenzen in C++ wurden durch die Rekonstruktion von Teilen der Standardbibliothek, wie Vektoren und Binärbäumen, einschließlich umfassender Aspekte des Speichermanagements, intelligenter Zeiger und Template-Programmierung entwickelt, was ein tiefgreifendes Verständnis fortgeschrittener Programmierkonzepte demonstriert.',
                    meditech: 'Medien <1>Technologien</1>',
                    meditech_text: 'Erworbenes Wissen in Medientechnologien mit Schwerpunkt auf Bild- und Audiobearbeitung. Dies umfasst Kenntnisse über Filter, Bitraten, Filterkerne und die Prinzipien hinter Bildabtastungsalgorithmen, was einen vielseitigen Kompetenzsatz in der Multimedia-Verarbeitung bietet.',
                    data: 'Data Science <1>Grundkenntnisse</1>',
                    data_text: 'Grundlegende Kenntnisse in Data Science, die durch die Analyse und Ableitung von Erkenntnissen aus dem AOL-Suchdatensatz demonstriert wurden. Mit Kenntnissen in SQL zur Datenabfrage konnte ich spezifische Ereignisse untersuchen und relevante Statistiken erstellen.',
                    micro: 'Elektrotechnik und <1>Systemintegration</1>',
                    micro_text: 'Kenntnisse in Elektrotechnik und elektrischer Fehlersuche in Informationssystemen, z. B. Bussysteme, sowie im Löten von elektronischen Bauteilen auf Platinen und Programmieren von Mikrocontrollern.',
                    cyber: 'Cyber<1>security</1>',
                    cyber_text: 'Kenntnisse in IT-Sicherheit, erworben durch Online-Kurse und das Studium von Fachbüchern, umfassen ein breites Verständnis verschiedener Bedrohungen und Angriffsstrategien sowie deren Prävention. Diese Expertise trägt dazu bei, potenzielle Sicherheitsrisiken zu identifizieren und effektive Präventionsstrategien zu entwickeln, um digitale Systeme proaktiv zu schützen.',
                    contact: 'Contact <1>Me</1>',
                    contact_text: 'Ich habe Großes Interesse an einer Anstellung als Werkstudent oder an freiberuflichen Möglichkeiten. Wenn Sie jedoch andere Anfragen oder Fragen haben, zögern Sie nicht, mich über das untenstehende Formular zu kontaktieren.',

                }
            },
            en: {
                translation: {
                    name: 'Hello, my name is',
                    ich_bin: 'I am',
                    verit: 'Ver-IT services, at your service for IT',
                    about: 'Über <1>mich<1/>',
                    media: "Student B.Sc <0/>Media <1>Informatics</1>",
                    text_about: "After completing my apprenticeship,\nI have gained diverse experiences \nin various fields over five years. \nBeing very passionate about digital systems,\nI opted for a second educational path\nand thus decided to pursue a degree in IT.\nAlready within the academic context,\nI was able to gain experience in this field\nand am now ready to apply and expand these\nskills outside of the university's practical training.",
                    skills: 'My <1>Skills<1/>',
                    operating: 'System Architecture and <1>Operating Systems</1>',
                    operating_text: 'Expertise in the fundamental structure of operating systems, including process management and file systems. Proficient in utilizing Unix Shell for various operating system tasks.',
                    distributed: 'Distributed <1>Systems</1>',
                    distributed_text: 'Demonstrated capability in programming simple distributed systems across various architectures and communication styles, showcasing an understanding of the intricacies involved in interconnected systems.',
                    graphics: 'Computer Graphics fundamentals: <1>Path-Tracer</1>',
                    graphics_text: 'Developed a path tracer from scratch in Java without the use of external libraries. This project highlighted my ability to implement complex algorithms and understanding of computer graphics.',
                    algo: 'Algorithms and <1>Datastructures</1>',
                    algo_text: 'Fundamental knowledge in algorithms and data structures, including their verification and the analysis of their complexity. I am proficient in search and sort algorithms as well as the associated storage and access techniques for lists, trees, and hash tables. Experienced in the complexity analysis of algorithms, I can apply them in real-world application systems and evaluate them in terms of their time and space complexity.',
                    full: 'Fullstack <1>Development</1>',
                    full_text: 'Full-stack development of web applications using TypeScript/JavaScript, covering all phases from conception to deployment. This includes a focus on security aspects, authentication mechanisms, and database integration, showcasing a comprehensive skill set in modern web development.',
                    software: 'Complex Software <1>Architectures</1>',
                    software_text: 'Experienced in defining, planning, designing, and implementing interactive and complex software architectures, emphasizing systematic, structured, and efficient development processes.',
                    cpp: 'Advanced C++ <1>Programming</1>',
                    cpp_text: 'Developed proficiency in C++ by reconstructing parts of the standard library, such as vectors and binary trees, including comprehensive aspects of memory management, smart pointers, and template programming, demonstrating an in-depth understanding of advanced programming concepts.',
                    meditech: 'Media <1>Technologies</1>',
                    meditech_text: 'Acquired knowledge in media technologies, focusing on image and audio processing. This includes learning about filters, bitrates, filter kernels, and the principles behind image sampling algorithms, providing a well-rounded skill set in multimedia processing.',
                    data: 'Data Science <1>Fundamentals</1>',
                    data_text: 'Possess foundational knowledge in data science, demonstrated through analyzing and deriving insights from the AOL search data set. Proficient in SQL for data querying, I have successfully investigated specific events and crafted relevant statistics, showcasing my ability to interpret and manipulate large data sets effectively.',
                    micro: 'Electrical Engineering and <1>System Integration</1>',
                    micro_text: 'Skills in electrical engineering and troubleshooting in information systems, e.g. bus systems, as well as soldering electronic components onto circuit boards and programming microcontrollers',
                    cyber: 'Cyber<1>security</1>',
                    cyber_text: 'Knowledge in IT security, acquired through online courses and the study of specialized books, encompasses a broad understanding of various threats and attack strategies as well as their prevention. This expertise helps in identifying potential security risks and developing effective prevention strategies to proactively protect digital systems.',
                    contact: 'Contact <1>Me</1>',
                    contact_text: 'I am highly interested in a position as a working student or in freelance opportunities. However, if you have other inquiries or questions, please do not hesitate to contact me using the form below.',
                }
            },

        }
    })

    export default i18next;