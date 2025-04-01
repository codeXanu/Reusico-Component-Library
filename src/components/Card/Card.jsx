import React from "react";
import CloudUpload from "./cardAsset/Cloud-upload.png"
import "./card.css"

function Card({children, title, icon, onClick} ){

    const {src = CloudUpload, size= 24, backgroundColor= "#3F75FE" } = icon || {};



    // console.log(icon)
    return(
        <div className="card">
            
            <div className="card-Icon " style={{ backgroundColor: backgroundColor }} >  
                <img src={src} alt="Icon" style={{width:size, height: size }} />
            </div>
            <div className="card-body " onClick={onClick} >
                <h2>{title || "Easy Deployment"}</h2>
                <p>{children || "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."  }</p>
            </div>

        </div>
    )
}


export default Card ;