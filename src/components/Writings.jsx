import writings from '../data/writings.json';
import profile from '../data/profile.json';

const Writings = () => {
    if (!writings || writings.length === 0) return null;

    return (
        <section id="writings" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 className="section-title">Artículos Técnicos</h2>
                <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    Compartiendo mi camino y lecciones aprendidas en Desarrollo Android y Arquitectura de Software.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {writings.map((article, index) => {
                        return (
                            <a
                                key={index}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card fade-in-up"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textDecoration: 'none',
                                    minHeight: '320px',
                                    justifyContent: 'space-between',
                                    padding: '2rem',
                                    animationDelay: `${index * 0.15}s`
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                        {/* Fake icon grouping visual - reused for consistency */}
                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                                        </div>
                                        <span style={{
                                            backgroundColor: 'rgba(255,255,255,0.6)',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            letterSpacing: '0.5px'
                                        }}>
                                            ARTÍCULO
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3', color: 'var(--text-primary)' }}>{article.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        {article.description}
                                    </p>
                                </div>

                                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)', opacity: 0.8 }}>
                                    Leer todo <span style={{ marginLeft: '0.5rem' }}>↗</span>
                                </div>
                            </a>
                        )
                    })}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <a
                        href={profile.social.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            border: '2px solid var(--text-primary)',
                            borderRadius: '50px',
                            color: 'var(--text-primary)',
                            fontWeight: '700',
                            fontSize: '1rem'
                        }}
                    >
                        Ver todos en Medium
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Writings;
