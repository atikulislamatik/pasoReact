import React, { Component } from 'react';
import MainNav from '../../components/Navbar/MainNav';
import MainHome from '../../components/Home/MainHome';
import Service from "../../components/Service/Service";
import Company from "../../components/Company/Company";
import Choose from "../../components/Choose/Choose";
import Work from "../../components/Wrok/Work";
import Case from "../../components/Case/Case";
import Feature from "../../components/Feature/Feature";
import Team from "../../components/Team/Team";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import GoTop from '../../components/GoTop/GoTop';

class HomeOne extends Component {
    render() {
        return (
            <>
               <MainNav title="Paso - IT Solution and Digital Service HTML Template"/>
               <MainHome/>
               <Service/>
               <Company/>
               <Choose/>
               <Work/>
               <Case/>
               <Feature/>
               <Team/>
               <Testimonials/>
               <Blog/>
               <Contact/>
               <GoTop/>
               <Footer/>
            </>
        );
    }
}

export default HomeOne;