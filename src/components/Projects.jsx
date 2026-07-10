import useOnScren from '../hooks/useOnScreen.js'

const projectsData=[


    {
        id:1,
        title: "Porfolio Website",
        description: "My personal site built with React, Vite, and custome scroll animations.",
        tech: ["React","Vite","CSS"],
        link: "#"
    },
    {
        id:2,
        title: "Project Two",
        description: "Short description ",
        tech:["Js", "HTML","CSS"],
        link: '#'
    },
    {
        id:3, 
        title: "Project Three",
        description: "Short description of what this project does",
        tech: ["React"],
        link: '#'
    }
]


function Projects(){
const [ref, isVisible] = useOnScree()

return (
    <section

    id="projects"
    ref={ref}
    className={`projects fade-section ${isVisible ? 'visible' : ''}`}>

        <h2 className ="section-label">Projects</h2>
        
    </section>
)

}
export default Projects
