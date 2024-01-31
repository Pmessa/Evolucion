import React from 'react'
import "./NavbarComponent.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navBg">

      <Container>
        <Navbar.Brand href="#home"> <img src="../images/logo-tr.png" alt="letra" class="letraVtitle" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Nutrición</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* <div className="buttonContainer">
          <Button variant='' size="sm"><img src="../images/instagram_f_icon-icons.com_65485.png" alt="" /></Button>{' '}
          <Button variant='' size="sm"><img src="../images/whatsapp-logo_icon-icons.com_57054.png" alt="" /></Button>{' '}
          <Button variant='' size="sm"><img src="../images/fb_icon-icons.com_65434.png" alt="" /></Button>{' '}
          <Button variant='' size="sm"><img src="../images/1904660-email-envelope-letter-mail-message-post-send_122510.png" alt="" /></Button>{' '}
        </div> */}

      </Container>
    </Navbar>
  );
}

export default NavbarComponent  