import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavBar.css";
import { NavItem } from "react-bootstrap";
//When I hover over nav options choose a random color to create a rectangle under option
class NavBar extends React.Component {
    render() {
        return(
            <Navbar data-bs-theme="dark" fixed="top" className="navbar" expand="lg">
                <Container className="navbar-container "fluid>
                    <Navbar.Brand href="#" className="navbar-brand">Nicholas Sutton</Navbar.Brand>
                    <Navbar.Toggle data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="ms-auto">
                            <NavItem>
                                <Nav.Link href="#home" className="nav-link">// Home</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link href="#about" className="nav-link">// About</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link href="#experience" className="nav-link">// Experience</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link href="#projects" className="nav-link">// Projects</Nav.Link>
                            </NavItem>
                        </Nav>

                        <Nav className="ml-auto"></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;