
import './Assets/css/Nav.css'
function App() {
  return (
    <div class="body">
   <div>
    <div className="header">
      <a href="#">
        <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
      </a>

      <div className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="howitworks.html">How it works ?</a></li>
          <li><a className="main-nav-link" href="food.html">Meals</a></li>
          <li><a className="main-nav-link" href="food.html">Reviews</a></li>
          <li><a className="main-nav-link" href="pricing.html">Pricing</a></li>
          <li><a className="main-nav-link nav-cta" href="#signup">Try for free</a></li>
        </ul>
      </div>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </div>

    <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#signup" className="btn btn--full margin-right-sm"
              >Start eating well</a
            >
            <a href="howitworks.html" class="btn btn--outline">Learn more &darr;</a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="img/meals/meal-2.jpg" alt="Customer photo" />
                <img src="img/meals/meal-3.jpg" alt="Customer photo" />
                <img src="img/meals/meal-4.jpg" alt="Customer photo" />
                <img src="img/meals/meal-5.jpg" alt="Customer photo" />
                <img src="img/meals/meal-6.jpg" alt="Customer photo" />
                <img src="img/meals/meal-9.jpg" alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>250+</span> Food Varieties!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src="img/meals/meal-1.jpg"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </section>

      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src="img/logos/techcrunch.png" alt="Techcrunch logo" />
            <img
              src="img/logos/business-insider.png"
              alt="Business Insider logo"
            />
            <img
              src="img/logos/the-new-york-times.png"
              alt="The New York Times logo"
            />
            <img src="img/logos/forbes.png" alt="Forbes logo" />
            <img src="img/logos/usa-today.png" alt="USA Today logo" />
          </div>
        </div>
      </section>

      <section id="signup" className="section-cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">Get your first meal for free!</h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              <form className="cta-form" action="#">
                <div>
                  <label for="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Leo"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>

                <div>
                  <label for="select-where">Where did you hear from us?</label>
                  <select id="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button className="btn btn--form">Sign up now</button>

                
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>

    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-instagram"></ion-icon
              ></a>
            </li>
            <li>
              <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
              ></a>
            </li>
            <li>
              <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
              ></a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              Coimbatore, Tamil Nadu, India.
            </p>
            <p>
              <a className="footer-link" href="tel:7871113579">+91-7871113579</a
              ><br />
              <a className="footer-link" href="mailto:hello@omnifood.com"
                >hello@omnifood.com</a
              >
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#signup">Create account</a></li>
            <li><a className="footer-link" href="signin.html">Sign in</a></li>
            <li><a className="footer-link" href="#">iOS app</a></li>
            <li><a className="footer-link" href="#">Android app</a></li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#">About Omnifood</a></li>
            <li><a className="footer-link" href="#">For Business</a></li>
            <li><a className="footer-link" href="#">Cooking partners</a></li>
            <li><a className="footer-link" href="#">Careers</a></li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="food.html">Recipe directory </a></li>
            <li><a className="footer-link" href="#">Help center</a></li>
            <li><a className="footer-link" href="#">Privacy & terms</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>

  </div>
 
    
  
    



  )
}

export default App;
