import './index.scss';

const Contact = () => {
    return (
        <>
            <div className='contact-page'>
                <div className='text-zone'>
                    <h1>Contact <span>Me</span></h1>
                    <p>I am interested in freelance opportunities. However, if you have other requests or questions, don't hesitate to contact me using the form below.</p>
                    <div className="contact-form">
                        <form>
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
            </div>
        </>
    )
}
export default Contact;