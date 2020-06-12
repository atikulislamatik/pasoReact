import React, { Component, Fragment } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/images/contact-img.png'
class Contact extends Component {
    render() {
        return (
            <>
                <section className="contact-area pt-75 pb-75">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6} sm={6}>
                                <div className="contact-img">
                                    <img src={img1} alt="contact"/>
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className="content">
                                    <Form>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPhone">
                                            <Form.Control type="text" placeholder="Phone" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows="3" placeholder="Message" />
                                        </Form.Group>
                                        <a className="box-btn" href="">
                                            Submit
                                        </a>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Contact;