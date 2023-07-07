import React from "react"
import { Footer, Navbar} from "../components";
import Faq from "react-faq-component";
const MoreFAQ = (props) => {


    const data1 = {
        title: "Payments and Orders",
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
                title: "Do the colours really look like that on the site?",
                content: `We take immense pride in providing a dazzling palette and fantastic personalization choices. Every product is shot using professional-grade cameras in natural light to guarantee precision. To further guarantee accurate hues, we edit every photo on 100% sRGB displays. There may be some colour deviation from the actual colours owing to display variances and device settings. `,
            },
            {
                title: "What payment options are available?",
                content: `To make a purchase, you can use any of the following methods: Credit Card, Debit Card, Net Banking, or UPI. We don't offer Pay on Delivery as a payment option in order to streamline the packaging, shipping, and delivery of your order.`,
            },{
                title: "Are the transactions safe?",
                content: `Yes! We treat your information and transactions with the utmost care and adhere to the strictest security protocols available. The risk of identity theft is eliminated by the fact that all of our transactions are completed through the industry-leading payment gateway, Razorpay.`,
            },{
                title :"Do you charge tax on any item?",
                content : `GST is charged on all products sold in India. All listed prices on the site already include GST. For international orders, taxes are charged separately.`
            }   
        ],
    };
    const data2 = {
        title: "Shipping and Returns",
        rows: [
            {
                title: "What are the shipping charges?",
                content: `For all orders over ₹299, we offer fast and free shipping across India. We accept orders from places other than India, though delivery costs will vary. We recommend that, for international orders, you browse our website catalogue, make your product selection, and send us a screenshot of the product selection via WhatsApp. We will inform you of the total cost once we have collected your shipping information. As soon as we get your payment, we will start working on fulfilling your purchase as quickly as possible.                
                `,
            },
            {
                title: "Can I cancel or change my order",                
                content:
                    `Absolutely; please let us know by Contact Us or WhatsApp if your order has not yet been dispatched, and we will cancel it immediately. No changes may be made to the current order. If you find that you need more of something, you can always place a new order.
                    `,
            },
            {
                title: "When can I expect to get my order?",
                content: `After thorough customization and quality checks, we do our best to ship orders within 48 hours of receiving them. To ensure that your order arrives at your door in record time, we have partnered with industry-leading logistics providers. Since we are located in Delhi, we strive to dispatch the Delhi-NCR-based orders within 24 hours. In most cases, orders placed internationally will take between 5 to 21 days to arrive. `,
            },
            {
                title: "Do you accept returns?",
                content: `Our products go through rigorous quality inspections before being shipped to you because we aim to make sure our customers love our products. There is meticulous tracking and care for all the steps in the delivery procedure. As a result, we can't accommodate requests for refunds, replacements, or exchanges. We also cannot accept returns for any reason, including but not limited to dissatisfaction with the product's colour or style. Nonetheless, if you have any issues with your order, please contact us at jamshion.india@gmail.com, and we'll walk you through the procedure.`,
            }, 
        ],
    };
    
    const data3 = {
        title: "Other",
        rows: [
            {
                title: "Still have questions?",
                content: `Reach out to us over Contact Us, WhatsApp or jamshion.india@gmail.com
                We will be happy to assist you.            
                `,
            },
             
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
        animate: true,
        arrowIcon: "+",
        // tabFocus: true
    };
    
  return (
    <div>
        <Navbar/>
      
        <section style = {{padding : "0 15% 5%"}}>
                    {/* <h3 style = {{margin : "0 0 2%"}}>Payment & Orders</h3> */}
                    <div style={{padding: "10% 0 5% "}}>
                    <Faq
                        data={data1}
                        styles={styles}
                        config={config}
                        
                    />
                    </div>
                    
                    <div style={{padding: "5% 0 5% "}}>
                    <Faq
                        data={data2}
                        styles={styles}
                        config={config}
                    />
                    </div>
                    
                    <div style={{padding: "5% 0 5% "}}>
                    <Faq
                        data={data3}
                        styles={styles}
                        config={config}
                    />
                    </div>
                    
                     
                    
                        

            </section>
        
                        
        <Footer/>
    </div>
  )
};

export default MoreFAQ;
