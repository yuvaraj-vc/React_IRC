// import logo from './logo.svg';
import {Route,Routes} from "react-router-dom";
import './App.css';
// import Dashboard from './pages/Dashboard';
import Landing from './Components/Landing';
// import Footer from './Components/Footer';
import Loging from './pages/Loging';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Loging/>}></Route>
      

     </Routes>
     {/* <Dashboard/> */}
     
    </div>
  );
}

export default App;
