import React from 'react'
import ServiceItem from './service-item'
import '../stylesheets/about.scss';

export default function About(props) {


    return (
        <>
            <div className="container py-2">
                
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <h3 id="title" className="py-4 text-xl-start text-lg-start text-md-center text-sm-center text-center"><strong>Who Are We ?</strong></h3>
                        <p className="text-xl-start text-lg-start text-md-center text-sm-center text-center">KEY2DESIGN is a design firm headquartered in Birmingham, Alabama. We are dedicated to helping businesses of all sizes grow on the internet. Through responsive websites, search engine optimization, custom logo design and marketing collateral creation, we help our clients stand out from the crowd.</p>
                        <p className="text-xl-start text-lg-start text-md-center text-sm-center text-center">Our web development department implements strategies with white hat best practices in website design, content development, and SEO to help expand your brand's reach online. No matter your needs or company size, our team has the experience, skills necessary and desire to help your business grow.</p>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div className="row py-4">
                            <h3 id="title" className="text-center">Our Services</h3>
                        </div>
                        <div className="row justify-content-center">
                            <ServiceItem title='Web Design' description='We write clean custom code to fit your needs using modern HTML, CSS, and JavaScript.' icon='bi bi-globe2' />
                        </div>
                        <div className="row justify-content-center">
                            <ServiceItem title='Graphic Design' description='Specializing in Logo Design, Flyers, Business Cards, Social Media Elements and more!' icon='bi bi-vector-pen' />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
