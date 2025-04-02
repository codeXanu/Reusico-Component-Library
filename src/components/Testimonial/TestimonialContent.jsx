import React from "react";
import Icon from "./TestimonialAsset/Icon.png"


function TestimonialContent( {children}) {
    return(
        <div className="text-container"> 
                    <img src={Icon} alt="" />
                    {children}
                    
                </div>
    )
}


export default TestimonialContent ;