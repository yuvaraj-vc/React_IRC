import "./Assets/css/App.css"
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
function App() {
  return (
    
    <div>
      <Nav/>
      <form className="container shadow" onsubmit="register()">
        <h1 >MARVEL'S CONTEST OF CHAMPIONS</h1>
        <p>

        "Step into the electrifying universe of Marvel's Contest of Champions, 
        a mobile gaming masterpiece that pits your favorite Marvel heroes and villains in a fierce cosmic showdown. 
        As the Collector calls forth champions from diverse dimensions, you, the Summoner, assemble an unstoppable team, unleashing iconic characters like Iron Man, Spider-Man, and Doctor Strange in pulse-pounding, one-on-one battles. 
        With stunning visuals and strategic gameplay, Contest of Champions delivers an immersive experience, inviting you to become the ultimate Marvel champion in a universe where every fight shapes the fate of the multiverse."
        </p>
        <center><input type="submit" value="Install Now!" className="button-input shdow" /></center>
      </form>
      <Footer/>
   



    </div>
  )
}

export default App;
