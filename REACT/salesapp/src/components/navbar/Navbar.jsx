import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/Home" activeClassName="active" className="nav-links" onClick={handleClick} > Atul </Link>
            </li>
            <li className="nav-item">
              <Link to="/Product" activeClassName="active" className="nav-links" onClick={handleClick} > Product </Link>
            </li>
            <li className="nav-item">
              <Link to="/customer" activeClassName="active" className="nav-links" onClick={handleClick} > Customer </Link>
            </li>
            <li className="nav-item">
              <Link to="/Greet" activeClassName="active" className="nav-links" onClick={handleClick} > Greet </Link>
            </li>
            <li className="nav-item">
              <Link to="/Users" activeClassName="active" className="nav-links" onClick={handleClick} > User </Link>
            </li>
            <li className="nav-item">
              <Link to="/Todo" activeClassName="active" className="nav-links" onClick={handleClick} > Todo </Link>
            </li>
            <li className="nav-item">
              <Link to="/Comment" activeClassName="active" className="nav-links" onClick={handleClick} > Comment </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/Post" activeClassName="active" className="nav-links" onClick={handleClick} > Post </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/Support" activeClassName="active" className="nav-links" onClick={handleClick} > Support </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/allusers" activeClassName="active" className="nav-links" onClick={handleClick} > Allusers </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to="/devices" activeClassName="active" className="nav-links" onClick={handleClick} > Devices </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/students" activeClassName="active" className="nav-links" onClick={handleClick} > Students </Link>
            </li>
            <li className="nav-item">
              <Link to="/movie" activeClassName="active" className="nav-links" onClick={handleClick} > Movie </Link>
            </li> 
            {/* <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-links" onClick={handleClick} > </Link>
            </li>
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-links" onClick={handleClick} > </Link>
            </li> */}

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;