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
import augustusImage from '../../assets/images/image_augustus.png'
// WebP optimierte Versionen
import louhausWebP from '../../assets/images/webp/louhaus.webp'
import kristenTransporteWebP from '../../assets/images/webp/kristen-transporte.webp'
import spenglereiHolderiedWebP from '../../assets/images/webp/spenglerei-holderied.webp'
import augustusImageWebP from '../../assets/images/webp/image_augustus.webp'
import BackgroundWaves from '../BackgroundWaves'
import OptimizedWebsiteImage from '../OptimizedWebsiteImage'
import { Trans } from 'react-i18next';

const Portfolio = () => {
    return (
        <div className="container" >
            <BackgroundWaves />
            {/* Websites Section First */}
            <div className="text-zone1">
                <h1>
                    <Trans i18nKey={"portfolio"}>
                        Portfolio & <span>Projekte</span>
                    </Trans>
                </h1>
                
                <div className="websites-section">
                    <h2>
                        <Trans i18nKey={"websites_section"}>
                            Beispiel Websites
                        </Trans>
                    </h2>
                    <p>
                        <Trans i18nKey={"websites_description"}>
                            Hier sind einige Beispiele meiner Web-Entwicklungsarbeiten:
                        </Trans>
                    </p>
                    
                    <div className='portfolio-websites'>
                        <div className='project'>
                            <h3>
                                <Trans i18nKey={"kristen_transporte_title"}>
                                    Kristen Transporte
                                </Trans>
                            </h3>
                            <a href="https://www.kristen-transporte.de/" target="_blank" rel="noopener noreferrer">
                                <OptimizedWebsiteImage 
                                    className='kristen-transporte' 
                                    src={kristenTransporte}
                                    webpSrc={kristenTransporteWebP}
                                    alt="Kristen Transporte Website" 
                                />
                                <button className='view-project-btn'>
                                    <Trans i18nKey={"visit_website"}>
                                        Website besuchen
                                    </Trans>
                                </button>
                            </a>
                        </div>
                        
                        <div className='project'>
                            <h3>
                                <Trans i18nKey={"spenglerei_holderied_title"}>
                                    Spenglerei Holderied
                                </Trans>
                            </h3>
                            <a href="https://spenglerei-holderied.de/" target="_blank" rel="noopener noreferrer">
                                <OptimizedWebsiteImage 
                                    className='spenglerei-holderied' 
                                    src={spenglereiHolderied}
                                    webpSrc={spenglereiHolderiedWebP}
                                    alt="Spenglerei Holderied Website" 
                                />
                                <button className='view-project-btn'>
                                    <Trans i18nKey={"visit_website"}>
                                        Website besuchen
                                    </Trans>
                                </button>
                            </a>
                        </div>
                        
                        <div className='project'>
                            <h3>
                                <Trans i18nKey={"louhaus_band_title"}>
                                    The Louhaus Band
                                </Trans>
                            </h3>
                            <a href="https://www.louhausband.de/" target="_blank" rel="noopener noreferrer">
                                <OptimizedWebsiteImage 
                                    className='louhaus' 
                                    src={louhaus}
                                    webpSrc={louhausWebP}
                                    alt="The Louhaus Band Website" 
                                />
                                <button className='view-project-btn'>
                                    <Trans i18nKey={"visit_website"}>
                                        Website besuchen
                                    </Trans>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="section-divider"></div>
                
                {/* Programming Projects */}
                <div className="projects-section">
                    <h2>
                        <Trans i18nKey={"projects_section"}>
                            Programmier-Projekte
                        </Trans>
                    </h2>
                    <p>
                        <Trans i18nKey={"projects_description"}>
                            Technische Projekte und Implementierungen:
                        </Trans>
                    </p>
                    
                    <div className='portfolio-projects'>
                        <div className='project'>
                            <h3>
                                <Trans i18nKey={"pathtracer_title"}>
                                    Path-tracer in Java
                                </Trans>
                            </h3>
                            <a href="https://github.com/VerIPt/path-tracer" target="_blank" rel="noopener noreferrer">
                                <img className='pathtracer' src={raytracer} alt="Path-tracer in Java" />
                                <button className='view-project-btn'>
                                    <Trans i18nKey={"view_github"}>
                                        GitHub ansehen
                                    </Trans>
                                </button>
                            </a>
                        </div>
                        <div className='project'>
                            <h3>
                                <Trans i18nKey={"treemap_title"}>
                                    Treemap in C++
                                </Trans>
                            </h3>
                            <a href="https://github.com/VerIPt/treemap" target="_blank" rel="noopener noreferrer">
                                <img className='treemap' src={treemap} alt="Treemap Implementation" />
                                <button className='view-project-btn'>
                                    <Trans i18nKey={"view_github"}>
                                        GitHub ansehen
                                    </Trans>
                                </button>
                            </a>
                        </div>
                        <div className='project'>
                            <h3>
                                <Trans i18nKey={"augustus_timeline_title"}>
                                    Augustus Timeline
                                </Trans>
                            </h3>
                            <a href="/augustus" target="_blank" rel="noopener noreferrer">
                                <OptimizedWebsiteImage 
                                    className='augustus-timeline' 
                                    src={augustusImage}
                                    webpSrc={augustusImageWebP}
                                    alt="Augustus Timeline" 
                                />
                                <button className='view-project-btn'>
                                    <Trans i18nKey={"visit_website"}>
                                        Website besuchen
                                    </Trans>
                                </button>
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