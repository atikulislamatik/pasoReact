import React, { Component } from 'react';
import About from '../../components/About/About';
import MainNav from '../../components/Navbar/MainNav';
import GoTop from "../../components/GoTop/GoTop";
import PageBanner from "../../components/PageBanner/PageBanner";
import Company from "../../components/Company/Company";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Feature from "../../components/Feature/Feature";
import Work from "../../components/Wrok/Work";

class AboutPage extends Component {
    render() {
        return (
            <>
                <GoTop/>
                <MainNav title="About - IT Solution and Digital Service HTML Template"/>
                <PageBanner pagesTitle="About Us"/>
                <Company/>
                <Work/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}

export default AboutPage;