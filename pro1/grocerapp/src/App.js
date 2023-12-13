import "./App.css";
import './Assets/Testimonial.css'
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import  Testimonial  from "./pages/Testimonial";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Testimonial/>}></Route>
        <Route path="/Signup" element={<Footer/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;