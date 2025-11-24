import { useState, useEffect } from "react";
import API_URL from '../config';

function Home()
{
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function getWeather()
        {
            try
            {
                setIsLoading(true);
                const response = await fetch(`${API_URL}/api/weather?city=Halifax`);
                
                if (response.ok)
                {
                    const data = await response.json();
                    setWeather(data);
                    setHasError(false);
                }
                else
                {
                    setHasError(true);
                }
            }
            catch (err)
            {
                setHasError(true);
                console.log(err);
            }
            finally
            {
                setIsLoading(false);
            }
        }
        getWeather();
    }, []);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h1 className="display-4 mb-4">Welcome to My Portfolio</h1>

                    <div className="lead mb-5">
                        <p>Hello! I'm Ayush Patel a Computer Science student at Dalhousie University</p>
                        <p>Passionate about web development and creating innovative solutions</p>
                    </div>

                    <div className="mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="h4 mb-3">Current Weather</h2>
                                {isLoading && <p>Loading weather...</p>}
                                {hasError && <p className="text-danger">Could not load weather</p>}
                                {weather && !isLoading && !hasError && (
                                    <div>
                                        <h3 className="h5 mb-3">{weather.city}</h3>
                                        <div className="row text-center">
                                            <div className="col-md-4 mb-3">
                                                <div className="p-3 bg-light rounded">
                                                    <div className="text-muted small mb-1">Temperature</div>
                                                    <div className="h4 mb-0">{weather.temperature}°C</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="p-3 bg-light rounded">
                                                    <div className="text-muted small mb-1">Humidity</div>
                                                    <div className="h4 mb-0">{weather.humidity}%</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="p-3 bg-light rounded">
                                                    <div className="text-muted small mb-1">Condition</div>
                                                    <div className="h6 mb-0 text-capitalize">{weather.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
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