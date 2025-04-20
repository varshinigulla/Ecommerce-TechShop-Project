import { BsCartX } from "react-icons/bs";
import "./Cart.css";
import { Link } from "react-router-dom";
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
                                            <Link to={`/Singleproduct/${product.id}`}><img className="cartImage" src={product.images[0]} alt={product.title}/></Link>
                                                <div>
                                                    <h6>{product.title} {product.info}</h6>
                                                    <p>{product.category}</p>
                                                    <pre className='c-fprice'>₹{product.finalPrice}    <del className='c-oprice'>₹{product.originalPrice}</del></pre>
                                                    <div className="buttons">
                                                        <button className="btns b-l bg-dark" onClick={() => dispatch(Decrement(product.id))}>-</button>
                                                        <button className="b-color">{product.quantity}</button>
                                                        <button className="btns b-r bg-dark" onClick={() => dispatch(Increment(product.id))}>+</button>
                                                    </div>
                                                </div>
                                                <RiDeleteBinLine className="c-delete" onClick={() => dispatch(RemoveFromCart(product.id))}/>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    ))
                                }
                            </div>
                            <div classname="m-5">
                                <h3 className="pb-3">Order Summary ({cart.length} items)</h3>
                                <p className="c-content">Original Price<pre className="c-price">₹{originalPrice}</pre></p>
                                <p className="c-content">Discount<pre className="c-price text-success c-move">-₹{originalPrice-finalPrice}</pre></p>
                                <p className="c-content">Delivery<pre className="c-price text-success c-movetwo">Free</pre></p>
                                <hr></hr>
                                <p className="c-content">Total Price<pre className="c-price c-bold">₹{finalPrice}</pre></p>
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