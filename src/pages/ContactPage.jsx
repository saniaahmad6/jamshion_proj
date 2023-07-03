import React from "react";
import { Footer, Navbar } from "../components";
import "./ContactPage.css"
import {Row,Col,Container} from "react-bootstrap"
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Container>
      
        <Row>
        <div className="container ">
        
        <hr />
        </div>
          <Col xs={12} md={6} lg={6}>
          <div class="row my-4 h-100">
          <div style={{padddingTop: "5%"}}>
            <form>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="mybtn my-2 px-4 mx-auto btn btn-dark "
                  type="submit"
                  
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <img
            className="card-img img-fluid"
            src="./assets/envelope.jpg"
            alt="Envelope"
            height={200}
            style={{padding: "0 10% 10%",}}

          />
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </>
  );
};

export default ContactPage;
