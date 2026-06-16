"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeaderSectionComponent } from "../HeaderSectionComponent";
import StaggerSection from "../motion/StaggerSection";
import FadeUp from "../motion/FadeUp";
const FqaComponent = ({fqas}) => {
  return (
    <div className="w-full">
      <HeaderSectionComponent 
            title={"Frequently Asked Questions"}
            image='/images/IMG_2743.JPG'
            position={'top'}
            
            />
      <div className="flex justify-center items-center my-10 lg:container w-full">
        <div className="container text-start">
          <h1 className="font-bold text-[2.986rem] leading-tight">FQA</h1>

           <Accordion type="multiple" collapsible>
            {fqas && fqas.map((fqa, index) => (
             <FadeUp key={index}>
                 <AccordionItem value={`item-${fqa._id}`}>
                <AccordionTrigger>{fqa.question}</AccordionTrigger>
                <AccordionContent>{fqa.answer}</AccordionContent>
              </AccordionItem>
             </FadeUp>
            ))}
       

           
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FqaComponent;
