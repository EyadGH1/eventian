//import pic from "../assets/cars.jpeg";
import { Link } from "react-router-dom"
export default  function Event ( {img , name , insta, date, id ,info}) {
    console.log(Math.ceil(5.5))                                                                
        return(
            <Link to={`EventPage/${id}`}  className="event-link">
    <div className="event">
        <figure className="evemt-img-wrap"><img src = {img} alt="" /></figure>

        <h3 className="event-text">{name} event </h3>
        <hr />
        <p className="info"> {date}</p>

    </div>
    </Link>
        )
    }
        
       


