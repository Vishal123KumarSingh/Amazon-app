import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import "../App";
import { useStateValue } from "../Stateprovider";

import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  function handleSignInOut() {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?fit=636%2C193&ssl=1"
          alt=""
        ></img>
      </Link>

      <div className="location">
        <LocationOnIcon className="location__Icon" />
        <div className="location__Text">
          <span className="location__firstText">Hello</span>
          <span className="location__secondText">Select Your Address</span>
        </div>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__SearchIcon" />
      </div>

      <div className="header__nav">
        {/* This code means , if there is no user , than only render or redirect to 
           login page , after clicking the link.*/}
        {/* This is called optional chaning. */}
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleSignInOut}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Sign In"}
            </span>
            <span className="header__optionLineTwo">Accounts & Lists</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Amazon</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="basket">
          <ShoppingBasketIcon className="basket__icon" />

          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
