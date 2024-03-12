import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Logo from '../../assets/images/verit_logo.png';
import P from '../../assets/images/p.png';
import './index.scss';

const Home = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Software Engineer', 'Full Stack Developer', 'Media-Designer', 'Web-Designer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        };

        // el.current referenziert das span-Element, wo der Effekt angezeigt wird
        typed.current = new Typed(el.current, options);

        return () => {
            // Typed.js sauber destruieren
            typed.current.destroy();
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className='animated-background'/>
            <div className="home-content">
                <h3>Hello, my Name is</h3>
                <h1><img className='p' src={P} alt=''></img>ius <span className='surname'>Maushart</span></h1>
                <h3>And I'm a <span className='software' ref={el}></span></h3>
                <p>I am Ver-IT services, at your service for IT</p>
            </div>
            <div className="home-img">
                <img src={Logo} alt="logo"></img>
            </div> 
        </section>
    );
};

export default Home;
