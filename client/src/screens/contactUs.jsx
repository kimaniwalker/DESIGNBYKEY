import React from 'react'
import Banner from '../components/banner'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Contactus(props) {
    

    return (
        <>
            <Header />
            <Banner title="Contact Us" subtitle="Fill Out The Form Below And Leave Us A Message" />
            <Contact />
            <Footer />
        </>
    )
}
