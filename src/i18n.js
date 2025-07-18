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
                    verit: 'Websites, Code-Lösungen, Web-Apps - \nVer-IT Services, zu Ihren Diensten für IT',
                    about: 'Über <1>mich</1>',
                    media: 'Student B.Sc <0/>Medien <1>Informatik</1>',
                    text_about: "Nach meiner Ausbildung zum Kfz-Mechatroniker und 5 Jahren Berufserfahrung in verschiedenen Bereichen entschied ich mich für ein IT-Studium, da mich digitale Systeme begeistern. Parallel zum Studium sammelte ich zuerst erste Einblicke als Tutor in die Lehre des Programmierens und anschließend knapp ein Jahr Erfahrung als Werkstudent in der Embedded-Software-Entwicklung. Diese praktische Erfahrung ergänzte mein theoretisches Wissen aus dem Studium und gab mir wertvolle Einblicke in die Hardware-Software-Interaktion eingebetteter Systeme. Ich bin bereit, meine kombinierten Fähigkeiten aus Studium und Praxis als Werkstudent weiter auszubauen.",
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
                    data: 'Data  <1>Science</1>',
                    data_text: 'Erfahrung in der Entwicklung datengestützter Analyse- und Handelsstrategien mit Python. Beherrsche Backtesting-Systeme für Finanzmarktdaten mit pandas, numpy, matplotlib und plotly. Verarbeitung von Zeitreihendaten durch Web-Scraping, Datenbereinigung und -transformation. Expertise in technischen Indikatoren (VWAP, RSI) und statistischen Auswertungen. Visualisierung von Handelsergebnissen und Performance-Analyse mit Risikometriken. Entwicklung automatisierter Trading-Systeme mit definierten Ein- und Ausstiegsregeln.',
                    micro: 'Elektrotechnik und <1>Systemintegration</1>',
                    micro_text: 'Kenntnisse in Elektrotechnik und elektrischer Fehlersuche in Informationssystemen, z. B. Bussysteme, sowie im Löten von elektronischen Bauteilen auf Platinen und Programmieren von Mikrocontrollern.',
                    cyber: 'Cyber<1>security</1>',
                    cyber_text: 'Kenntnisse in IT-Sicherheit, erworben durch Online-Kurse und das Studium von Fachbüchern, umfassen ein breites Verständnis verschiedener Bedrohungen und Angriffsstrategien sowie deren Prävention. Diese Expertise trägt dazu bei, potenzielle Sicherheitsrisiken zu identifizieren und effektive Präventionsstrategien zu entwickeln, um digitale Systeme proaktiv zu schützen.',
                    embedded: 'Embedded <1>Systems</1>',
                    embedded_text: 'Fundierte Erfahrung in der Embedded-Software-Entwicklung mit Fokus auf Treiberprogrammierung und Systemvalidierung. Ich besitze Kenntnisse für die Entwicklung und Anpassung von C-Treibern mittels Python sowie die Device-Tree-Validierung für Datenloggersysteme. Meine Expertise umfasst die Integration von Tests in Build-Prozesse und die Optimierung von UIO-Treiber-Handling in komplexen C/C++-Klassenstrukturen. Durch meine Arbeit mit Hardware-naher Software habe ich ein tiefes Verständnis für die Interaktion zwischen Hardware und Software in ressourcenbeschränkten Umgebungen entwickelt.',
                    
                    contact: 'Contact <1>Me</1>',
                    contact_text: 'Wenn Sie Fragen haben, zögern Sie nicht, mich über das untenstehende Formular zu kontaktieren.',

                }
            },
            en: {
                translation: {
                    name: 'Hello, my name is',
                    ich_bin: 'I am',
                    verit: 'Websites, code solutions, web apps - \nVer-IT services, at your service for IT',
                    about: 'About <1>Me</1>',
                    media: "Student B.Sc <0/>Media <1>Informatics</1>",
                    text_about: "After completing my training as an automotive mechatronics technician and gaining 5 years of professional experience in various areas, I decided to pursue IT studies, as I am passionate about digital systems. Alongside my studies, I first gained initial insights as a tutor teaching programming, and subsequently almost a year of experience as a working student in embedded software development. This practical experience complemented my theoretical knowledge from my studies and gave me valuable insights into hardware-software interaction in embedded systems. I am ready to further develop my combined skills from studies and practical experience as a working student.",
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
                    data: 'Data <1>Science</1>',
                    data_text: 'Experience in developing data-driven analysis and trading strategies using Python. Proficient in backtesting systems for financial market data with pandas, numpy, matplotlib, and plotly. Processing time series data through web scraping, data cleaning, and transformation. Expertise in technical indicators (VWAP, RSI) and statistical evaluations. Visualization of trading results and performance analysis with risk metrics. Development of automated trading systems with defined entry and exit rules.',
                    micro: 'Electrical Engineering and <1>System Integration</1>',
                    micro_text: 'Skills in electrical engineering and troubleshooting in information systems, e.g. bus systems, as well as soldering electronic components onto circuit boards and programming microcontrollers',
                    cyber: 'Cyber<1>security</1>',
                    cyber_text: 'Knowledge in IT security, acquired through online courses and the study of specialized books, encompasses a broad understanding of various threats and attack strategies as well as their prevention. This expertise helps in identifying potential security risks and developing effective prevention strategies to proactively protect digital systems.',
                    embedded: 'Embedded <1>Systems</1>',
                    embedded_text: 'Solid experience in embedded software development with a focus on driver programming and system validation. I have proficiency in developing and adapting C drivers using Python as well as validating device trees for data logger systems. My expertise includes integrating tests into build processes and optimizing UIO driver handling in complex C/C++ class structures. Through my work with hardware-level software, I have developed a deep understanding of the interaction between hardware and software in resource-constrained environments.',
                    contact: 'Contact <1>Me</1>',
                    contact_text: 'If you have other inquiries or questions, please do not hesitate to contact me using the form below.',
                }
            },

        }
    })

    export default i18next;