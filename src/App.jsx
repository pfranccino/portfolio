import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Stack from './components/Stack';
import Trabajo from './components/Trabajo';
import Experience from './components/Experience';
import Articulos from './components/Articulos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.sec').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Stack />
        <Trabajo />
        <Experience />
        <Articulos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
