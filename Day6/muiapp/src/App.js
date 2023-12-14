
import './Assets/App.css'
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
   <div class="body">
   <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    

    </Routes>
   </div>
  )
}

export default App;
