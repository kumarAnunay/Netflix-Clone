import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import headerLogo from "../assets/images/headerLogo.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import googleLogo from "../assets/images/googleLogo.png";
import githubLogo from "../assets/images/githubLogo.png";

const Signup = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registered, setRegistered] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const successRef = useRef(null);

  const navigate = useNavigate();

  const handleInput = (event) => {
    const field = event.target.id;
    const value = event.target.value;

    setSignup({
      ...signup,
      [field]: value,
    });

    if (field === "name") {
      nameErrorRef.current.style.display = "none";
    } else if (field === "email") {
      emailErrorRef.current.style.display = "none";
    } else if (field === "password") {
      passwordErrorRef.current.style.display = "none";
    }
  };

  const { name, email, password } = signup;

  const handlesignup = (event) => {
    event.preventDefault();

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (name.length < 3) {
      nameErrorRef.current.style.display = "block";
    }
    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 4 || password.length > 60) {
      passwordErrorRef.current.style.display = "block";
    }
    if (
      name.length >= 3 &&
      email.match(emailPattern) &&
      password.length >= 4 &&
      password.length <= 60
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: name,
          email: email,
          password: password,
        })
      );

      successRef.current.style.display = "block";
      setSignup({
        name: "",
        email: "",
        password: "",
      });

      setRegistered(true);
    }
  };

  const loginBtnHandler = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("RESULT", result);
        const userName = result.user.displayName;
        const email = result.user.email;
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: userName,
            email: email,
            islogged: true,
          })
        );
        navigate("/home");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        navigate("home");
      }, 1000);
    }
  }, [registered]);

  return (
    <div className="sign">
      <div className="logo">
        <img src={headerLogo} className="headerLogo" alt="NETFLIX" />
      </div>
      <div className="container">
        <div className="signupForm">
          <div className="success" ref={successRef}>
            Account successfully Registered!
          </div>
          <h1 className="signinHeader">Register</h1>
          <form
            className="signup"
            onChange={handleInput}
            onSubmit={handlesignup}
          >
            <TextField
              type="name"
              id="name"
              label="Username"
              variant="filled"
              ref={nameRef}
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
            <div className="error" ref={nameErrorRef}>
              Please enter a valid name.
            </div>
            <TextField
              type="email"
              id="email"
              label="Email or phone number"
              variant="filled"
              ref={emailRef}
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
            <div className="error" ref={emailErrorRef}>
              Please enter a valid email address.
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
              Sign up
            </button>
          </form>
          <div className="loginBttns">
            <button type="submit" className="logoBtn" onClick={loginBtnHandler}>
              <img src={googleLogo} alt="Google" className="logoImg" />
            </button>
            <button type="submit" className="logoBtn" onClick={loginBtnHandler}>
              <img src={githubLogo} alt="Github" className="logoImg" />
            </button>
          </div>
          <div className="bottomText">
            Already have an account?
            <Link to="/" className="link1">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
