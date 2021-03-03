import React from 'react'
import PortfolioItem from './portfolio-item'
import img from '../images/home/code.jpg'
import img2 from '../images/home/code2.jpg'
import kountry from '../images/home/kountry.PNG'
import integrity from '../images/home/integrity.PNG'
import stpaul from '../images/home/stpaul.PNG'



export default function Portfolio(props) {


    return (
        <>
            <div className="container">
                <div className="row p-3 justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2">
                        <PortfolioItem image={kountry} title="Kountry Cookin" description="Beautiful online cookbook" website="https://still-hamlet-66612.herokuapp.com/" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2">
                        <PortfolioItem image={stpaul} title="St. Paul Troy AME" description="Stunning church website" website="http://stpaultroy.com/" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 py-2">
                        <PortfolioItem image={integrity} title="Integrity Bible Church" description="Stunning church website" website="https://integritybiblechurch.org/" />
                    </div>
                    
                </div>
            </div>


        </>
    )
}
