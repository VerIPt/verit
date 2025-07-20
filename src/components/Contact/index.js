import { useRef, useState, useEffect } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser'
import Pacman from 'react-pacman';
import { Link } from 'react-router-dom';
import BackgroundWaves from '../BackgroundWaves';

import { Trans } from 'react-i18next';

const Contact = () => {
    const refForm = useRef()
    const [startGame, setStartGame] = useState(false);
    const [gameInitialized, setGameInitialized] = useState(false);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    // Verhindert Scrollen mit Pfeiltasten wenn das Spiel läuft
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameInitialized && startGame) {
                // Verhindert Scrollen mit Pfeiltasten
                if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
                    e.preventDefault();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [gameInitialized, startGame]);

    const handleStartClick = () => {
        setGameInitialized(true);
        setStartGame(true);
    };


    const handleRestartClick = () => {
        setStartGame(false);
        setTimeout(() => setStartGame(true), 10);
    };

    const sendEmail = (e) => {
        e.preventDefault()
        
        // Überprüfen, ob Datenschutz-Checkbox aktiviert ist
        if (!privacyAccepted) {
            alert('Bitte stimmen Sie der Datenschutzerklärung zu, um das Formular zu senden.')
            return
        }
        
        emailjs
            .sendForm(
                'service_71sfjzy',
                'template_o6wmu3r',
                refForm.current,
                'mTpUtEckFLYlDkJMg'
            )
            .then(
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }

            )
    }
    return (
        <>
            <div className='contact-page'>
                <BackgroundWaves />
                <div className='text-zone'>
                    <div className='text'>
                        <h1>
                            <Trans i18nKey={"contact"}>
                                Contact <span>Me</span>
                            </Trans>
                        </h1>
                        <p>
                            <Trans i18nKey={"contact_text"} />
                        </p>
                    </div>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul className='contact'>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li className="privacy-checkbox">
                                    <label className="checkbox-container">
                                        <input 
                                            type="checkbox"
                                            checked={privacyAccepted}
                                            onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                            required
                                        />
                                        <span className="checkmark"></span>
                                        <span className="checkbox-text">
                                            Ich stimme der <Link to="/impressum" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</Link> zu. *
                                        </span>
                                    </label>
                                </li>
                                <li>
                                    <input 
                                        type="submit" 
                                        className={`flat-button ${!privacyAccepted ? 'disabled' : ''}`}
                                        value="SEND"
                                        disabled={!privacyAccepted}
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='pacman'>
                    <div className='pacman-frame'>
                        {!gameInitialized ? (
                            <div className='game-start-section'>
                                <h3>Relaxing Game Break</h3>
                                <p>Take a break and play some Pacman!</p>
                                <button onClick={handleStartClick} className='start-button'>START GAME</button>
                            </div>
                        ) : (
                            <>
                                {startGame && <Pacman gridSize={20} />}
                                <button onClick={handleRestartClick}>RESTART</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;