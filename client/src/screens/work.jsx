import React from 'react'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Header from '../components/header'
import Portfolio from '../components/portfolio'

export default function Work(props) {
    

    return (
        <>
            <Header />
            <Banner title="Our Work" subtitle="Have A Look At Our Most Recent Projects"/>
            <Portfolio />
            <Footer />
        </>
    )
}
