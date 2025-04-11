import { BsCartX } from "react-icons/bs";
import "./Cart.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, RemoveFromCart } from "./CartOperation";


export const Cart = () => {

    let cart = useSelector(state => state.Cart)

    let dispatch = useDispatch()

    let originalPrice = cart.reduce((sum,value) => sum+value.originalPrice , 0)
    let finalPrice = cart.reduce((sum,value) => sum+value.finalPrice , 0)

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
                                <h5>Order Summary ({cart.length} items)</h5>
                                <p>Original Price<pre className="f-data">₹{originalPrice}</pre></p>
                                <p>Discount<pre className="f-data">-₹{finalPrice}</pre></p>
                                <p>Delivery<pre className="f-data">Free</pre></p>
                                <hr></hr>
                                <p>Total Price<pre className="f-data">₹{originalPrice-finalPrice}</pre></p>
                                <button>Checkout</button>
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