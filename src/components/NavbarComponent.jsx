import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";
import "../styles/main.css";
import logo from "../assets/images/Vector.png"

const NavbarComponent = () => {
  return (
    <>
      <div className="header-nav d-flex justify-content-between">
        <div className="header-logo">
          <a href="#">
            <img src={logo} alt="Logo" className="img-fluid" />
            TukanginAja
          </a>
        </div>
        <div className="header-link d-flex justify-content-space-around">
          <ul className="d-flex justify-content-space-around flex-wrap">
            <li>
              <a href="">
                <FaEnvelope style={{ color: "#fff" }} /> info@tukanginaja.com
              </a>
            </li>
            <li>
              <a href="">
                <FaPhone style={{ color: "#fff" }} /> +62 822 892 57069
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook style={{ color: "#fff" }} />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram style={{ color: "#fff" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Navbar bg="white" variant="black" expand="lg" className="shadow">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#order">Order</Nav.Link>
            </Nav>
            <div className="nav-action">
              <Button variant="primary">Konsultasi Gratis</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
