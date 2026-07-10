import React, { useState, useEffect } from 'react';
function Hero(){

    const roles = ["Front-end Developer", "React Enthusiast", "Problem Solver"]
    const [text, setText] = useState("")
    const [roleIndex, setRoleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        if(charIndex < currentRole.length){
            const timeout = setTimeout(() => {
                setText(currentRole.slice(0, charIndex + 1))
                setCharIndex(charIndex + 1)
            },80)
            return () => clearTimeout(timeout)
        }else{
            const pause = setTimeout(() => {
                setCharIndex(0)
                setText("")
              setRoleIndex((roleIndex + 1) % roles.length)
            },1500)
            return () => clearTimeout(pause)
            }
        }, [charIndex, roleIndex])
            
        

    return(
    <section className = "hero">
        <p className='code-tag'>const developer = "Dev Dipankar Bera";</p>
        <p className="typing-text">I'm a {text}<span className="cursor">|</span></p>
        <a href="projects" className="cta-button">See my work</a>
    </section>
    )
}

export default Hero
