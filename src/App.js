import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from './components/Landing/Landing';
import Listing from './components/Listing';
import Navbar from './components/Navbar';
import './styles/App.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar cta={"Contact Us"} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/listing" element={<Listing />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
