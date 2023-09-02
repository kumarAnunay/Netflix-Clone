import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerSectionContainer">
      <div className="footerSectionIcons">
        <FacebookIcon className="footerIcons" />
        <InstagramIcon className="footerIcons" />
        <TwitterIcon className="footerIcons" />
        <YouTubeIcon className="footerIcons" />
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
