import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../assets/images/home-bg-1-img.png'
import shape1 from '../../assets/images/shape/1.png'
import shape2 from '../../assets/images/shape/2.png'
import shape3 from '../../assets/images/shape/3.png'
import shape4 from '../../assets/images/shape/4.png'
import shape5 from '../../assets/images/shape/5.png'
import shape6 from '../../assets/images/shape/6.png'
class HomeOne extends Component {
    render() {
        return (
            <>
                <section className="banner-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <Container fluid>
                                <Row className="align-items-center">
                                    <Col lg={6}>
                                    <div className="banner-content">
                                    <h1>
                                        Trusted Effective Service and Solutions
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, et sed do eiusmod tempor incididunt labore dolore magna aliqua. Quis ipsum suspendisse.
                                    </p>
                                    <div className="banner-btn">
                                        <a href="/contact" className="box-btn">Contact Us</a>
                                        <a href="/about" className="box-btn border-btn">Know More</a>
                                    </div>
                                </div> F
                                    </Col>
                                    <Col lg={6}>
                                        <div className="banner-img">
                                            <img src={bannerImg} alt="banner"/>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="home-shape">
                        <div className="shape1">
                            <img src={shape1} alt="shape"/>
                        </div>
                        <div className="shape2">
                            <img src={shape2} alt="shape"/>
                        </div>
                        <div className="shape3">
                            <img src={shape3} alt="shape"/>
                        </div>
                        <div className="shape4">
                            <img src={shape4} alt="shape"/>
                        </div>
                        <div className="shape5">
                            <img src={shape5} alt="shape"/>
                        </div>
                        <div className="shape6">
                            <img src={shape6} alt="shape"/>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default HomeOne;