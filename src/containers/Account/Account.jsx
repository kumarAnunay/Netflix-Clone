import { useNavigate } from "react-router";
import upi from "../../assets/images/upi.webp";
import NavbarSign from "../../components/NavbarSign/NavbarSign";
import FooterSign from "../../components/FooterSign/FooterSign";
import MenuDropdown from "../../components/MenuDropdown";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import { useEffect, useState } from "react";
import { signoutHandler } from "../../utils/signoutHandler";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, [userInfo]);

  return (
    <>
      <div className="signupLogoHeader helpCenter accountHeader">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <MenuDropdown />
      </div>
      <div className="accountPage">
        <h1 className="accountHeading">
          Account
          <SubscriptionsOutlinedIcon className="accountIcon" />
          <span className="accountSubHeading">Member Since March 2023</span>
        </h1>
        <div className="updateAccountContainer">
          <div className="membershipAndBiling">
            <h2 className="cancelMemebership">MEMBERSHIP & BILLING</h2>
            <button className="cancelMembershipBtn">Cancel Membership</button>
          </div>
          <div className="accountDetailsContainer">
            <div className="detailsAndBtns">
              <div className="passwordAndNumber">
                <h2 className="accountDetailsHeader userEmailAccount">
                  {userInfo?.userEmail}
                </h2>
                <h2 className="accountDetailsHeader">Password: *******</h2>
                <h2 className="accountDetailsHeader">Phone: +91**********</h2>
              </div>
              <div className="changeBtns">
                <p className="accountDetailsBtn">Change email</p>
                <p
                  className="accountDetailsBtn cursorBtn"
                  onClick={() => navigate("/update-password")}
                >
                  Change password
                </p>
                <p className="accountDetailsBtn">Change phone number</p>
                <p className="accountDetailsBtn">Verify phone number</p>
              </div>
            </div>
            <div className="upiContainer">
              <div className="upi">
                <img src={upi} alt="UPI" className="upiImage" />
              </div>
              <div className="manageBtns">
                <p className="accountDetailsBtn">Manage Payment Info</p>
                <p className="accountDetailsBtn">Billing details</p>
              </div>
            </div>
            <div className="redeemGift">
              <p className="accountDetailsBtn">
                Redeem gift card or promo code
              </p>
            </div>
          </div>
        </div>
        <div className="planDetails">
          <h2 className="accountDetailsHeader">PLAN DETAILS</h2>
          <p className="accountDetailsBtn">Change Plan</p>
        </div>
        <div className="securityPrivacy">
          <div className="securityManage">
            <h2 className="accountDetailsHeader">SECURITY & PRIVACY</h2>
            <div className="manageAccess">
              <p className="accountDetailsBtn">
                <span className="new">NEW</span> Manage access and devices
              </p>
            </div>
          </div>
          <p
            className="accountDetailsBtn accountSignOutBtn cursorBtn"
            onClick={() => signoutHandler(navigate)}
          >
            Sign out of all devices
          </p>
        </div>
        <div className="settings">
          <h2 className="accountDetailsHeader">SETTINGS</h2>
          <div className="settingsBtns">
            <p className="accountDetailsBtn">
              Turn off profile transfers<span className="new">NEW</span>
            </p>
            <p className="accountDetailsBtn">Test participation</p>
            <p className="accountDetailsBtn">Manage download devices</p>
          </div>
        </div>
      </div>
      <FooterSign
        styleContainer="subscriptionFooter accountFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </>
  );
};

export default Account;
