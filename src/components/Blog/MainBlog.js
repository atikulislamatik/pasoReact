import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import b1 from '../../assets/images/blog/1.jpg'
import b2 from '../../assets/images/blog/2.jpg'
import b3 from '../../assets/images/blog/3.jpg'
import b4 from '../../assets/images/blog/4.jpg'
import b5 from '../../assets/images/blog/5.jpg'
import b6 from '../../assets/images/blog/6.jpg'
class MainBlog extends Component {
    render() {
        return (
            <>
                <section className="blog-area pt-75 pb-75">
                    <Container>
                        <div className="section-title">
                            <span>Blog Post</span>
                            <h2>Our Regular Blogs</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur
                                tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda
                                dicta.
                            </p>
                        </div>
                        <Row>
                            <Col lg={4} md={6}>
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src={b1} alt="blog"/>
                                        </a>
                                    </div>

                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                                            </li>
                                            <li>
                                                <a href="#">By Admin</a>
                                            </li>
                                        </ul>

                                        <a href="#">
                                            <h3>Joe’s Company Software Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit
                                            minima modi perspiciatis nam aspernatur porro</p>

                                        <a href="#" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src={b2} alt="blog"/>
                                        </a>
                                    </div>

                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                                            </li>
                                            <li>
                                                <a href="#">By Admin</a>
                                            </li>
                                        </ul>

                                        <a href="blog-details.html">
                                            <h3>Temperature App UX Studies & Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit
                                            minima modi perspiciatis nam aspernatur porro</p>

                                        <a href="#" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src={b3} alt="blog"/>
                                        </a>
                                    </div>

                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                                            </li>
                                            <li>
                                                <a href="#">By Admin</a>
                                            </li>
                                        </ul>

                                        <a href="blog-details.html">
                                            <h3>IT Software Company Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit
                                            minima modi perspiciatis nam aspernatur porro</p>

                                        <a href="#" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src={b4} alt="blog"/>
                                        </a>
                                    </div>

                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                                            </li>
                                            <li>
                                                <a href="#">By Admin</a>
                                            </li>
                                        </ul>

                                        <a href="#">
                                            <h3>Joe’s Company Software Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit
                                            minima modi perspiciatis nam aspernatur porro</p>

                                        <a href="#" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src={b5} alt="blog"/>
                                        </a>
                                    </div>

                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                                            </li>
                                            <li>
                                                <a href="#">By Admin</a>
                                            </li>
                                        </ul>

                                        <a href="blog-details.html">
                                            <h3>Temperature App UX Studies & Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit
                                            minima modi perspiciatis nam aspernatur porro</p>

                                        <a href="#" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src={b6} alt="blog"/>
                                        </a>
                                    </div>

                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                                            </li>
                                            <li>
                                                <a href="#">By Admin</a>
                                            </li>
                                        </ul>

                                        <a href="blog-details.html">
                                            <h3>IT Software Company Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit
                                            minima modi perspiciatis nam aspernatur porro</p>

                                        <a href="#" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="blog-btn text-center">
                            <p>We Have More Usefull Blogs For You. <a href="#">View More</a></p>
                        </div>
                    </Container>
                </section>
            </>
        );
    }
}

export default MainBlog;