import React from "react"

import "./toastPopup.css"

import Checkcircle from "./Toastasset/successIcon.png"
import Exclamation from "./Toastasset/warningIcon.png"
import errorIcon from "./Toastasset/error.png"
import Neutralicon from "./Toastasset/neutral.png"

import classNames from "classnames";

function Toast( {children, variant, message, position= "top-right", duration = 3000}) {
    
    const[isVisible , setIsVisible]  = React.useState(true)

    React.useEffect( ()=>{
        const timer= setTimeout(()=>setIsVisible(false),duration) ;
        return ()=> clearTimeout(timer)
    },[ duration])

    if(!isVisible) return null ;  /*when isVisible is false code return here and not show the Toast */

    
    const toastVariant = variant &&
        variant==="success" ? {defaultMessage: "Success", icon: Checkcircle, class: "toast-success"} :
        variant==="warning" ? {defaultMessage: "Warning", icon: Exclamation, class: "toast-warning"} :
        variant==="error" ? {defaultMessage: "Error", icon: errorIcon, class: "toast-error"} :
        variant==="neutral" ? {defaultMessage: "Information", icon: Neutralicon, class: "toast-neutral"} :
    "" ;    
    const toastTitle = message ? message : variant ? toastVariant.defaultMessage : "";
    
    // let variantClass = variant && variant
    const allClasses = classNames("toast", toastVariant.class, position)

    return(
        
        <div className={allClasses}>
           <h3>   
                <img src={variant ? toastVariant.icon : Checkcircle} alt="toast-icon" />
                {toastTitle ? toastTitle : "Success"}
           </h3> 
           { children && <p>{children}</p> } 
        </div>
    )
}



export default Toast ;