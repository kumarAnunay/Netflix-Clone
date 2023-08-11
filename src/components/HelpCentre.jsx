import { useState } from "react";
import NavbarSign from "./NavbarSign";
import { useNavigate } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HelpCentre = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="helpCentreHeader">
        <div className="signupLogoHeader helpCenter">
          <NavbarSign
            className="signupLogo"
            onClick={() => navigate("/home")}
          />
          <button
            className="signoutBtn helpCentreSignoutBtn"
            onClick={() => navigate("/")}
          >
            Sign Out
          </button>
        </div>
        <h1 className="headerHelp">Help Center</h1>
        <div className="helpCenterSearch">
          <div className="searchContainer helpcentreInputContainer">
            <SearchIcon className="searchIcon helpSearchIcon" />
            <input
              type="text"
              id="search"
              value={searchInput}
              className="searchInput helpcentreInput"
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="What do you need help with?"
            />
          </div>
        </div>
      </div>
      <div className="helpCenterContainer">
        <div className="helpCentreRecomendations">
          <h2>Hi</h2>
          <p>Recommended for you</p>
          <div className="recommendationsTextContainer">
            <div className="recommendationstext">
              <WysiwygIcon className="helpRecommendationIcon" />
              <p>How to keep your account secure</p>
            </div>
            <div className="recommendationstext">
              <WysiwygIcon className="helpRecommendationIcon" />
              <p>Parental controls on Netflix</p>
            </div>
            <div className="recommendationstext">
              <WysiwygIcon className="helpRecommendationIcon" />
              <p>How to change your plan</p>
            </div>
          </div>
        </div>

        <div className="helpCentreListContainer">
          <ul className="helpCentreLists">
            <li className="helpCentreListsItem helpCenterListHeader">
              Manage My Account
            </li>
            <br />
            <li className="helpCentreListsItem">Plans and Pricing</li>
            <li className="helpCentreListsItem">
              I received an email stating there was a new sign-in to my account
            </li>
            <li className="helpCentreListsItem">How to change your plan</li>
            <br />
            <br />
            <br />
            <li className="helpCentreListsItem helpCenterListHeader">
              Billing Questions
            </li>
            <br />
            <li className="helpCentreListsItem">How to pay for Netflix</li>
            <li className="helpCentreListsItem">Billing and Payments</li>
            <li className="helpCentreListsItem">Netflix Gift Cards</li>
          </ul>
          <ul className="helpCentreLists">
            <li className="helpCentreListsItem helpCenterListHeader">
              Can't Watch
            </li>
            <br />
            <li className="helpCentreListsItem">
              How to change or reset your password
            </li>
            <li className="helpCentreListsItem">
              Netflix says to sign up when trying to sign in
            </li>
            <li className="helpCentreListsItem">
              Netflix says, 'This app is not compatible with your device.'
            </li>
            <br />
            <br />
            <br />
            <li className="helpCentreListsItem helpCenterListHeader">
              Watching Netflix
            </li>
            <br />
            <li className="helpCentreListsItem">
              How to create, change, or delete profiles
            </li>
            <li className="helpCentreListsItem">
              How to watch Netflix on your TV
            </li>
            <li className="helpCentreListsItem">
              How to download titles to watch offline
            </li>
          </ul>
          <ul className="helpCentreLists">
            <li className="helpCentreListsItem helpCenterListHeader">
              Quick Links
            </li>
            <br />
            <li className="helpCentreListsItem iconWithText">
              Content Grievances in India
              <KeyboardArrowRightIcon className="helpCentreArrowIcon" />
            </li>
            <li className="helpCentreListsItem iconWithText">
              Request TV shows or movies
              <KeyboardArrowRightIcon className="helpCentreArrowIcon" />
            </li>
            <li className="helpCentreListsItem iconWithText">
              Update email
              <KeyboardArrowRightIcon className="helpCentreArrowIcon" />
            </li>
            <li className="helpCentreListsItem iconWithText">
              Update password
              <KeyboardArrowRightIcon className="helpCentreArrowIcon" />
            </li>
            <li className="helpCentreListsItem iconWithText">
              Update payment method
              <KeyboardArrowRightIcon className="helpCentreArrowIcon" />
            </li>
            <li className="helpCentreListsItem iconWithText">
              Cancel account
              <KeyboardArrowRightIcon className="helpCentreArrowIcon" />
            </li>
            <li className="helpCentreListsItem iconWithText">
              Review payment history
              <KeyboardArrowRightIcon className="helpCentreArrowIcon" />
            </li>
          </ul>
        </div>
      </div>
      <footer className="helpCenterFooter">
        <div className="footerContainer">
          <div className="helpTextBtn">
            <h2 className="helpText">Need more help?</h2>
            <button className="signinBtn contactBtn">Contact us</button>
          </div>
          <div className="helpCentreFooterList">
            <ul className="helpCentreFooter" type="none">
              <li className="helpCentre_Item">Terms of Use</li>
              <li className="helpCentre_Item">Privacy</li>
              <li className="helpCentre_Item">Cookie Preference</li>
              <li className="helpCentre_Item">Corporate Information</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HelpCentre;
