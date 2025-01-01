import { div, h2 } from "framer-motion/client";
import React from "react";
import LeadPicture from '../images/mobile/image-interactive.jpg'
import LeadPictureDesktop from '../images/desktop/image-interactive.jpg'
import useMediaQuery from './hooks/useMediaQuery.js';
import './Leader.css'


export default function Leader() {

    const isDesktop = useMediaQuery('(min-width:460px)');
    return(

        <>
        <section className="leader-container">

        <div className="md:absolute md:top-10 md:left-[15rem]">
        <img src={isDesktop? LeadPictureDesktop : LeadPicture} alt="Interactive Photo" />

        </div>
        <div className="flex flex-col md:absolute bg-white md:h-[30rem] md:left-[50rem] md:top-[12rem] md:p-6 justify-center items-center gap-4">


            <h2 className="text-center uppercase font-[100] text-4xl">The Leader in Interactive VR</h2>

            <span className="w-[20rem] text-center text-gray-400">  
                Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.  
            </span>
            
        </div>
        


        </section>
        
        </>
    )



}