import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
// import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        {/* <Portfolio /> */}
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;