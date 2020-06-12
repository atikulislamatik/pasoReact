import React, {Component} from 'react';
import GoTop from "../../components/GoTop/GoTop";
import MainNav from "../../components/Navbar/MainNav";
import PageBanner from "../../components/PageBanner/PageBanner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Info from "../../components/Contact/Info";

class ContactPage extends Component {
    render() {
        return (
            <>
                <GoTop/>
                <MainNav title="Contact - IT Solution and Digital Service HTML Template"/>
                <PageBanner pagesTitle="Contact Us"/>
                <Info/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}

export default ContactPage;