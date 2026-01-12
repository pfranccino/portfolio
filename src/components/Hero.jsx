import { FaGithub, FaLinkedin, FaMedium, FaSpotify, FaEnvelope } from 'react-icons/fa';
import profile from '../data/profile.json';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (

        <section className="hero-section">
            <div className="container hero-grid">
                {/* Left Column: Text */}
                <div className="animate-fade-in hero-content" style={{ zIndex: 2 }}>
                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)'
                    }}>
                        Hola, <br />
                        soy <span style={{ color: 'var(--accent-color)' }}>Paul</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        maxWidth: '500px',
                        fontFamily: 'var(--font-heading)',
                    }}>
                        "{profile.bio}"
                    </p>

                    <p style={{
                        fontSize: '1rem',
                        marginBottom: '3rem',
                        color: 'var(--text-primary)',
                        maxWidth: '450px',
                        borderLeft: '2px solid var(--accent-secondary)',
                        paddingLeft: '1rem'
                    }}>
                        {profile.current_focus}
                    </p>

                    {/* Social Icons */}
                    <div className="hero-socials" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: '1.8rem', color: 'var(--text-secondary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#0077B5'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaLinkedin />
                        </a>
                        <a href={profile.social.github} target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: '1.8rem', color: 'var(--text-secondary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaGithub />
                        </a>
                        <a href="mailto:paul.ayala023@gmail.com"
                            style={{ fontSize: '1.8rem', color: 'var(--text-secondary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaEnvelope />
                        </a>
                        <a href={profile.social.medium} target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: '1.8rem', color: 'var(--text-secondary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaMedium />
                        </a>
                        <a href={profile.social.spotify} target="_blank" rel="noopener noreferrer"
                            style={{ fontSize: '1.8rem', color: 'var(--text-secondary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#1DB954'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaSpotify />
                        </a>
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <span style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>+1.5k</span>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', letterSpacing: '1px', fontWeight: '600' }}>CONTRIBUCIONES ANUALES</span>
                    </div>
                </div>

                {/* Right Column: Image with Brush Stroke */}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    {/* Abstract Blob SVG Background - Updated Color */}
                    <div style={{
                        position: 'absolute',
                        width: '120%',
                        height: '120%',
                        top: '-10%',
                        left: '-10%',
                        zIndex: 0,
                        opacity: 0.1
                    }}>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4F46E5" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.3C93.5,8.6,82.1,21.5,70.9,32.3C59.7,43.1,48.7,51.8,36.8,58.8C25,65.8,12.3,71.1,-1.2,73.1C-14.7,75.2,-30.7,74,-44.6,67.7C-58.5,61.5,-70.3,50.1,-77.8,36.4C-85.3,22.7,-88.4,6.7,-85.1,-7.9C-81.8,-22.5,-72,-35.7,-60.8,-45.3C-49.6,-54.9,-37,-60.9,-24.5,-69.3C-12,-77.7,0.4,-88.4,13.2,-88.8C26,-89.2,25.9,-79.3,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    {/* Profile Image */}
                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '350px',
                        height: '450px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: 'var(--card-shadow-hover)',
                        backgroundColor: '#E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={profileImage}
                            alt="Paul Franccino"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
