import { useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser'
import Pacman from 'react-pacman';

const Contact = () => {
    const refForm = useRef()

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
                        <h1>Contact <span>Me</span></h1>
                        <p>I am interested in freelance opportunities. However, if you have other requests or questions, don't hesitate to contact me using the form below.</p>
                    </div>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
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
                    <Pacman />
                </div>
            </div>
        </>
    )
}
export default Contact;