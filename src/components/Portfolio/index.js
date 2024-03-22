
import './index.scss'
import html from '../../assets/images/logo1.png'
import css from '../../assets/images/logo2.png'
import cpp from '../../assets/images/cpp.png'
import java from '../../assets/images/java.png'
import react from '../../assets/images/react.png'
import js from '../../assets/images/js.png'
import raytracer from '../../assets/images/ray_tracer.png'
import louhaus from '../../assets/images/louhaus.png'
import treemap from '../../assets/images/treemap.png'
import { Trans } from 'react-i18next';

const Portfolio = () => {
    return (
        <div className="container" >
            <div className="text-zone1">
                <h1>
                    <Trans i18nKey={"skills"}>
                        My <span>Skills</span>
                    </Trans>
                </h1>
                <h3>
                    <Trans i18nKey={"operating"}>
                        System Architecture and <span>Operating Systems</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"operating_text"} />
                </p>
                <h3>
                    <Trans i18nKey={"distributed"}>
                        Distributed <span>Systems</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"distributed_text"} />
                </p>
                <h3>
                    <Trans i18nKey={"graphics"}>
                        Distributed <span>Systems</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"graphics_text"} />
                </p>
                <h3>
                    <Trans i18nKey={"algo"}>
                        Algorithmen und  <span>Datenstrukturen</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"algo_text"} />
                </p>

                <h3>
                    <Trans i18nKey={"full"}>
                        Fullstack <span>Development</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"full_text"} />
                </p>

                <h3>
                    <Trans i18nKey={"software"}>
                        Software <span>Architekturen</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"software_text"} />
                </p>
                <h3>
                    <Trans i18nKey={"cpp"}>
                        Effiziente <span>C++ Programmierung</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"cpp_text"} />
                </p>
                <h3>
                    <Trans i18nKey={"meditech"}>
                        Effiziente <span>C++ Programmierung</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"meditech_text"} />
                </p>
                <h3>
                    <Trans i18nKey={"data"}>
                        Effiziente <span>C++ Programmierung</span>
                    </Trans>
                </h3>
                <p>
                    <Trans i18nKey={"data_text"} />
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <img src={html} alt="" />
                    </div>
                    <div className='face2'>
                        <img src={cpp} alt="" />
                    </div>
                    <div className='face3'>
                        <img src={css} alt="" />
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
                <div className='portfolio'>
                    <div className='project'>
                        <h2>Path-tracer in Java</h2>
                        <a href="https://github.com/VerIPt/path-tracer">
                            <img className='pathtracer' src={raytracer} alt="Path-tracer in Java" />
                            <button className='view-project-btn'>View Project</button>
                        </a>
                    </div>
                    <div className='project'>
                        <h2>Treemap implemented in C++</h2>
                        <a href="https://github.com/VerIPt/treemap">
                            <img className='treemap' src={treemap} alt="" />
                            <button className='view-project-btn'>View Project</button>
                        </a>
                    </div>
                    <div className='project'>
                        <h2>Website The Louhaus Band</h2>
                        <a href="https://www.louhausband.de/">
                            <img className='louhaus' src={louhaus} alt="" />
                            <button className='view-project-btn'>View Project</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;