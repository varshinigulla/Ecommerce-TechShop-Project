import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
import { footMenu } from '../Data/footerData';
import { footSocial } from '../Data/footerData';

export const Footer =() =>{
    return(
        <div className="footer">
            <div className="footerMenu">
                <div className='col-3'>
                    <h4>Tech-Shop</h4>
                    <p className="p">Subscribe to our Email alerts to receive early discount offers and new products info.</p>
                    <input type="email" className="mail" placeholder="Email Address*" /><br />
                    <button type="button" className="subscribe">Subscribe</button>
                </div>
                {
                    footMenu.map(item => (
                        <div className="footer-links">
                            <h5 key={item.id} className='pb-3'>{item.title}</h5>
                            <ul>
                                {
                                    item.menu.map(data => (
                                        <li key={data.id} className="link">{data.link}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <hr className='text-light'></hr>
            <div className="copyright">
                <pre>2025|All rights reserved ©.</pre>
                <div>
                    {
                        footSocial.map(item => (
                            <span key={item.id} className='px-3'>
                                {item.icon}
                            </span>             
                        ))
                    }
                </div>
            </div>
        </div>
    )
}