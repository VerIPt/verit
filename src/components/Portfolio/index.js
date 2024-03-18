
import './index.scss'
import html from '../../assets/images/logo1.png'
import css from '../../assets/images/logo2.png'
import cpp from '../../assets/images/cpp.png'
import java from '../../assets/images/java.png'
import react from '../../assets/images/react.png'
import js from '../../assets/images/js.png'
import raytracer from '../../assets/images/ray_tracer.png'
import louhaus from '../../assets/images/louhaus.png'
import treemap from '../../assets/images/treemap.png'


const Portfolio = () => {
    return (
        <div className="container" >
            <div className="text-zone1">
                <span></span>
                <h1>My <span>Skills</span></h1>
                <h3>System Architecture and <span>Operating Systems</span> </h3>
                <p>Expertise in the fundamental structure of operating systems, including process management and file systems. Proficient in utilizing Unix Shell for various operating system tasks.</p>
                <h3>Distributed <span>Systems</span></h3>
                <p>Demonstrated capability in programming simple distributed systems across various architectures and communication styles, showcasing an understanding of the intricacies involved in interconnected systems.</p>
                <h3>Computer Graphics fundamentals: <span>Path-Tracer</span></h3>
                <p>Developed a path tracer from scratch in Java without the use of external libraries. This project highlighted my ability to implement complex algorithms and understanding of computer graphics.</p>
                <h3>Data <span>Structures</span></h3>
                <p>Skilled in the analysis and implementation of select data structures, demonstrating a solid foundation in essential computer science concepts.</p>
                <h3>Full-Stack <span>Web Development</span></h3>
                <p>Full-stack development of web applications using TypeScript/JavaScript, covering all phases from conception to deployment. This includes a focus on security aspects, authentication mechanisms, and database integration, showcasing a comprehensive skill set in modern web development.</p>
                <h3>Complex Software <span>Architectures</span></h3>
                <p>Experienced in defining, planning, designing, and implementing interactive and complex software architectures, emphasizing systematic, structured, and efficient development processes.</p>
                <h3>Advanced C++ <span>Programming</span></h3>
                <p>Developed proficiency in C++ by reconstructing parts of the standard library, such as vectors and binary trees, including comprehensive aspects of memory management, smart pointers, and template programming, demonstrating an in-depth understanding of advanced programming concepts.</p>
                <h3>Media <span>Technologies</span></h3>
                <p>Acquired knowledge in media technologies, focusing on image and audio processing. This includes learning about filters, bitrates, filter kernels, and the principles behind image sampling algorithms, providing a well-rounded skill set in multimedia processing.</p>
                <h3>Data Science <span>Fundamentals</span></h3>
                <p>Possess foundational knowledge in data science, demonstrated through analyzing and deriving insights from the AOL search data set. Proficient in SQL for data querying, I have successfully investigated specific events and crafted relevant statistics, showcasing my ability to interpret and manipulate large data sets effectively.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <img src={html} alt=""/>
                    </div>
                    <div className='face2'>
                        <img src={cpp} alt=""/>
                    </div>
                    <div className='face3'>
                        <img src={css} alt=""/>
                    </div>
                    <div className='face4'>
                        <img src={react} alt=""/>
                    </div>
                    <div className='face5'>
                        <img src={java} alt=""/>
                    </div>
                    <div className='face6'>
                        <img src={js} alt=""/>
                    </div>
                </div>
                <div className='portfolio'>
                    <div className='project'>
                        <h2>Path-tracer in Java</h2>
                        <a href="https://github.com/VerIPt/path-tracer">
                            <img className='pathtracer' src={raytracer} alt="Path-tracer in Java" />
                            <button className='view-project-btn'>View Project</button>
                        </a>
                    </div>
                    <div className='project'>
                    <h2>Treemap implemented in C++</h2>
                        <a href="https://github.com/VerIPt/treemap">
                        <img className='treemap' src={treemap} alt=""/>
                            <button className='view-project-btn'>View Project</button>
                        </a>
                    </div>
                    <div className='project'>
                    <h2>Website The Louhaus Band</h2>
                        <a href="https://www.louhausband.de/">
                        <img className='louhaus' src={louhaus} alt=""/>
                            <button className='view-project-btn'>View Project</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;