import logo from './logo.jpg';
import './App.css';
import popular1 from '../src/popular1.jpg';
import popular2 from '../src/popular2.jpg';
import popular3 from '../src/popular3.jpg';
import popular4 from '../src/popular4.jpg';

import arrival1 from '../src/arrival1.png.jpg';
import arrival2 from '../src/arrival2.png.jpg';
import arrival3 from '../src/arrival3.png.jpg';
import arrival4 from '../src/arrival4.png.jpg';
import arrival5 from '../src/arrival5.png.jpg';
import arrival6 from '../src/arrival6.png.jpg';
import arrival7 from '../src/arrival7.png.jpg';
import arrival8 from '../src/arrival8.png.jpg';

import services1 from '../src/services1.jpg';
import services2 from '../src/services2.jpg';
import services3 from '../src/services3.jpg';
import services4 from '../src/services4.jpg';


function App() {
  
  return (
    <div className="App">
      <header>
      <div class="logo">
       <img src={logo} alt="" />
      </div>
      <div class="navbar-1">
        <ul id="ul">
          <li><a href="#">HOME</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <div class="menu-bar">
          <h4>MENU &nbsp; <i class="fa-solid fa-bars"></i></h4>
        </div>
      </div>        
        <div class="search"></div> &nbsp;&nbsp;&nbsp; 
        <div class="search"><i class="fa-solid fa-magnifying-glass">0</i></div>
    </header>

    <section class="sec-1">
            <div class="sec-1-sub">
              <div class="sec-1-sub-1">
                <h1 >
                  FASHION <br />
                  CHANGING <br />
                  ALWAYS
                </h1>
                <button class="btn">Shop Now</button>
              </div>
            </div>
    </section>
    
    <section class="sec-2">
      <div class="sec-2-sub  wow animate__animated animate__fadeInUp">
        <div class="sec-2-sub-box">
          <div>
            <img src={popular1} alt="" />
          </div>
        </div>
        <div class="sec-2-sub-box">
          <div>
            <img src={popular2} alt="" />
          </div>
        </div>
        <div class="sec-2-sub-box">
          <div>
            <img src={popular3} alt="" />
          </div>
        </div>
        <div class="sec-2-sub-box">
          <div>
            <img src={popular4} alt="1" />
          </div>
        </div>
      </div>
    </section>

    <section class="sec-3">
      <div class="sec-3-sub-1 wow animate__animated animate__fadeInUp">
        <h1>
          new <br />
          arrival
        </h1>
      </div>
      <div class="sec-3-sub-2  wow animate__animated animate__fadeInUp">
        <div class="sec-3-sub-2-box ">
          <div class="sec-3-sub-2-box-sub">
            <div class="sec-3-sub-2-box-1">
              <img src={arrival1} alt="" />
            </div>
            <div class="sec-3-sub-2-box-2">
              <h1>Kitted jumper</h1>
              <h2>$30.00</h2>
            </div>
          </div>
        </div>
        <div class="sec-3-sub-2-box wow animate__animated animate__fadeInUp">
          <div class="sec-3-sub-2-box-sub">
            <div class="sec-3-sub-2-box-1">
              <img src={arrival2} alt="" />
            </div>
            <div class="sec-3-sub-2-box-2">
              <h1>Kitted jumper</h1>
              
              <h2>$30.00</h2>
            </div>
          </div>
        </div>
        <div class="sec-3-sub-2-box wow animate__animated animate__fadeInUp">
          <div class="sec-3-sub-2-box-sub">
            <div class="sec-3-sub-2-box-1">
              <img src={arrival3} alt="" />
            </div>
            <div class="sec-3-sub-2-box-2">
              <h1>Kitted jumper</h1>
              
              <h2>$30.00</h2>
            </div>
          </div>
        </div>
        <div class="sec-3-sub-2-box wow animate__animated animate__fadeInUp">
          <div class="sec-3-sub-2-box-sub">
            <div class="sec-3-sub-2-box-1">
              <img src={arrival4} alt="" />
            </div>
            <div class="sec-3-sub-2-box-2">
              <h1>Kitted jumper</h1>
              
              <h2>$30.00</h2>
            </div>
          </div>
        </div>
        <div class="sec-3-sub-2-box wow animate__animated animate__fadeInUp">
          <div class="sec-3-sub-2-box-sub">
            <div class="sec-3-sub-2-box-1">
              <img src={arrival5} alt="" />
            </div>
            <div class="sec-3-sub-2-box-2">
              <h1>Kitted jumper</h1>
              
              <h2>$30.00</h2>
            </div>
          </div>
        </div>
        <div class="sec-3-sub-2-box wow animate__animated animate__fadeInUp">
          <div class="sec-3-sub-2-box-sub">
            <div class="sec-3-sub-2-box-1">
              <img src={arrival6} alt="" />
            </div>
            <div class="sec-3-sub-2-box-2">
              <h1>Kitted jumper</h1>
              
              <h2>$30.00</h2>
            </div>
          </div>
        </div>
        <div class="sec-3-sub-2-box wow animate__animated animate__fadeInUp">
          <div class="sec-3-sub-2-box-sub">
            <div class="sec-3-sub-2-box-1">
              <img src={arrival7} alt="" />
            </div>
            <div class="sec-3-sub-2-box-2">
              <h1>Kitted jumper</h1>
              
              <h2>$30.00</h2>
            </div>
          </div>
        </div>
        <div class="sec-3-sub-2-box wow animate__animated animate__fadeInUp">
          <div class="sec-3-sub-2-box-sub">
            <div class="sec-3-sub-2-box-1">
              <img src={arrival8} alt="" />
            </div>
            <div class="sec-3-sub-2-box-2">
              <h1>Kitted jumper</h1>
              
              <h2>$30.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="sec-3-sub-3">
        <div>
          <button>Browse More</button>
        </div>
      </div>
    </section>

    <section class="sec-4">
      <div class="sec-4-sub">
        <h1 class="wow animate__animated animate__fadeInUp">
          COLLECTION HOUSES OUR <br />
          FIRST-EVER
        </h1>
        <button>About Me</button>
      </div>
    </section>

    <section class="sec-5">
      <div class="sec-5-sub" id="sec-5-1st-box">
        <div class="sec-5-sub-1">
          <h1>
            Established fact that by the
            readable content
          </h1>
          <button>Read More</button>
        </div>
      </div>
      <div class="sec-5-sub" id="sec-5-2nd-box">
        <div class="sec-5-sub-1">
          <h1>
            Established fact that by the
            readable content
          </h1>
          <button>Read More</button>
        </div>
      </div>
    </section>

    <section class="sec-6">
      <div class="sec-6-sub wow animate__animated animate__fadeInUp">
        <div class="sec-6-sub-box">
          <div class="sec-6-sub-box-sub">
            <div class="sec-6-box-icon">
              <img src={services1} alt="" />
            </div>
            <h3>Fast & Free Delivery</h3>
            <p>Free delivery on all orders</p>
          </div>
        </div>
        <div class="sec-6-sub-box">
          <div class="sec-6-sub-box-sub">
            <div class="sec-6-box-icon">
              <img src={services2} alt="" />
            </div>
            <h3>Fast & Free Delivery</h3>
            <p>Free delivery on all orders</p>
          </div>
        </div>
        <div class="sec-6-sub-box">
          <div class="sec-6-sub-box-sub">
            <div class="sec-6-box-icon">
              <img src={services3} alt="" />
            </div>
            <h3>Fast & Free Delivery</h3>
            <p>Free delivery on all orders</p>
          </div>
        </div>
        <div class="sec-6-sub-box">
          <div class="sec-6-sub-box-sub">
            <div class="sec-6-box-icon">
              <img src={services4} alt="" />
            </div>
            <h3>Fast & Free Delivery</h3>
            <p>Free delivery on all orders</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-1">
        <div class="footer-1-sub-1">
          <div class="footer-1-sub-1-details">
            <h1>Shion House</h1>

            <p>
              Suspendisse varius enim djhfoff in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>

            <div class="footer-icons wow animate__animated animate__fadeInUp">
              
              
            </div>
          </div>
        </div>
        <div class="footer-1-sub-2">
          <div class="foo-1">
            <h2>Quick links</h2>
          </div>
          <div class="foo-2">
            <a href="#">Image Licensin</a>
            <a href="#">Style Guide</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div class="footer-1-sub-2">
          <div class="foo-1">
            <h2>Shop Category</h2>
          </div>
          <div class="foo-2">
            <a href="#">Image Licensin</a>
            <a href="#">Style Guide</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div class="footer-1-sub-2">
          <div class="foo-1">
            <h2>Pertners</h2>
          </div>
          <div class="foo-2">
            <a href="#">Image Licensin</a>
            <a href="#">Style Guide</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div class="footer-1-sub-2">
          <div class="foo-1">
            <h2>Get in touch</h2>
          </div>
          <div class="foo-2">
            <a href="#">(89) 982-278 356</a>
              <a href="#">demo@colorlib.com</a>
                <a href="#">67/A, Colorlib, Green road, NYC</a>
          </div>
        </div>
      </div>
      <div class="footer-2">
        <h3>
          Copyright ©2023 All rights reserved | Developed by : Vrunda Thummar
        </h3>
      </div>
    </footer>

    </div>
  );
}

export default App;
