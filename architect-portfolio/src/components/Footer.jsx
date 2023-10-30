import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <article>
        <div>
          <img src="/img/footer/footer-logo.png" alt="logo" />
        </div>

        <div>
          <h4>Information</h4>
          <div>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </div>
        </div>

        <div>
          <h4>Contacts</h4>

          <div className="footer-contacts">
            <div>
              <img src="/img/footer/location.png" alt="icon" />
            </div>

            <p>
              1234 Sample Street <br /> Austin Texas 78704
            </p>
          </div>

          <div className="footer-contacts">
            <div>
              <img src="/img/footer/phone.png" alt="icon" />
            </div>
            <p>512.333.2222</p>
          </div>

          <div className="footer-contacts">
            <div>
              <img src="/img/footer/letter.png" alt="icon" />
            </div>
            <p>sampleemail@gmail.com</p>
          </div>
        </div>

        <div>
          <h4>Social Media</h4>
          <div className="sm-wrapper">
            <img src="/img/footer/facebook.png" alt="icon" />
            <img src="/img/footer/twitter.png" alt="icon" />
            <img src="/img/footer/linked-in.png" alt="icon" />
            <img src="/img/footer/pinterest.png" alt="icon" />
          </div>
        </div>
      </article>
      <p className="copyright">© 2021 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
