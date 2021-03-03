import React from 'react'
import About from '../components/about'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Aboutus(props) {
    

    return (
        <>
            <Header />
            <Banner title="About Us" subtitle="Learn More About Us And Our Services" />
            <About />
            <Footer />
        </>
    )
}
