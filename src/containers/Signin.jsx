import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const [signinStatus, setSigninStatus] = useState({
    success: false,
  });

  const [rememberMe, setRememberMe] = useState(false);

  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const learnRef = useRef(null);
  const learnMoreRef = useRef(null);
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const { email, password } = signin;

  const handleInput = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    setSignin({
      ...signin,
      [field]: value,
    });

    if (field === "email") {
      emailErrorRef.current.style.display = "none";
    } else if (field === "password") {
      passwordErrorRef.current.style.display = "none";
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSignin = async (event) => {
    event.preventDefault();

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 4 || password.length > 60) {
      passwordErrorRef.current.style.display = "block";
    }
    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            projectId: "lb0fl09ncsvt",
          },
        }
      );

      const token = response.data.token;

      const userName = response.data.data.name;
      const userEmail = response.data.data.email;
      const userPassword = response.data.data.password;

      const userDetails = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
      };
      //Used for protected routes it prevents the token reset while refreshing the page
      localStorage.setItem("authToken", token);

      //Used to persist userinfo
      localStorage.setItem("userInfo", JSON.stringify(userDetails));

      dispatch({ type: "LOGIN", payload: token });
      dispatch({ type: "USER_INFO", payload: userDetails });

      // console.log("Token set:", token);

      setSigninStatus({
        success: true,
      });

      toast.success("Login Successfull.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Login Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "Email or password is incorrect"
      ) {
        toast.error("Email or password is incorrect.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User not found"
      ) {
        toast.error("User with this email is not registered.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setSigninStatus({
          success: false,
        });
        toast.error("Error in Signing in. Please try again.", {
          position: "top-right",
          autoClose: 3000,
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

  const learnMore = () => {
    learnRef.current.style.display = "none";
    learnMoreRef.current.style.display = "block";
  };

  useEffect(() => {
    if (signinStatus.success) {
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  }, [signinStatus]);

  return (
    <div className="sign">
      <div className="logo">
        <NavbarSign onClick={() => navigate("/")} />
      </div>
      <div className="container">
        <ToastContainer />
        <div className="signinForm">
          <h1 className="signinHeader">Sign In</h1>
          <form
            className="signin"
            onChange={handleInput}
            onSubmit={handleSignin}
          >
            <TextField
              type="email"
              id="email"
              label="Email or phone number"
              variant="filled"
              className="input"
              value={email}
              sx={{
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: email ? "#e5edfb" : "inherit",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000",
                },
                "& .MuiFormLabel-root": {
                  color: "#8c8c8c",
                },
              }}
            />
            <div className="error" ref={emailErrorRef}>
              Please enter a valid email address or phone number.
            </div>
            <TextField
              type="password"
              id="password"
              label="Password"
              variant="filled"
              className="input input2"
              value={password}
              sx={{
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: email ? "#e5edfb" : "inherit",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000",
                },
                "& .MuiFormLabel-root": {
                  color: "#8c8c8c",
                },
              }}
            />
            <div className="error" ref={passwordErrorRef}>
              Your password must contain between 4 and 60 characters.
            </div>
            <button type="submit" className="signinBtn">
              Sign In
            </button>
          </form>
          <div className="forgot">
            <div className="inputLabel">
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox-input"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                Remember Me
              </label>
            </div>
            <span className="needHelp">Need help?</span>
          </div>
          <div className="signupLink">
            New to Netflix?
            <Link to="/signup" className="link1">
              Sign up now
            </Link>
          </div>
          <div className="bottomText">
            <p>This page is protected by Google reCAPTCHA to</p>
            <p>
              ensure you're not a bot.
              <span className="clickable" onClick={learnMore} ref={learnRef}>
                Learn More.
              </span>
            </p>
            <br />
            <p ref={learnMoreRef} className="learnMore">
              The information collected by Google reCAPTCHA is subject to the
              Google <span className="clickable">Privacy Policy</span> and{" "}
              <span className="clickable">Terms of Service</span>, and is used
              for providing, maintaining, and improving the reCAPTCHA service
              and for general security purposes (it is not used for personalised
              advertising by Google).
            </p>
          </div>
        </div>
      </div>
      <FooterSign
        styleContainer="signinFooter"
        styleDropdown="footerDropdown"
      />
    </div>
  );
};

export default Signin;
