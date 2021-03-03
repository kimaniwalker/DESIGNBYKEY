import React from 'react'
import About from '../components/about'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from '../components/seo'

export default function Aboutus(props) {
    

    return (
        <>
            <SEO title='About Us'/>        
            <Header />
            <Banner title="About Us" subtitle="Learn More About Us And Our Services" />
            <About />
            <Footer />
        </>
    )
}
