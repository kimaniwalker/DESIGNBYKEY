import React from 'react'
import PortfolioItem from './portfolio-item'
import img from '../images/home/code.jpg'
import img2 from '../images/home/code2.jpg'
import kountry from '../images/home/kountry.PNG'



export default function Portfolio(props) {


    return (
        <>
            <div className="container">
                <div className="row p-3 justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2">
                        <PortfolioItem image={kountry} title="Kountry Cookin" description="Full stack webstie created by us. This is a test" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2">
                        <PortfolioItem image={img2} title="Web Design By Faith" description="Full stack webstie created by us. This is a test" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2">
                        <PortfolioItem image={img} title="Web Design By Faith" description="Full stack webstie created by us. This is a test" />
                    </div>
                    
                </div>
            </div>


        </>
    )
}
