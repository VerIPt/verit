import { Link, NavLink } from 'react-router-dom'
import { slide as Menu, handleOnClose } from 'react-burger-menu';
import './index.scss'
import LogoS from '../../assets/images/Logo_ohneService.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import i18n from '../../i18n';

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
};

const Sidebar = () => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(() => window.location.reload());
    };
    return (

        <Menu width={100}>
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={LogoS} alt="logo" />
                </Link>
                <nav>
                    <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />

                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />

                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                        <FontAwesomeIcon icon={faCode} color='#4d4d4e' />

                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />

                    </NavLink>
                </nav>





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

// import { Link, NavLink } from 'react-router-dom'
// import { slide as Menu, handleOnClose } from 'react-burger-menu';
// import './index.scss'
// import LogoS from '../../assets/images/Logo_ohneService.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// const Sidebar = () => (


//     <Menu width={100}>
//         <div className='nav-bar'>
//             <Link className='logo' to='/'>
//                 <img src={LogoS} alt="logo" />
//             </Link>
//             <nav>
//                 <NavLink exact="true" activeclassname="active" className="home-link" to="/">
//                     <FontAwesomeIcon icon={faHome} color='#4d4d4e' />

//                 </NavLink>
//                 <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
//                     <FontAwesomeIcon icon={faUser} color='#4d4d4e' />

//                 </NavLink>
//                 <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
//                     <FontAwesomeIcon icon={faCode} color='#4d4d4e' />

//                 </NavLink>
//                 <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
//                     <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />

//                 </NavLink>
//             </nav>
//             <ul className='sidebar'>
//                 <li>
//                     <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pius-maushart-9a81142a2/'>
//                         <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
//                     </a>
//                 </li>
//                 <li>
//                     <a target='_blank' rel='noreferrer' href='https://github.com/VerIPt'>
//                         <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     </Menu>
// )

// export default Sidebar;