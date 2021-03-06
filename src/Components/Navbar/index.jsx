import React, {  } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Icons from "../../Images/Icons";
import './main.scss';

export default function Navigation() {
    function scrollTo(element) {
        document.querySelector(element).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <Navbar data-aos-delay="500" data-aos="fade-down" id="navbar" fixed="top" expand="sm">
            <Container>
                <Navbar.Toggle className="mx-auto" aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Item className="nav-item">
                            <button onClick={() => scrollTo('#home')} type="button" className="nav-link nostyle">{Icons.home} Início</button>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <button onClick={() => scrollTo('#services')} type="button" className="nav-link nostyle">{Icons.tools} Executados</button>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <button onClick={() => scrollTo('#academy')} type="button" className="nav-link nostyle">{Icons.academic} Acadêmico</button>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <button onClick={() => scrollTo('#contact')} type="button" className="nav-link nostyle">{Icons.contact} Contato</button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}