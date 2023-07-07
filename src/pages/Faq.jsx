import React, { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Faq from "react-faq-component";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const data = {
    title: "Frequently asked Questions",
    rows: [
        {
            title: "Why should I choose Jamshion over its competitors?",
            content: `Jamshion has prioritised its consumers since its inception, and our customers are at the heart of our brand. We strive to build meaningful relationships by delivering exceptional customer service and actively listening to their needs and feedback. We cherish your trust and strive to exceed your expectations every day. In a matter of months, we've completed over 2200 orders and received 98% positive reviews.
            Help is just a conversation away; our professionals are available 24/7 around the clock, so you can purchase without any difficulty.
            We provide quick responses to requests for customization and strive to fulfil all of our customers' needs.
            We utilise high-quality fabric that is simple to launder, iron, and maintain.
            We're proud to offer a range of sizes and styles to accommodate a wide range of customers, and we've made that a priority when curating our latest collection.
            Our goal is to make a place where people of all cultures and faiths may feel welcome and comfortable expressing their individuality via their clothing choices.
            Our teams work closely together to ensure that your orders are delivered as soon as possible.
            `,
        },
        {
            title: "How are you able to offer cheaper costs than rivals?",
            content:
                `We cut costs by relying primarily on word of mouth for advertising and by strategically procuring all of our fabrics and other components. We've embraced technology for its ability to improve inventory management and streamline procedures. In addition, we don't have physical retail locations, so it helps us save a lot of money, too. We find the sweet spot between all of these factors and pass the savings on to our customers in the form of lower prices without compromising on quality, customer experience, and sustainability.
                `,
        },
        {
            title: "What are the shipping charges?",
            content: `For all orders over ₹299, we offer fast and free shipping across India. We accept orders from places other than India, though delivery costs will vary. We recommend that, for international orders, you browse our website catalogue, make your product selection, and send us a screenshot of the product selection via WhatsApp. We will inform you of the total cost once we have collected your shipping information. As soon as we get your payment, we will start working on fulfilling your purchase as quickly as possible. `,
        }
    ],
};

const styles = {
    bgColor: '#fffaf6',
    titleTextColor: "grey",
    rowTitleColor: "#6b9c73",
    rowContentColor: 'grey',
    arrowColor: "#6b9c73",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAQ (){

    return (
        <div style={{margin :"0 6% 2% 6%"}}>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            <div style={{textAlign: "right" ,margin: "2% 3% 0 0"}}>
            <Link to="/faq" style={{textDecoration :"none", color :"#1f514"}}>For more info &nbsp;
            <i class="fa-solid fa-arrow-right fa-fade fa-lg" styles={{color: "#1f5147"}}></i></Link>
            
            
            </div>
        </div>
    );
}