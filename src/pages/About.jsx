function About() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">About Me</h1>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title h4 mb-4">Education</h2>
                            <div className="education-item mb-3">
                                <h3 className="h5">Bachelor of Applied Computer Science</h3>
                                <p className="text-muted">Dalhousie University</p>
                                <p className="small">Expected Graduation: 2027</p>
                                <p>Currently in my third year, maintaining strong academic performance
                                    while actively participating in various projects and activities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title h4 mb-4">Experience</h2>
                            <div className="experience-item mb-3">
                                <h3 className="h5">Co-op Work Terms</h3>
                                <ul>
                                    <li>IT Analyst at Canada Revenue Agency</li>
                                    <li>Application Developer at MacGregor Industrial Group</li>
                                    <li>Currently working as Closed Captioning Technical Support at Dalhousie University</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title h4 mb-4">Technical Skills</h2>
                            <div className="skills-section">
                                <h3 className="h6 mb-2">Programming Languages</h3>
                                <div className="mb-3">
                                    <span className="badge bg-primary me-2 mb-2">JavaScript</span>
                                    <span className="badge bg-primary me-2 mb-2">Python</span>
                                    <span className="badge bg-primary me-2 mb-2">Java</span>
                                    <span className="badge bg-primary me-2 mb-2">HTML/CSS</span>
                                    <span className="badge bg-primary me-2 mb-2">SQL</span>
                                </div>

                                <h3 className="h6 mb-2">Tools & Frameworks</h3>
                                <div>
                                    <span className="badge bg-secondary me-2 mb-2">React</span>
                                    <span className="badge bg-secondary me-2 mb-2">Node.js</span>
                                    <span className="badge bg-secondary me-2 mb-2">Bootstrap</span>
                                    <span className="badge bg-secondary me-2 mb-2">Git</span>
                                    <span className="badge bg-secondary me-2 mb-2">Power BI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title h4 mb-4">Career Goals</h2>
                            <p>
                                My goal is to become a full-stack developer with expertise in
                                modern web technologies. I'm particularly interested in:
                            </p>
                            <ul>
                                <li>Building scalable web applications</li>
                                <li>Machine Learning and AI integration</li>
                                <li>Creating user friendly interfaces</li>
                                <li>Contributing to open source projects</li>
                            </ul>
                            <p className="mt-3">
                                Currently seeking co-op opportunities for Summer 2026 to further
                                develop my skills in a professional environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;