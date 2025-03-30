import React from "react"
import "./badge.css"
import classNames from "classnames"

 function Badge({children, color, type} ){
    // console.log(color)
    // console.log(type)

    let badgeColor = {color} && color
    let badgeType =  {type} && type

    const allClasses = classNames('badge', badgeColor, badgeType) 
    // console.log(allClasses)
    return(
        <>
            <div className={allClasses}> {children}</div>
        </>

    )
}


export default Badge ;