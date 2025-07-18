import { Link, NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import './index.scss'
import LogoS from '../../assets/images/Logo_ohneService.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCode, faLandmark, faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react';
import i18n from '../../i18n';

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
};

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(() => window.location.reload());
    };
    
    return (
        <Menu 
            width={100} 
            isOpen={menuOpen}
            onStateChange={(state) => handleStateChange(state)}
        >
            <div className='nav-bar'>
                <Link className='logo' to='/' onClick={closeMenu}>
                    <img src={LogoS} alt="logo" />
                </Link>
                <nav>
                    <NavLink exact="true" activeclassname="active" className="home-link" to="/" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="historia-link" to="/historia-romana" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faLandmark} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                </nav>

                <div className='impressum-link'>
                    <NavLink exact="true" activeclassname="active" className="impressum-nav-link" to="/impressum" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faFileContract} color='#4d4d4e' />
                        <span>Impressum</span>
                    </NavLink>
                </div>

                <ul className='sidebar'>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pius-maushart-9a81142a2/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://github.com/VerIPt'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <div className='language'>
                            <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.resolvedLanguage}>
                                {Object.keys(lngs).map((lng) => (
                                    <option key={lng} value={lng}>
                                        {lngs[lng].nativeName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
        </Menu>
    );
}

export default Sidebar;