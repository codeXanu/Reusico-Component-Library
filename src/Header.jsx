import React from "react";
import githubIcon from "./assets/githubIcon.png"

export default function Header() {
    return(
        <header className="header">
                <nav>
        
                <h2>Reusico-Components-Library</h2>
                <a href="https://github.com/codeXanu/Reusico-Component-Library" target="blank" >
                  <img src={githubIcon} alt="Github" />
        
                </a>
                </nav>
              </header>
    )
}