import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Logo from '../../assets/images/verit_logo.png';
import P from '../../assets/images/p.png';
import OptimizedImage from '../OptimizedImage';
import TriangulationEffect from '../TriangulationEffect';
import BackgroundWaves from '../BackgroundWaves';
import './index.scss';
import { Link } from 'react-router-dom';
import {Trans } from 'react-i18next';

const Home = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['IT-Student', 'Software Engineer', 'Embedded-Developer', 'Web-Designer'],
            typeSpeed: 150,
            backSpeed: 25,
            backDelay: 3500,
            startDelay: 800,
            loop: true,
            showCursor: false,
            smartBackspace: true,
        };
        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="home" id="home">
            <BackgroundWaves />
            <TriangulationEffect />
            <div className="home-content">
                <h3>
                    <Trans i18nKey={"name"}>
                        Hallo, mein Name ist
                    </Trans>
                </h3>
                <h1><img className='p' src={P} alt=''></img>ius <span className='surname'>Maushart</span></h1>
                <div className="title-container">
                    <h3>
                        <Trans i18nKey={"ich_bin"}>
                            Ich bin
                        </Trans>
                    </h3>
                    <h3 className='software' ref={el}></h3>
                </div>
                <p>
                    <Trans i18nKey={"verit"}>
                        Websites, Code-Lösungen, Web Applikationen - Ver-IT Services, zu Ihren Diensten für IT
                    </Trans>
                </p>
                <div className='buttons-container'>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    <Link to="/portfolio" className='flat-button'>PORTFOLIO</Link>
                </div>
                <div className='background' />
                <div className='hoverbackground' />
            </div>
            <div className="home-img">
                <OptimizedImage 
                    src={Logo} 
                    alt="Ver-IT Logo - Pius Maushart Portfolio"
                    loading="eager"
                    width="35vw"
                />
            </div>
        </div>
    );
};

export default Home;