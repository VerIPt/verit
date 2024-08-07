import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Logo from '../../assets/images/verit_logo.png';
import P from '../../assets/images/p.png';
import './index.scss';
import { Link } from 'react-router-dom';
import {Trans } from 'react-i18next';

const Home = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['IT-Student', 'Software Engineer', 'Embedded-Developer', 'Web-Designer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
            showCursor: false,
        };
        typed.current = new Typed(el.current, options);

        return () => {

            typed.current.destroy();
        };
    }, []);

    return (
        <div className="home" id="home">

            <div className="home-content">
                <h3>
                    <Trans i18nKey={"name"}/>

                </h3>
                <h1><img className='p' src={P} alt=''></img>ius <span className='surname'>Maushart</span></h1>
                <div className="title-container">
                    <h3>
                        <Trans i18nKey={"ich_bin"}/>
                    </h3>
                    <h3 className='software' ref={el}></h3>
                </div>
                <p>
                    <Trans i18nKey={"verit"}/>    
                </p>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                <div className='background' />
                <div className='hoverbackground' />
            </div>
            <div className="home-img">
                <img src={Logo} alt="logo"></img>
            </div>
        </div>
    );
};

export default Home;
