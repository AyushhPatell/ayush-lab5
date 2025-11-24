function Footer()
{
    return (
        <footer className="footer bg-dark text-white py-4 mt-auto">
            <div className="container text-center">
                <p className="mb-2">© 2025 My Portfolio. All rights reserved.</p>
                <div className="social-links">
                    <a
                        href="https://github.com"
                        className="text-white mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ayush-patel-955466261/"
                        className="text-white mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:ayush.p@dal.ca"
                        className="text-white mx-2"
                        aria-label="Email"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;