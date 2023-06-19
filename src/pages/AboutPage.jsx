import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center" style={{padding: "3% 15% 0",margin : "0 0 2%", textAlign: "justify", textJustify: "inter-word"}}>
        Unicus Mobility is a startup venture that intends to improve people's access to efficient, eco-friendly, and technologically advanced mobility solutions.
        <br/> 




        <section style = {{padding : "5% 0% 5%"}}>
                    {/* <h3 style = {{margin : "0 0 2%"}}>Our !</h3> */}
                    

                    
                        <h5 style={{margin : "0 0 2%"}}>Our Mission </h5>
                        <p style={{ textAlign: "justify", textJustify: "inter-word", lineHeight: "1.7rem"}}>

                        We are on a mission to revolutionise the world of transportation with cutting-edge electric vehicles that blend brains, 
                        brawn, and sustainability. Inspired by the sight of frantic delivery fleets zipping through gridlocked streets on fossil-fueled bikes, 
                        we knew there had to be a better way. Further, we observed the hassles involved in the daily commute that are faced by students and urban professionals.
                        And so, we set out to manufacture e-bikes that would not only ease the daily commute for all of them but would also be kind to the environment and their wallets.

                        </p>
                        
                        
                        <h5 style={{margin : "0 0 2%"}}> Journey </h5>
                        <p style={{ textAlign: "justify", textJustify: "inter-word", lineHeight: "1.7rem"}}>
                        Starting with a college project, we built an electric street
                         bike with a 3000W hub motor and 72V battery pack, 
                         allowing us to reach a top speed of 80 kmph. 
                         But we did not stop there. For months, we ideated and 
                         convened numerous brainstorming sessions to come up with a plan
                          to break into the micro-mobility segment. Our e-bikes are not your 
                          run-of-the-mill, dime-a-dozen electric bikes. They are lean, 
                          mean, eco-friendly machines that boast not only a sleek, space-saving design but also a rugged
                           build to handle difficult Indian roads. Plus, we have loaded them 
                           up with the latest and greatest technology to give riders a truly intelligent, 
                           hassle-free ride. And the best part? Our e-bikes will not
                            break the bank, so anyone can 
                            join the sustainable mobility revolution.

                        </p>
                        

                        
                        <h5 style = {{margin : "0 0 2%"}}>Our team </h5>
                        <p style={{ textAlign: "justify", textJustify: "inter-word", lineHeight: "1.7rem"}}>
                        The founding team has creative thinkers and innovators who are ardent believers that 
                        ideas without execution are just hallucinations. What truly distinguishes 
                        the sheeps from goats is the way in which they put their ideas into action. 
                        The enthusiastic engineers, designers, marketers, and operators that make up our team know 
                        everything there is to know about the EV business. It is our mission to provide our customers with smart mobility options 
                        that are tailored to their ever-changing requirements. Our seasoned advisors and mentors have equipped 
                        us to face the challenges of the business world and propel our startup forward.

                        At Unicus Mobility, we differentiate ourselves 
                        through our cutting-edge technology, 
                        
                        top-notch functionality, and sleek aesthetic. 
                        Our electric bikes are meticulously crafted 
                        to ensure a fun and satisfying ride every time. 
                        Our bikes are designed with urban commuters in mind, 
                        featuring amenities like long battery life,
                         fast charging, and cutting-edge connection. 
                         Our top priority is keeping our riders safe, 
                         so we've built-in state-of-the-art features 
                         like LED lighting, anti-theft devices, and anti-lock brakes.

                        </p>
                        
                        

                        
                    
                

            </section>

        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Classics</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/5807580/pexels-photo-5807580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Pocket-friendly</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/5807631/pexels-photo-5807631.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">High Speed</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/5807576/pexels-photo-5807576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Latest models</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage