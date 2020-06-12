import React, {Component} from 'react';
import GoTop from "../../components/GoTop/GoTop";
import MainNav from "../../components/Navbar/MainNav";
import PageBanner from "../../components/PageBanner/PageBanner";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import MainBlog from "../../components/Blog/MainBlog";

class BlogPage extends Component {
    render() {
        return (
            <>
                <GoTop/>
                <MainNav title="Blog - IT Solution and Digital Service HTML Template"/>
                <PageBanner pagesTitle="Blog"/>
                <MainBlog/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}

export default BlogPage;