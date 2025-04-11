import { BsCartX } from "react-icons/bs";
import "./Cart.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, RemoveFromCart } from "./CartOperation";


export const Cart = () => {

    let cart = useSelector(state => state.Cart)

    let dispatch = useDispatch()

    let originalPrice = cart.reduce((sum,value) => sum+value.originalPrice*value.quantity , 0)
    let finalPrice = cart.reduce((sum,value) => sum+value.finalPrice*value.quantity , 0)

    return(
        <div className="cartDetails">
            <div className="container-fluid">
                {
                    (cart.length>0)?(
                        <div className="cart">
                            <div className="container cartData">
                                {
                                    cart.map(product => (
                                        <div>
                                            <div className="cartInfo">
                                                <img className="cartImage" src={product.images[0]} alt={product.title}/>
                                                <div>
                                                    <h6>{product.title} {product.info}</h6>
                                                    <p>{product.category}</p>
                                                    <pre className='card-fprice'>₹{product.finalPrice}    <del className='card-oprice'>₹{product.originalPrice}</del></pre>
                                                    <button onClick={() => dispatch(Decrement(product.id))}>-</button>
                                                    <button>{product.quantity}</button>
                                                    <button onClick={() => dispatch(Increment(product.id))}>+</button>
                                                </div>
                                                <RiDeleteBinLine onClick={() => dispatch(RemoveFromCart(product.id))}/>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <h3 className="pb-3">Order Summary ({cart.length} items)</h3>
                                <p className="fs-5">Original Price<pre className="c-price">₹{originalPrice}</pre></p>
                                <p className="fs-5">Discount<pre className="c-price">-₹{originalPrice-finalPrice}</pre></p>
                                <p className="fs-5">Delivery<pre className="c-price">Free</pre></p>
                                <hr></hr>
                                <p className="fs-5">Total Price<pre className="c-price">₹{finalPrice}</pre></p>
                                <button className="c-button">Checkout</button>
                            </div>
                        </div>
                    ):(
                        <div className="CartEmpty">
                            <BsCartX className="empty-cart" />
                            <h3 className="Cart-content">Your Cart is Empty</h3>
                            <button className="shopping">Start Shopping</button>     
                        </div>
                    )
                }
            </div>
        </div>
    )
}