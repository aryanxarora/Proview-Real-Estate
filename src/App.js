import Landing from './components/Landing';
import Listing from './components/Listing';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar cta={"Contact Us"} />
      <Landing />
      {/* <Listing /> */}
    </div>
  );
}

export default App;
