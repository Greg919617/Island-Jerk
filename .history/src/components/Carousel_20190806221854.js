import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const Carousel= ({ data }) => (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
    <MDBContainer>
      <MDBCarousel
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
              src="https://lh3.googleusercontent.com/q7qcpspLGagR-SIFT1IIzTs87YtcxwearEJ5xPSNqOcsvauUCOzIJm3T2tSY17BU4lgbVI2vdg=w600-h0"
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
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/v99Ot4klym4GpjmZQ5olGsx8_dby-MMkY_jXI97x20WwE-Ed4cXLRFqlb3GYhiNp1puGyPN-Gg=w960-h960-n-o-v1"
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
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </div>
  );


export default Carousel;