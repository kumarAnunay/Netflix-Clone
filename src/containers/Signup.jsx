import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import googleLogo from "../assets/images/googleLogo.png";
import githubLogo from "../assets/images/githubLogo.png";
import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signupStatus, setSignupStatus] = useState({
    success: false,
  });

  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const navigate = useNavigate();

  const handleInput = (event) => {
    const field = event.target.id;
    let value = event.target.value;

    if (field === "email") {
      value = value.toLowerCase();
    }
    console.log(signup.email);

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

  const handlesignup = async (event) => {
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
    try {
      console.log("Sending signup request...");
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: {
            projectId: "lb0fl09ncsvt",
          },
        }
      );
      console.log("Signup successful:", response);

      setSignupStatus({
        success: true,
      });
      toast.success("Account successfully Registered!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("Signup Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User already exists"
      ) {
        setSignupStatus({
          success: false,
        });
        toast.error("User with this email is already registered.", {
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
        setSignupStatus({
          success: false,
        });
        toast.error("Error in signing up. Please try again.", {
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

  const loginWithGoogle = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const userName = result.user.displayName;
        // const email = result.user.email;
        // localStorage.setItem(
        //   "user",
        //   JSON.stringify({
        //     username: userName,
        //     email: email,
        //     islogged: true,
        //   })
        // );
        navigate("/home");
      })
      .catch((error) => {
        console.log("Google Authentication Error:", error);
      });
  };

  const loginWithGitHub = async () => {
    // try {
    //   const result = await signInWithPopup(auth, githubProvider);
    //   const { displayName, email } = result.user;
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       username: displayName,
    //       email: email,
    //       islogged: true,
    //     })
    //   );
    //   navigate("/home");
    // } catch (error) {
    //   console.error("GitHub Authentication Error:", error);
    // }
  };

  useEffect(() => {
    if (signupStatus.success) {
      setTimeout(() => {
        navigate("/signin");
      }, 3500);
    }
  }, [signupStatus]);

  return (
    <div className="sign">
      <div className="signupLogoHeader">
        <NavbarSign onClick={() => navigate("/")} />
        <button className="signinBtn Btn1" onClick={() => navigate("/signin")}>
          Sign In
        </button>
      </div>
      <div className="container">
        <div className="signupForm">
          <ToastContainer />
          <h1 className="signinHeader">Register</h1>
          <form className="signup" onChange={handleInput}>
            <TextField
              type="text"
              id="name"
              label="Username"
              variant="filled"
              className="input"
              value={name}
              sx={{
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: name ? "#e5edfb" : "inherit",
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
              className="input input2"
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
              Please enter a valid email address.
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
                  backgroundColor: password ? "#e5edfb" : "inherit",
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
            <button className="signinBtn" onClick={handlesignup}>
              Sign up
            </button>
          </form>
          <div className="loginBttns">
            <button type="submit" className="logoBtn" onClick={loginWithGoogle}>
              <img src={googleLogo} alt="Google" className="logoImg" />
            </button>
            <button type="submit" className="logoBtn" onClick={loginWithGitHub}>
              <img src={githubLogo} alt="Github" className="logoImg" />
            </button>
          </div>
          <div className="bottomText">
            Already have an account?
            <Link to="/signin" className="link1">
              Login
            </Link>
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

export default Signup;
