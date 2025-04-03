import React from "react" ;
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonial from "./components/Testimonial/index";
import TestimonialWithoutImage from "./components/TestimonialWithoutImage/TestimonialWithoutImage";
import Tooltip from "./components/Tooltip/Tooltip";
import Toast from "./components/ToastPopup/ToastPopup"


function App() {

  function handleClick() {
    alert("Card has been clicked")
  }

  const [showToast, setShowToast] = React.useState(false);

  function handleShowToast(){
    setShowToast(true);

    setTimeout(()=>{
      setShowToast(false)
    }, 4000 )
  }

  return(
    <>
      <header className="header">
        <h2>Reusico-Components-Library</h2>
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

      <hr />
      <h2 className="heading1">These are Testimonials with Image:--</h2>

      <div className="testimonial-div">
        <Testimonial> 
          <Testimonial.Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Testimonial.Content> 
            <Testimonial.Text> Anuj Maurya, A Software Engineer and Web Developer / This is custom testinonial.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing. </Testimonial.Text>
            <Testimonial.Name>Anuj Kumar Maurya</Testimonial.Name> 
            <Testimonial.Role>Founder & CEO / Reusico</Testimonial.Role>
          </Testimonial.Content>
        </Testimonial>

        <Testimonial> 
            <Testimonial.Image />
            <Testimonial.Content> 
              <Testimonial.Text/>
              <Testimonial.Name />
              <Testimonial.Role />
            </Testimonial.Content>
        </Testimonial>

      </div>

      <hr />
      <h2 className="heading1" >These are Testimonials without Image:--</h2>

      <div className="testimonialWithoutImage-div">
          <TestimonialWithoutImage 
            heading={<>Reusico<span style={{ color: "#2E59F3" }}>Library</span></>}
            name ="Anuj Maurya / The Founder & CEO"
          >
          Anuj Maurya .  //Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Nemo sint magnam illum quam repellendus? Maxime dolorem 
          corporis ut deleniti pariatur.  Lorem ipsum dolor sit amet consectetur adipisicing. 
          </TestimonialWithoutImage>
          
          <TestimonialWithoutImage />

      </div>

      <hr />
      <h2 className="heading1" >Hover to look the Tooltip:--</h2>

      <div className="tooltip-div" >
        <Tooltip color = "purple" > 
          <Badge color="purple" >Hover me</Badge>
        </Tooltip>
        <Tooltip color = "white" > 
          <Badge >Hover me</Badge>
        </Tooltip>

        <Tooltip color = "light-blue" > 
          <Badge color="indigo" >Hover me</Badge>
        </Tooltip>

        <Tooltip color = "green" heading="This is heading" bodytext="These are bodytext." > 
          <Badge color="green" >this is Where to be hover</Badge>
        </Tooltip>
      </div> 

      <hr />
      <h2 className="heading1" >Click the Button to see Toast:--</h2>

      <div className="toast-div">

        <button onClick={handleShowToast}>Show Toast</button>
        { showToast && <Toast message="The buttun Clicked" position="top-left" duration={5000} ></Toast>}
        { showToast && <Toast message="The buttun Clicked" variant="warning" position="top-right" duration={5000} ></Toast>}
        { showToast && <Toast message="The buttun Clicked" variant="error" position="bottom-right" duration={5000} ></Toast>}
        { showToast && <Toast message="The buttun Clicked" variant="neutral" position="bottom-left" duration={5000} ></Toast>}
        

        <Toast position="bottom-right" variant="neutral" message="The Page Loaded" duration={5000} />
      </div>

      <footer className="footer">
            <p>Made with ❤️ by Anuj Maurya | © 2025</p>
      </footer>
    </>
  )
}

export default ( App )