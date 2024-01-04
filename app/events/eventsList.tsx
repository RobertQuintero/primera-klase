"use client";
import React from "react";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { EventType } from "@/types/eventType";
import { EventCard } from "@/components/Cards/eventCard";

type eventsListProps = {
  event: EventType[];
};

const EventsList = ({ event }: eventsListProps) => {
  return (
    <div className="ml-auto mr-auto max-w-7xl gap-4 sm:gap-6 md:gap-8 2xl:gap-10 grid grid-cols-1 sm:grid-cols-2">
      {event.map((event,index ) => (
        <AnimatedDivLeftRightUpDown key={event.eventTitle} direction="up" delay={index} className="w-full h-full">
        <EventCard event={event}/>
        </AnimatedDivLeftRightUpDown>
      ))}
    </div>
  );
};

export { EventsList };
