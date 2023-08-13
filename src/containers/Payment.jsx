import { useNavigate } from "react-router";
import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import launchingImage from "../assets/images/Launching.jpg";
import SignoutBtn from "../components/SignoutBtn";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="paymentPage">
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <SignoutBtn />
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
