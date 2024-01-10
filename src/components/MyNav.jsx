import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MyNav() {
  return (
    <Navbar expand="md" className="bg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="./assets/image/logo.png" alt="logo netflix" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/tvShows">TV Shows</NavLink>
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" to="/recentlyAdded">Recently Added</NavLink>
            <NavLink className="nav-link" to="/myList">My List</NavLink>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons text-white me-3"></i>
            <div id="kids" className="fw-bold text-white me-3">
              KIDS
            </div>
            <i className="bi bi-bell icons text-white me-3"></i>
            <i className="bi bi-person-circle icons text-white"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
