import React from 'react'
import { Footer } from "../components";
import {Row,Col,Container} from "react-bootstrap"
import Navbar2 from '../components/Navbar2';

const AboutPage = () => {
  return (
    <>
      <Navbar2 />
      <div className="container my-3 py-3" >
        
        
        
        <Container>
          <Row >
            <Col xs={12} md={4} lg={4} style={{textAlign :"center"}}>
            <img

              src="./assets/jamshion-logo.png"
              height={350}
              style={{padding: "0",}}

            />
            </Col>
            <Col xs={12} md={8} lg={8}>
            <p style={{ textAlign: "justify", padding: "7% 0 15% 0", fontSize : "1.2rem",textJustify: "inter-word", lineHeight: "2rem", fontColor: "#4E4F50"}}>

Jamshion is an Indian modest fashion brand that celebrates the fusion of tradition and fashion, unlocking the elegance within individuals. We are committed to empowering individuals to express their unique style while embracing their cultural heritage and modesty requirements. With a focus on providing fashionable and culturally rich clothing options, we strive to cater to the needs of modest dressers in India and beyond.

We are considerably a young company located in Delhi, the capital city of India, a magnificent country with a rich cultural heritage and a long tradition of modest fashion. We are a small, young and dynamic team under the management of Ms. Sana, a Muslim women entrepreneur.


</p>
            </Col>
          </Row>
          <Row>
            <Col Col xz={12} md={8} lg={8}>
            <h3 style = {{margin : "0 0"}}>Modest Fashion</h3>
            <p style={{ textAlign: "justify", padding: "3% 0 15% 0", fontSize : "1.2rem",textJustify: "inter-word", lineHeight: "2rem", fontColor: "#4E4F50"}}>

            Clothes that hide rather than flaunt the body are becoming increasingly popular worldwide. Modest clothing is witnessing popularity as more and more women try out wearing clothes that aren't as exposing.

Clothing with minimal or no skin exposure is known as <strong>modest fashion</strong>. Customers can express their own sense of style while also satisfying their personal interests and cultural beliefs. Many people, especially those who wish to be discreet in public, gravitate towards more modest styles of clothing. They're comfortable, timeless, and always on-trend, making them a closet staple. Modest clothing is not just popular among Muslims, contrary to common belief. It has a long history, spanning numerous civilizations and centuries.

</p>
            </Col>
            <Col xz={12} md={4} lg={4} style={{textAlign : "center"}}>
            <img
            // className="card-img img-fluid"
            src="https://i.pinimg.com/736x/a6/d9/fd/a6d9fd670dbba29b910837d26645aef8.jpg"
            alt="Card"
            height={400}
            
          />
            </Col>
          
          </Row>
        </Container>

        
        

        <h2 className="py-4">Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.modestforever.com/pub/media/catalog/product/cache/660135ff7ae1e337e4b3d8f2447bf0df/P/2/P235-1.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Hijabs</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://cdn.shopify.com/s/files/1/0075/9250/9551/files/7_71145fd6-bb85-4ad6-8264-1158325a7684.jpg?v=1683367407" alt="" height={100} />
              <div className="card-body">
                <h5 className="card-title text-center">Abaya</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images-cdn.ubuy.co.in/633fec7f992c8d65027cbdbc-muslim-prayer-rug-and-prayer-beads-with.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Islamic Gifts</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/originals/b8/3a/d3/b83ad3986ad446e345a060549ff713a0.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Accessories</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
      <h2 className="text-center py-4">Easy Service</h2>
        <img
            className="card-img img-fluid"
            src="./assets/services.png"
            alt="Card"
            height={400}
            
          />
        </Container>
      <Footer />
    </>
  )
}

export default AboutPage