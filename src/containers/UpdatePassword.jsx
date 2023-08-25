import { useNavigate } from "react-router";
import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import { signoutHandler } from "../utils/signoutHandler";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import accoutImg from "../assets/images/avatar.png";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from "bcryptjs";
import axios from "axios";

const storedToken = localStorage.getItem("authToken");

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [inputValue, setInputValue] = useState({
    oldPassword: "",
    newPassword: "",
    rePassword: "",
  });

  const [signOutAllDevices, setSignOutAllDevices] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const { oldPassword, newPassword, rePassword } = inputValue;

  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const [updatedImage, setUpdatedImage] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    const storedUpdatedImage = localStorage.getItem("updatedImage");

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }

    if (storedUpdatedImage) {
      setUpdatedImage(storedUpdatedImage);
    } else {
      setUpdatedImage(accoutImg);
    }
  }, [updatedImage]);

  const checkboxChangeHandler = () => {
    setSignOutAllDevices(!signOutAllDevices);
  };

  const updatePasswordHandler = (event) => {
    let field = event.target.id;
    let value = event.target.value;

    setInputValue({
      ...inputValue,
      [field]: value,
    });

    if (field === "oldPassword") {
      oldPasswordRef.current.style.display = "none";
    } else if (field === "newPassword") {
      newPasswordRef.current.style.display = "none";
    } else if (field === "rePassword") {
      rePasswordRef.current.style.display = "none";
    }
  };

  const saveInputHandler = async () => {
    // Comparing old password with the stored hash userPassword
    const isPasswordValid = await bcrypt.compare(
      oldPassword,
      userInfo?.userPassword
    );

    if (!isPasswordValid) {
      oldPasswordRef.current.style.display = "block";
    }
    if (
      newPassword.length < 4 ||
      newPassword.length > 60 ||
      newPassword === ""
    ) {
      newPasswordRef.current.style.display = "block";
    }
    if (newPassword !== rePassword || rePassword === "") {
      rePasswordRef.current.style.display = "block";
    }

    if (
      newPassword === oldPassword &&
      oldPassword !== "" &&
      newPassword !== ""
    ) {
      toast.info("Old password & new password should be different!.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (oldPassword === "" || newPassword === "" || rePassword === "") {
      toast.info("Each field is required.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (
      isPasswordValid &&
      (newPassword === rePassword || rePassword !== "" || newPassword !== "")
    ) {
      try {
        const response = await axios.patch(
          "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
          {
            name: userInfo?.userName,
            email: userInfo?.userEmail,
            passwordCurrent: oldPassword,
            password: newPassword,
            appType: "ott",
          },
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              projectId: "lb0fl09ncsvt",
            },
          }
        );

        if (signOutAllDevices) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userInfo");
          setIsUpdate(true);
        }

        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            ...userInfo,
            userPassword: newPassword,
          })
        );

        toast.success("Update password Successfull.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setInputValue({
          oldPassword: "",
          newPassword: "",
          rePassword: "",
        });
        setIsUpdate(true);
      } catch (error) {
        console.error("Update password error:", error);
        toast.error("Failed to update password.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  useEffect(() => {
    let timeoutId;
    if (isUpdate) {
      timeoutId = setTimeout(() => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userInfo");
        navigate("/signin");
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isUpdate]);

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
      <div className="updatePasswordPage">
        <ToastContainer />
        <h1 className="changeHeading">Change your password</h1>
        <p className="changeText">
          Protect your account with a unique password at least 6 characters
          long.
        </p>
        <div className="updatePasswordInput">
          <div className="inputContainer">
            <input
              type="text"
              id="oldPassword"
              placeholder="Current Password"
              className="inputAccount"
              value={oldPassword}
              onChange={updatePasswordHandler}
            />
            <p className="accountpasswordError" ref={oldPasswordRef}>
              Password didn't match.
            </p>
            <p className="forgotPassword">Forgot password?</p>
          </div>
          <div className="inputContainer">
            <input
              type="password"
              id="newPassword"
              placeholder="New password (6-60 characters)"
              className="inputAccount"
              value={newPassword}
              onChange={updatePasswordHandler}
            />
            <br />
            <p className="accountpasswordError" ref={newPasswordRef}>
              Password should be between 6 and 60 characters long.
            </p>
          </div>
          <div className="inputContainer">
            <input
              type="password"
              id="rePassword"
              placeholder="Re-enter new password"
              className="inputAccount"
              value={rePassword}
              onChange={updatePasswordHandler}
            />
            <br />
            <p className="accountpasswordError" ref={rePasswordRef}>
              Must match your new password.
            </p>
          </div>
        </div>
        <label className="checkboxLabel">
          <input
            type="checkbox"
            className="inputCheckboxAccount"
            checked={signOutAllDevices}
            onChange={checkboxChangeHandler}
          />
          Sign out of all devices
        </label>
        <div className="accountBtns">
          <button onClick={saveInputHandler} className="saveAccountBtn">
            Save
          </button>
          <button onClick={() => navigate(-1)} className="cancelAccountBtn">
            Cancel
          </button>
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

export default UpdatePassword;
