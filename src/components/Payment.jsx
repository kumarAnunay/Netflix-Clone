import { useNavigate } from "react-router";
import NavbarSign from "./NavbarSign";
import launchingImage from "../assets/images/Launching.jpg";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="paymentPage">
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" />
        <button className="signoutBtn" onClick={() => navigate("/")}>
          Sign Out
        </button>
      </div>
      <div className="launcingImgContainer">
        <img src={launchingImage} alt="Launching Soon" />
      </div>
    </div>
  );
};

export default Payment;
