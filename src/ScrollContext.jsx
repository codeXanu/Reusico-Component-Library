import React, { Children, useContext } from "react";

const ScrollContext  = React.createContext()

export default function ScrollProvider({children}) {
    const refs = {
        badge: React.useRef(null),
        banner: React.useRef(null),
        testimonial: React.useRef(null),
        testimonialWithoutImage: React.useRef(null),
        tooltip: React.useRef(null),
        toast: React.useRef(null),
        card: React.useRef(null)
    }

    return(
        <ScrollContext.Provider value={refs}>
            {children}
        </ScrollContext.Provider>
    )
}

export function useScrollRefs() {
    return useContext(ScrollContext)
}
