const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--border-color)',
            marginTop: '4rem'
        }}>
            <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} Paul Franccino Ayala. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
