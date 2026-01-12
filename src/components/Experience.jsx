import profile from '../data/profile.json';

const Experience = () => {
    return (
        <section id="experience" className="section" style={{ backgroundColor: '#fff' }}> {/* White background for contrast */}
            <div className="container">
                <h2 className="section-title">Experiencia Laboral</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Dotted Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        backgroundColor: 'transparent',
                        borderLeft: '2px dashed var(--border-color)',
                        transform: 'translateX(-50%)'
                    }}></div>

                    {profile.experience.map((job, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            marginBottom: '4rem',
                            position: 'relative'
                        }}>

                            {/* Dot on Timeline */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: index % 3 === 0 ? 'var(--accent-color)' : index % 3 === 1 ? 'var(--accent-secondary)' : 'var(--accent-tertiary)',
                                transform: 'translate(-50%, 0)',
                                zIndex: 2,
                                border: '4px solid #fff'
                            }}></div>

                            {/* Content Card */}
                            <div style={{
                                width: '45%',
                                padding: index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem',
                                textAlign: index % 2 === 0 ? 'right' : 'left'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{job.role}</h3>
                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1rem'
                                }}>
                                    {job.company} | {job.period}
                                </span>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
