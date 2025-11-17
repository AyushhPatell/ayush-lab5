function Projects() {
    const projects = [
        {
            id: 1,
            title: "Business Intelligence Dashboard System",
            description: "Developed comprehensive Power BI dashboards and SharePoint systems for MacGregor Industrial Group during co-op placement.",
            technologies: ["Power BI", "SharePoint", "Microsoft Access", "Power Automate", "SQL", "Excel"],
            role: "Application Developer (Co-op)",
            problem: "Company needed unified data visualization across multiple divisions including Operations, IT Infrastructure, and Finance departments.",
            solution: "Created integrated dashboards with real-time data updates, automated reporting workflows, and executive level KPI tracking. Implemented SharePoint integration for document management."
        },
        {
            id: 2,
            title: "Student Observation Tool",
            description: "Web-based application for educators to track and analyze student progress with comprehensive data management features.",
            technologies: ["JavaScript", "HTML5", "CSS3", "SQL", "PHP", "Docker"],
            role: "Junior Developer",
            problem: "Needed an efficient way to document and track student observations and progress over time.",
            solution: "Built responsive web application with intuitive UI, automated backup systems, data export functionality, and secure user authentication. Implemented comprehensive testing procedures."
        },
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">My Projects</h1>

            <h2 className="h3 mb-4 text-primary">Projects</h2>
            <div className="row mb-5">
                {projects.slice(0, 2).map((project) => (
                    <div key={project.id} className="col-lg-6 mb-4">
                        <div className="card h-100 project-card">
                            <div className="card-body">
                                <h3 className="card-title h4 mb-3">{project.title}</h3>

                                <p className="card-text mb-3">{project.description}</p>

                                <div className="mb-3">
                                    <h4 className="h6 text-muted">Problem Solved:</h4>
                                    <p className="small">{project.problem}</p>
                                </div>

                                <div className="mb-3">
                                    <h4 className="h6 text-muted">Solution:</h4>
                                    <p className="small">{project.solution}</p>
                                </div>

                                <div className="mb-3">
                                    <h4 className="h6 text-muted">My Role:</h4>
                                    <p className="small fw-bold">{project.role}</p>
                                </div>

                                <div>
                                    <h4 className="h6 text-muted">Technologies Used:</h4>
                                    <div className="technologies">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-dark me-2 mb-2"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;