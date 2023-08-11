import { useState } from "react";
import NavbarSign from "./NavbarSign";
import FooterSign from "./FooterSign";
import { useNavigate } from "react-router";

const SubscriptionStep2 = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const navigate = useNavigate();
  const handleSelect = (plan) => {
    setSelectedPlan(plan);
  };
  return (
    <>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <button className="signoutBtn" onClick={() => navigate("/")}>
          Sign Out
        </button>
      </div>
      <div className="subscriptionContainer">
        <h5 className="sub_Header">STEP 2 OF 3</h5>
        <h1 className="sub_Head">Choose the plan that's right for you</h1>
        <p className="sub_pTag">
          <span className="sub_tick">&#10004; </span> Watch all you want.
          Ad-free.
        </p>
        <p className="sub_pTag">
          <span className="sub_tick">&#10004; </span>Recomendations just for
          you.
        </p>
        <p className="sub_pTag">
          <span className="sub_tick">&#10004; </span>Change or cancel your plan
          anytime.
        </p>

        <div className="subscriptionSection">
          <div
            className={`priceCards ${
              selectedPlan === "premium" ? "selected" : ""
            }`}
            onClick={() => handleSelect("premium")}
          >
            <div className="price">
              <h3 className="priceCategory">Premium</h3>
              <p className="priceMonth">₹{"  "}649/mo.</p>
            </div>
            <ul className="featuresList">
              <li className="featuresItem">
                <span className="listText">
                  Our best video quality in 4k and HDR
                </span>
              </li>
              <li className="featuresItem">
                <span className="listText">
                  Watch on your TV, computer, mobile phone and tablet
                </span>
              </li>
              <li className="featuresItem">
                <span className="listText">Download available</span>
              </li>
            </ul>
          </div>

          <div
            className={`priceCards ${
              selectedPlan === "standard" ? "selected" : ""
            }`}
            onClick={() => handleSelect("standard")}
          >
            <div className="price">
              <h3 className="priceCategory">Standard</h3>
              <p>₹{"  "}499/mo.</p>
            </div>
            <ul className="featuresList">
              <li className="featuresItem">
                <span className="listText">Great video quality in 1080p</span>
              </li>
              <li className="featuresItem">
                <span className="listText">
                  Watch on your TV, computer, mobile phone and tablet
                </span>
              </li>
              <li className="featuresItem">
                <span className="listText">Download available</span>
              </li>
            </ul>
          </div>

          <div
            className={`priceCards ${
              selectedPlan === "basic" ? "selected" : ""
            }`}
            onClick={() => handleSelect("basic")}
          >
            <div className="price">
              <h3 className="priceCategory">Basic</h3>
              <p>₹{"  "}199/mo.</p>
            </div>
            <ul className="featuresList">
              <li className="featuresItem">
                <span className="listText">Good video quality in 720p</span>
              </li>
              <li className="featuresItem">
                <span className="listText">
                  Watch on your TV, computer, mobile phone and tablet
                </span>
              </li>
              <li className="featuresItem">
                <span className="listText">Download available</span>
              </li>
            </ul>
          </div>

          <div
            className={`priceCards ${
              selectedPlan === "mobile" ? "selected" : ""
            }`}
            onClick={() => handleSelect("mobile")}
          >
            <div className="price">
              <h3 className="priceCategory">Mobile</h3>
              <p>₹{"  "}649/mo.</p>
            </div>
            <ul className="featuresList">
              <li className="featuresItem">
                <span className="listText">Good video quality in 480p</span>
              </li>
              <li className="featuresItem">
                <span className="listText">
                  Watch on your TV, computer, mobile phone and tablet
                </span>
              </li>
              <li className="featuresItem">
                <span className="listText">Download available</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="sub_pFooterTag">
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our{"  "}
          <span className="terms">Terms of Use</span> for more details.
          <br />
          <br />
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </p>
        <div className="next">
          <button
            className="signinBtn nextBtn"
            onClick={() => navigate("/payment")}
          >
            Next
          </button>
        </div>
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </>
  );
};

export default SubscriptionStep2;
