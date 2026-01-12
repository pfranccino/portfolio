import profile from '../data/profile.json';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">Pasión y Habilidades</h2>

                {/* Hobbies Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '5rem'
                }}>
                    {profile.hobbies.map((hobby, index) => (
                        <div key={index} className="card" style={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '1.5rem',
                                backgroundColor: index % 2 === 0 ? 'rgba(250, 173, 20, 0.1)' : 'rgba(47, 106, 108, 0.1)',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {hobby.emoji}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{hobby.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                {hobby.desc}
                            </p>
                            {hobby.name === 'Music Lover' && (
                                <a href={profile.social.spotify} target="_blank" rel="noreferrer" style={{
                                    marginTop: '1rem',
                                    color: 'var(--accent-secondary)',
                                    fontWeight: '700'
                                }}>
                                    Escuchar Mix ↗
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Stats Row */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    padding: '4rem',
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    boxShadow: 'var(--card-shadow)'
                }}>
                    {profile.stats.map((stat, index) => (
                        <div key={index} style={{ textAlign: 'center', flex: 1 }}>
                            <div style={{
                                fontSize: '3.5rem',
                                fontWeight: '400',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--text-primary)',
                                marginBottom: '0.5rem'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>
                                {stat.label}
                            </div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.desc}</div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Tecnologías</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
                        {profile.skills.map((skill, index) => (
                            <span key={index} style={{
                                padding: '0.8rem 1.5rem',
                                backgroundColor: '#fff',
                                border: '1px solid var(--border-color)',
                                borderRadius: '50px', // Pill shape
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                                transition: 'all 0.2s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                                    e.currentTarget.style.color = 'var(--accent-color)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
