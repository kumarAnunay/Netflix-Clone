import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import { useNavigate } from "react-router";
import newFeature from "../assets/images/newFeature.webp";
import SignoutBtn from "../components/SignoutBtn";

const ManageProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <SignoutBtn />
      </div>
      <div className="launcingImgContainer">
        <img src={newFeature} alt="Under Construction" />
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </>
  );
};

export default ManageProfile;
