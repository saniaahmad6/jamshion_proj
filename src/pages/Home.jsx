import { Navbar, Main, Product, Footer } from "../components";
import { Carousel } from "react-bootstrap";
import Points from "../components/Points";
import FAQ from "./Faq";
import TopProd from "../components/topprod";
function Home() {
  
  return (
    <>
      <Navbar />
      
      
      <Main />
      <div style={{ padding : "0 1%" }}>
      {/* <center style={{ padding : "5% 3%" }}><h2> Why E-Bikes?</h2></center> */}
      
      <Carousel className="card-img img-fluid">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img1.png"
          alt="First slide"
          style={{borderRadius : "1%"}}
        />
        {/* <Carousel.Caption>
          <h3>Sustainable</h3>
          <p> E-bikes produce zero emissions, helping to reduce air pollution and greenhouse gas emissions. By choosing us, you contribute to a cleaner and greener environment.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img2.png"
          alt="Second slide"
          style={{borderRadius : "1%"}}
        />

        {/* <Carousel.Caption>
          <h3>Health benefits</h3>
          <p>E-biking can be a great way to incorporate exercise into your daily routine, improve cardiovascular fitness, and maintain an active lifestyle.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img3.png"
          alt="Third slide"
          style={{borderRadius : "1%"}}
        />

        {/* <Carousel.Caption>
          <h3>Cost-Saving</h3>
          <p>
            Compared to cars, e-bikes have significantly lower operational costs,require less maintenance, no fuel, anda have longer-lasting components. 
            They can also reduce expenses related to parking, insurance, and public transportation fares.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img4.png"
          alt="Third slide"
          style={{borderRadius : "1%"}}
        />

        {/* <Carousel.Caption>
          <h3>Cost-Saving</h3>
          <p>
            Compared to cars, e-bikes have significantly lower operational costs,require less maintenance, no fuel, anda have longer-lasting components. 
            They can also reduce expenses related to parking, insurance, and public transportation fares.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img5.png"
          alt="Third slide"
          style={{borderRadius : "1%"}}
        />

        {/* <Carousel.Caption>
          <h3>Cost-Saving</h3>
          <p>
            Compared to cars, e-bikes have significantly lower operational costs,require less maintenance, no fuel, anda have longer-lasting components. 
            They can also reduce expenses related to parking, insurance, and public transportation fares.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
      {/* <FAQ/> */}
      <Points/>
      <TopProd/>
      <Footer />
    </>
  )
}

export default Home