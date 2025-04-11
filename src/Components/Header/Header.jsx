import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCart3 } from "react-icons/bs";
import "./Header.css";
import { Link } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Searchbar } from '../Search/Searchbar';
import { useSelector } from 'react-redux';

export const Header = () => {

    let Cart = useSelector(state => state.Cart)

    return(        
        <div className="header">
            <Link to="/" className="main"><h3>Tech-Shop</h3></Link>
            <div className="icons">              
                <Searchbar />
                <Link to="/cart"><BsCart3 className="icon cart"/></Link><p className="cartCount">{Cart.length}</p>
                <Login  />
            </div>
        </div>
    )
}