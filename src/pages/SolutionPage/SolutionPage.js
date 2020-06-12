import React, { Component } from 'react';
import MainNav from '../../components/Navbar/MainNav';
import GoTop from "../../components/GoTop/GoTop";
import PageBanner from "../../components/PageBanner/PageBanner";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Service from "../../components/Service/Service";
import Choose from "../../components/Choose/Choose";
class SolutionPage extends Component {
    render() {
        return (
            <>
                <GoTop/>
                <MainNav title="Solutions - IT Solution and Digital Service HTML Template"/>
                <PageBanner pagesTitle="Service Solutions"/>
                <Service/>
                <Choose/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}

export default SolutionPage;