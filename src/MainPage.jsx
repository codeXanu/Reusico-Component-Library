import React from "react";
import DemoPage from "./Demopage";
import { useScrollRefs } from "./ScrollContext";
import Footer from "./Footer";

export default function MainPage() {

    const {badge, banner, testimonial, testimonialWithoutImage, tooltip, toast, card} = useScrollRefs();

    
    return(
        <>
    <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 shadow-md p-6 fixed top-0 left-0 h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 mt-10">Reusico</h2>
            <ul className="space-y-4 text-gray-700">
            <li> <button  className="hover:font-semibold cursor-pointer" onClick={()=>badge.current?.scrollIntoView({ behavior: "smooth", inline: 'center'})} > Badge</button> </li>
            <li><button className="hover:font-semibold cursor-pointer" onClick={()=>banner.current?.scrollIntoView({ behavior: "smooth", inline: 'center'})} > Banner</button></li>
            <li><button className="hover:font-semibold cursor-pointer" onClick={()=>testimonial.current?.scrollIntoView({ behavior: "smooth", inline: 'center'})}> Testimonial</button></li>
            <li><button className="hover:font-semibold cursor-pointer" onClick={()=>testimonialWithoutImage.current?.scrollIntoView({ behavior: "smooth", inline: 'center'})}> TestimonialWithoutImage</button></li>
            <li><button className="hover:font-semibold cursor-pointer" onClick={()=>tooltip.current?.scrollIntoView({ behavior: "smooth", inline: 'center'})}> Tooltip</button></li>
            <li><button className="hover:font-semibold cursor-pointer" onClick={()=>toast.current?.scrollIntoView({ behavior: "smooth", inline: 'center'})}> ToastPopup</button></li>
            <li><button className="hover:font-semibold cursor-pointer" onClick={()=>card.current?.scrollIntoView({ behavior: "smooth", inline: 'center'})}> Card</button></li>
            <li> <a href="https://github.com/codeXanu/Reusico-Component-Library/blob/main/README.md" target="blank" className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-md transition-colors duration-200" >Start Using Guide</a> </li>
            <li><a href="https://www.npmjs.com/package/reusico-component-library" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 font-semibold rounded-md transition-colors duration-200" > View on npm </a></li>
        </ul>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-6 h-full overflow-y-auto pt-30">
            <h1 className="text-gray-800 text-5xl font-bold mb-4">Welcome to the Reusico Component Library</h1>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed mb-12" >A lightweight and customizable React component library to help you build consistent and reusable UI components with ease. Built with scalability, usability, and clean design in mind.</p>
            {/* Put your toggle button, previews, and other components here */}
            <DemoPage />
        </main>
       
    </div>
    </>
    )
}

