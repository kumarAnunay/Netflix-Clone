import { useNavigate } from "react-router";
import netflixLogo from "../assets/images/headerLogo.png";
import firstPoster from "../assets/images/1stPoster.jpg";
import secondPoster from "../assets/images/2ndPoster.jpg";
import thirdPoster from "../assets/images/3rdPoster.jpg";
import fourthPoster from "../assets/images/4thPoster.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="defaultPage">
      <header>
        <div id="container">
          <div className="navbar_Default">
            <div>
              <img
                className="logo_Default"
                src={netflixLogo}
                alt="netflix"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="btn_Default">
              <div>
                <select className="language">
                  <option>English</option>
                  <option>हिंदी</option>
                </select>
              </div>
              <div>
                <button
                  className="signinBtn1"
                  onClick={() => navigate("/signin")}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div id="description">
            <h3 className="desscriptionSmall">Welcome back!</h3>
            <h1 className="descriptionBigger">Unlimited movies, TV</h1>
            <h1 className="descriptionBigger"> shows and more.</h1>
            <h6 className="desscriptionSmall">
              Watch anywhere. Cancel anytime.
            </h6>

            <button
              className="getStatedBtn"
              onClick={() => navigate("/signup")}
            >
              Get Started &#62;
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="borderDivs">
          <br />
        </div>

        <div className="box">
          <div className="detail">
            <h1>Enjoy on your TV.</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox,
              <br />
              Chromecast, Apple TV, Blu-ray players and <br />
              more.
            </p>
          </div>
          <div className="detail">
            <img
              style={{ boxShadow: "0px 0px 20px 0.5px #cba345" }}
              className="image"
              src={firstPoster}
              alt="Movie Poster"
            />
          </div>
        </div>

        <div className="borderDivs">
          <br />
        </div>

        <div className="box">
          <div className="detail">
            <img
              className="image"
              style={{ boxShadow: "0px 0px 20px 0.5px #ac210f" }}
              src={secondPoster}
              alt="Movie Poster"
            />
          </div>
          <div className="detail">
            <h1>Download your shows to watch offline.</h1>
            <p>
              Save your favourites easily and always have
              <br />
              something to watch.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "gray", height: "8px" }}>
          <br />
        </div>

        <div className="box">
          <div className="detail">
            <h1>Watch everywhere.</h1>
            <p>
              Stream unlimited movies and TV shows on
              <br />
              your phone, tablet, laptop, and TV.
            </p>
          </div>
          <div className="detail">
            <img
              className="image"
              style={{ boxShadow: "0px 0px 20px 0.5px #36909a" }}
              src={thirdPoster}
              alt="Movie Poster"
            />
          </div>
        </div>

        <div className="borderDivs">
          <br />
        </div>

        <div className="box">
          <div className="detail">
            <img
              className="image fourthPoster"
              src={fourthPoster}
              alt="Movie Poster"
            />
          </div>
          <div className="detail">
            <h1>Create profiles for children.</h1>
            <p>
              Send children on adventures with their
              <br />
              favourite characters in a space made just for
              <br />
              them—free with your membership.
            </p>
          </div>
        </div>

        <div className="borderDivs">
          <br />
        </div>

        <div id="question">
          <div className="questionBlock">
            <h1 className="questionBlockHeader">Frequently Asked Questions</h1>
            <div className="question_Blocks">
              <span>What is Netflix?</span>
              <span>+</span>
            </div>
            <div className="question_Blocks">
              <span>How much does Netflix cost?</span>
              <span>+</span>
            </div>
            <div className="question_Blocks">
              <span>Where can I watch?</span>
              <span>+</span>
            </div>
            <div className="question_Blocks">
              <span>How do I cancel?</span>
              <span>+</span>
            </div>
            <div className="question_Blocks">
              <span>What can I watch on Netflix?</span>
              <span>+</span>
            </div>
            <div className="question_Blocks">
              <span>Is Netflix good for kids?</span>
              <span>+</span>
            </div>
            <div>
              <button
                className="getStatedBtn"
                onClick={() => navigate("/signup")}
              >
                Finish Sign Up
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="borderDivs">
        <br />
      </div>
      <footer className="defaultFooter">
        <div id="last">
          <div className="bottom">
            <div>
              <p className="questionCall">Questions? Call 000-800-919-1694</p>
            </div>
            <div id="defaultFooter">
              <div>
                <ul className="footer_List" type="none">
                  <li className="footerItem">FAQ</li>
                  <li className="footerItem">Media Center</li>
                  <li className="footerItem">ways to see</li>
                  <li className="footerItem">cookie preference</li>
                  <li className="footerItem">speed test</li>
                </ul>
              </div>
              <div>
                <ul className="footer_List" type="none">
                  <li className="footerItem">Help Centre</li>
                  <li className="footerItem">investor relations</li>
                  <li className="footerItem">terms of use</li>
                  <li className="footerItem">corporate information</li>
                  <li className="footerItem">legal notices</li>
                </ul>
              </div>
              <div>
                <ul className="footer_List" type="none">
                  <li className="footerItem">account</li>
                  <li className="footerItem">jobs</li>
                  <li className="footerItem">privacy</li>
                  <li className="footerItem">contact us</li>
                  <li className="footerItem">only on netflix</li>
                </ul>
              </div>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <select className="footerDropdown">
                <option>English</option>
                <option>हिंदी</option>
              </select>
            </div>
            <div>
              <p className="netflixIndia">Netflix India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
