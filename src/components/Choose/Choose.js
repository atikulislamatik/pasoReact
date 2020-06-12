import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import chooseImg from '../../assets/images/choose-img.png'
import 'react-accessible-accordion/dist/fancy-example.css';
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';

class Choose extends Component {
    render() {
        return (
            <>
                <section className="choose-area pt-75 pb-75">
                    <Container>
                        <div className="section-title">
                            <span>Choose Paso</span>
                            <h2>We Achieved People’s Trust by Our Great Service</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Quis ipsum suspendisse.
                            </p>
                        </div>
                        <Row className="align-items-center">
                            <Col lg={6} md={12}>
                                <div className="choose-img">
                                    <img src={chooseImg} alt="choose"/>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="choose-content">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Great Understanding
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Update Technology
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Experienced Team
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Best Quality Service
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Choose;