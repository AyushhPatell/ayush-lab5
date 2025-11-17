import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h1 className="display-4 mb-4">Welcome to My Portfolio</h1>

                    <div className="lead mb-5">
                        <p>Hello! I'm Ayush Patel a Computer Science student at Dalhousie University</p>
                        <p>Passionate about web development and creating innovative solutions</p>
                    </div>

                    <div className="home-intro p-4 bg-light rounded">
                        <h2 className="h3 mb-3">Quick Introduction</h2>
                        <p>
                            I'm currently in my third year of Bachelor of Applied Computer Science.
                            I enjoy building web applications and learning new technologies.
                            Through my studies and projects, I've developed skills in both
                            front-end and back-end development.
                        </p>
                        <p>
                            This portfolio showcases my journey as a developer and the projects
                            I've worked on during my academic career and personal time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;