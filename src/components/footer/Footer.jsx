import { useEffect } from "react";
import "./Footer.css"; // Import the CSS file
import logo2 from "../../assets/logo2.svg";
import appstore from "../../assets/appstore.svg";
import store from "../../assets/store.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTiktok, BsYoutube } from "react-icons/bs";

const Footer = () => {
  useEffect(() => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });

    return () => {
      accordionHeaders.forEach((header) => {
        header.removeEventListener("click", null);
      });
    };
  }, []);

  return (
    <footer className="footer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ paddingLeft: "40px" }}>
          <img src={logo2} alt="Gelato Logo" className="logo-img" />
        </div>
        <div className="social-icons">
          <span style={{ fontSize: "17px" }}>Find Gelato on:</span>
          <FaFacebookF style={{ marginRight: "20px" }} />
          <FaInstagram style={{ marginRight: "20px" }} />
          <BsTiktok style={{ marginRight: "20px" }} />
          <FaLinkedinIn style={{ marginRight: "20px" }} />
          <BsYoutube style={{ marginRight: "20px" }} />
        </div>
      </div>

      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section logo">
          <p className="footer-text">
            Gelato has created the world’s largest network for local production
            and distribution of customized products. Together we bring
            creativity to life - and into business.
          </p>
          <button className="footer-btn">Get Started</button>
          <div className="app-links">
            <img src={appstore} alt="App Store" />
            <img src={store} alt="Google Play" />
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-links">
          <div className="link-column">
            <h4 className="accordion-header">Print on demand</h4>
            <ul className="accordion-content">
              <li>What is print on demand?</li>
              <li>Product catalog</li>
              <li>Shipping and delivery</li>
              <li>Dropshipping products</li>
              <li>Pro sellers</li>
              <li>White label products</li>
              <li>Returns policy</li>
              <li>Global, yet local</li>
              <li>Sustainability</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="link-column">
            <h4 className="accordion-header">Integrations</h4>
            <ul className="accordion-content">
              <li>Shopify</li>
              <li>Etsy</li>
              <li>WooCommerce</li>
              <li>Wix</li>
              <li>Squarespace</li>
              <li>BigCommerce</li>
              <li>API</li>
            </ul>
          </div>
          <div className="link-column">
            <h4 className="accordion-header">Start Selling</h4>
            <ul className="accordion-content">
              <li>Embroidery</li>
              <li>Print on demand t-shirts</li>
              <li>Print on demand hoodies</li>
              <li>Print on demand posters</li>
              <li>Print on demand canvas</li>
              <li>Print on demand calendars</li>
              <li>Print on demand mugs</li>
              <li>Custom products</li>
              <li>Custom clothing</li>
              <li>Custom merchandise</li>
              <li>Custom phone cases</li>
              <li>Print on demand Europe</li>
              <li>Print on demand UK</li>
              <li>Print on demand France</li>
              <li>Print on demand Canada</li>
              <li>Merch maker</li>
            </ul>
          </div>
          <div className="link-column">
            <h4 className="accordion-header">Company</h4>
            <ul className="accordion-content">
              <li>GelatoConnect</li>
              <li>About Gelato</li>
              <li>Leadership team</li>
              <li>Board & investors</li>
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Affiliates program</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="bottom-left">
          <ul className="list">
            <li>Contact us</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
            <li>API terms</li>
          </ul>
        </div>
        <div className="bottom-right">
          <select className="language-select">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
