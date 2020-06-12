import React, {Component} from 'react';
import {Form,Col, Container, Row} from "react-bootstrap";
import logo from '../../assets/images/logo2.png'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
class Footer extends Component {
    render() {
        return (
            <>
                <section className="footer-area pt-75 pb-75">
                    <Container>
                        <Row>
                            <Col lg={4} md={6}>
                                <div className="content">
                                    <div className="logo">
                                        <a href="/"><img src={logo} alt="logo"/></a>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.
                                    </p>
                                    <div className="subscribe">
                                        <h4>Join Newsletter</h4>
                                        <Form.Group controlId="formBasicEmail" className="newsletter-form ">
                                            <Form.Control type="email" placeholder="Email"  />
                                            <button className="box-btn" type="submit">
                                                Subscribe
                                            </button>
                                        </Form.Group>
                                    </div>

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className="content ml-15">
                                    <h3>Our Service</h3>
                                    <ul className="footer-list">
                                        <li><a href="#">Visual Design</a></li>
                                        <li><a href="#"> Development</a></li>
                                        <li><a href="#">QA & Testing</a></li>
                                        <li><a href="#">IT Management</a></li>
                                        <li><a href="#">Cyber Security</a></li>
                                        <li><a href="#">Wireless Connection</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={6}>
                                <div className="content">
                                    <h3>Quick Links</h3>
                                    <ul className="footer-list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Service</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Privacy & Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Data Analysis</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className="content contacts">
                                    <h3 className="ml-40">Contact</h3>
                                    <ul className="footer-list foot-social">
                                        <li><a href="tel:+1123456789">+1 123 456 789</a></li>
                                        <li><a href="tel:+1975456789">+1 975 456 789</a>
                                        </li>
                                        <li><a href="mailto:hello@paso.com">hello@paso.com</a></li>
                                        <li><a href="mailto:support@paso.com">support@paso.com</a></li>
                                        <li>28/A street, New York, USA</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Footer;