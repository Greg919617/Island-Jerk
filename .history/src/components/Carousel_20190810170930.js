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
       <section>
  
  <div className="container">
    <div className="row">
      <div className="col s12 m6 offset-m6">
        <div className="card-panel z-depth-5">
          <h4>Contact Us</h4>
         
        </div>
      </div>
    </div>
  </div>
</section>
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-inline w-100"
              src="https://lh3.googleusercontent.com/3pRO9WpY8D9-M1b3zKWLUhQfhYrKRXppsxWegO_PmzRrWQwB33CMSRqkFQNCnw0waBxuLgq5SQ=w960-h960-n-o-v1"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Open Tuesday - Saturday</h3>
            <p>10am-8pm</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/ndgzhegVU3bzu4E8gxRYJw4FMwhq22iuIN1N3wu4O4-DSUIEbdHi7IARrzGY8EK5KehxNJtNSQ=w960-h960-n-o-v1"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Catering Available</h3>
            <p>256-384-7956</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel></MDBCol>
    </MDBRow>

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
              className=""
              src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-inline w-100"
              src="https://lh3.googleusercontent.com/3pRO9WpY8D9-M1b3zKWLUhQfhYrKRXppsxWegO_PmzRrWQwB33CMSRqkFQNCnw0waBxuLgq5SQ=w960-h960-n-o-v1"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/ndgzhegVU3bzu4E8gxRYJw4FMwhq22iuIN1N3wu4O4-DSUIEbdHi7IARrzGY8EK5KehxNJtNSQ=w960-h960-n-o-v1"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Masking</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel></MDBCol>
    <MDBCol className="squaresRight"><h1>Good Music</h1></MDBCol>
    </MDBRow>
  </MDBContainer>
);





export default Carousel;