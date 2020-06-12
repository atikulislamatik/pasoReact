import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import s1 from '../../assets/images/service/s1.png'
import s2 from '../../assets/images/service/s2.png'
import s3 from '../../assets/images/service/s3.png'
import s4 from '../../assets/images/service/s4.png'
import s5 from '../../assets/images/service/s5.png'
import s6 from '../../assets/images/service/s6.png'
class Service extends Component {
    render() {
        return (
            <>
                <section className="service-area pt-75 pb-75">
                    <Container>
                        <div className="section-title">
                            <span>Smart Services</span>
                            <h2>Paso Provide All Kind of Tech Solutions</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                            </p>
                        </div>
                        <Row>
                            <Col lg={4} sm={6}>
                                <div className="single-service">
                                    <div className="service-img">
                                        <img src={s1} alt="service"/>
                                    </div>

                                    <div className="service-content">
                                        <h3>Visual Design</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime
                                            assumenda. maiores, magnam</p>

                                        <a href="#" className="line-bnt">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className="single-service">
                                    <div className="service-img">
                                        <img src={s2} alt="service"/>
                                    </div>

                                    <div className="service-content">
                                        <h3>Development</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime
                                            assumenda. maiores, magnam</p>

                                        <a href="#" className="line-bnt">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className="single-service">
                                    <div className="service-img">
                                        <img src={s3} alt="service"/>
                                    </div>

                                    <div className="service-content">
                                        <h3>QA Testing</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime
                                            assumenda. maiores, magnam</p>

                                        <a href="#" className="line-bnt">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className="single-service">
                                    <div className="service-img">
                                        <img src={s4} alt="service"/>
                                    </div>

                                    <div className="service-content">
                                        <h3>IT Management</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime
                                            assumenda. maiores, magnam</p>

                                        <a href="#" className="line-bnt">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className="single-service">
                                    <div className="service-img">
                                        <img src={s5} alt="service"/>
                                    </div>

                                    <div className="service-content">
                                        <h3>Cyber Security</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime
                                            assumenda. maiores, magnam</p>

                                        <a href="#" className="line-bnt">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className="single-service">
                                    <div className="service-img">
                                        <img src={s6} alt="service"/>
                                    </div>

                                    <div className="service-content">
                                        <h3>Wireless Connectivity</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime
                                            assumenda. maiores, magnam</p>

                                        <a href="#" className="line-bnt">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Service;