import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import userContext from "./userContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import SearchForm from "./SearchForm";

import "./Navbar.css";

/** NavBar component.
 *
 * App -> NavBar
 *
 * Renders links to home, companies, and jobs
 */

function NavBar({ handleLogout, handleSearch }) {
  const user = useContext(userContext);

  function loggedInNav() {
    return (
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <NavLink className="nav-link no-wrap" to="/listings/create">
            Create Listing
          </NavLink>
        </Container>
        <Container>
          <NavLink className="nav-link no-wrap" to="/" onClick={handleLogout}>
            Log out
          </NavLink>
        </Container>
      </Navbar>
    );
  }

  function loggedOutNav() {
    return (
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <NavLink className="nav-link no-wrap" to="/login">
            Login
          </NavLink>
        </Container>
        <Container>
          <NavLink className="nav-link no-wrap" to="/signup">
            Sign Up
          </NavLink>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand
          className="navbar-brand"
          href="/"
          onClick={() => handleSearch()}
        >
          ShareBnB
        </Navbar.Brand>
        <SearchForm handleSearch={handleSearch} />

        {user ? loggedInNav() : loggedOutNav()}
      </Container>
    </Navbar>
  );
}

export default NavBar;
