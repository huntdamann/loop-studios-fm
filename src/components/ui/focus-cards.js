"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg shadow-2xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-32 md:h-96 w-full transition-all duration-300 ease-out sm:h-30",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img src={card.src} width={400} height={380} className="object-cover absolute fill-inherit inset-0"/>
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      <div
        className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    (
    <>
    <div className="md:flex items-center md:flex-col relative z-[49]">


    
    <span className="flex items-center -tracking-tighter uppercase  flex-col mt-10 mb-5 text-2xl" >Our Creations</span>
    
    <div
      className="grid grid-cols-1 md:grid-cols-3 z-[49] gap-10 max-w-5xl p-5 md:mt-[5rem] md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>
    </div>
    </>)
  );
}
