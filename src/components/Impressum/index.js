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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Impressum
