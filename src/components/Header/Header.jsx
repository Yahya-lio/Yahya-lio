import React from "react";
import "./Header.css";

import hero from '../../assets/hero.png'

function Header() {
  return (
    <div className='header'>
      <div className='header_container'>
        <div className="header_textcontent">
          <h1 className="headline">
          Read storys around the Globle and interct with it
          </h1>
          <h3>
          Share your Story and join us on the Communty of share and lisen
          </h3>

          <button className="btn action">Try It</button>
        </div>
        <img src={hero} alt="" className="hero"/>
      </div>
    </div>
  );
}

export default Header;
