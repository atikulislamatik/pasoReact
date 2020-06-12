import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import p1 from '../../assets/images/process/p1.png'
import p2 from '../../assets/images/process/p2.png'
import p3 from '../../assets/images/process/p3.png'
import p4 from '../../assets/images/process/p4.png'
import next from '../../assets/images/process/next.png'
class Work extends Component {
    render() {
        return (
            <>
                <section className="work-area pt-75 pb-75">
                    <Container>
                        <div className="section-title">
                            <span>Working Process</span>
                            <h2>We are popular because of our way of working</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                            </p>
                        </div>
                        <Row >
                            <Col lg={3} sm={6}>
                                <div className="single-process">
                                    <div className="icon">
                                        <img src={p1} alt="process"/>
                                        <span>
                                        <img src={next} alt="shape"/>
                                    </span>
                                    </div>
                                    <div className="content">
                                        <h3>Research Product</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} sm={6}>
                                <div className="single-process">
                                    <div className="icon">
                                        <img src={p2} alt="process"/>
                                        <span>
                                        <img src={next} alt="shape"/>
                                    </span>
                                    </div>
                                    <div className="content">
                                        <h3>User Testing</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} sm={6}>
                                <div className="single-process">
                                    <div className="icon">
                                        <img src={p3} alt="process"/>
                                        <span>
                                        <img src={next} alt="shape"/>
                                    </span>
                                    </div>
                                    <div className="content">
                                        <h3>Development</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} sm={6}>
                                <div className="single-process">
                                    <div className="icon">
                                        <img src={p4} alt="process"/>
                                    </div>
                                    <div className="content">
                                        <h3>Product Handover</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt.
                                        </p>
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

export default Work;