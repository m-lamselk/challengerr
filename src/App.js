import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import GamingLibrary from './components/GamingLibrary';
import Header from './components/Header';
import MostPopular from './components/MostPopular';
import Test from './components/Test';

function App() {
  return (
    <div>
      <Header />   
      <Banner />   
      <MostPopular />
      <GamingLibrary />
      <Footer />
    </div>
  );
}

export default App;
