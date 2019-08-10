import React from "react";
import BackgroundImage from "gatsby-background-image";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBView, MDBMask, MDBContainer } from
"mdbreact";
export default function BackgroundSection({
  img,
  styleClass,
  title,
  tagline,
  address,
  children
}) {
  return (
    <div className="container">
    <div className="row">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <BackgroundImage className={styleClass} fluid={img}>
     <div className="ui text container">
      
      {children}
      {/* <blockquote className="title text-success text-uppercase 
        text-center display-10 font-weight-bold">{tagline}</blockquote>
        
        <h6 className="title text-yellow text-uppercase 
        text-center display-10 font-weight-bold">{address}</h6>
        <button className="btn btn-outline-success btn-block text-uppercase btn-custom">Call(256)384-7956</button> */}
      </div>

    </BackgroundImage>
      </div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
        <h2 className="text-white">Welcome to M&K Restuarant! Come in, Enjoy our Island Vibes and Food.</h2>
        <button className="btn btn-outline-success btn-block text-uppercase btn-custom">Call(256)384-7956</button>
        </div>
      
      </div>
</div>
  
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
  // tagline:"Jamaican Restaurant in Huntsville",
  // address: "Address: 2230 Sparkman Dr NW #100, Huntsville, AL 35810",
};
