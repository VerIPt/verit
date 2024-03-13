import './index.scss'
import Pius from '../../assets/images/pius_transparent1.png'

const About = () => {
    return (
<div className='about' id='about'>
    <div className='background1' />
    <div className='about-content'>
        <h2 className='heading'>About <span>Me</span></h2>
        <h3>Student B.Sc <br/>Media <span className='surname'>Informatics</span></h3>
        <p>After completing my apprenticeship, 
            I have gained diverse experiences 
            in various fields over five years. 
            Being very passionate about digital systems, 
            I opted for a second educational path 
            and thus decided to pursue a degree in IT. 
            Already within the academic context, 
            I was able to gain experience in this field
             and am now ready to apply and expand these 
             skills outside of the university's practical training.</p>


    </div>
    <div className='about-img'>
        <img src={Pius}></img>
    </div>
</div>
    );

}

export default About;