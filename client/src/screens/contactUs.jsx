import React from 'react'
import Banner from '../components/banner'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from '../components/seo'

export default function Contactus(props) {
    

    return (
        <>
            <SEO title='Contact Us'/>
            <Header />
            <Banner title="Contact Us" subtitle="Fill Out The Form Below And Leave Us A Message" />
            <Contact />
            <Footer />
        </>
    )
}
