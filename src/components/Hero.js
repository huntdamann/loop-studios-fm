"use client";
import * as React from 'react';
import './Hero.css'
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import background from '../images/mobile/image-hero.jpg'
import backgroundDesktop from '../images/desktop/image-hero.jpg'
import { cn } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery.js';
export default function Hero() {

    const isDesktop = useMediaQuery('(min-width:460px)');
    return(
        <div className="hero-container">
                {/*<img className="picture" src={background} alt="Hero" /> */}

                <BackgroundGradientAnimation>
                    <div className="absolute z-40 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                    <img className="picture" src= {isDesktop ? backgroundDesktop : background} alt="Hero" />
                    </div>
                    <ul className='border-4 tracking-widest  uppercase absolute md:w-[30rem] w-[20rem] top-[15rem] md:left-[10rem] left-[0.5rem] m-5 md:p-10 p-4 text-2xl z-[45] text-white border-white '>
                        <li>Immersive</li>
                        <li>Experiences</li>
                        <li>That</li>
                        <li>Deliver</li>
                    </ul>
                </BackgroundGradientAnimation>
            <span></span>
        </div>
    )

}