import React from "react" ;
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";



function App() {

  function handleClick() {
    alert("Card has been clicked")
  }

  return(
    <>
      <header className="header">
        <h1>Reusico-Components-Library.</h1>
      </header>
      <h2 className="heading1">These are Badges:--</h2>
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
      
      <hr />
      <h2 className="heading1">These are Banners:--</h2>
      <div className="banner-div">
        <Banner variant="success" />
        <Banner variant="warning"/>
        <Banner variant="error" />
        <Banner variant="neutral" /> 
        <Banner variant="success" title="This is custom title" > This text could be changed.// adipisicing elit. Nihil velit praes entium ex? Dolor, quidem! </Banner> 
        <Banner variant ="warning" > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt eveniet dolores incidunt eius. </Banner> 
      </div>

      <hr />
      <h2 className="heading1">These are Cards:--</h2>
      
      <div className="card-div">
          <Card />
          <Card 
            title="This is custom title"
            icon={{src:"https://cdn-icons-png.freepik.com/256/7546/7546329.png?ga=GA1.1.1171956101.1729056429&semt=ais_hybrid",
              size:38,
              backgroundColor:"white",
            }}
            onClick={handleClick}
          > Cards Icon could be changed, Title is customizable and also these body text. A click event also added just click on this card.</Card> 

      </div>

    </>
  )
}

export default ( App )