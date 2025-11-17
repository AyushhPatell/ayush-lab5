import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="error-page">
                        <h1 className="display-1 fw-bold text-danger">404</h1>
                        <h2 className="mb-4">Oops! Page Not Found</h2>

                        <p className="lead mb-4">
                            Sorry, the page you're looking doesn't exist.
                        </p>

                        <div className="error-image mb-4">
                            <div className="text-muted" style={{ fontSize: '100px' }}>
                                🔍
                            </div>
                        </div>

                        <p className="mb-4">
                            Let's get you back on track:
                        </p>

                        <div className="d-grid gap-2 d-md-block">
                            <Link to="/" className="btn btn-primary btn-lg me-md-2">
                                Go to Home
                            </Link>
                            <Link to="/projects" className="btn btn-outline-primary btn-lg">
                                View Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;