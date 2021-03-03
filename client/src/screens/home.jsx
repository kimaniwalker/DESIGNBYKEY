import React from 'react'
import Header from '../components/header'
import About from '../components/about'
import Reviews from '../components/reviews'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Banner from '../components/banner'
import SEO from '../components/seo'

export default function Home(props) {
    

    return (
        <>
            <SEO title='Home' />
            <Header />
            <Banner title="Software Development Done Right" subtitle="Establish More Customers, Not Just Local But Global" />
            <About />
            <Reviews />
            <Contact />
            <Footer />
        </>
    )
}
