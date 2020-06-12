import React, {Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import s1 from '../../assets/images/shape/1.png'
import s2 from '../../assets/images/shape/3.png'
import s3 from '../../assets/images/shape/6.png'
import s4 from '../../assets/images/shape/4.png'
import s5 from '../../assets/images/shape/5.png'
import s6 from '../../assets/images/shape/6.png'
class PageBanner extends Component {
    render() {
        return (
            <>
                <section className="page-banner-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <Container>
                                <Row>
                                    <Col lg={12} md={12} sm={12} className="text-center">
                                        <h2 className="pageTitle">{this.props.pagesTitle}</h2>
                                        <ul>
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <p className="pageTitle">{this.props.pagesTitle}</p>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                <div className="page-shape">
                                    <div className="shape1">
                                        <img src={s1} alt="shape"/>
                                    </div>
                                    <div className="shape3">
                                        <img src={s2} alt="shape"/>
                                    </div>
                                    <div className="shape4">
                                        <img src={s3} alt="shape"/>
                                    </div>
                                    <div className="shape5">
                                        <img src={s4} alt="shape"/>
                                    </div>
                                    <div className="shape6">
                                        <img src={s5} alt="shape"/>
                                    </div>
                                </div>
                                <div className="lines"><div className="line"></div><div className="line"></div><div className="line"></div></div>
                            </Container>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default PageBanner;