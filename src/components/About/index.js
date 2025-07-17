import './index.scss'
import Pius from '../../assets/images/transparent1.png'
import PiusWebP from '../../assets/images/webp/transparent1.webp'
import OptimizedImage from '../OptimizedImage'
import { Trans } from 'react-i18next';


const About = () => {
    return (
        <>
            <div className='about' id='about'>
                <div className='background1' />
                <div className='about-content'>
                    <h2>
                        <Trans i18nKey={"about"}>
                            About <span>Me</span>
                        </Trans>
                    </h2>

                    <h3>
                        <Trans i18nKey={"media"} components={[<br key="0" />, <span className="surname" key="1" />]}>
                            Student B.Sc <br />Media <span className='surname'>Informatics</span>
                        </Trans>
                    </h3>
                    <p>
                        <Trans i18nKey={"text_about"} />
                    </p>



                </div>
                <div className='about-img'>
                    <OptimizedImage 
                        src={Pius} 
                        webpSrc={PiusWebP}
                        alt="Pius Maushart - Professionelles Porträt"
                        loading="lazy"
                    />
                </div>
            </div>

        </>
    );

}

export default About;