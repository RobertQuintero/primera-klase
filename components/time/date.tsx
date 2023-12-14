import React from 'react';
import{cn } from "@nextui-org/react";
import { CalendarIcon } from '@heroicons/react/24/outline';

function formattedDatePublish(dateString: string | number): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

interface DateRangeProps {
  Date: string | number ;
  className?: string;
    props?: any;
    iconClassName?: string;
}

function DateComponent( {props, Date, className,iconClassName }: DateRangeProps) {

  const formattedDate = formattedDatePublish(Date??"");


  return (

    <div className={cn("flex flex-wrap gap-2 items-center",className)} {...props}>
     <CalendarIcon className={cn("h-4 w-4 ",iconClassName)}/> {formattedDate}
    </div>
  );
}

export  {DateComponent};