import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function FAQ() {
  return (
    <MDBContainer className="mt-5" style={{maxWidth: '90%'}}>
        <h1 style ={{margin : "2% 0 4%"}}> Let's clear your queries </h1>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="What is an eBike?">
        An eBike, short for electric bike, is a bicycle equipped with an electric motor that provides assistance to the rider. It allows for easier pedaling and can provide varying levels of assistance, depending on the model.
          
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="How does an eBike work?">
          <strong>eBikes typically have a rechargeable battery that powers an electric motor. </strong> 
          When the rider pedals, the motor engages and provides additional power, making it easier to pedal. The motor is usually controlled by a handlebar-mounted display or controller, allowing the rider to adjust the level of assistance.
          
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle=" What are the different types of eBikes?">
        There are various types of eBikes designed for different purposes. Some common types include city/commuter eBikes, mountain eBikes, folding eBikes, cargo eBikes, and fat tire eBikes. Each type is designed with specific features and components to cater to different riding needs.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle=" How fast can an eBike go?">
        The top speed of an eBike varies depending on the model and local regulations. In most countries, the maximum speed limit for eBikes is typically around 20-28 mph (32-45 km/h). However, some models may have a lower top speed or be limited to a certain speed based on local regulations.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle=" How far can I ride on a single charge?">
        The range of an eBike depends on several factors, including the battery capacity, level of pedal assistance used, terrain, rider weight, and riding conditions. On average, eBikes can travel between 20-50 miles (32-80 km) on a single charge. Some high-end models with larger batteries can achieve ranges of 60-100 miles (96-160 km) or more.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle=" How long does it take to charge an eBike battery?">
        Charging times for eBike batteries can vary depending on the battery capacity and the charger used. Typically, it takes around 3-6 hours to fully charge an eBike battery. Some faster chargers can reduce charging times to 2-4 hours, while slower chargers may take longer, up to 8 hours or more.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
}