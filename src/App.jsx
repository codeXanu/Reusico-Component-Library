import React from "react" ;
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";



function App() {

  return(
    <>
      <header className="header">
        <h1>Reusico-Components-Library.</h1>
      </header>
      
      <div className="badge-div">
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
      
      <div className="banner-compo-div">
        <Banner variant="success" />
        <Banner variant="warning"/>
        <Banner variant="error" />
        <Banner variant="neutral" /> 
        <Banner variant="success" title="This is custom title" > This text could be changed.// adipisicing elit. Nihil velit praes entium ex? Dolor, quidem! </Banner> 
        <Banner variant ="warning" > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt eveniet dolores incidunt eius. </Banner> 
      </div>

    </>
  )
}

export default ( App )