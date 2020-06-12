import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import c1 from '../../assets/images/case/c1.jpg';
import c2 from '../../assets/images/case/c2.jpg';
import c3 from '../../assets/images/case/c3.jpg';
import c4 from '../../assets/images/case/c4.jpg';
import c5 from '../../assets/images/case/c5.jpg';
import c6 from '../../assets/images/case/c6.jpg';
class Case extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        },
    }
    render() {
        return (
            <>
                <section className="case-area pt-75 pb-75">
                    <Container>
                        <div className="section-title">
                            <span>Case Studies</span>
                            <h2>Have a Look Our Work Showcase</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                            </p>
                        </div>
                        <Container>
                            <OwlCarousel className="owl-theme" items="3" dots margin={20}
                                         autoplay={true} autoplayHoverPause={true}
                                         autoplayTimeout={3000} loop onDragged
                                         responsive={this.state.responsive} >

                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="#"><img src={c1} alt="case" /></a>
                                    </div>
                                    <div className="content">
                                        <a href="#"><h3>Joe’s Company Software Development Case</h3></a>
                                        <p>
                                            Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.
                                        </p>
                                        <a href="#" className="line-btn">View Project Details</a>
                                    </div>
                                </div>
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="#"><img src={c2} alt="case" /></a>
                                    </div>
                                    <div className="content">
                                        <a href="#"><h3>Ride Share App UX Studies & Development Case</h3></a>
                                        <p>
                                            Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.
                                        </p>
                                        <a href="#" className="line-btn">View Project Details</a>
                                    </div>
                                </div>
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="#"><img src={c3} alt="case" /></a>
                                    </div>
                                    <div className="content">
                                        <a href="#"><h3>Restaurant Management & Web Developing</h3></a>
                                        <p>
                                            Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.
                                        </p>
                                        <a href="#" className="line-btn">View Project Details</a>
                                    </div>
                                </div>
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="#"><img src={c4} alt="case" /></a>
                                    </div>
                                    <div className="content">
                                        <a href="#"><h3>IT Software Company Development Case</h3></a>
                                        <p>
                                            Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.
                                        </p>
                                        <a href="#" className="line-btn">View Project Details</a>
                                    </div>
                                </div>
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="#"><img src={c5} alt="case" /></a>
                                    </div>
                                    <div className="content">
                                        <a href="#"><h3>Temperature App UX Studies & Development Case</h3></a>
                                        <p>
                                            Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.
                                        </p>
                                        <a href="#" className="line-btn">View Project Details</a>
                                    </div>
                                </div>
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="#"><img src={c6} alt="case" /></a>
                                    </div>
                                    <div className="content">
                                        <a href="#"><h3>Parking Management & Web Developing</h3></a>
                                        <p>
                                            Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.
                                        </p>
                                        <a href="#" className="line-btn">View Project Details</a>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Container>
                    </Container>
                </section>
            </>
        );
    }
}

export default Case;