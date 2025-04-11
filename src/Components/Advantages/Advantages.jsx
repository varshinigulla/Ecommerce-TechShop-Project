import servicesData from "../Data/servicesData";
import "./Advantages.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Advantages = () => {
    return(
        <div className="advantages">
            <h3 className="advantages-heading">Our Advantages</h3>
            <div className="serviceData">
                {
                    servicesData.map(data => (
                        <div className="Advantages">
                            <span className="advantages-icon">{data.icon}</span>
                            <div className="row px-4 pt-1">
                                <p className="advantages-title">{data.title}</p>
                                <p className="advantages-info">{data.info}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}