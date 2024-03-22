import { useRef, useState, useEffect } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser'
import Pacman from 'react-pacman';
import { Trans } from 'react-i18next';

const Contact = () => {
    const refForm = useRef()
    const [startGame, setStartGame] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartGame(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    const handleRestartClick = () => {
        setStartGame(false);
        setTimeout(() => setStartGame(true), 10);
    };

    const sendEmail = (e) => {
        e.preventDefault()
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
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='pacman'>
                    <div className='pacman-frame'>
                        {startGame && <Pacman gridSize={20} />}
                        <button onClick={handleRestartClick}>RESTART</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;