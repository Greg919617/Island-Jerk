import React from "react";

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h3>
              all rights reserved &copy;{new Date().getFullYear().toString()}
            </h3>
            <h6>Site by JonesAffectsGraphix</h6>
          </div>
        </div>
      </div>
      
    </footer>
{/* <section id="newsletter" class="bg-dark">
        <div class="container text-white text-center py-5">
            <p class="lead">JOIN OUR NEWSLETTER FOR DEALS AND UPDATES AND OFFERS</p>
            <div class="row justify-content-center">
                <div class="col-10 col-sm-8 col-md-6 col-lg-4">
                  
                </div>
            </div>
        </div>
    </section> */}


    
  );
}
