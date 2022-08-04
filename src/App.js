import { Fragment } from 'react';
import './App.css';
import Navbar from './Componants/Navbar';

function App() {
  return (
    <Fragment>


      <div className="home-header" id="home">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">

            </div>
            <div className="col-lg-6 main">
              <div>
                <h1><b>YOU STILL DEPRESSED ?</b></h1>
                <p>We will help you step by step to fix all your emotional problems , and start a fresh life , <b>BLUE NIGHT</b> try to make you fell more comfortable and fited in this world</p>
                <a href="https://youtube.com/" target="blank"><button><span>GET STARTED!</span></button></a>
              </div>
            </div>
          </div>
        </div>


        <div className="hero-home">
          <div class="moving-mouse-holder">
            <div class="mouse">
              <div class="mouse-button">&nbsp;</div>
            </div>
            <div class="text">SCROLL DOWN <br /> TO EXPLORE MORE</div>
          </div>
        </div>
      </div>


      <section className="about-us" id='about'>
        <div className='about-us-con'>
          <div className="centered-about">
            <img src='Images/Home/Pictures/depp.jpg' alt='deppressed' />
            <div className='text-inside'>
              <h3 className='text-center'>WHY DEPPRESSION ?</h3>
              <ul>
                <li>Suicide</li>
                <li>Addiction</li>
                <li>Trouble At School Or Work</li>
                <li>Relationship Problems</li>
                <li>Limit Ability To Parent</li>
                <li>Damage Your Brain</li>
                <li>Health Concerns</li>
              </ul>
            </div>
          </div>
        </div>

      </section>


      <section className='depp-fix'>
        <h2>WANNA FIX YOU DEPPRESSION ?</h2>
        <h5>Here , Six Common Solutions For Depression</h5>
        <div className='container'>
          <div className='depp-fix-insdie'>
            <img src='Images/Home/Pictures/depp-fix.jpg' />
            <ul className='ul-depp-fix'>
              <h3>Fix Deppressio Using :</h3>
              <li><b>Medication</b></li>
              <li><b>Therapy</b></li>
              <li><b>Lifestyle Changes</b></li>
              <li><b>Challenging Negative Thoughts</b></li>
            </ul>
          </div>
        </div>

      </section>


      <section className='contact-us pb-5' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='form-contact'>
              <form method='post'>
                <h2>CONTACT US</h2>
                <input type="text" name="full_name" placeholder="Full name" />
                <input type="tel" name="phone_number" placeholder="Phone number" />
                <input type="email" name="email" placeholder="Email address" />
                <textarea placeholder='A Message' rows="4" cols="70"></textarea>
                <button className='submit-contact' type='submit'>SEND !</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <ul>
              <img src='Images/Nightwing-Logo-768x432-459324551.png' />
              <li><a href='privacy'>Privacy & Policies</a></li>
              <li><a href='cookies'>Cookies privacy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
