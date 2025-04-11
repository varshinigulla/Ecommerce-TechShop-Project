import  "./Searchbar.css";
import productsData from "../Data/productsData";
import {useState} from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearchSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";

export const Searchbar =() => {

    const [input,setInput] = useState("");
    const [showSearch,setSearchBar]= useState(false);
    const Searchbar = () => {
        setSearchBar(!showSearch);
    }

    const filterdata = productsData.filter(product => {return input && product && product.title && product.title.toLowerCase().includes(input.toLowerCase())} );

    return(
        <div className="search">
            <IoSearchSharp className="s-icon" onClick={() => Searchbar()}/>
            <span className="tooltip">Cart</span>
            {showSearch && (
                <div className="searchbar">
                    <div onClick={() => Searchbar()} className="searchbar"></div>
                    <div>
                        <div className="Searchbar">
                            <div className="input-wrap">
                                <input value={input} onChange={(e) => setInput(e.target.value)} className="search-input" type="text" placeholder="Search for Products..."/>
                                <ImCross className={input===""?"empty":"s-close"} onClick={() => setInput("")}/>
                            </div>
                            <div className={input===""?"empty":"search-container"}>
                                {
                                    (filterdata.length>0)?(
                                    filterdata.map(product => (
                                        <div key={product.id} className="search-content" onClick={() => Searchbar()}>
                                            <Link className="search-data" to={`/Singleproduct/${product.id}`}><span className="py-3">{product.title}</span></Link>
                                        </div>
                                    ))
                                ):(
                                    <></>
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}