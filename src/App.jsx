import React from "react" ;
// import githubImage from "./assets/github.png"
// import Badge from "./components/Badge/Badge";
// import Banner from "./components/Banner/Banner";
// import Card from "./components/Card/Card";
// import Testimonial from "./components/Testimonial/index";
// import TestimonialWithoutImage from "./components/TestimonialWithoutImage/TestimonialWithoutImage";
// import Tooltip from "./components/Tooltip/Tooltip";
// import Toast from "./components/ToastPopup/ToastPopup"

// import DemoPage from "./Demopage";
import Header from "./Header";
import MainPage from "./MainPage";
import ScrollProvider from "./ScrollContext"
import Footer from "./Footer";

function App() {


  return(
    <>
      <Header />
      <ScrollProvider>
        <MainPage />

      </ScrollProvider>
     
     <Footer />
     
    </>
  )
}

export default ( App )