import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data'
import Nav from './Nav'
import '../style.css';
import { Footer } from './Footer';
export  const EventPage = () => {
    let  data = Data();
    const params  = useParams()
    
   const feed = data.map((event) => {
        if(event.id == params.id){
            return(
                <div className="event-page">
                    <figure className="event-page-img-wrapper">
                        <img src={event.img} alt="" className="event-page-img" />
                    </figure>
                    <p className='event-page-text'>
                        {event.info}
                    </p>
                </div>
            ) 
            
            } else {
                return(
                    <> </>
              )
                
            }
        }
    )
    return(
        <>
        <Nav />
        {feed}
        <Footer />
        </>
    )
}
 