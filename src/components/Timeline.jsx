import useOnScreen from '../hooks/useOnScreen.js'

const timelineData = [
    {
        id:1,
        year: "2023",
        title: "Started Learning to Code",
        description: "Began self-teaching HTML, CSS and JavaScript fundamentals."
    },
    {
        id:2, 
        year: "2025",
        title: "University Coursework",
        description: "Took front-end development course covering core web concepts."

    },
    {
        id: 3,
        year: "2026",
        title: "Learning React",
        descripttion: "Deep-diving into Reeac, building real projects from scratch."

    }
]

function Timeline(){
    const[ref, isVisible] = useOnScreen()

    return(
        <section
        id="journey"
        ref={ref}
        className={`timeline-section fade section ${isVisible ? 'visible' : ''}`}
        >
            <h2 className="section-label">03. Academic Journey</h2>
            <div className="timeline">
                {timelineData.map((item, index)=>(
                    <div
                    className={`timeline-item ${index %2 ===0? 'left':'right'}`}
                    key={item.id}
                    >
                        <div className="timeline-content">
                            <span className="timeline-year">{item.year}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        </div>
                ))}
            </div>
        </section>
    )

}

export default Timeline