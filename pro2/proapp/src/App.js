import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="main">
  <div className="sidebar">
    <div className="nav">
      <ul>
        <li className="active"><a href="#">Welcome</a></li>
        <li><a href="#">Who We Are</a></li>
        <li><a href="#">What We Do</a></li>
        <li><a href="#">Get In Touch</a></li>
      </ul>
    </div>
  </div>

  <section className="twitter">
    <div className="container">
      <a target="_blank" href="https://twitter.com/ReisnerShawn">
        {/* <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/> */}
      </a>
      <p>Follow me</p>
      <p>on Twitter!</p>
    </div>
  </section>
</div>
</div>
  );
}

export default App;
