
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Editusers from './pages/Editusers';
import Adduser from './pages/Adduser';
import Users from './pages/Users';
function App() {
  return (
    <div className="App">
   <Routes>
    <Route path='/' element={<Users/>}></Route>
    <Route path='/add' element={<Adduser/>}></Route>
    <Route path='/edit/:id' element={<Editusers/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
