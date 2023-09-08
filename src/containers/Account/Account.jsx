import { useNavigate } from "react-router";
import upi from "../../assets/images/upi.webp";
import NavbarSign from "../../components/NavbarSign/NavbarSign";
import FooterSign from "../../components/FooterSign/FooterSign";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import accoutImg from "../../assets/images/avatar.png";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useEffect, useState } from "react";
import { signoutHandler } from "../../utils/signoutHandler";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [updatedImage, setUpdatedImage] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    const storedUpdatedImage = localStorage.getItem("updatedImage");

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }

    if (storedUpdatedImage) {
      setUpdatedImage(storedUpdatedImage);
    }
    if (storedUpdatedImage === "undefined" || storedUpdatedImage === "null") {
      setUpdatedImage(accoutImg);
    }
  }, [updatedImage]);

  return (
    <>
      <div className="signupLogoHeader helpCenter accountHeader">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <Dropdown>
          <TriggerButton className="navbarDropdown accountDropdown">
            <img src={accoutImg} alt="Account" className="accountImg" />
          </TriggerButton>
          <Menu slots={{ listbox: StyledListbox }} className="menuList">
            <StyledMenuItem className="accountItems">
              <div className="icon_text">
                <img
                  src={updatedImage}
                  alt="Account"
                  className="useAccountImg"
                />
                <p className="iconText">{userInfo?.userName}</p>
              </div>
            </StyledMenuItem>
            <StyledMenuItem className="accountItems">
              <div className="icon_text">
                <ModeOutlinedIcon className="accountIcons" />
                <p
                  className="iconText"
                  onClick={() => navigate("/manage-profile")}
                >
                  Manage Profile
                </p>
              </div>
            </StyledMenuItem>
            <StyledMenuItem className="accountItems">
              <div className="icon_text">
                <AdminPanelSettingsOutlinedIcon className="accountIcons" />
                <p
                  className="iconText"
                  onClick={() => navigate("/transfer-profile")}
                >
                  Transfer Profile
                </p>
              </div>
            </StyledMenuItem>
            <StyledMenuItem className="accountItems">
              <div className="icon_text">
                <PermIdentityOutlinedIcon className="accountIcons" />
                <p className="iconText" onClick={() => navigate("/account")}>
                  Account
                </p>
              </div>
            </StyledMenuItem>
            <StyledMenuItem className="accountItems">
              <div className="icon_text">
                <HelpOutlineOutlinedIcon className="accountIcons" />
                <p
                  className="iconText"
                  onClick={() => navigate("/help-centre")}
                >
                  Help Center
                </p>
              </div>
            </StyledMenuItem>
            <StyledMenuItem className="accountItems">
              <div className="icon_text">
                <SubscriptionsOutlinedIcon className="accountIcons" />
                <p
                  className="iconText"
                  onClick={() => navigate("/subscription-step1")}
                >
                  My Subscription
                </p>
              </div>
            </StyledMenuItem>
            <StyledMenuItem className="accountItems">
              <div className="lastIcon">
                <p
                  className="iconText"
                  onClick={() => signoutHandler(navigate)}
                >
                  Sign out of Netflix
                </p>
              </div>
            </StyledMenuItem>
          </Menu>
        </Dropdown>
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

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-width: 200px;
    overflow: auto;
    outline: 0px;
    z-index: 1;
    `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${menuItemClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
    `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    border-radius: 12px;
    padding: 8px 14px;
    line-height: 1.5;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }
  
    &:focus-visible {
      border-color: ${blue[400]};
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
    `
);

export default Account;
