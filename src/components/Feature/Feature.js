import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import featureImg from '../../assets/images/feature-img.png'
import {GiStickFrame} from 'react-icons/gi'
class Feature extends Component {
    render() {
        return (
            <>
                <section className="feature-area pt-75 pb-75">
                    <Container>
                        <Row>
                            <Col lg={6} >
                                <div className="contnet">
                                    <div className="feature-tittle">
                                        <span>Features</span>
                                        <h2>We Have Also Some Features That Provided by Paso</h2>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                                            consectetur, beatae quod eaque reprehenderit non ab quibusdam doloribus
                                            voluptatibus! Voluptatum aspernatur quasi id dolore doloremque quo vero</p>
                                    </div>

                                    <ul>
                                        <li>
                                            <GiStickFrame/>
                                            Freelancing Traning Course
                                        </li>
                                        <li>
                                            <GiStickFrame/>
                                            Technological Consultation
                                        </li>
                                        <li>
                                            <GiStickFrame/>
                                            Monthly Paid Workspace
                                        </li>
                                        <li>
                                            <GiStickFrame/>
                                            IT Learning Institute
                                        </li>
                                        <li>
                                            <GiStickFrame/>
                                            Digital Marketing
                                        </li>
                                    </ul>
                                    <a href="#" className="box-btn">Lets Talk!</a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="feature-img">
                                    <img src={featureImg} alt="feature"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Feature;