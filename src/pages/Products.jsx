import React from 'react'
import { Footer, Navbar, Product } from "../components"

const Products = () => {
  const styles={
    bg : {
      backgroundColor: "#5e956d",
      opacity: 0.1,
      background: "repeating-linear-gradient( 45deg, #a5c791, #a5c791 2px, #5e956d 2px, #5e956d 10px )",
    }
    
  } 
  return (
    <>
      <Navbar />
      <Product style={styles.bg}/>
      <Footer />
    </>
  )
}

export default Products