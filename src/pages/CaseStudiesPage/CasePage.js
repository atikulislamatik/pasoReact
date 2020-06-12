import React, {Component} from 'react';
import GoTop from "../../components/GoTop/GoTop";
import MainNav from "../../components/Navbar/MainNav";
import PageBanner from "../../components/PageBanner/PageBanner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import CaseStudies from "../../components/Case/CaseStudies";

class CasePage extends Component {
    render() {
        return (
            <>
                <GoTop/>
                <MainNav title="Case - IT Solution and Digital Service HTML Template"/>
                <PageBanner pagesTitle="Case Studies"/>
                <CaseStudies/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}

export default CasePage;