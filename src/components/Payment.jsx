import { useNavigate } from "react-router";
import NavbarSign from "./NavbarSign";
import FooterSign from "./FooterSign";
import launchingImage from "../assets/images/Launching.jpg";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="paymentPage">
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <button className="signoutBtn" onClick={() => navigate("/")}>
          Sign Out
        </button>
      </div>
      <div className="launcingImgContainer">
        <img src={launchingImage} alt="Launching Soon" />
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </div>
  );
};

export default Payment;
