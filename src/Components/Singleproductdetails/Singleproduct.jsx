import { useParams } from "react-router-dom";
import productsData from "../Data/productsData";
import { Advantages } from "../Advantages/Advantages";
import { IoMdCheckmark } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "./Singleproduct.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import reviewsData from "../Data/reviewsData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../CartPage/CartOperation";

export const Singleproduct = ()=> {
    
    let {id} =useParams()
    let data = productsData.find(e =>e.id === Number(id));

    let dispatch = useDispatch()

    function addProduct(){
        dispatch(AddToCart({...data,quantity:1}))
    }

    function addProducts(id){
        let data = productsData.find(e =>e.id === Number(id));
        dispatch(AddToCart({...data,quantity:1}))
    }

    const element =[];
    for (let i = 0; i < data.rateCount; i++) {
        element.push(i);        
    }

    const products = productsData.filter(product => product.category === data.category);
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    let elements=[];
    let stars = (Count) => {
        for (let i = 0; i < Count; i++) {
            elements.push(i);        
        }
    }

    const [simage,setImage] = useState(0);
    const [sfeatures,setfeatures] = useState("Specifications");

    return(
        <div className="productDetails">
            <div className="container-fluid">
                <div className="pi-details">
                    <div className="pd-left">
                        <div className="pd-simage">
                            {
                                data.images.map((product,i) => (
                                    <img className={simage===i?"sp-image img1":"sp-image"} onClick={() => setImage(i)} src={product} alt={data.title}/>
                                ))
                            }
                        </div>
                        <div className="pd-limage">
                            <img className="sp-limage" src={data.images[simage]} alt={data.title}/>
                        </div>
                    </div>
                    <div className="pd-right">
                        <h3 className="sp-title">{data.title}</h3>
                        <p className="sp-info">{data.info}</p>
                        <pre>{
                            element.map(() => {
                                return <FaStar className="sp-ratingstars"/>
                            })
                        }  |  {data.ratings} Ratings</pre>
                        <hr></hr>
                        <div className="price-details">
                            <div>
                                <pre className="sp-fprice">₹{data.finalPrice}  <del className="sp-oprice">₹{data.originalPrice}</del></pre>
                                <pre className="sp-discount">You Save : ₹{data.originalPrice - data.finalPrice} ({Math.round((data.originalPrice - data.finalPrice)/data.originalPrice*100)}%)</pre>
                                <pre className="sp-tax">(Inclusive of all Taxes)</pre>
                            </div>
                            <div>
                                <button className="sp-stock"><IoMdCheckmark />In Stock</button>
                            </div>
                        </div>
                        <hr></hr>
                        <h6 className="sp-offer">Offers and Discounts</h6>
                        <div className="sp-offers">
                            <button className="sp-cash">No cost Emi on credit card</button>
                            <button className="sp-cash">Pay later and Avail Cashback</button>
                        </div>
                        <hr></hr>
                        <button className="sp-cart" onClick={() => addProduct()}>Add to Cart</button>
                    </div>
                </div>
                <div className="details">
                    <div className="sp-buttons">
                        <button className={sfeatures==="Specifications"?"btn features f-color":"btn features"} onClick={() => setfeatures("Specifications")}>Specifications</button>
                        <button className={sfeatures==="Overview"?"btn features f-color":"btn features"} onClick={() => setfeatures("Overview")}>Overview</button>
                        <button className={sfeatures==="Reviews"?"btn features f-color":"btn features"} onClick={() => setfeatures("Reviews")}>Reviews</button>
                    </div>
                    {
                        sfeatures==="Specifications"?
                        <div className="f-specification">
                        <p>Brand<pre className="f-data">{data.brand}</pre></p>
                        <p>Model<pre className="f-data">{data.title}</pre></p>
                        <p>Generic Name<pre className="f-data">{data.category}</pre></p>
                        <p>Headphone Type<pre className="f-data">{data.type}</pre></p>
                        <p>Connectivity<pre className="f-data">{data.connectivity}</pre></p>
                        <p>Microphone<pre className="f-data">Yes</pre></p>
                    </div>:<></>
                    }
                    {
                        sfeatures==="Overview"?(
                        <div className="f-overviews">
                            <h4 className="o-data">The <bold className="o-hdata">{data.title} </bold>{data.info} provides with fabulous sound quality.</h4>
                            <ul>
                                <li>Sound Tuned to Perfection</li>
                                <li>Comfortable to Wear</li>
                                <li>Long Hours Playback Time</li>
                            </ul>
                            <p>Buy the <bold className="o-pdata">{data.title} {data.info}</bold> which offers you with fabulous music experience by providing you with awesome sound
                                quality that you can never move on from.Enjoy perfect flexibility and mobility with amazing musical quality giving you a truly 
                                awesome audio experience.It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.
                            </p>
                        </div>
                        ):(<></>)
                    }
                    {
                        sfeatures==="Reviews"?(<div className="f-reviews">
                            {
                                reviewsData.map(reviews => (
                                    <div className="r-data">
                                        <h5>Name : {reviews.name}</h5>
                                        <span>Date :  {reviews.date}</span>
                                        <pre>Reviews :  {reviews.review}</pre>
                                        {
                                            stars(reviews.rateCount)
                                        }
                                        <pre className='ratings'>Ratings :  {elements.map(() => {
                                            return <FaStar className="f-rating"/>
                                        })
                                        }</pre>
                                        <span className='empty'>{
                                        elements.splice(0,reviews.rateCount)
                                        }</span>
                                    </div>
                                ))
                            }
                        </div>):(<></>)
                    }
                </div>
                <div className= "slider-containers">
                    <h2 className="rp">Related Products</h2>
                    <Slider {...settings}>
                        {
                            products.map(product => (
                                <div key={product.id}>
                                    <div className='product-card'>
                                        <div className="product-img">
                                        <Link to={`/Singleproduct/${product.id}`}><img className='card-image' src={product.images[0]} alt={product.title}/></Link>
                                        </div>
                                        <div className="product-content">
                                            {
                                                stars(product.rateCount)
                                            }
                                            <span className='rating'>{elements.map(() => {
                                                    return <FaStar className="sp-rating"/>
                                                })
                                            }</span>
                                            <span className='empty'>{
                                                elements.splice(0,product.rateCount)
                                            }</span>
                                            <h4 className='card-title'>{product.title}</h4>
                                            <p className='card-info'>{product.info}</p>
                                            <hr className='card-hr'></hr>
                                            <pre className='card-fprice'>₹{product.finalPrice}    <del className='card-oprice'>₹{product.originalPrice}</del></pre>
                                            <button className='card-cart' onClick={() => addProducts(product.id)}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>          
                <Advantages/>
            </div>
        </div>
    )
}