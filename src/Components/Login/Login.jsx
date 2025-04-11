import "./Login.css"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineUser } from "react-icons/ai";
import { ImCross } from "react-icons/im";

export const Login = () =>{

    const [showLogin,setShowLogin] = useState(false);
    const Logincard = () => {
        setShowLogin(!showLogin);
    }
    const [loginDetails,setloginDetails] = useState(false);
    const Loginpopup = () => {
        setloginDetails(!loginDetails);
        setShowLogin(!showLogin);
    }

    const [action,setAction] = useState("Login")

    return(
        <div className="Login-details">
            <div>
                <AiOutlineUser className="icon"  onClick={() => Logincard()}/>
                    {
                        showLogin && (
                            <div className="LoginCard">
                                <div onClick={() => Logincard()} className="LoginCard"></div>
                                <div className="login">
                                    <div className="login-box">
                                        <p className="login-p">Hello!</p>
                                        <p className="login-span">Access accounts and manage orders</p>
                                        <button className="Login-button" onClick={() => Loginpopup()}>Login/Signup</button>
                                        <hr></hr>
                                        <p className="login-span">Please Login</p>
                                    </div>
                                </div>
                        </div>
                        )
                    }
            </div>
            {
                loginDetails && (
                    <div className="LoginCard">
                        <div onClick={() => {Loginpopup();setShowLogin(showLogin)}} className="LoginCard"></div>
                        <div className="login-details">
                            <h3 className="l-login">{action}</h3>
                            <ImCross className="l-close" onClick={() => {Loginpopup();setShowLogin(showLogin)}}/>
                            {
                                action==="Login"?
                                (<p className="l-account">New to Tech-Shop ? <span className="login-signup" onClick={() => setAction("Sign Up")}>Create an account</span></p>):(<></>)
                            }
                            {
                                action==="Sign Up"?
                                (<p className="l-account">Already have an account? <span className="login-signup" onClick={() => setAction("Login")}>Login</span></p>):(<></>)
                            }
                            {
                                action==="Login"?(<div>
                                    <input type="email" className="input" placeholder="Email" /><br />
                                    <input type="password" className="input" placeholder="Password" /><br />
                                </div>):(<></>)
                            }
                            {
                                action==="Sign Up"?(<div className="signup">
                                    <input type="text" className="input" placeholder="Username" /><br />
                                    <input type="email" className="input" placeholder="Email" /><br />
                                    <input type="password" className="input" placeholder="Password" /><br />
                                    <input type="password" className="input" placeholder="Confirm Password" /><br />
                                </div>):(<></>)
                            }
                            <button type="button" className="Login">{action}</button>
                            <div className="l-line">
                                <hr></hr>
                                <p className="line-p">or {action} with</p>
                                <hr></hr>
                            </div>
                            <div className="lbuttons">
                                <button type="button" className="l-button bg-primary">FaceBook</button>
                                <button type="button" className="l-button bg-danger">Google</button>
                                <button type="button" className="l-button bg-info">Twitter</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}