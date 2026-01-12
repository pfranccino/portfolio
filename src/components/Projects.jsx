import projects from '../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Proyectos Destacados</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => {
                        return (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textDecoration: 'none',
                                    minHeight: '350px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                        {/* Fake icon grouping visual */}
                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                                        </div>
                                        <span style={{
                                            backgroundColor: '#fff',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: '700'
                                        }}>
                                            {project.pinned ? 'DESTACADO' : 'PROYECTO'}
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: '1.2' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                                        {project.description}
                                    </p>
                                </div>

                                <div style={{ marginTop: '2rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                color: 'var(--text-primary)',
                                                opacity: 0.7
                                            }}>
                                                {tag.startsWith('#') ? tag : `#${tag}`}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
