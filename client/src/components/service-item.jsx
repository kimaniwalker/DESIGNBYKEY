import React from 'react'
import '../stylesheets/service-item.scss'

export default function ServiceItem(props) {


    return (
        <>
            <div class="card mb-3 w-75 py-3">
                <div class="row g-0">
                    <div class="col-md-4 bg-light">
                        <div className="row text-center">
                            <i id="icon" class={props.icon} />
                        </div>
                        
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-xl-start text-lg-start text-md-center text-sm-center text-center">{props.title}</h5>
                            <p class="card-text text-xl-start text-lg-start text-md-center text-sm-center text-center">{props.description}</p>
                            <p class="card-text text-xl-start text-lg-start text-md-center text-sm-center text-center"><small class="text-muted">Contact us for more information on {props.title}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
