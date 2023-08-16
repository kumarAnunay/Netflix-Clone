import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import { useNavigate } from "react-router";
import SignoutBtn from "../components/SignoutBtn";

const UnderConstruction = ({ src }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <SignoutBtn />
      </div>
      <div className="launcingImgContainer">
        <img src={src} alt="Under Construction" />
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </>
  );
};

export default UnderConstruction;
