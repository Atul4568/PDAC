import React from 'react';
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const Navbar=()=> {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark"> */}
        <container>
          <nav className="me-auto">
          <Link to="/Home">Home</Link>
          <Link to="/Product">Product</Link>
          <Link to="/customer">Customer</Link>
          <Link to="./Support">Support</Link>
          </nav>
        </container>
      {/* </Navbar> */}
    </>
  );
}

// export default ColorSchemesExample;