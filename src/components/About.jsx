import useOnScreen from '../hooks/useOnScreen.js';

function About(){
    const [ref, isVisible] = useOnScreen();

    return(
        <section
        id="about"
        ref={ref}
        className={`about fade-section ${isVisible ? 'visible' : ''}`}>
        <section id ="about" className="about">
        <h2 className="section-label">About Me</h2>
        <div className="about-content">
        <div className="about-video">
        <video controls>
        <source src="/intro-video.mp4" type="video/mp4"/>
        </video>
        </div>
        <div className="about-text">    
        <p>
        Hey, I'm Dev Dipankar Bera - a self-taught front-end developer learning React from the ground up. I love turning ideas into interactive, polished web experiences.
        </p>
        <p>
        When I'm not coding, you'll find me exploring new tech, learning design principles, and building small projects to sharpen my skills. 
        </p>
        </div>
    </div>
    </section>
    </section>

    )
}
export default About
