import React from "react"
import * as mdb from 'mdb-ui-kit';
import styles from "./topper.module.css"
import { Row, Col ,Container} from "react-bootstrap";

const TopProd = (props) => {
  return (

    <>  
        <Container style={{padding: "5%"}}>
        <Row>
          <Col xs={12} md={4} lg={4}>
          <div class={styles.container}>
          <img src="./assets/women2.png" alt="Avatar" className={styles.image}/>
            <div class={styles.overlay}><div className={styles.greentext}>
              <div className={styles.btn}>-</div>
              <div className={styles.btn}>X</div>
              <div className={styles.btn}>+</div>
              <div className={styles.text}></div>ADD TO CART
            </div>
            </div>
            <div className={styles.imagedesc}>
              Product Description
            </div>
            <div className={styles.price}>
              $200
              <div className={styles.greenblock}>
                25%
              </div>
            </div>
            <div className={styles.imagedesc}>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>

            </div>
            
          </div>
          
          </Col>
          <Col xs={12} md={4} lg={4}>
          <div class={styles.container}>
          <img src="./assets/women2.png" alt="Avatar" className={styles.image}/>
          <div class={styles.overlay}><div className={styles.greentext}>
              <div className={styles.btn}>-</div>
              <div className={styles.btn}>X</div>
              <div className={styles.btn}>+</div>
              <div className={styles.text}></div>ADD TO CART
            </div>
            </div>
            <div className={styles.imagedesc}>
              Product Description
            </div>
            <div className={styles.price}>
              $200
              <div className={styles.greenblock}>
                25%
              </div>
            </div>
            <div className={styles.imagedesc}>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>

            </div>
            
          </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
          <div class={styles.container}>
          <img src="./assets/women2.png" alt="Avatar" className={styles.image}/>
          <div class={styles.overlay}><div className={styles.greentext}>
              <div className={styles.btn}>-</div>
              <div className={styles.btn}>X</div>
              <div className={styles.btn}>+</div>
              <div className={styles.text}></div>ADD TO CART
            </div>
            </div>
            <div className={styles.imagedesc}>
              Product Description
            </div>
            <div className={styles.price}>
              $200
              <div className={styles.greenblock}>
                25%
              </div>
            </div>
            <div className={styles.imagedesc}>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>
              <img src="./assets/start.png" height={35}/>

            </div>
            
          </div>
          </Col>
        </Row>
        </Container>
        
        
    </>
  )

}

export default TopProd;
