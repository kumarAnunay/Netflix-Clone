import NavbarSign from "./NavbarSign";
import FooterSign from "./FooterSign";
import { useNavigate } from "react-router";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const SubscriptionStep1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <button className="signoutBtn" onClick={() => navigate("/")}>
          Sign Out
        </button>
      </div>
      <div className="step1Container">
        <div className="checkIcon">
          <CheckOutlinedIcon className="check" />
        </div>
        <h5 style={{ color: "gray" }}>STEP 1 OF 3</h5>
        <h1>Choose your plan.</h1>
        <div>
          <div className="step1Text">
            <CheckOutlinedIcon className="check" />
            <p>No commitments, cancel anytime.</p>
          </div>
          <div className="step1Text">
            <CheckOutlinedIcon className="check" />
            <p>Everything on Netflix for one low price.</p>
          </div>
          <div className="step1Text">
            <CheckOutlinedIcon className="check" />
            <p>No ads and no extra fees. Ever.</p>
          </div>
        </div>
        <button
          className="signinBtn nextBtn"
          onClick={() => navigate("/subscription-step2")}
        >
          Next
        </button>
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </>
  );
};

export default SubscriptionStep1;
