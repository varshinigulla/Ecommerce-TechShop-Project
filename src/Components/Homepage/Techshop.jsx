import React, { useState } from "react";
import Slider from "react-slick";
import productsData from "../Data/productsData";
import "./Techshop.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Advantages } from "../Advantages/Advantages";
import { Carousel } from "../Carousel/Carousel";
import { ProductCard } from "../Productcard/ProductCard";

export const Techshop = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        centerPadding: "1px",
        slidesToShow:4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      };

      const [products,setProduct] =useState(productsData);

      const [category,setCategory] = useState("All")

      const filterCategory = (category) => {
        const filterData = productsData.filter(product => product.category === category);
        setProduct(filterData);
        setCategory(category);
      }

    return(
        <div className="shopDetails">
            <div className="container-fluid">
                <Carousel/>
                <div className= "slider-container">
                    <h2 className="fp">Featured Products</h2>
                        <Slider {...settings}>
                            {
                                productsData.map(product => (
                                    <div key={product.id}>
                                        <div className="cs-container">
                                            <h4 className="cs-title">{product.title}</h4>
                                            <Link to={`/Singleproduct/${product.id}`}><img className="cs-image" src={product.images[0]} alt={product.title}/></Link>
                                            <pre className="cs-fprice">₹{product.finalPrice}  <del className="cs-oprice">₹{product.originalPrice}</del></pre>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                </div>           
                <div className="top-products">
                    <h3 className="heading">Top Products</h3>
                    <div >
                        <button className={category==="All"?"btn btn-category b-category":"btn btn-category"} onClick={() => setProduct(productsData)}>All</button>
                        <button className={category==="Headphones"?"btn btn-category b-category":"btn btn-category"} onClick={() => filterCategory("Headphones")}>Headphones</button>
                        <button className={category==="Earbuds"?"btn btn-category b-category":"btn btn-category"} onClick={() => filterCategory("Earbuds")}>Earbuds</button>
                        <button className={category==="Earphones"?"btn btn-category b-category":"btn btn-category"} onClick={() => filterCategory("Earphones")}>Earphones</button>
                        <button className={category==="Neckbands"?"btn btn-category b-category":"btn btn-category"} onClick={() => filterCategory("Neckbands")}>Neckbands</button>
                    </div>
                    <ProductCard products={products} />
                </div>
                <Advantages/>
            </div>
        </div>
    )
}