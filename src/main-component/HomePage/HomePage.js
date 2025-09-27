import React, {Fragment} from 'react';
import About from '../../components/about/about';
import BlogSection from '../../components/BlogSection/BlogSection';
import ContactArea from '../../components/ContactArea';
import Exprience from '../../components/Exprience/Exprience';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/hero';
import Navbar from '../../components/Navbar/Navbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Testimonial from '../../components/Testimonial/Testimonial';

const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
            <Hero/>
            <About/>
            <Exprience/>
            <ProjectSection/>
            <ContactArea/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;