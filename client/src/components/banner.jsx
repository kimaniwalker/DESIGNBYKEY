import React from 'react'
import '../stylesheets/banner.scss'
import Header from '../components/header'

export default function Banner(props) {


    return (
        <>
            <div id="banner" className="container-fluid d-flex align-items-center justify-content-center">
                
                <div className="row text-light">
                    
                   
                       <h1 className="text-center">{props.title}</h1>
                       <span id="headline" className="text-center text-success">{props.subtitle}</span>
                    
                </div>
                
            </div>
        </>
    )
}
