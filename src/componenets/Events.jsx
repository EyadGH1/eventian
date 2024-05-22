import React from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from  '@fortawesome/free-solid-svg-icons';
import Event from './Event';
import Data from './Data';
export default function Events() {
    let data  = Data();
  return (
    <>
   
            <section id = "events">
            <div className="container">
                <div className="search">
                    <label className="search-h"> find your next <span className='green'>memory</span> </label>
           {/* <div className="search-container">
               <input type="text" className="search-input" placeholder="Search..."></input>
              <button className='search-icon'> <FontAwesomeIcon icon={faStar} /></button>
                  </div>
  */}
                  </div>
                  </div>
            </section>
         
            <section id="events-section">
            <div className="container">
                <h1 className="events-text">
                    Events:
                </h1>
                <div className="events">
                    {data.map((event) => {
                        return(
                            <Event 
                            name = {event.name}
                            img = {event.img}
                            insta={event.insta}
                            id = {event.id}
                            info={event.info}
                            date = {event.date}
                            />
                        )
                    })}
                </div>
                </div>
            </section>
     
    </>
  )
}
