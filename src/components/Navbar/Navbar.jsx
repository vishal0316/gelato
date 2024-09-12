import { FaHeadset } from "react-icons/fa";
import { AiOutlineGlobal, AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";

// Reusable Button Components
const ContactButton = () => (
  <button className="nav-button contact-us">
    <FaHeadset /> Contact Us
  </button>
);

const CurrencyButton = () => (
  <div className="dropdown">
    <button className="nav-button currency">
      <AiOutlineGlobal /> IN/INR
    </button>

    <div className="dropdown-content">
      <a href="#">Language - EN</a>
      <a href="#">Currency - INR</a>
    </div>
  </div>
);

const CartButton = () => (
  <button className="nav-button cart">
    <BiShoppingBag /> Cart
  </button>
);

const SignInButton = () => (
  <button className="nav-button sign-in">
    <AiOutlineUser /> Sign In
  </button>
);

const SignUpButton = () => (
  <button className="sign-up-button">Sign Up For Free</button>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Upper Navbar Section */}
      <div className="upper-nav">
        <div className="logo">
          <img className="logoo" src={logo} alt="Gelato" />
        </div>

        <div className={`nav-buttons ${isMobileMenuOpen ? "open" : ""}`}>
          <ContactButton />
          <CurrencyButton />

          <CartButton />
          <SignInButton />
          <SignUpButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "X" : "☰"}
        </div>
      </div>

      {/* Main Navbar Links */}
      <div className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="dropdown">
          Products
          <IoIosArrowDown style={{ paddingTop: "5px" }} />
          <div className="dropdown-content">
            <a>Mens clothing</a>
            <a>Womens clothing</a>
            <a>Kids & baby clothing</a>
            <a>Wall art</a>
            <a>Calendars</a>
            <a>Cards</a>
            <a>Photo books</a>
            <a>Hats</a>
            <a>Phone cases</a>
            <a>Mugs</a>
            <a>Tote bags</a>
            <a>Stationery & business</a>
          </div>
        </div>

        <div className="dropdown">
          Start Selling
          <IoIosArrowDown style={{ paddingTop: "5px" }} />
          <div className="dropdown-content">
            <a>Print on demand</a>
            <a>Setup your business</a>
            <a>Sell coustom products</a>
            <a>Integration</a>
            <a>Shipping and delivery</a>
            <a>Partner services</a>
            <a>Custom packaging</a>
            <a>Move your products</a>
          </div>
        </div>

        <div className="dropdown">
          Tools and Apps
          <IoIosArrowDown style={{ paddingTop: "5px" }} />
          <div className="dropdown-content">
            <a>Tools and apps overview</a>
            <a>Personalization Studio</a>
            <a>Auto File Sync</a>
            <a>Design maker</a>
            <a>Product creation tools</a>
            <a>Mockup studio</a>
            <a>Price Navigator</a>
            <a>Analytics</a>
            <a>Gelato App</a>
          </div>
        </div>

        <div className="dropdown">
          Pricing
          <IoIosArrowDown style={{ paddingTop: "5px" }} />
          <div className="dropdown-content">
            <a href="#">Payment and pricing</a>
            <a href="#">Subscription</a>
            <a href="#">Gelato +</a>
            <a href="#">Gelato + gold</a>
            <a href="#">Platinum</a>
            <a href="#">Offers</a>
          </div>
        </div>

        <div className="dropdown">
          Resources
          <IoIosArrowDown style={{ paddingTop: "5px" }} />
          <div className="dropdown-content">
            <a href="#">Resource center</a>
            <a href="#">Gelato Academy</a>
            <a href="#">Customer stories</a>
            <a href="#">Blog</a>
            <a href="#">Whitepapers</a>
            <a href="#">Newsroom</a>
            <a href="#">Sustainability</a>
            <a href="#">Help center</a>
          </div>
        </div>

        <div style={{ paddingTop: "13px" }} className="dropdown">
          Pro Sellers
        </div>

        <div className="dropdown">
          GelatoConnect
          <IoIosArrowDown style={{ paddingTop: "5px" }} />
          <div className="dropdown-content">
            <a href="#">GelatoConnect</a>
            <a href="#">Logistics</a>
            <a href="#">Workflow</a>
            <a href="#">Procurement</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
