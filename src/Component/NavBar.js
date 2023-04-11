import React from 'react'
import { Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    let activeStyle = {
        textDecoration: "underline",
      };

  return (
    <>
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Nav.Item className="navbar-brand" >MyStore</Nav.Item>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            product
          </NavLink>
      </li>
      <li className="nav-item active px-3">
      <NavLink
            to="/addproduct"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
             Add product
          </NavLink>
      </li>
    </ul>
    </div>
</Nav>
</>
  )
}

export default NavBar