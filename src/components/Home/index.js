import Logo from '../../assets/images/verit_logo.png'
import './index.scss'

const Home = () => {
    return(
        <>
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, my Name is</h3>
                <h1>Pius Maushart</h1>
                <h3>And I'm a <span>Software Engineer</span></h3>
                <p>I am Ver-IT services, at your service for IT</p>
                
                
            </div>
            <div className="home-img">
                <img src={Logo} alt="logo"></img>
            </div>
        </section>
        </>
    );
}

export default Home;