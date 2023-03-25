import Cars from './components/Cars';
import Choose from './components/Choose';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import './input.css';
import './styles.css'

const customStyle = {
  root: {
    position: 'relative',
    minHeight: '100'
}
}

function App() {
  return (
    <div style={customStyle.root}>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Choose />
      <Cars />
      <Footer />
    </div>
  );
}

export default App;
