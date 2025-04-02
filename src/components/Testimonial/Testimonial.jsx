import React from "react";
import "./testimonial.css"

function Testimonial( {children}){

    return(
        <div>
            <div className="testimonial-container" >
                {children}
            </div>
        </div>
    )
}


export default Testimonial ;