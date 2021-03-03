import React from 'react'
import testomonials from '../data/reviews.json'
import '../stylesheets/reviews.scss'

export default function Reviews(props) {

    const [reviews, setReviews] = React.useState(testomonials);

    React.useEffect(() => {

    }, []);

    return (
        <>
            <div className="container-fluid bg-light">
                   
                <div className="row">
                    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            
                        </div>
                        <div class="carousel-inner py-5">
                            
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div className="row justify-content-center">
                                    <div className="col-8">



                                        <h5 className="text-center">{reviews[0].name}</h5>
                                        <p className="text-center">{reviews[0].review}</p>

                                    </div>
                                </div>

                            </div>


                            <div class="carousel-item" data-bs-interval="20000">
                                <div className="row justify-content-center">
                                    <div className="col-8">



                                        <h5 className="text-center">{reviews[1].name}</h5>
                                        <p className="text-center">{reviews[1].review}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
