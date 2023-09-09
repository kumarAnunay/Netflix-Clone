import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerSectionContainer">
      <div className="footerSectionIcons">
        <Link
          to={"https://www.facebook.com/NetflixIN/?brand_redir=475822799216240"}
        >
          <FacebookIcon className="footerIcons" />
        </Link>
        <Link to={"https://www.instagram.com/netflix/?hl=en"}>
          <InstagramIcon className="footerIcons" />
        </Link>
        <Link to={"https://twitter.com/netflixindia?lang=en"}>
          <TwitterIcon className="footerIcons" />
        </Link>
        <Link to={"https://www.youtube.com/@NetflixIndiaOfficial"}>
          <YouTubeIcon className="footerIcons" />
        </Link>
      </div>
      <div className="footerSectionListContainer">
        <ul className="footerSectionList" type="none">
          <li className="footerSectionItem">Audio Description</li>
          <li className="footerSectionItem">Investor Relations</li>
          <li className="footerSectionItem">Legal Notices</li>
        </ul>

        <ul className="footerSectionList" type="none">
          <li className="footerSectionItem">Help Centre</li>
          <li className="footerSectionItem">Jobs</li>
          <li className="footerSectionItem">Cookie Preference</li>
        </ul>

        <ul className="footerSectionList" type="none">
          <li className="footerSectionItem">Gift Cards</li>
          <li className="footerSectionItem">Terms of use</li>
          <li className="footerSectionItem">Corporate Information</li>
        </ul>

        <ul className="footerSectionList" type="none">
          <li className="footerSectionItem">Media Centre</li>
          <li className="footerSectionItem">privacy</li>
          <li className="footerSectionItem">Contact Us</li>
        </ul>
      </div>
      <div className="serviceCode">Service Code</div>
      <div className="copyrightText">&copy;{"  "}1997-2023 Netflix, Inc.</div>
    </footer>
  );
};

export default Footer;
