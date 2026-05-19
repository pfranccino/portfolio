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
