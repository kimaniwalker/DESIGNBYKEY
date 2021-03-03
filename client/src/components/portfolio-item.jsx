import React from 'react'
import '../stylesheets/portfolio-item.scss'


export default function PortfolioItem(props) {


    return (
        <>
            <div class="card w-100" >
                <div className="row g-0 text-center text-lg-start text-xl-start">
                    <img src={props.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <a href="www.google.com" class="btn btn-primary">Vist Website</a>
                    </div>
                </div>

            </div>
        </>
    )
}
