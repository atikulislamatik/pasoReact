import React, {Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { BsClock } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { MdCall } from 'react-icons/md'
class Info extends Component {
    render() {
        return (
            <>
                <section className="info-area pt-75">
                    <Container>
                        <Row>
                            <Col lg={4} sm={6}>
                                <div className="single-contact">
                                    <div className="icon">
                                        <BsClock />
                                    </div>
                                    <div className="content">
                                        <h3>Opening Hours</h3>
                                        <p>Sun - Thu : 10:00 AM - 06:00 PM</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className="single-contact">
                                    <div className="icon">
                                        <MdLocationOn />
                                    </div>
                                    <div className="content">
                                        <h3>Location</h3>
                                        <p>28/A Street, New York City, USA</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={12}>
                                <div className="single-contact">
                                    <div className="icon">
                                        <MdCall />
                                    </div>
                                    <div className="content">
                                        <h3>Phone</h3>
                                        <p>+1 (321) 984 754</p>
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

export default Info;