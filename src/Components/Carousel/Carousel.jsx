import React from "react";
import Slider from "react-slick";
import productsData from "../Data/productsData";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export const Carousel = () => {

    const Data = productsData.filter(image => image.tagline==="Keep the noise out, or in. You choose." || image.tagline=== "Featherweight for comfort all-day." || image.tagline==="Give your favourite music a boost.");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      };
    return(
        <div className="carousels">
            <Slider {...settings}>
                {
                    Data.map(product => (
                        <div>
                            <div className="c-container">
                                <div className="c-content">
                                    <h4 className="c-title">{product.title}</h4>
                                    <h1 className="c-tagline">{product.tagline}</h1>
                                    <pre className="c-fprice">₹{product.finalPrice}  <del className="c-oprice">₹{product.originalPrice}</del></pre>
                                    <Link to={`/Singleproduct/${product.id}`}><button className="c-shop">Shop Now</button></Link>
                                </div>
                                <img className="c-image" src={product.heroImage} alt={product.title}/>
                            </div>
                        </div>
                        )
                    )
                }
            </Slider>
        </div>
    )
}