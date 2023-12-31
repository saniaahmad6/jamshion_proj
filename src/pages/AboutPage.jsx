import React from 'react'
import { Footer } from "../components";
import {Row,Col,Container} from "react-bootstrap"
import Navbar2 from '../components/Navbar2';
import { NavLink } from 'react-router-dom';
import FAQ from './Faq';
import './AboutPage.css'
const AboutPage = () => {
  return (
    <>
      <Navbar2 />
      <div className="container my-3 py-3" >
      
      <div className='quote'>
      <p className="">"Islam is beautified by two qualities: modesty and tolerance for the <br/> sake of Allah and not for anyone else" <br/><p className="small"> Source: al-Tahmid li-Ibn 'Abd al-Barr 13/218</p></p>
      </div>
        
      <div className='desc'>
      <p style={{textAlign : "center"}}><NavLink to="/" style={{textDecoration :"none",textAlign : "center"}}>  Home /</NavLink> About</p>
        
        <h2 style={{textAlign : "center"}}>About Us</h2>
            <p>Jamshion is an Indian modest fashion brand that celebrates the fusion of tradition and fashion,
    unlocking the elegance within individuals. We are committed to empowering individuals to express
    their unique style while embracing their cultural heritage and modesty requirements. With a focus on
    providing fashionable and culturally rich clothing options, we strive to cater to the needs of modest
    dressers in India and beyond. The skilled designers and specialists on our team are committed to
    providing customers with cutting-edge fashion that yet takes into account their beliefs and customs.
   </p>
    <p>
    We are considerably a young company located in Delhi, the capital city of India, a magnificent country
    with a rich cultural heritage and a long tradition of modest fashion. We are a small, young and
    dynamic team under the management of Ms. Sana, a Muslim women entrepreneur.
    </p>
      </div>

      <Container>
        <Row>
          <Col xs={12} md={4} lg={4}>
          <img
            className="card-img img-fluid"
            src="./assets/review-person.png"
            alt="Card"
            height={300}
          />
          </Col>
          <Col xs={12} md={8} lg={8} className='desc' style={{padding :"5% 5% 5% 5%", lineHeight :"2rem", fontStyle : "italic"}}>
                        " I started playing around with my wardrobe, trying different cuts, colours,
              and styles that do not go contrary to my religious beliefs and, at the same
              time, are modest to wear. I've been practising Hijab for a while now, and I
              can attest that it's not repressive but rather empowering and encouraging. I
              envisioned a way to make my bespoke line accessible to a wide audience, and
              then Jamshion happened, where we proudly offer our customers a wide range
              of ready-to-wear clothing options at competitive prices, giving them the
              freedom to look stylish without compromising their core beliefs or sense of
              self."
              <p style={{textAlign: "right"}}>-Sana</p>
          </Col>
        </Row>
        
      </Container>
      
      



        
        

        
      </div>
      <Container>
      <div className='desc'>
        <h6 style={{textAlign : "center"}}>Estd. 2023</h6>
        <h3 className='heading'>HOW DID IT ALL BEGIN? </h3>
        <p>'Jamshion’ came into being in 2023 out of a noble desire to connect with the modern world through a
            humble twist of modest clothing that helps one unlock the elegance within. Starting in February 2023
            with our Instagram page, we have expanded the operation to include other social media platforms
            and an e-commerce website. We owe our ability to maintain low costs to our loyal customers and the
            gratitude we feel for them. Now numbering 7, the Jamshion team works in tandem to give you the
            most unparalleled shopping experience. Each piece we produce is a testament to our commitment to
            superior craftsmanship, ensuring that our customers feel confident and proud of their attire. Within
            months, we have fulfilled over 2,200 orders successfully, all while maintaining a perfect 5-star rating
            from our customers.
            </p>
      </div>
      </Container>
      <div className='desc'><h3 className='heading'>WHY TRUST US?</h3></div>
      
      <img
            // className="card-img img-fluid"
            src="./assets/image-gallery.png"
            alt="Card"
            width="100%"
            height={600}
        />



        
        

        
      
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className='desc'>
            <h3 className='heading'>Our Forte </h3>
            <p>Propelled by a team of talented fashion designers, garment
              makers and specialists committed to providing our customers
              with the newest trends while maintaining a deep
              appreciation for and adherence to their traditional values
              and tenets, all of the modest garments we stock are one-ofa-
              kind designs crafted from high-quality materials and
              offered in a ready-to-wear format for those who are looking
              for a little glitz and glamour without breaking the bank. We
              have gained the ability to design, customise, pay attention to
              key measurement details, style, and produce different
              clothing choices at extremely affordable prices with the help
              of our young and agile team. Our team of experts includes
              creatives in the fields of fashion design, garment making,
              marketing, technological innovation, customer-relations, and
              logistics. We've created an equitable environment where
              people can develop personally and professionally. Our ability
              to quickly respond to customization requests made us a
              beloved seller for our customers.</p>
            
          </Col>
          <Col xs={12} md={6} lg={6} className='desc' >
            <h3 className='heading'>Our Vision</h3>
            <p>We believe that modesty and fashion are not mutually
            exclusive. We are cognizant of the difficulties encountered by
            those seeking stylish clothing that aligns with their modesty
            preferences and traditional values. We envision empowering
            individuals to exhibit their individual flair while honouring
            their cultural heritage and modesty needs. We guarantee that
            every item one receives from us will be of the highest quality
            and will have been made with careful attention to detail and
            excellent craftsmanship. In an effort to encourage those who
            choose to dress modestly, we share how-to guides and photo
            galleries for doing so. Through activities like social media,
            influencer partnerships, and community outreach, we want to
            spread the message that our brand represents a stylish fusion
            of timelessness and relevance. We hope to earn and honour
            the loyalty of this sizable consumer base by meeting their
            varying demands and accommodating their distinctive
            preferences by bridging the gap between fashion and
            modesty.</p>
          </Col>
        </Row>
      </Container>
      
      
      
      
      
      
      <div className='key-promises'>
          <h3>KEY PROMISES</h3>
            <h5 className='byline'>We adhere to three core ideals that guide our full range of operations.</h5>
      </div>

      <Container>
        <Row>

          
          <Col xs={12} md={4} lg={4} className='grid-promise'>
            <img
              // className="card-img img-fluid"
              src="./assets/heart_about.png"
              alt="Card"
              height={200}
            />
            <h3>Customers First</h3> 
             <h5>We promise to deliver a delightful customer experience</h5>
            



          </Col>
          <Col xs={12} md={4} lg={4} className='grid-promise'>
            <img
              // className="card-img img-fluid"
              src="./assets/tick.png"
              alt="Card"
              height={200}
            />
            <h3>Supreme Quality</h3>
            <h5>We vow to source and utilize the best quality fabric, always</h5>
          </Col>
          <Col xs={12} md={4} lg={4} className='grid-promise'>
          <img
              // className="card-img img-fluid"
              src="./assets/tag.png"
              alt="Card"
              height={200}
            />
            <h3>Value for Money</h3>
            <h5>We believe in delivering value beyond the price tag</h5>

          </Col>
          
        </Row>
      </Container>
      
      
      <Footer />
    </>
  )
}

export default AboutPage