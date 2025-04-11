import 'bootstrap/dist/css/bootstrap.min.css';
import "./productCard.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AddToCart } from '../CartPage/CartOperation';

export const ProductCard = ({products}) => {

    let dispatch = useDispatch()
    
    let element=[];
    let stars = (Count) => {
        for (let i = 0; i < Count; i++) {
            element.push(i);        
        }
    }

    function addProduct(id){
            let data = products.find(e =>e.id === Number(id));
            dispatch(AddToCart({...data,quantity:1}))
        }

    return(
        <>
        <div className="product-container">
            <div className="p-container">
            {
                products.map((product) => (
                    <div key={product.id} className='product-card'>
                        <div className="product-img">
                        <Link to={`/Singleproduct/${product.id}`}><img className='card-image' src={product.images[0]} alt={product.title}/></Link>
                        </div>
                        <div className="product-content">
                            {
                                stars(product.rateCount)
                            }
                            <span className='rating'>{element.map(() => {
                                    return <FaStar className="sp-rating"/>
                                })
                            }</span>
                            <span className='empty'>{
                                element.splice(0,product.rateCount)
                            }</span>
                            <h4 className='card-title'>{product.title}</h4>
                            <p className='card-info'>{product.info}</p>
                            <hr className='card-hr'></hr>
                            <pre className='card-fprice'>₹{product.finalPrice}    <del className='card-oprice'>₹{product.originalPrice}</del></pre>
                            <button className='card-cart' onClick={() => addProduct(product.id)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
            <div className='product-card browse'>
                    <p>Browse all products <FaArrowRightLong /></p>
            </div>
            </div>
        </div>
        </>
    )
}