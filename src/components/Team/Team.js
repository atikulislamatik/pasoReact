import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import t1 from '../../assets/images/team/t1.jpg'
import t2 from '../../assets/images/team/t2.jpg'
import t3 from '../../assets/images/team/t3.jpg'
import t4 from '../../assets/images/team/t4.jpg'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
class Team extends Component {
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
                items: 4,
            }
        },
    }
    render() {
        return (
            <>
                <section className="team-area pt-75 pb-75">
                    <Container>
                        <div className="section-title">
                            <span>Team Members</span>
                            <h2>People Who are Behind the Achievements</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                            </p>
                        </div>
                        <OwlCarousel className="owl-theme" items="4"  margin={20}
                                     autoplay={true} autoplayHoverPause={true}
                                     autoplayTimeout={3000} loop onDragged
                                     responsive={this.state.responsive} >
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={t1} alt="team"/>
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content text-center">
                                    <h3>John Smith</h3>
                                    <p>Full Stack Developer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={t2} alt="team"/>
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content text-center">
                                    <h3>Evana Doe</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={t3} alt="team"/>
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content text-center">
                                    <h3>Bread Mc</h3>
                                    <p>IT Consulting</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={t4} alt="team"/>
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content text-center">
                                    <h3>Maria Fread</h3>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={t1} alt="team"/>
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content text-center">
                                    <h3>John Smith</h3>
                                    <p>Full Stack Developer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={t2} alt="team"/>
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content text-center">
                                    <h3>Evana Doe</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={t3} alt="team"/>
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content text-center">
                                    <h3>Bread Mc</h3>
                                    <p>IT Consulting</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={t4} alt="team"/>
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank"><FaLinkedinIn/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaTwitter/></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><FaEnvelope/></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content text-center">
                                    <h3>Maria Fread</h3>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Container>
                </section>
            </>
        );
    }
}

export default Team;