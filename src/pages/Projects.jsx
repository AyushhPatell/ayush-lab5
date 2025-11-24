import { useState, useEffect } from 'react';
import API_URL from '../config';

function Projects()
{
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getProjects()
        {
            try
            {
                setLoading(true);
                const response = await fetch(`${API_URL}/api/projects`);
                
                if (response.ok)
                {
                    const data = await response.json();
                    setProjects(data);
                }
                else
                {
                    setError('Could not load projects');
                }
            }
            catch (err)
            {
                setError('Error loading projects');
                console.log(err);
            }
            finally
            {
                setLoading(false);
            }
        }
        getProjects();
    }, []);

    if (loading)
    {
        return (
            <div className="container py-5">
                <h1 className="text-center mb-5">My Projects</h1>
                <p className="text-center">Loading...</p>
            </div>
        );
    }

    if (error)
    {
        return (
            <div className="container py-5">
                <h1 className="text-center mb-5">My Projects</h1>
                <div className="alert alert-danger">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">My Projects</h1>

            <h2 className="h3 mb-4 text-primary">Projects</h2>
            <div className="row mb-5">
                {projects.map((project) => (
                    <div key={project.id} className="col-lg-6 mb-4">
                        <div className="card h-100 project-card">
                            <div className="card-body">
                                <h3 className="card-title h4 mb-3">{project.projectName}</h3>

                                <div className="mb-3">
                                    <h4 className="h6 text-muted">Author:</h4>
                                    <p className="small fw-bold">{project.author}</p>
                                </div>

                                <div className="mb-3">
                                    <h4 className="h6 text-muted">Description:</h4>
                                    <p className="card-text">{project.description}</p>
                                </div>

                                <div>
                                    <h4 className="h6 text-muted">Languages:</h4>
                                    <div className="technologies">
                                        {project.languages.map((lang, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-dark me-2 mb-2"
                                            >
                                                {lang}
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