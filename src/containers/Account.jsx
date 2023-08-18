import React from "react";
import { useNavigate } from "react-router";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import upi from "../assets/images/upi.webp";
import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import { signoutHandler } from "../utils/signoutHandler";

const Account = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="signupLogoHeader helpCenter accountHeader">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <button
          className="signoutBtn helpCentreSignoutBtn"
          onClick={() => signoutHandler(navigate)}
        >
          Sign Out
        </button>
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
                <h2 className="accountDetailsHeader">Password: *******</h2>
                <h2 className="accountDetailsHeader">Phone: +91**********</h2>
              </div>
              <div className="changeBtns">
                <p
                  className="accountDetailsBtn cursorBtn"
                  onClick={() => navigate("/change-password")}
                >
                  Change password
                </p>
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
    </div>
  );
};

export default Account;
