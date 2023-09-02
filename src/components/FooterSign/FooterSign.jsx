import "./FooterSign.css";

const FooterSign = (props) => {
  const { styleContainer, styleDropdown } = props;
  return (
    <footer className={styleContainer}>
      <div className="footerContainer">
        <div>
          <p className="footerText">Questions? Call 000-800-919-1694</p>
        </div>
        <div className="signinFooterList">
          <ul className="signin_Footer" type="none">
            <li className="footer_Item">FAQ</li>
            <li className="footer_Item">cookie preference</li>
          </ul>

          <ul className="signin_Footer" type="none">
            <li className="footer_Item">Help Centre</li>
            <li className="footer_Item">corporate information</li>
          </ul>

          <ul className="signin_Footer" type="none">
            <li className="footer_Item">terms of use</li>
          </ul>

          <ul className="signin_Footer" type="none">
            <li className="footer_Item">privacy</li>
          </ul>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <select className={styleDropdown}>
            <option>English</option>
            <option>हिंदी</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default FooterSign;
