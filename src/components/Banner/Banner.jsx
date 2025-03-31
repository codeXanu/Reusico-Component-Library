import React from "react"
import "./banner.css"

import Checkcircle from "./BannerAsset/Check-circle.png"
import Exclamation from "./BannerAsset/Exclamation.png"
import errorIcon from "./BannerAsset/errorIcon.png"
import Neutralicon from "./BannerAsset/Neutralicon.png"
import classNames from "classnames";

function Banner( {children, variant, title}) {
    // console.log(title)
    // console.log(children)


    const bodyText = children ? children : "It is working" ;
    // console.log(bodyText)

    const bannerVariant = variant &&
        variant==="success" ? {defaultTitle: "Congratulations!", icon: Checkcircle, class: "success"} :
        variant==="warning" ? {defaultTitle: "Attention Needed", icon: Exclamation, class: "warning"} :
        variant==="error" ? {defaultTitle: "There is a problem with your  application", icon: errorIcon, class: "error"} :
        variant==="neutral" ? {defaultTitle: "Update available", icon: Neutralicon, class: "neutral"} :
    "" ;    
    
    
    const bannerTitle = title ? title : variant ? bannerVariant.defaultTitle : "";
    
    // let variantClass = variant && variant
    const allClasses = classNames("banner", bannerVariant.class)

    return(
        <div className={allClasses}>
           <h3>   
                <img src={variant ? bannerVariant.icon : Checkcircle} alt="banner-icon" />
                {bannerTitle ? bannerTitle : "Congratulations!"}
           </h3> 
           { children && <p>{children}</p> } 
        </div>
    )
}



export default Banner ;