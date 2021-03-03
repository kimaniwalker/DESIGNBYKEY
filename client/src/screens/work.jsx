import React from 'react'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Header from '../components/header'
import Portfolio from '../components/portfolio'
import SEO from '../components/seo'

export default function Work(props) {
    

    return (
        <>
            <SEO title='Our Work'/>
            <Header />
            <Banner title="Our Work" subtitle="Have A Look At Our Most Recent Projects"/>
            <Portfolio />
            <Footer />
        </>
    )
}
