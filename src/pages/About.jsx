import { useState } from 'react';

function About()
{
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    const skills = [
        { name: 'JavaScript', category: 'Frontend' },
        { name: 'React', category: 'Frontend' },
        { name: 'HTML/CSS', category: 'Frontend' },
        { name: 'Bootstrap', category: 'Frontend' },
        { name: 'Python', category: 'Backend' },
        { name: 'Java', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'SQL', category: 'Database' },
        { name: 'Git', category: 'Tools' },
        { name: 'Power BI', category: 'Tools' },
        { name: 'PHP', category: 'Backend' },
        { name: 'Docker', category: 'Tools' },
        { name: 'SharePoint', category: 'Tools' },
        { name: 'Power Automate', category: 'Tools' },
        { name: 'Microsoft Access', category: 'Database' },
        { name: 'Excel', category: 'Tools' }
    ];

    const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

    function toggleCategory(category)
    {
        if (selectedCategories.includes(category))
        {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        }
        else
        {
            setSelectedCategories([...selectedCategories, category]);
        }
    }

    let filteredSkills = skills;
    
    if (searchQuery)
    {
        filteredSkills = filteredSkills.filter(skill => {
            const nameMatch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
            const categoryMatch = skill.category.toLowerCase().includes(searchQuery.toLowerCase());
            return nameMatch || categoryMatch;
        });
    }
    
    if (selectedCategories.length > 0)
    {
        filteredSkills = filteredSkills.filter(skill => 
            selectedCategories.includes(skill.category)
        );
    }

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
                <div className="col-md-12 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title h4 mb-4">Technical Skills</h2>
                            
                            <div className="mb-4">
                                <label htmlFor="skillSearch" className="form-label">Search Skills:</label>
                                <input
                                    type="text"
                                    id="skillSearch"
                                    className="form-control"
                                    placeholder="Search by name or category..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Filter by Category:</label>
                                <div className="d-flex flex-wrap gap-2">
                                    {categories.map(category => (
                                        <div key={category} className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`category-${category}`}
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => toggleCategory(category)}
                                            />
                                            <label className="form-check-label" htmlFor={`category-${category}`}>
                                                {category}
                                            </label>
                                        </div>
                                    ))}
                                    {selectedCategories.length > 0 && (
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => setSelectedCategories([])}
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="skills-section">
                                <h3 className="h6 mb-3">
                                    {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''} found
                                </h3>
                                <div className="mb-3">
                                    {filteredSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="badge bg-primary me-2 mb-2"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                    {filteredSkills.length === 0 && (
                                        <p className="text-muted">No skills match your search.</p>
                                    )}
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