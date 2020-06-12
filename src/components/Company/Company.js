import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import companyImg from '../../assets/images/company/company-img.jpg';
class Company extends Component {
    render() {
        return (
            <>
                <section className="company-area">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6} md={12}>
                                <div className="company-content">
                                    <div className="company-tittle">
                                        <span>Our Company</span>
                                        <h2>Innovative It Helping Service All Over the World</h2>

                                        <p>It is a long established fact that a reader will be distracted by the rea
                                            dable content of a page when looking at its layout. The point of using Lorem
                                            Ipsum is that it has a more or less normal distribution of letters, as
                                            opposed to using Content here,content here normal distribution looking at
                                            its.</p>

                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form variations passages.</p>
                                    </div>

                                    <a href="#" className="box-btn">
                                        Know More
                                    </a>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="company-img">
                                    <img src={companyImg} alt="company" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Company;