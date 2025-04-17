import React from "react";
import Showcase from "./Showcase";

import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonial from "./components/Testimonial/index";
import TestimonialWithoutImage from "./components/TestimonialWithoutImage/TestimonialWithoutImage";
import Tooltip from "./components/Tooltip/Tooltip";
import Toast from "./components/ToastPopup/ToastPopup";
import { useScrollRefs } from "./ScrollContext";


export default function DemoPage() {
    
    const badgeList = (
        <>
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
        </>
    )
    const badgeCode = (
        `<Badge type="pill"> Badge </Badge>
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
    <Badge color = "indigo" > Badge </Badge>`
    )
    const bannerList = (
        <>
            <Banner variant="success" />
            <Banner variant="warning"/>
            <Banner variant="error" />
            <Banner variant="neutral" /> 
            <Banner variant="success" title="This is custom title" > This text could be changed.// adipisicing elit. Nihil velit praes entium ex? Dolor, quidem! </Banner> 
            <Banner variant ="warning" > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt eveniet dolores incidunt eius. </Banner> 
        </>
    )
    const bannerCode = (
        `   <Banner variant="success" />
    <Banner variant="warning"/>
    <Banner variant="error" />
    <Banner variant="neutral" /> 
    <Banner variant="success" title="This is custom title" >
        This text could be changed. adipisicing elit. Nihil velit praes entium ex? Dolor, quidem!
    </Banner> 
    <Banner variant ="warning" >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt eveniet dolores incidunt eius. 
    </Banner> `
    )
    const cardList = (
        <>
            <Card />

            <Card 
              title="This is custom title"
              icon={{src:"https://cdn-icons-png.freepik.com/256/7546/7546329.png?ga=GA1.1.1171956101.1729056429&semt=ais_hybrid",
                size:38,
                backgroundColor:"#F5F5F5",
              }}
            > 
              Cards Icon could be changed, Title is customizable and also these body text.A click event also can be added.  
            </Card> 
        </>
    )
    const cardCode = (
        `            <Card />

            <Card 
              title="This is custom title"
              icon={{src:"https://cdn-icons-png.freepik.com/256/7546/7546329.png?ga=GA1.1.1171956101.1729056429&semt=ais_hybrid",
                size:38,
                backgroundColor:"#F5F5F5",
              }}
            > 
              Cards Icon could be changed, Title is customizable and also these body text. A click event also can be added.  
            </Card> `
    )
    const testimonialList = (
        <>
            <Testimonial> 
                <Testimonial.Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Testimonial.Content> 
                    <Testimonial.Text>
                        Anuj Maurya, A Software Engineer and Web Developer. This is custom testinonial. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </Testimonial.Text>
                    <Testimonial.Name>
                        Anuj Kumar Maurya
                    </Testimonial.Name> 
                    <Testimonial.Role>
                        Founder & CEO / Reusico
                    </Testimonial.Role>
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

        </>
    )
    const testimonialCode = (
        `<Testimonial> 
                <Testimonial.Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Testimonial.Content> 
                    <Testimonial.Text>
                            Anuj Maurya, A Software Engineer and Web Developer. 
                            This is custom testinonial. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quaerat. 
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </Testimonial.Text>
                    <Testimonial.Name>
                        Anuj Kumar Maurya
                    </Testimonial.Name> 
                    <Testimonial.Role>
                        Founder & CEO / Reusico
                    </Testimonial.Role>
                </Testimonial.Content>
</Testimonial>

    <Testimonial> 
        <Testimonial.Image />
        <Testimonial.Content> 
        <Testimonial.Text/>
        <Testimonial.Name />
        <Testimonial.Role />
        </Testimonial.Content>
    </Testimonial>`
    )
    const testimonialWithoutImageList = (
        <>
             <TestimonialWithoutImage 
              heading={<>Reusico<span style={{ color: "#2E59F3" }}>Library</span></>}
              name ="Anuj Maurya / The Founder & CEO"
              >
            Anuj Maurya .  //Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nemo sint magnam illum quam repellendus? Maxime dolorem 
            corporis ut deleniti pariatur.  Lorem ipsum dolor sit amet consectetur adipisicing. 
            </TestimonialWithoutImage>
            
            <TestimonialWithoutImage />
        </>
    )
    const testimonialWithoutImageCode = (
        `   <TestimonialWithoutImage 
              heading={<>Reusico<span style={{ color: "#2E59F3" }}>Library</span></>}
              name ="Anuj Maurya / The Founder & CEO"
              >
                    Anuj Maurya . Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nemo sint magnam illum quam repellendus? Maxime dolorem 
                    corporis ut deleniti pariatur.  Lorem ipsum dolor sit amet consectetur adipisicing. 
    </TestimonialWithoutImage>
            
    <TestimonialWithoutImage />`
    )
    const tooltipList = (
        <>
            <Tooltip color = "purple" > 
                <Badge color="purple" >Hover me</Badge>
            </Tooltip>
            <Tooltip color = "light-purple" > 
                <Badge color="purple" >Light Purple</Badge>
            </Tooltip>
            <Tooltip color = "white" > 
                <Badge >White Tooltip</Badge>
            </Tooltip>
            <Tooltip color = "black" > 
                <Badge >Hover me</Badge>
            </Tooltip>
            <Tooltip color = "blue" > 
                <Badge color="indigo" >Hover me</Badge>
            </Tooltip>

            <Tooltip color = "light-blue" > 
                <Badge color="indigo" >Light Blue Tooltip</Badge>
            </Tooltip>

            <Tooltip color = "green" heading="This is heading" bodytext="These are bodytext." > 
                <Badge color="green" >this is Where to be hover</Badge>
            </Tooltip>
            <Tooltip color = "light-green" heading="This is custom heading" bodytext="These are bodytext." > 
                <Badge color="green" >this is Where to be hover</Badge>
            </Tooltip>

        </>
    )
    const tooltipCode =(
        `            <Tooltip color = "purple" > 
                <Badge color="purple" >Hover me</Badge>
            </Tooltip>
            <Tooltip color = "light-purple" > 
                <Badge color="purple" >Light Purple</Badge>
            </Tooltip>
            <Tooltip color = "white" > 
                <Badge >White Tooltip</Badge>
            </Tooltip>
            <Tooltip color = "black" > 
                <Badge >Hover me</Badge>
            </Tooltip>
            <Tooltip color = "blue" > 
                <Badge color="indigo" >Hover me</Badge>
            </Tooltip>

            <Tooltip color = "light-blue" > 
                <Badge color="indigo" >Light Blue Tooltip</Badge>
            </Tooltip>

            <Tooltip color = "green" heading="This is heading" bodytext="These are bodytext." > 
                <Badge color="green" >this is Where to be hover</Badge>
            </Tooltip>
            <Tooltip color = "light-green" heading="This is custom heading" bodytext="These are bodytext." > 
                <Badge color="green" >this is Where to be hover</Badge>
            </Tooltip>`
    )

    const [showToast, setShowToast] = React.useState(false);

    function handleShowToast(){
        setShowToast(true);

        setTimeout(()=>{
        setShowToast(false)
        }, 5000 )
    }

    const toastList = (
        <>
            <button onClick={handleShowToast}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition-all duration-200"
            >
                Show Toast
            </button>
          { showToast && <Toast message="The buttun Clicked" variant="success" position="top-left" duration={5000} ></Toast>}
          { showToast && <Toast message="The buttun Clicked" variant="warning" position="top-right"  ></Toast>}
          { showToast && <Toast message="The buttun Clicked" variant="error" position="bottom-right"  ></Toast>}
          { showToast && <Toast message="The buttun Clicked" variant="neutral" position="bottom-left"  ></Toast>}

          <Toast position="bottom-right" variant="success" message="Showing Preview" duration={5000} />


        </>
    )


    const {badge, banner, testimonial, testimonialWithoutImage, tooltip, toast, card} = useScrollRefs()

    return(
       <>
         <div style={{ width: "100%", margin: "0" }}>

            <div ref={badge}>
                <Showcase
                    title="Badge"
                    preview={
                    <>
                        {badgeList}
                    </>     
                    }
                    code={badgeCode}
                />
            </div>

            <div ref={banner}>
            <Showcase
                title="Banner"
                preview={bannerList}
                code={bannerCode}
            />
            </div>

            <div ref={testimonial}>
                <Showcase
                    title="Testimonial"
                    preview={testimonialList}
                    code={testimonialCode}
                    />
            </div>

            <div ref={testimonialWithoutImage}>
                <Showcase
                    title="Testimonial Without Image"
                    preview={testimonialWithoutImageList}
                    code={testimonialWithoutImageCode}
                />
            </div>
            
            <div ref={tooltip}>
            <Showcase
                title="Tooltip"
                preview={tooltipList }
                code={tooltipCode}
            />
            </div>

            <div ref={toast}>
                <Showcase
                    title="ToastPopup"
                    para = "Click on the button to see the Toast"
                    preview={toastList }
                    code={tooltipCode}
                />
            </div>

            <div ref={card}>
                <Showcase
                    title="Card"
                    preview={cardList}
                    code={cardCode}
                />
            </div>
    </div>
       </>
    )
}