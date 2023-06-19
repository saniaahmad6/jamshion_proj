import "./Footer.css"

export default function Footer() {
  
  return (
    <div style={{backgroundColor : "#539165"}}>
 
  <footer
          class="text-center text-lg-start text-white"
          >
    
    <div class="container p-4 pb-0">
      
      <section class="">
        
        <div class="row">
          
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Jamshion
            </h6>
            <p>
              Your one stop shop for all your shopping needs. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a class="text-white">Men wear</a>
            </p>
            <p>
              <a class="text-white">Dresses</a>
            </p>
            <p>
              <a class="text-white">Kids Section</a>
            </p>
            <p>
              <a class="text-white">Accessories</a>
            </p>
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a class="text-white">Your Account</a>
            </p>
            <p>
              <a class="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a class="text-white">Shipping Rates</a>
            </p>
            <p>
              <a class="text-white">Help</a>
            </p>
          </div>

          
          <hr class="w-100 clearfix d-md-none" />

          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New Delhi , India</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 91 964 567 8867</p>
            <p><i class="fas fa-print mr-3"></i> + 91 674 567 8929</p>
          </div>
          
        </div>
        
      </section>
      

      <hr class="my-3"/>

      
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            
            <div class="p-3">
              © 2023 Jamshion
              {/* <a class="text-white" href="https://mdbootstrap.com/"
                 > </a> */}
            </div>
            
          </div>
          

          
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               
               role="button"
               ><i class="fab fa-facebook-f"></i></a>

            
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               
               role="button"
               ><i class="fab fa-twitter"></i></a>

            
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa-google"></i></a>

            
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa-instagram"></i></a>
          </div>
          
        </div>
      </section>
      
    </div>
    
  </footer>
  
</div>

  );
}