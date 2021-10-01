import React from "react";
import "./NavBar.css";
import Logo from "../../assets/logo.svg";

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <img src={Logo} alt='' className='logo' />
        <div className='navbar_auth'>
          <button className='btn signIn'>Sign In</button>
          <button className='btn signUp'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
