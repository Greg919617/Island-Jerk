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

<section  class="p-4 bg-dark text-white">
    <div class="container">
      <h2 class="text-center">testimonials</h2>
      <div class="row text-center">
        <div class="col">
          <div class="slider">
            <div>
              <blockquote class="blockquote">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">John Doe From
                  <cite title="Company 1">Company 1</cite>
                </footer>
              </blockquote>
            </div>
            <div>
              <blockquote class="blockquote">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">Sam Smith From
                  <cite title="Company 2">Company 2</cite>
                </footer>
              </blockquote>
            </div>
            <div>
              <blockquote class="blockquote">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">Meghan Williams From
                  <cite title="Company 3">Company 3</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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