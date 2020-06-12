import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Container, Form, FormControl,Button} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import logo from '../../assets/images/logo2.png'

class MainNav extends Component {
    constructor(props) {
        super();
        this.state = {
            pageTitle: props.title
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 10;
            const nav = document.getElementById('nav');
            if (isTop) {
                nav.classList.add('is-sticky');
            } else {
                nav.classList.remove('is-sticky');
            }
        });
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <div className="navbar-area">
                    <Navbar collapseOnSelect expand="lg" className="main-nav" id="nav">
                        <Container>
                            <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="m-auto">
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/">Home</Nav.Link>
                                    <Nav.Link className="nav-item"  as={NavLink} exact to="/about">About</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/solutions">Solutions</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/case">Case Studies</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/blog">Blog</Nav.Link>
                                    <Nav.Link className="nav-item" as={NavLink} exact to="/contact">Contact</Nav.Link>
                                </Nav>
                                <a href="#" className="box-btn">Get Started</a>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </Fragment>
        );
    }
}

export default MainNav;