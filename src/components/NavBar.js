import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Media } from 'react-breakpoints';
// import SideBar from './SideBar'
import { Link as scrollLink } from 'react-scroll';

export default class NavBar extends Component {
    state = {
        menuOpen: false
    };

    handleToggle = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    render() {
        return (
            <Media>
                {({ breakpoints, currentBreakpoint }) =>
                    breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                        <Navbar
                            expand="lg"
                            fixed="top"
                            style={{
                                background: 'white',
                                width: '100%'
                            }}
                        >
                            <Navbar.Brand>
                                <LogoLink
                                    activeClass="active"
                                    to="header"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <i className="fas fa-glasses"></i>
                                </LogoLink>
                            </Navbar.Brand>

                            <Nav className="link-text ml-auto mr-3">
                                <Nav.Item>
                                    <NavLink
                                        activeClass="active"
                                        to="header"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Home
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        activeClass="active"
                                        to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Project
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        About Me
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Contact
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    ) : (
                        <Navbar
                            expand="lg"
                            fixed="top"
                            expanded={this.state.menuOpen}
                            style={{
                                background: 'white'
                            }}
                        >
                            <Navbar.Brand>
                                <LogoLink
                                    activeClass="active"
                                    to="header"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    // className="ml-3"
                                >
                                    <i className="fas fa-glasses"></i>
                                </LogoLink>
                            </Navbar.Brand>

                            <NavbarToggle
                                onClick={() => {
                                    this.handleToggle();
                                }}
                            >
                                {this.state.menuOpen ? (
                                    <i className="fas fa-times"> </i>
                                ) : (
                                    <i className="fas fa-align-justify"></i>
                                )}
                            </NavbarToggle>

                            <Navbar.Collapse className="ml-2 justify-content-center">
                                <Nav className="link-text ml-auto mr-3">
                                    <Nav.Item>
                                        <NavLink
                                            activeClass="active"
                                            to="header"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            onClick={() => {
                                                this.handleToggle();
                                            }}
                                        >
                                            Home
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <NavLink
                                            activeClass="active"
                                            to="project"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            onClick={() => {
                                                this.handleToggle();
                                            }}
                                        >
                                            Project
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <NavLink
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            onClick={() => {
                                                this.handleToggle();
                                            }}
                                        >
                                            About Me
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <NavLink
                                            to="/contact"
                                            onClick={() => {
                                                this.handleToggle();
                                            }}
                                        >
                                            Contact
                                        </NavLink>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    )
                }
            </Media>
        );
    }
}

const LogoLink = styled(scrollLink)`
    font-size: 2rem;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;
const NavLink = styled(scrollLink)`
    color: var(--mainBlack) !important;
    font-size: 1.5rem;
    margin-right: 1rem;
    &:hover {
        cursor: pointer;
    }
`;
const NavbarToggle = styled(Navbar.Toggle)`
    color: var(--mainWhite) !important;
    border: none;
    transition: all 1s linear;
    font-size: 1.5rem;
`;

// const SidebarContainer = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: var(--neutral);
// `;
