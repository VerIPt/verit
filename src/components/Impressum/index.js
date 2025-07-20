import './index.scss'

const Impressum = () => {
    return (
        <>
            <div className='container impressum-page'>
                <div className='text-zone'>
                    <h1>
                        Impressum
                    </h1>
                    
                    <div className='impressum-content'>
                        <h2>Angaben gemäß § 5 TMG</h2>
                        
                        <div className='impressum-section'>
                            <h3>Verantwortlich für den Inhalt</h3>
                            <p>
                                Pius Maushart<br />
                                VerIT - IT-Dienstleistungen<br />
                                E-Mail: <a href="mailto:info@ver-it.com">info@ver-it.com</a>
                            </p>
                        </div>

                        <div className='impressum-section'>
                            <h3>Haftungsausschluss</h3>
                            <h4>Haftung für Inhalte</h4>
                            <p>
                                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                                können wir jedoch keine Gewähr übernehmen.
                            </p>
                            
                            <h4>Haftung für Links</h4>
                            <p>
                                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren 
                                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
                                fremden Inhalte auch keine Gewähr übernehmen.
                            </p>
                        </div>

                        <div className='impressum-section'>
                            <h3>Datenschutz</h3>
                            <p>
                                Die Nutzung unserer Webseite ist in der Regel ohne Angabe 
                                personenbezogener Daten möglich. Soweit auf unseren Seiten 
                                personenbezogene Daten erhoben werden, erfolgt dies stets 
                                auf freiwilliger Basis.
                            </p>
                        </div>

                        <div className='impressum-section'>
                            <h2 id="datenschutz">Ausführliche Datenschutzerklärung</h2>
                            
                            <h3>1. Datenschutz auf einen Blick</h3>
                            <h4>Allgemeine Hinweise</h4>
                            <p>
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                            </p>
                            
                            <h4>Datenerfassung auf dieser Website</h4>
                            <p>
                                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                            </p>
                            <p>
                                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                                Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                            </p>
                            
                            <h3>2. Hosting</h3>
                            <p>
                                Wir hosten die Inhalte unserer Website bei einem externen Dienstleister. 
                                Hierbei können personenbezogene Daten erfasst werden, die von Ihrem Browser 
                                übermittelt werden, um die Darstellung der Website zu ermöglichen.
                            </p>
                            
                            <h3>3. Kontaktformular</h3>
                            <p>
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                            </p>
                            <p>
                                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO, 
                                sofern Sie Ihre Einwilligung erteilt haben. Die Einwilligung kann jederzeit widerrufen werden.
                            </p>
                            <p>
                                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns 
                                zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck 
                                für die Datenspeicherung entfällt.
                            </p>
                            
                            <h3>4. E-Mail-Verkehr</h3>
                            <p>
                                Wenn Sie uns per E-Mail kontaktieren, werden die übermittelten Daten 
                                (E-Mail-Adresse, Name und Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert.
                            </p>
                            
                            <h3>5. Ihre Rechte</h3>
                            <p>
                                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                            </p>
                            <ul>
                                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                                <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                            </ul>
                            <p>
                                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: 
                                <a href="mailto:info@ver-it.com">info@ver-it.com</a>
                            </p>
                            
                            <h3>6. Beschwerderecht</h3>
                            <p>
                                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die 
                                Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Impressum
