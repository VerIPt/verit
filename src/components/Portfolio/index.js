import './index.scss'
import arch from '../../assets/images/arch.png'
import cpp from '../../assets/images/cpp.png'
import java from '../../assets/images/java.png'
import react from '../../assets/images/react.png'
import js from '../../assets/images/js.png'
import pyhton from '../../assets/images/python-logo-only.png'
import raytracer from '../../assets/images/ray_tracer.png'
import louhaus from '../../assets/images/louhaus.png'
import treemap from '../../assets/images/treemap.png'
import kristenTransporte from '../../assets/images/kristen-transporte.png'
import spenglereiHolderied from '../../assets/images/spenglerei-holderied.png'
import { Trans } from 'react-i18next';

const Portfolio = () => {
    return (
        <div className="container" >
            {/* Websites Section First */}
            <div className="text-zone1">
                <h1>
                    Portfolio & <span>Projekte</span>
                </h1>
                
                <div className="websites-section">
                    <h2>Beispiel Websites</h2>
                    <p>Hier sind einige Beispiele meiner Web-Entwicklungsarbeiten:</p>
                    
                    <div className='portfolio-websites'>
                        <div className='project'>
                            <h3>Kristen Transporte</h3>
                            <a href="https://www.kristen-transporte.de/" target="_blank" rel="noopener noreferrer">
                                <img className='kristen-transporte' src={kristenTransporte} alt="Kristen Transporte Website" />
                                <button className='view-project-btn'>Website besuchen</button>
                            </a>
                        </div>
                        
                        <div className='project'>
                            <h3>Spenglerei Holderied</h3>
                            <a href="https://spenglerei-holderied.de/" target="_blank" rel="noopener noreferrer">
                                <img className='spenglerei-holderied' src={spenglereiHolderied} alt="Spenglerei Holderied Website" />
                                <button className='view-project-btn'>Website besuchen</button>
                            </a>
                        </div>
                        
                        <div className='project'>
                            <h3>The Louhaus Band</h3>
                            <a href="https://www.louhausband.de/" target="_blank" rel="noopener noreferrer">
                                <img className='louhaus' src={louhaus} alt="The Louhaus Band Website" />
                                <button className='view-project-btn'>Website besuchen</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="section-divider"></div>
                
                {/* Programming Projects */}
                <div className="projects-section">
                    <h2>Programmier-Projekte</h2>
                    <p>Technische Projekte und Implementierungen:</p>
                    
                    <div className='portfolio-projects'>
                        <div className='project'>
                            <h3>Path-tracer in Java</h3>
                            <a href="https://github.com/VerIPt/path-tracer" target="_blank" rel="noopener noreferrer">
                                <img className='pathtracer' src={raytracer} alt="Path-tracer in Java" />
                                <button className='view-project-btn'>GitHub ansehen</button>
                            </a>
                        </div>
                        <div className='project'>
                            <h3>Treemap in C++</h3>
                            <a href="https://github.com/VerIPt/treemap" target="_blank" rel="noopener noreferrer">
                                <img className='treemap' src={treemap} alt="Treemap Implementation" />
                                <button className='view-project-btn'>GitHub ansehen</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="section-divider"></div>

                {/* Skills Section */}
                <h1>
                    <Trans i18nKey={"skills"}>
                        My <span>Skills</span>
                    </Trans>
                </h1>

                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"embedded"}>
                            Embedded <span>Systems</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"embedded_text"} />
                    </p>
                </div>
                
                <div className="skill-divider"></div>
                
                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"cyber"}>
                            Cyber <span>Security</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"cyber_text"} />
                    </p>
                </div>

                <div className="skill-divider"></div>

                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"operating"}>
                            System Architecture and <span>Operating Systems</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"operating_text"} />
                    </p>
                </div>
                
                <div className="skill-divider"></div>
                
                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"distributed"}>
                            Distributed <span>Systems</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"distributed_text"} />
                    </p>
                </div>
                
                <div className="skill-divider"></div>
                
                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"micro"}>
                            Elektrotechnik und <span>Systemintegration</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"micro_text"} />
                    </p>
                </div>
                
                <div className="skill-divider"></div>
                
                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"graphics"}>
                            Computer-Grafik: <span>Path-Tracer</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"graphics_text"} />
                    </p>
                </div>
                
                <div className="skill-divider"></div>
                
                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"algo"}>
                            Algorithmen und  <span>Datenstrukturen</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"algo_text"} />
                    </p>
                </div>

                <div className="skill-divider"></div>

                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"full"}>
                            Fullstack <span>Development</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"full_text"} />
                    </p>
                </div>

                <div className="skill-divider"></div>

                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"software"}>
                            Software <span>Architekturen</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"software_text"} />
                    </p>
                </div>
                
                <div className="skill-divider"></div>
                
                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"cpp"}>
                            Effiziente <span>C++ Programmierung</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"cpp_text"} />
                    </p>
                </div>
                
                <div className="skill-divider"></div>
                
                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"meditech"}>
                            Medien <span>Technologien</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"meditech_text"} />
                    </p>
                </div>
                
                <div className="skill-divider"></div>
                
                <div className="skill-section">
                    <h3>
                        <Trans i18nKey={"data"}>
                            Data Science <span>Grundkenntnisse</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"data_text"} />
                    </p>
                </div>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <img src={pyhton} alt="" />
                    </div>
                    <div className='face2'>
                        <img src={cpp} alt="" />
                    </div>
                    <div className='face3'>
                        <img src={arch} alt="" />
                    </div>
                    <div className='face4'>
                        <img src={react} alt="" />
                    </div>
                    <div className='face5'>
                        <img src={java} alt="" />
                    </div>
                    <div className='face6'>
                        <img src={js} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;