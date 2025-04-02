import React from "react";
import DotPattern from "./asset/DotPattern.png"
import "./TestimonialWithoutImage.css" ;



function TestimonialWithoutImage( {children, heading, name }){
    return(
        <div className="main-container">
           {/* <div className="image-container">
                <img src={DotPattern} alt="dot-pattern" />
            </div>  */}
           <div className="content">
            <div className="heading"> <p>{heading ?? <> Work<span style={{color:"#2E59F3"}} >cation</span> </> }  </p></div>
            <p className="text"> {children ?? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore. voluptate. Perspiciatis tempore aperiam odit pariatur voluptate, magnam qui soluta hic, enim corrupti ea!"}</p>
            <p className="about">{name ?? "May Anderson / Workcation, CTO"}</p>
            </div> 
        </div>
    )
}


export default TestimonialWithoutImage ;