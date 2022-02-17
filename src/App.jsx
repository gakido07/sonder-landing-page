import './App.css';
import Header from './components/Header';
import Landing from './components/sections/Landing';
import Friend from './components/sections/Friend';
import Success from './components/sections/Success'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Friend />
      <Success />
      <Footer />
    </div>
  );
}

export default App;
