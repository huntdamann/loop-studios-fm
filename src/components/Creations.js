"use client";
import * as React from 'react';
import './Creations.css'
import Deep from '../images/desktop/image-deep-earth.jpg'
import DeepMobile from '../images/mobile/image-deep-earth.jpg'
import NightArcade from '../images/desktop/image-night-arcade.jpg'
import Soccer from '../images/desktop/image-soccer-team.jpg'
import TheGrid from '../images/desktop/image-grid.jpg'
import FromUp from '../images/desktop/image-from-above.jpg'
import Pocket from '../images/desktop/image-pocket-borealis.jpg'
import Curiosity from '../images/desktop/image-curiosity.jpg'
import Makeit from '../images/desktop/image-fisheye.jpg'
import NightArcadeMobile from '../images/mobile/image-night-arcade.jpg'
import SoccerMobile from '../images/mobile/image-soccer-team.jpg'
import TheGridMobile from '../images/mobile/image-grid.jpg'
import FromUpMobile from '../images/mobile/image-from-above.jpg'
import PocketMobile from '../images/mobile/image-pocket-borealis.jpg'
import CuriosityMobile from '../images/mobile/image-curiosity.jpg'
import MakeitMobile from '../images/mobile/image-fisheye.jpg'
import useMediaQuery from './hooks/useMediaQuery.js';

import { FocusCards } from "./ui/focus-cards.js";

export default function FocusCardsDemo() {

  const isDesktop = useMediaQuery('(min-width:460px)');
  const cards = [
    { 
      src: (isDesktop) ? Deep : DeepMobile,
      title: "Deep Earth",
    
    },
    {
      title: "Night Arcade",
      src: (isDesktop) ? NightArcade : NightArcadeMobile,
    },
    {
      title: "Soccer Team VR",
      src: (isDesktop) ? Soccer : SoccerMobile,
    },
    {
      title: "The Grid",
      src: (isDesktop) ? TheGrid : TheGridMobile,
    },
    {
      title: "From Up Above VR",
      src: (isDesktop) ? FromUp : FromUpMobile, 
    },
    {
      title: "Pocket Borealis",
      src: (isDesktop) ? Pocket : PocketMobile,
    },
    {
        title: "The Curiosity",
        src: (isDesktop) ? Curiosity : CuriosityMobile,
    },
    {
        title: "Make it Fisheye",
        src: (isDesktop) ? Makeit : MakeitMobile,
    },
  ];

  return <FocusCards cards={cards} />;
}
