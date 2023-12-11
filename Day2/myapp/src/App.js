import "./Assets/css/App.css"
import Nav from "./Components/Nav";
function App() {
  return (
    
    <div>
      <Nav/>
      <form className="container shadow" onsubmit="register()">
        <h1 >REGISTER NOW!</h1>
        <input type="text" id="username" placeholder="Enter your Name" className="name-input" required/>
        
        <input type="text" id="us" placeholder="Set your Username" className="name-input" required/>
        <input type="password" id="pwd" placeholder="Set your Password" className="name-input" required/>
        <input type="password" id="pdw" placeholder="Confirm Your Password" className="name-input" required/>
        <input type="email" id="mail" placeholder="Enter your Email" className="name-input"required/>
       
        <input type="number" id="nu" placeholder="Enter your PhoneNumber" className="name-input" required/>
        <center><input type="submit" value="Register Now!" className="button-input shdow" /></center>
      </form>
   



    </div>
  )
}

export default App;
