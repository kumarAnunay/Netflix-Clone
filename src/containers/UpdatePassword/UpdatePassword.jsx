import { useNavigate } from "react-router";
import NavbarSign from "../../components/NavbarSign/NavbarSign";
import FooterSign from "../../components/FooterSign/FooterSign";
import MenuDropdown from "../../components/MenuDropdown";
import accoutImg from "../../assets/images/avatar.png";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from "bcryptjs";
import axios from "axios";
import "./UpdatePassword.css";

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

  const storedToken = localStorage.getItem("authToken");

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
        <MenuDropdown />
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

export default UpdatePassword;
