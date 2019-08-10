import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBView, MDBMask, MDBContainer } from
"mdbreact";



const Carousel= ({ data }) => (

    <MDBContainer>
    <MDBRow>
     
      <MDBCol><MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1"
              alt="First slide"
            />

<section id="testimonials" class="p-4 bg-dark text-white">
    <div class="container">
      <h2 class="text-center">testimonials</h2>
      <div class="row text-center">
        <div class="col">
         
      </div>
    </div>
    </div>
  </section>
       
);





export default Carousel;