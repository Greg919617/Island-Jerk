import React from "react";
import BackgroundImage from "gatsby-background-image";
export default function BackgroundSection({
  img,
  styleClass,
  title,
  tagline,
  address,
  children
}) {
  return (<BackgroundImage className={styleClass} fluid={img}>
     <div className="ui text container img-gradient">
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
      {/* <blockquote className="title text-success text-uppercase 
        text-center display-10 font-weight-bold">{tagline}</blockquote>
        
        <h6 className="title text-yellow text-uppercase 
        text-center display-10 font-weight-bold">{address}</h6>
        <button className="btn btn-outline-success btn-block text-uppercase btn-custom">Call(256)384-7956</button> */}
      </div>

    </BackgroundImage>
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
  // tagline:"Jamaican Restaurant in Huntsville",
  // address: "Address: 2230 Sparkman Dr NW #100, Huntsville, AL 35810",
};
