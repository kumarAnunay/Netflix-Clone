import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import headerLogo from "../assets/images/headerLogo.png";

const Signin = () => {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const learnRef = useRef(null);
  const learnMoreRef = useRef(null);

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

  const handleSignin = (event) => {
    event.preventDefault();
    // if (email !== userRef.current?.email) {
    //   emailRef.current.style.outlineColor = "red";
    //   emailRef.current.focus();
    //   emailErrorRef.current.style.display = "block";
    // }
    // if (password !== userRef.current?.password) {
    //   passwordRef.current.style.outlineColor = "red";
    //   passwordRef.current.focus();
    //   passwordErrorRef.current.style.display = "block";
    // }
    // if (
    //   email === userRef.current?.email &&
    //   password === userRef.current?.password
    // ) {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({ ...userRef.current, islogged: true })
    //   );
    //   navigate("/home");
    //   window.location.reload();
    // }
  };

  const learnMore = () => {
    learnRef.current.style.display = "none";
    learnMoreRef.current.style.display = "block";
  };

  return (
    <div className="sign">
      <div className="logo">
        <img src={headerLogo} className="headerLogo" alt="NETFLIX" />
      </div>
      <div className="container">
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
              ref={emailRef}
              className="input"
              sx={{
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-root.Mui-focused": {
                  color: "#000",
                  backgroundColor: "#e5edfb",
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
              ref={passwordRef}
              className="input input2"
              sx={{
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-root.Mui-focused": {
                  color: "#000",
                  backgroundColor: "#e5edfb",
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
            <div class="inputLabel">
              <input
                type="checkbox"
                id="checkbox"
                class="checkbox-input"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label for="checkbox" class="checkbox-label">
                Remember Me
              </label>
            </div>
            <span className="needHelp">Need help?</span>
          </div>
          <div className="signupLink">
            New to Netflix?
            <Link to="signup" className="link1">
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
    </div>
  );
};

export default Signin;
