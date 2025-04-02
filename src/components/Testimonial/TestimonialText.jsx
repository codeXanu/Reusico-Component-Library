import React from "react";

function TestimonialText({children}) {
    return(
        <p className="content-text">{children ||  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. Lorem. lorem40"}
        </p>
    )
}

export default TestimonialText ;