import React from "react" ;
import Badge from "./components/Badge/Badge";


function App() {

  return(
    <>
    <header className="header">
      <h1>Reusico-Components-Library.</h1>
    </header>
      
      
        <div className="badge-compo-div">
          <Badge type="pill"> Badge </Badge>
          <Badge color = "green" type="pill"> Badge </Badge>
          <Badge color = "purple" type="pill"> Badge </Badge>
          <Badge color = "pink" type="pill"> Badge </Badge>
          <Badge color = "blue" type="pill"> Badge </Badge>
          <Badge color = "red" type="pill"> Badge </Badge>
          <Badge color = "yellow" type="pill"> Badge </Badge>
          <Badge color = "indigo" type="pill"> Badge </Badge>
          <Badge > Badge </Badge>
          <Badge color = "green" > Badge </Badge>
          <Badge color = "purple" > Badge </Badge>
          <Badge color = "pink" > Badge </Badge>
          <Badge color = "blue" > Badge </Badge>
          <Badge color = "red" > Badge </Badge>
          <Badge color = "yellow" > Badge </Badge>
          <Badge color = "indigo" > Badge </Badge>
        </div > 
      
      

    </>
  )
}

export default ( App )