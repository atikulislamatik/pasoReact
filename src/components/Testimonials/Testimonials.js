import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import  c1 from '../../assets/images/client/1.jpg'
import  c2 from '../../assets/images/client/2.jpg'
class Testimonials extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        },
    }
    render() {
        return (
            <>
                <section className="testimonials-area pt-75 pb-75">
                    <Container>
                        <div className="section-title">
                            <span>Testimonials</span>
                            <h2>What Our Client’s Say</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur
                                tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda
                                dicta.
                            </p>
                        </div>
                        <OwlCarousel className="owl-theme" items="2" dots margin={20}
                                     autoplay={true} autoplayHoverPause={true}
                                     autoplayTimeout={3000} loop onDragged
                                     responsive={this.state.responsive} >
                            <div className="single-client">
                                <img src={c1} alt="img"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of
                                        the printing Quis suspendisse typesetting ipsum dolor sit amet,
                                    </p>

                                    <h3>Steven Jony</h3>
                                    <span>CEO of Company</span>
                            </div>
                            <div className="single-client">
                                <img src={c2} alt="img"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of
                                        the printing Quis suspendisse typesetting ipsum dolor sit amet,</p>

                                    <h3>Omit Jacson</h3>
                                    <span>Company Founder</span>
                            </div>
                        </OwlCarousel>
                    </Container>
                </section>
            </>
        );
    }
}

export default Testimonials;